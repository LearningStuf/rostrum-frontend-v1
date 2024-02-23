import React from 'react'
import HeaderBanner from '@/components/common/HeaderBanner'
import Mission from '@/components/About/Mission'
import HowWeWork from '@/components/About/HowWeWork'

const About = () => {
  return (
    <main className="relative w-full h-auto">
		<HeaderBanner/>
		<Mission/>
		<HowWeWork/>
	</main>
  )
}

export default About