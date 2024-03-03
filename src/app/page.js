import HeroHeader from '@/components/Home/HeroHeader';
import Stats from '@/components/Home/Stats';
import Services from '@/components/Home/Services';
import VideoTestimonials from '@/components/Home/VideoTestimonioals';
import TestimonialCarousel from '@/components/Home/Testimonials'
import CallToAction from '@/components/common/CallToAction';
import Featured from '@/components/Home/Featured';
import UniList from '@/components/common/UniList';
import ComparisonChart from '@/components/Home/ComparisonChart';

const testimonials = [
	{
		id:1,
		image:'/assets/testi-carousal/1.jpg',
		text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
		name:'Yukti Arora',
		university:'Columbia university'
	},
	{
		id:2,
		image:'/assets/testi-carousal/2.jpg',
		text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
		name:'Sohana',
		university:'Columbia university'
	},
	{
		id:3,
		image:'/assets/testi-carousal/3.jpg',
		text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
		name:'Hamza',
		university:'Columbia university'
	},
	{
		id:4,
		image:'/assets/testi-carousal/4.jpg',
		text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
		name:'Umair',
		university:'Columbia university'
	},
	{
		id:5,
		image:'/assets/testi-carousal/5.jpg',
		text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
		name:'Dodge',
		university:'Columbia university'
	},
	{
		id:6,
		image:'/assets/testi-carousal/6.jpg',
		text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
		name:'Luna',
		university:'Columbia university'
	},
]

export default function Home() {
  return (
    <main className="relative w-full h-auto">
      <HeroHeader />
      <Stats />
      <Services />
      <VideoTestimonials />
      <TestimonialCarousel testimonials={testimonials} />
      <CallToAction />
      <Featured />
      <UniList />
      <ComparisonChart />
    </main>
  );
}
