import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils';

import styles from './Button.module.scss';

export type TButtonVariant = 'ghost' | 'primary' | 'secondary';
export type TButtonSize = 'md' | 'sm';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: TButtonVariant;
    size?: TButtonSize;
    fullWidth?: boolean;
};

const variantClassMap: Record<TButtonVariant, string> = {
    primary: styles.variantPrimary,
    secondary: styles.variantSecondary,
    ghost: styles.variantGhost,
};

const sizeClassMap: Record<TButtonSize, string> = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
};

const Button = ({ children, className, variant = 'primary', size = 'md', fullWidth = false, ...restProps }: TProps) => {
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
            {children}
        </button>
    );
};

export default Button;
