import { InferGetStaticPropsType } from "next";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

// This function gets called at build time
export const getStaticProps = async () => {
  const events = await getFeaturedEvents();

  return {
    props: {
      events,
    },
    //TODO:Change in production revalidate time
    revalidate: 10000,
  };
};

export default function HomePage({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
