import { IButton } from "components/general";
import { MainLayout } from "components/layout";
import React from "react";
import SourceList from "components/Sources";
import { toggleAddSource } from "store/modal";
import { useAppDispatch } from "store";
import { useI18Next } from "i18n";

const Sources = () => {
  const { t } = useI18Next();
  const dispatch = useAppDispatch();

  const handleAddSource = () => {
    dispatch(toggleAddSource());
  };

  return (
    <MainLayout
      title={t("general.sources")}
      description={t("general.sourceDescription")}>
      <IButton
        varient="primary"
        className="w-auto mt-4"
        onClick={handleAddSource}>
        {t("general.addSource")}
      </IButton>
      <SourceList />
    </MainLayout>
  );
};

export default Sources;
