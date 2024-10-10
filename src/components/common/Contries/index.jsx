import React from "react";
import DropDown from "@/components/common/Dropdown";
import { LIST_COUNTRIES } from "@/quries";
import { URL } from "@/utils/SERVER_URL";

const Contries = async () => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: LIST_COUNTRIES,
    }),
    next: { revalidate: 60 },
  });
  const { data } = await response.json();
  let list = data?.countries?.data;
  let options = list.map((l) => ({
    title: l?.attributes?.name,
    link: `/regions/${l?.id}`,
  }));

  return <DropDown isLeft={true} name="REGIONS" items={options} />;
};

export default Contries;
