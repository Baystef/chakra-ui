import {
  RefAttributes,
  ForwardRefExoticComponent,
  RefForwardingComponent,
  FunctionComponent,
  ReactNode
} from "react";
import { MarginRightProps } from "styled-system";
import { PseudoBoxProps } from "../PseudoBox";

interface IButton {
  /**
   * The color of the button. Use the colors passed in `theme.colors`.
   */
  color?: string;
  /**
   * The variant of the button style to use.
   */
  variant?: "outline" | "ghost" | "unstyled" | "link" | "solid";
  /**
   * If `true`, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * If `true`, the button will show a spinner.
   */
  isLoading?: boolean;
  /**
   * The label to show in the button when `isLoading` is true
   * If no text is passed, it only shows the spinner
   */
  loadingText?: string;
  /**
   * If `true`, the button will take up the full width of its container.
   */
  isFullWidth?: boolean;
  /**
   * The html button type to use.
   */
  type?: "button" | "reset" | "submit";
  /**
   * The size of the button. Use the sizes in `theme.sizes.button`
   */
  size?: "sm" | "md" | "lg";
  /**
   * The content of the button.
   */
  children: ReactNode;
  /**
   * If added, the button will show an icon before the button's label.
   * Use the icon key in `theme.iconPath`
   */
  leftIcon?: string;
  /**
   * If added, the button will show an icon after the button's label.
   * Use the icon key in `theme.iconPath`
   */
  rightIcon?: string;
  /**
   * The space between the button icon and label.
   * Use the styled-system tokens or add custom values as a string
   */
  iconSpacing?: MarginRightProps;
}

export type ButtonProps = IButton &
  PseudoBoxProps &
  RefAttributes<HTMLButtonElement>;

declare const Button: ForwardRefExoticComponent<ButtonProps>;

export default Button;
