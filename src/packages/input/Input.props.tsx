import { LiteralUnion, SizeType } from "../../type-utils";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "prefix" | "prefixCls" | "type"
  > {
  /**
   * How large should the input be?
   */
  sizeVariant?: SizeType;
  prefixCls?: string;
  /**
   * What is the input type?
   */
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  prefix?: React.ReactNode;
}
