import { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref) => {

    return (
        <button ref={ref} className={className} disabled={disabled} {...props}>
            {children}
        </button>
    )
})

Button.displayName = "Button"
