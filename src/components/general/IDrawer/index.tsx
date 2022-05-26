import { Drawer, DrawerProps } from "@mui/material";

import { getCurrentLanguage } from "i18n";

interface Props extends DrawerProps {}

const IDrawer = ({ children, ...props }: Props) => {
  const lang = getCurrentLanguage();
  return (
    <Drawer anchor={lang === "fa" ? "right" : "left"} {...props}>
      {children}
    </Drawer>
  );
};

export default IDrawer;
