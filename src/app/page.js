import HeroHeader from "@/components/Home/HeroHeader";
import Stats from "@/components/Home/Stats";
import Services from "@/components/Home/Services";
import VideoTestimonials from "@/components/Home/VideoTestimonioals";
import TestimonialCarousel from "@/components/Home/Testimonials";
import CallToAction from "@/components/common/CallToAction";
import Featured from "@/components/Home/Featured";
import UniList from "@/components/common/UniList";
import ComparisonChart from "@/components/Home/ComparisonChart";
import {
  HOME_PAGE,
  HOME_TESTIMONIALS,
  HOME_VIDEO_TESTIMONIALS,
} from "@/quries";
import { URL } from "@/utils/SERVER_URL";

export default async function Home() {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: HOME_PAGE,
    }),
    next: { revalidate: 86400 },
  });
  const testimonialsResponse = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: HOME_TESTIMONIALS,
    }),
    next: { revalidate: 86400 },
  });
  const testimonialData = await testimonialsResponse.json();

  const videoTestimonialsResponse = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: HOME_VIDEO_TESTIMONIALS,
    }),
    next: { revalidate: 86400 },
  });
  const videoTestimonialData = await videoTestimonialsResponse.json();

  const { data } = await response.json();
  const {
    headerSection,
    serviceSection,
    statsSection,
    callToAction,
    services,
  } = data?.homePage?.data?.attributes;

  const testimonials = testimonialData?.data?.testimonials?.data;
  const videoTestimonials = videoTestimonialData?.data?.videoTestimonials?.data;

  return (
    <main className="relative w-full h-auto">
      <HeroHeader data={headerSection} />
      <Stats data={statsSection} />
      <Services data={serviceSection} services={services} />
      <VideoTestimonials 
        data={videoTestimonials}
      />
      {testimonials && <TestimonialCarousel testimonials={testimonials} />}
      <CallToAction
        data={callToAction}
        image={"/assets/call-action/home.png"}
      />
      <Featured />
      <UniList />
      <ComparisonChart />
    </main>
  );
}
