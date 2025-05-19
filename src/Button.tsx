
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useButtonProps } from '@restart/ui/Button';
import { useBootstrapPrefix } from './ThemeProvider';  // подключаем ThemeProvider

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
  size?: 'sm' | 'lg';
  href?: string;
  as?: React.ElementType;
  className?: string;
}

const propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
  as: PropTypes.elementType,
};

const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as, variant = 'primary', size, active = false, disabled = false, className, href, ...props }, ref) => {
    const prefix = useBootstrapPrefix(undefined, 'btn');
    const [buttonProps, { tagName }] = useButtonProps({ tagName: as, disabled, ...props });

    const Component = tagName as React.ElementType;

    return (
      <Component
        {...buttonProps}
        {...props}
        ref={ref}
        disabled={disabled}
        className={classNames(
          className,
          prefix,
          active && 'active',
          variant && `${prefix}-${variant}`,
          size && `${prefix}-${size}`,
          href && disabled && 'disabled'
        )}
      />
    );
  }
);

Button.displayName = 'Button';
Button.propTypes = propTypes;

export default Button;
