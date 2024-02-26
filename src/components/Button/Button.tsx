import { ButtonComponent } from "./styles";

import { ButtonProps } from "./types";

// Как типизировать props
function Button({
  name,
  isRed = false,
  type = "button",
  onClick = () => {},
}: ButtonProps) {
  return (
    <ButtonComponent
      isRed={isRed}
      className="button-component"
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
