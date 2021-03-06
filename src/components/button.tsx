import React from "react"
import classnames from "classnames"
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps{
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
}

export const Button:React.FC<BaseButtonProps> = (props) => {
    const{ btnType , disabled , size , children , href } = props;
    const classes = classnames('btn', classnames, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
      })
      if (btnType === 'link' && href ) {
        return (
          <a
            className={classes}
            href={href}
    
          >
            {children}
          </a>
        )
      } else {
        return (
          <button
            className={classes}
            disabled={disabled}
          >
            {children}
          </button>
        )
      }
    }
