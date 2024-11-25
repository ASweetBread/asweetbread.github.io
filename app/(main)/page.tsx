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
		<>
			<div className="pb-10 relative z-10" style={isH5?{}:{ perspective: '1000px'}}>
				<ColorPalette></ColorPalette>
				<div className='w-screen h-screen bg-transparent'></div>
				<motion.div ref={otherpannel} className='bg-white relative z-10 shadow-2xl origin-center' style={isH5?{}:{ rotateX: rotateX, transformStyle: 'preserve-3d' }}>
					<MainCard></MainCard>
					<SkillPanel className="md:mt-10 mx-0"></SkillPanel>
					<ProjectCard className="mt-10"></ProjectCard>
				</motion.div>
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
			<div  className='bg-slate-800 h-screen'></div>
			<motion.div className='w-screen h-screen fixed top-0 bg-white flex justify-center items-center text-4xl'
				style={{ scale: scrollScale }}
			>
				测试
				{/* <div className='w-60 h-60 bg-black text-white' style={{ transformStyle: 'preserve-3d', perspective: '200px',transform: `rotateX(40deg)`  }}>测试</div> */}
			</motion.div>
			
		</>
		
	);
}
