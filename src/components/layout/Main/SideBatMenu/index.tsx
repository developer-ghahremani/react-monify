import { useAppDispatch, useAppSelector } from "store";

import { IDrawer } from "components/general";
import { Link } from "react-router-dom";
import { pageNames } from "constant";
import { toggleSidebarMenu } from "store/modal";
import { useI18Next } from "i18n";
import { useNavigate } from "react-router-dom";

const SideBarmenu = () => {
  const { sideBarMenu } = useAppSelector((s) => s.modal);
  const dispatch = useAppDispatch();
  const { t } = useI18Next();
  const navigate = useNavigate();

  const options: { title: string; to: string }[] = [
    {
      title: t("general.home"),
      to: pageNames.home,
    },
    {
      title: t("general.wallets"),
      to: pageNames.wallets,
    },
    {
      title: t("general.sources"),
      to: pageNames.sources,
    },
  ];

  const handleClose = () => {
    dispatch(toggleSidebarMenu());
  };

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <IDrawer open={sideBarMenu} onClose={handleClose}>
      <div className="px-6 py-4">
        {options.map((option) => (
          <Link to={option.to}>
            <p>{option.title}</p>
          </Link>
        ))}
      </div>
    </IDrawer>
  );
};

export default SideBarmenu;
