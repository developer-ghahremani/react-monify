import { IButton } from "components/general";
import { MainLayout } from "components/layout";
import Transactions from "components/Transactions";
import { useI18Next } from "i18n";

import { useAppDispatch } from "store";
import { toggleTransactionModal } from "store/modal";

const Transaction = () => {
  const { t } = useI18Next();
  const dispatch = useAppDispatch();

  const handleTrsModal = () => {
    dispatch(toggleTransactionModal());
  };

  return (
    <MainLayout title={t("general.transactions")}>
      <IButton className=" w-auto" varient="primary" onClick={handleTrsModal}>
        {t("general.addTransaction")}
      </IButton>
      <Transactions />
    </MainLayout>
  );
};

export default Transaction;
