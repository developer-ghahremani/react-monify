import { useAppDispatch, useAppSelector } from "store";

import { IDrawer } from "components/general";
import { Link } from "react-router-dom";
import { pageNames } from "constant";
import { toggleSidebarMenu } from "store/modal";
import { useI18Next } from "i18n";

const SideBarmenu = () => {
  const { sideBarMenu } = useAppSelector((s) => s.modal);
  const dispatch = useAppDispatch();
  const { t } = useI18Next();

  const options: { title: string; to: string }[] = [
    {
      title: t("general.home"),
      to: pageNames.home,
    },
    {
      title: t("general.wallets"),
      to: pageNames.wallets.list,
    },
    {
      title: t("general.sources"),
      to: pageNames.sources.list,
    },
    {
      title: t("general.categories"),
      to: pageNames.category.list,
    },
  ];

  const handleClose = () => {
    dispatch(toggleSidebarMenu());
  };

  return (
    <IDrawer open={sideBarMenu} onClose={handleClose}>
      <div className="px-16 py-4">
        {options.map((option) => (
          <Link to={option.to} key={option.title}>
            <p>{option.title}</p>
          </Link>
        ))}
      </div>
    </IDrawer>
  );
};

export default SideBarmenu;
