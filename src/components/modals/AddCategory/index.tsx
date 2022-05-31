import { IButton, IInput, ILoading, IRadio, ISelect } from "components/general";
import { useAppDispatch, useAppSelector } from "store";
import {
  useGetCategoriesQuery,
  usePostCategoryMutation,
} from "store/service/category";

import { Formik } from "formik";
import IModal from "components/general/IModal";
import { toggleCategoryModal } from "store/modal";
import { useI18Next } from "i18n";
import { useState } from "react";

const AddCategory = () => {
  const { categoryModal } = useAppSelector((s) => s.modal);
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const dispatch = useAppDispatch();
  const [categoryType, setCategoryType] = useState<1 | -1>(1);
  const [createCategory] = usePostCategoryMutation();
  const { t } = useI18Next();

  const { data, isFetching } = useGetCategoriesQuery(
    {
      walletId: selectedWallet._id || "",
    },
    { skip: !selectedWallet._id }
  );

  const handleClose = () => {
    dispatch(toggleCategoryModal());
  };

  const handleFinish = async (params: { name: string; parentId?: string }) => {
    try {
      await createCategory({
        walletId: selectedWallet._id || "",
        name: params.name,
        order: 1,
        type: categoryType,
        parentId: params.parentId,
      }).unwrap();
      dispatch(toggleCategoryModal());
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCategoryType = (catType: 1 | -1) => {
    setCategoryType(catType);
  };

  return (
    <IModal isOpen={categoryModal.isOpen} onRequestClose={handleClose}>
      {isFetching || !data ? (
        <ILoading />
      ) : (
        <>
          <p className="text-2xl font-bold">{t("general.addCategory")}</p>
          <p className="mt-8 text-lg">{t("general.categoryType")}</p>
          <div className="flex">
            <IRadio
              onChange={() => handleChangeCategoryType(1)}
              label={t("general.income")}
              checked={categoryType === 1}
            />
            <IRadio
              onChange={() => handleChangeCategoryType(-1)}
              label={t("general.cost")}
              checked={categoryType === -1}
            />
          </div>
          <Formik
            initialValues={{ name: "", parentId: "" }}
            onSubmit={handleFinish}>
            {({ handleChange, handleSubmit, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <div className="md:grid-cols-3 grid grid-cols-1 gap-4 mt-2">
                  <IInput
                    name="name"
                    label={t("general.name")}
                    onChange={handleChange}
                    value={values.name}
                    error={errors.name}
                  />
                  {/* <IInput
                name="color"
                label={t("general.color")}
                onChange={handleChange}
                value={values.color}
              /> */}
                  <ISelect
                    label={t("general.relatedCategory")}
                    name="parentId"
                    onChange={handleChange}
                    value={values.parentId}
                    options={[
                      { _id: "", name: "", type: categoryType },
                      ...data,
                    ]
                      .filter((item) => item.type === categoryType)
                      .map((item) => ({
                        value: item._id,
                        label: item.name,
                      }))}
                  />
                </div>
                <IButton
                  className="w-auto px-8 mt-4"
                  varient="primary"
                  type="submit">
                  {t("general.submit")}
                </IButton>
              </form>
            )}
          </Formik>
        </>
      )}
    </IModal>
  );
};

export default AddCategory;
