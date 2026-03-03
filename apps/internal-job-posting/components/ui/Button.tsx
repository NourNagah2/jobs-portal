import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils';

import styles from './Button.module.scss';

export type TButtonVariant = 'outline' | 'primary';
export type TButtonSize = 'md' | 'sm';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    leftIcon?: ReactNode;
    variant?: TButtonVariant;
    size?: TButtonSize;
    fullWidth?: boolean;
};

const variantClassMap: Record<TButtonVariant, string> = {
    primary: styles.variantPrimary,
    outline: styles.variantOutline,
};

const sizeClassMap: Record<TButtonSize, string> = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
};

const Button = ({
    children,
    leftIcon,
    className,
    variant = 'outline',
    size = 'md',
    fullWidth = false,
    ...restProps
}: TProps) => {
    return (
        <button
            className={cn(
                styles.button,
                variantClassMap[variant],
                sizeClassMap[size],
                { [styles.fullWidth]: fullWidth },
                className,
            )}
            {...restProps}
        >
            {leftIcon ? <span className={styles.icon}>{leftIcon}</span> : null}
            {children}
        </button>
    );
};

export default Button;
