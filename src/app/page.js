import styles from "./page.module.scss";
import HeroHeader from '@/components/Home/HeroHeader';
import Stats from '@/components/Home/Stats';
import Services from '@/components/Home/Services';
import VideoTestimonials from '@/components/Home/VideoTestimonioals';
import CallToAction from '@/components/common/CallToAction';
import Featured from '@/components/Home/Featured';
import UniList from '@/components/common/UniList';
import ComparisonChart from '@/components/Home/ComparisonChart';


export default function Home() {
  return (
    <main className="relative w-full h-auto">
      <HeroHeader />
      <Stats />
      <Services />
      <VideoTestimonials />
      <CallToAction />
      <Featured />
      <UniList />
      <ComparisonChart />
      {Array(10).fill().map(item => (
        <h1 className="text-center text-[90px] relative">
          Hello world!
        </h1>
      ))}


    </main>
  );
}
