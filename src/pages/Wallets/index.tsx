import { IButton } from "components/general";
import { MainLayout } from "components/layout";
import WalletList from "components/Wallets";
import { pageNames } from "constant";
import { useI18Next } from "i18n";
import { useNavigate } from "react-router-dom";

const Wallets = () => {
  const { t } = useI18Next();
  const navigate = useNavigate();

  const handleAddWallet = () => {
    navigate(pageNames.wallets.addWallet);
  };

  return (
    <MainLayout
      description={t("general.walletsDescription")}
      title={t("general.wallets")}>
      <IButton
        varient="primary"
        className="w-auto mt-4"
        onClick={handleAddWallet}>
        {t("general.addWallet")}
      </IButton>
      <WalletList />
    </MainLayout>
  );
};

export default Wallets;
