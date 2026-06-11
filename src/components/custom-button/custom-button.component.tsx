import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'
// styles
import { CustomButtonContainer, IconContainer } from './custom-button.styles'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // HTMLAttributes atribui todas as propriedades de uma elemento html
  startIcon?: React.ReactNode
  children?: React.ReactNode
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}
export default CustomButton
