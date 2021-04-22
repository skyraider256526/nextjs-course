import Link from "next/link";
import { PropsWithChildren } from "react";
import classes from "./button.module.scss";

interface ButtonProps {
  link?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  link,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}
