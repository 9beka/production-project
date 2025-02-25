import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export enum ThemeButton {
   CLEAR = 'clear',
   OUTLINE = 'outline',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, children, ...otherProps
    } = props;
    return (
        <button type="button" className={classNames(s.Button, { [s[theme]]: true }, [className])} {...otherProps}>
            {children}
        </button>
    );
};
