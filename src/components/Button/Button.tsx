import React, {FC} from 'react'
import {IButtonProps} from '../../interface/buton'
import './Button.css'

export const Button: FC<IButtonProps> = ({onButtonClick, value, type}) => {
    return (
        <div className={`button ${type? type : ''}`} onClick={() => {onButtonClick(value)}}>
            {value}
        </div>
    )
}
