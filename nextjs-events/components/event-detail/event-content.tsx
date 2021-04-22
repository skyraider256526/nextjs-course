import { PropsWithChildren } from "react";
import classes from "./event-content.module.scss";

function EventContent(props: PropsWithChildren<{}>) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
