import { FLEXCENTER } from "@/constants/styles";
import { ReactNode } from "react";

type Props = {
  type: "primary" | "secondary";
  size: "sm" | "md";
  href: string;
  children: ReactNode;
};

const Button = ({ type, size, href, children }: Props) => {
  let preStyle: string = "";
  if (size === "sm") preStyle = preStyle + "w-20 h-8 ";
  if (size === "md") preStyle = preStyle + "w-20 h-10 ";
  if (type === "primary")
    preStyle = preStyle + "bg-primary-500 hover:bg-primary-600 ";
  if (type === "secondary")
    preStyle = preStyle + "bg-secondary-500 hover:bg-secondary-600 ";
  return (
    <a
      href={href}
      className={`${preStyle} ${FLEXCENTER} rounded-lg text-sm text-white`}
    >
      {children}
    </a>
  );
};

export default Button;
