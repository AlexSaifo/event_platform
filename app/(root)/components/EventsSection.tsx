import React from "react";

const EventsSection = () => {
  return (
    <section
      id="#events"
      className="wrapper my-8 flex flex-col gap-8 md:gap-12"
    >
      <h2 className="h2-bold">
        Trust by <br /> Thousands of Events
      </h2>
      <div className="flex flex-col w-full gap-5 md:flex-row">
        Search <br />
        Category
      </div>
    </section>
  );
};

export default EventsSection;
