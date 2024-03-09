import React from "react";
import HeaderBanner from "@/components/common/HeaderBanner";
import TeamList from "@/components/common/TeamList";
import CallToAction from "@/components/common/CallToAction";

const Team = () => {
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="center"
        title={"OUR TEAM"}
        image={"/assets/header-banner/team.png"}
      />
      <TeamList />
      <CallToAction image={"/assets/call-action/home.png"} />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Team;
