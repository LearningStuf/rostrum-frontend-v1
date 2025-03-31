import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropDown from "@/components/common/Dropdown";
import Contries from "@/components/common/Contries";
import MobileNav from "./MobileNav";

// TODO links with MobileNav need to send the appropriate links as constants

const services = [
  {
    title: "Admissions",
    routes: [
      {
        title: "Boarding School",
        link: "/admissions/bording-school",
      },
      {
        title: "Business School",
        link: "/admissions/business-school",
      },
      {
        title: "Fashion & Design School",
        link: "/admissions/fasion-school",
      },
      {
        title: "IVY School",
        link: "/admissions/ivy-school",
      },
      {
        title: "Med School",
        link: "/admissions/medical-school",
      },
      {
        title: "OX Bridge Prep",
        link: "/admissions/oxbridge-prep",
      },
      {
        title: "Psychometric Test",
        link: "/admissions/psychometric",
      },
      {
        title: "Top UK US Universities",
        link: "/admissions/top-uk-us-universities",
      },
    ],
  },
  {
    title: "Tutoring",
    routes: [
      {
        title: "A Level",
        link: "/tutoring/a-level",
      },
      {
        title: "AP",
        link: "/tutoring/ap",
      },
      {
        title: "IB",
        link: "/tutoring/ib",
      },
      {
        title: "IGCSE",
        link: "/tutoring/igcse",
      },
    ],
  },
  {
    title: "Test Prep",
    routes: [
      {
        title: "LNAT",
        link: "/testprep/lnat",
      },
      {
        title: "Oxford University Entrance Exam",
        link: "/testprep/oxford-uni-exam",
      },
      {
        title: "GMAT",
        link: "/testprep/gmat",
      },
      {
        title: "UCAT",
        link: "/testprep/ucat",
      },
      {
        title: "GRE",
        link: "/testprep/gre",
      },
      {
        title: "ACT",
        link: "/testprep/act",
      },
      {
        title: "SAT",
        link: "/testprep/sat",
      },
      {
        title: "BMAT",
        link: "/testprep/bmat",
      },
    ],
  },
];

const whoWeAre = [
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Our Team",
    link: "/team",
  },
  {
    title: "Reviews",
    link: "/reviews",
  },
];

const resources = [
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Events",
    link: "/events",
  },
];

const contries = [
  {
    title: "USA",
    link: "/regions/usa",
  },
  {
    title: "IND",
    link: "/regions/india",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white w-ful h-[80px] md:h-auto relative shadow-md md:shadow-none transition-all">
      <div className="max-w-full md:max-w-screen-xl h-full md:h-auto flex flex-wrap items-center justify-between mx-2 md:mx-auto p-3 md:p-6">
        <section className="w-full md:w-auto h-full md:h-auto flex items-center justify-between md:justify-start">
          <div className="translate-y-5 md:translate-y-0 z-10 relative">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                width={70}
                height={70}
                alt="Logo..."
              />
            </Link>
          </div>
          <div className="ms-10 hidden md:block">
            <ul className="flex flex-row">
              <li>
                <DropDown name="Services" items={services} />
              </li>
              <li>
                <DropDown name="Who we are" items={whoWeAre} />
              </li>
              <li>
                <DropDown name="Resources" items={resources} />
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-[20px] font-semibold text-primary-dark uppercase transition-all duration-300 hover:text-secondary"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <MobileNav
            resources={resources}
            services={services}
            whoWeAre={whoWeAre}
          />
        </section>
        <section className="hidden md:block">
          <ul className="flex flex-row">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-[20px] font-semibold text-primary-dark uppercase"
              >
                +91 98654 98654
              </Link>
            </li>
            <li>
              <Contries />
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
