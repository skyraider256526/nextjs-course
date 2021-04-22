import { Event } from "../../types";
import EventItem from "./event-item";

export default function EventList(props: { items: Event[] }) {
  const { items } = props;

  return (
    <ul>
      {items.map(item => (
        <EventItem
          key={item.id}
          date={item.date}
          id={item.id}
          image={item.image}
          location={item.location}
          title={item.title}
        />
      ))}
    </ul>
  );
}
