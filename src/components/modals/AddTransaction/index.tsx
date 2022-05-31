import { useAppDispatch, useAppSelector } from "store";

import IModal from "components/general/IModal";
import React, { useState } from "react";
import { toggleTransactionModal } from "store/modal";
import { useI18Next } from "i18n";
import {
  IButton,
  ILoading,
  INumberFormatInput,
  IRadio,
  ISelect,
} from "components/general";
import { Formik } from "formik";
import { useGetSourcesQuery } from "store/service/source";
import * as yup from "yup";
import { usePostTransactionMutation } from "store/service/transaction";
import { useGetCategoriesQuery } from "store/service/category";

const AddTransaction = () => {
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const { transactionModal } = useAppSelector((s) => s.modal);
  const [postTransaction] = usePostTransactionMutation();
  const [trsType, setTrsType] = useState<1 | -1>(1);
  const dispatch = useAppDispatch();
  const { t } = useI18Next();

  const validatoinSchema = yup.object({
    amount: yup
      .string()
      .required(t("messages.required", { fieldName: t("general.wallet") })),
    categoryId: yup
      .string()
      .required(t("messages.required", { fieldName: t("general.category") })),
    sourceId: yup
      .string()
      .required(t("messages.required", { fieldName: t("general.source") })),
  });

  const { data: categories, isFetching: isCategoryFetching } =
    useGetCategoriesQuery(
      {
        walletId: selectedWallet._id || "",
      },
      { skip: !selectedWallet?._id }
    );

  const { data: sources, isFetching: isSourceFetching } = useGetSourcesQuery(
    {
      walletId: selectedWallet._id || "",
    },
    { skip: !selectedWallet?._id }
  );

  const handleTransactionModal = () => {
    dispatch(toggleTransactionModal());
  };

  const handleChangeTrs = (type: 1 | -1) => {
    setTrsType(type);
  };

  const handleAddTrs = async (data: {
    amount: string;
    categoryId: string;
    sourceId: string;
  }) => {
    try {
      await postTransaction({
        ...data,
        amount: +data.amount.replaceAll(",", ""),
        type: trsType,
        walletId: selectedWallet._id || "",
      }).unwrap();
      dispatch(toggleTransactionModal());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IModal
      isOpen={transactionModal.isOpen}
      onRequestClose={handleTransactionModal}>
      <p className="text-2xl font-bold">{t("general.addTransaction")}</p>
      <div className="mt-4">
        <p>{t("general.transactionType")}</p>
        <div className="flex mt-2">
          <IRadio
            label={t("general.income")}
            checked={trsType === 1}
            onChange={() => handleChangeTrs(1)}
          />
          <IRadio
            label={t("general.cost")}
            checked={trsType === -1}
            onChange={() => handleChangeTrs(-1)}
          />
        </div>
      </div>
      <Formik
        validationSchema={validatoinSchema}
        initialValues={{ amount: "0", categoryId: "", sourceId: "" }}
        onSubmit={handleAddTrs}>
        {({ handleChange, handleSubmit, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className="md:grid-cols-3 grid grid-cols-1 gap-4 mt-4">
              <INumberFormatInput
                thousandSeparator
                inputClassName="font-bold"
                label={t("general.amount")}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                autoFocus
                error={errors.amount}
              />
              {!sources || isCategoryFetching ? (
                <ILoading />
              ) : (
                <ISelect
                  label={t("general.source")}
                  name="sourceId"
                  value={values.sourceId}
                  onChange={handleChange}
                  error={errors.sourceId}
                  options={[{ _id: "", name: "" }, ...sources].map((item) => ({
                    value: item._id,
                    label: item.name,
                  }))}
                />
              )}
              {!categories || isSourceFetching ? (
                <ILoading />
              ) : (
                <ISelect
                  label={t("general.categoryType")}
                  name="categoryId"
                  value={values.categoryId}
                  error={errors.categoryId}
                  onChange={handleChange}
                  options={[
                    { _id: "", name: "", type: 1 },
                    { _id: "", name: "", type: -1 },
                    ...categories,
                  ]
                    .filter((item) => item.type === trsType)
                    .map((item) => ({
                      value: item._id,
                      label: item.name,
                    }))}
                />
              )}
            </div>
            <IButton varient="primary" className="w-auto px-8 mt-4">
              {t("general.submit")}
            </IButton>
          </form>
        )}
      </Formik>
    </IModal>
  );
};

export default AddTransaction;
