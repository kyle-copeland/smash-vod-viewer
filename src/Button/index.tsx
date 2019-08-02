import * as React from "react";
import './styles.css';
import classnames from 'classnames';

interface ButtonProps {
    type?: 'default' | 'primary' | 'danger';
}
const Button: React.FunctionComponent<ButtonProps> = ({type, children}) => {

    const actualType = type || 'default';
    const className = classnames(
        'Button',
        `Button--${actualType}`
    );

    return (
        <button className={className}>
            {children}
        </button>
    )
};

export default Button;