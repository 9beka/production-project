import { classNames } from "shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation("translation");
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={s.mainLink}>
          {t('Главное')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
