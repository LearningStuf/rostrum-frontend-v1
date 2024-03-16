import React from "react";
import HeaderBanner from "@/components/common/HeaderBanner";
import TeamList from "@/components/common/TeamList";
import CallToAction from "@/components/common/CallToAction";
import { TEAM_PAGE } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const Team = async () => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: TEAM_PAGE,
    }),
    next: { revalidate: 86400 },
  });
  const { data } = await response.json();

  const {
    headerSection,
    teams
  } = data?.teamPage?.data?.attributes;

  console.log(teams)
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="center"
        title={headerSection?.title}
        image={getAssetUrl(headerSection?.image)}
      />
      <TeamList
        data={teams}
      />
      <CallToAction image={"/assets/call-action/home.png"} />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Team;
