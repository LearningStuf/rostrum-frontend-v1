import React from "react";
import HeaderBanner from "@/components/common/HeaderBanner";
import EventList from "@/components/common/EventList";
import CallToAction from "@/components/common/CallToAction";
import Fallback from "@/components/common/Fallback";

const Events = () => {
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="center"
        title={"Events & Webinars"}
        image={"/assets/header-banner/event-header.png"}
      />
      <EventList />
      <CallToAction image={"/assets/call-action/about.png"} />
    </main>
  );
};

export default Events;
