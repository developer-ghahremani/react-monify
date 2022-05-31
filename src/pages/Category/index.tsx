import Categories from "components/Categories";
import { IButton } from "components/general";
import { MainLayout } from "components/layout";
import React from "react";
import { toggleCategoryModal } from "store/modal";
import { useAppDispatch } from "store";
import { useI18Next } from "i18n";

const Category = () => {
  const { t } = useI18Next();
  const dispatch = useAppDispatch();

  const handleCategoryModal = () => {
    dispatch(toggleCategoryModal());
  };

  return (
    <MainLayout title={t("general.categories")}>
      <IButton className="w-auto bg-primary" onClick={handleCategoryModal}>
        {t("general.addCategory")}
      </IButton>
      <Categories />
    </MainLayout>
  );
};

export default Category;
