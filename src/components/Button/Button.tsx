import { FC, ComponentType } from 'react'
import { ButtonContainer } from './button.styled'


interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'submit' | 'button'
  disabled?: boolean
  category?: 'primary' | 'border' | 'warning'
  size?: 'lg' | 'md' | 'sm'
  icon?: ComponentType<any> 
  autofocus?: boolean
} 

const Button: FC<ButtonProps> = ({
  type,
  label,
  onClick,
  disabled,
  icon: Icon,
  autofocus
}) => (
 < ButtonContainer>
    <button
      type={type}
      className='btn-vanguardia'
      disabled={disabled}
      onClick={onClick}
      autoFocus={!!autofocus}
    >
      <div className="btn-wrapper">
        <div className="btn-label">{label}</div>

        {Icon && (
          <div className="btn-vanguardia-icon">
            <span className="btn-icon">
              <Icon />
            </span>
          </div>
        )}
      </div>
    </button>
    </ButtonContainer>
  )

Button.defaultProps = {
  type: 'button',
  size: 'md',
  category: 'primary',
  disabled: false,
  onClick: () => null,
}

export default Button
