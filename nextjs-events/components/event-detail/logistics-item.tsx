import { PropsWithChildren } from "react";
import classes from "./logistics-item.module.scss";

function LogisticsItem(props: PropsWithChildren<{ icon: any }>) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
