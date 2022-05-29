import * as yup from "yup";

import {
  IButton,
  IInput,
  INumberFormat,
  IRadio,
  ITextArea,
} from "components/general";
import { useAppDispatch, useAppSelector } from "store";

import { Formik } from "formik";
import IModal from "components/general/IModal";
import { SourceTypeEnum } from "constant";
import { closeAddSource } from "store/modal";
import { useI18Next } from "i18n";
import { usePostSourceMutation } from "store/service";
import { useState } from "react";

const AddSource = () => {
  const { sourceModal } = useAppSelector((s) => s.modal);
  const { _id: walletId } = useAppSelector((s) => s.selectedWallet);
  const [postSource] = usePostSourceMutation();

  const dispatch = useAppDispatch();
  const { t } = useI18Next();

  const validationSchema = yup.object({
    name: yup
      .string()
      .required(t("general.messages", { fieldName: t("general.name") })),
  });

  const [sourceType, setSourceType] = useState<SourceTypeEnum>(
    SourceTypeEnum.bank
  );

  const handleClose = () => {
    dispatch(closeAddSource());
  };

  const handleFinish = async (params: {
    name: string;
    bankAccountNumber?: string;
    bankCartNumber?: string;
    initialAmount: 0;
    expiredDate?: string;
    code?: string;
    icon?: string;
    note?: string;
  }) => {
    if (!walletId) return;
    try {
      const data = await postSource({ type: sourceType, walletId, ...params });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSourceType = (params: SourceTypeEnum) => {
    setSourceType(params);
  };

  return (
    <IModal isOpen={sourceModal.isOpen} onRequestClose={handleClose}>
      <p className="text-2xl font-bold">{t("general.addSource")}</p>
      <Formik
        onSubmit={handleFinish}
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          bankAccountNumber: "",
          bankCartNumber: "",
          initialAmount: 0,
          expiredDate: "",
          code: "",
          icon: "",
          note: "",
        }}>
        {({ handleChange, handleSubmit, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center mt-8">
              <p className="text-lg">{t("general.sourceType")}</p>
              <div className="flex">
                <IRadio
                  checked={sourceType === SourceTypeEnum.bank}
                  label={t("general.bank")}
                  onChange={(e) => handleChangeSourceType(SourceTypeEnum.bank)}
                />
                <IRadio
                  checked={sourceType === SourceTypeEnum.cash}
                  label={t("general.cash")}
                  onChange={(e) => handleChangeSourceType(SourceTypeEnum.cash)}
                />
              </div>
            </div>
            <div className="md:grid-cols-4 grid grid-cols-1 gap-4 mt-4">
              <IInput
                label={t("general.sourceName")}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={errors.name}
              />
              <INumberFormat
                label={t("general.initialAmount")}
                onChange={handleChange}
                value={values.initialAmount}
                name="initialAmount"
                thousandSeparator
                error={errors.initialAmount}
              />

              {sourceType === SourceTypeEnum.bank && (
                <>
                  <INumberFormat
                    format="#### #### #### #### ####"
                    label={t("general.bankAccountNumber")}
                    onChange={handleChange}
                    name="bankAccountNumber"
                    value={values.bankAccountNumber}
                  />
                  <INumberFormat
                    format="#### #### #### #### ####"
                    label={t("general.bankCartNumber")}
                    onChange={handleChange}
                    name="bankCartNumber"
                    value={values.bankCartNumber}
                  />
                  <INumberFormat
                    format="####/##"
                    label={t("general.expiredDate")}
                    placeholder="YYYY/MM"
                    mask={["Y", " Y", " Y", " Y", " M", " M"]}
                    onChange={handleChange}
                    name="expiredDate"
                    value={values.expiredDate}
                  />
                  <INumberFormat
                    format="####"
                    label={t("general.CVV2")}
                    onChange={handleChange}
                    name="code"
                    value={values.code}
                  />
                </>
              )}
            </div>
            <ITextArea
              inputClassName="!w-auto"
              onChange={handleChange}
              name="note"
              label={t("general.note")}
              value={values.note}
            />
            <IButton
              varient="primary"
              className="w-auto px-4 mt-4"
              type="submit">
              {t("general.submit")}
            </IButton>
          </form>
        )}
      </Formik>
    </IModal>
  );
};

export default AddSource;
