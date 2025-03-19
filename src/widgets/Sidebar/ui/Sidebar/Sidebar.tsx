import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Sidebar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import s from "./Sidebar.module.scss";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "../../../../shared/assets/icons/about.svg";
import MainIcon from "../../../../shared/assets/icons/main.svg";
interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  console.log("ButtonTheme:", ButtonTheme);
  console.log("Передача theme в Button:", ButtonTheme.BACKGROUND_INVERTED);
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={s.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={s.item}
        >
          <MainIcon className={s.icon} />
          <span className={s.link}>{t("Главное")}</span>
        </AppLink>
        
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={s.item}
        >
          <AboutIcon className={s.icon} />
          <span className={s.link}>{t("О сайте")}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
