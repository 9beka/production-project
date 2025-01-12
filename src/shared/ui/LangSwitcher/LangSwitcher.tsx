import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './LangSwitcher.module.scss';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggle} className={classNames(s.LangSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
    );
};
