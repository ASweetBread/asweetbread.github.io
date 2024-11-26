'use client'
import ColorPalette from '@/components/custom/color-palette';
import MainCard from '@/components/custom/main-card';
import ProjectCard from '@/components/custom/project-card';
import SkillPanel from '@/components/custom/skill-panel';

// import * as motion from "framer-motion/client"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { use, useEffect, useRef, useState } from 'react';
import { device } from '@/lib/device';
import { init } from 'next/dist/compiled/webpack/webpack';

export default function Home() {
	const otherpannel = useRef(null)
	const transformRef = useRef(null)
	const { scrollYProgress: scrollScale } = useScroll({
		offset: ['center center','start start']
	});
	const { scrollYProgress: scrollRotate } = useScroll({
		target: otherpannel,
		offset: ['start center','start end']
	});
	const { scrollYProgress: scrollTranslate } = useScroll({
		target: transformRef,
		offset: ['start start','center start']
	})


	
	const rotateX = useTransform(scrollRotate, [0, 1], [0, -45]);
	const translateX = useTransform(scrollTranslate, [0, 1], [0, -Array(10).fill(0).length * 13 * 16])
	
	useMotionValueEvent(translateX, "change", (latest) => {
		console.log("Page scroll: ", latest)
	})
	const [isH5, setIsH5] = useState(false)
	useEffect(()=>{
		setIsH5(device.isH5())
	},[])
	
	return (
		<main>
			<div className="pb-10 relative">
				<ColorPalette></ColorPalette>
				<motion.div className='w-screen h-screen fixed top-0 z-0 bg-white flex justify-center items-center text-4xl'
					style={{ scale: scrollScale }}
				>
					<div className='px-10 flex flex-col justify-center items-center text-center group'>
						<h1 className='cursor-default text-6xl mb-6 relative scale-100 group-hover:scale-110 duration-500 transition-transform'>
							<span className='text-4xl mr-6 text-gray-600'>关于我:</span>
							<span className='absolute font-bold  text-cyan-600 top-0 left-0 -z-10 group-hover:-translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-x-full duration-500 transition-transform'>?</span>
							王帅
						</h1>
						<h1 className='cursor-default bg-gradient-to-b from-gray-600 to-slate-800 bg-clip-text text-transparent leading-normal'>一个前端工程师，创造美观、交互性强且高性能的用户界面，将设计转化为现实</h1>
					</div>
					{/* <div className='w-60 h-60 bg-black text-white' style={{ transformStyle: 'preserve-3d', perspective: '200px',transform: `rotateX(40deg)`  }}>测试</div> */}
				</motion.div>
				<div className='w-screen h-screen bg-transparent pointer-events-none'></div>
				<div  style={isH5?{}:{ perspective: '1800px'}}>
					<motion.div ref={otherpannel} className='bg-white relative z-10 shadow origin-center pt-24' style={isH5?{}:{ rotateX: rotateX, transformStyle: 'preserve-3d' }}>
						<MainCard></MainCard>
						<SkillPanel className="md:mt-10 mx-0"></SkillPanel>
						<ProjectCard className="mt-10"></ProjectCard>
					</motion.div>
				</div>
			</div>
			<div ref={transformRef} style={{ height: '200vh' }} className='pt-10 z-10 relative'>
				<div className='sticky top-0 h-screen overflow-hidden'>
					<motion.div className='relative flex flex-nowrap flex-row gap-4' style={{ x: translateX }}>
						{ Array(10).fill(0).map((_, i)=>{
							return (<div key={i} className='w-60 h-80 bg-slate-100 flex-grow-0 flex-shrink-0'></div>)
						}) }
					</motion.div>
					<div>测试文字</div>
				</div>
			</div>
			
			
		</main>
		
	);
}
