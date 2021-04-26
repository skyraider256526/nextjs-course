import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import React from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";

export async function getStaticProps(context: GetStaticPropsContext) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId as string);

  return {
    props: {
      event,
    },
  };
}

export const getStaticPath: GetStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map(event => ({ params: { eventId: event.id } }));

  return { paths, fallback: true };
};

function EventDetailPage({
  event,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!event) {
    return (
      <div className="center">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
