'use client';
import React, { useEffect, useRef, useState } from 'react';
import Section from '../my-components/section';
import { HoverCard, HoverCardFirst, HoverCardSecond } from '../my-components/hover-card';
import Progress from '../my-components/progress';
import { skills } from '@/config/config';
import config from '@/tailwind.config'


const SkillPanel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	const containnerRef = useRef<HTMLDivElement>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);
	let timeout : NodeJS.Timeout | undefined;
	const stack = new Set<HTMLElement>()
	const [skillsData, setSkillsData] = useState(skills.map((item, index)=>{
		return {
			...item,
			trigger: false
		}
	}));

	function executeAnimation() {
		if(stack.size!==1) return;
		const target = Array.from(stack)[0]
		// if(skillsData[target.tabIndex].trigger) return;
		delayRun(()=>{
			setSkillsData(skillsData.map((skill,index)=>{
				return index === target.tabIndex ? {...skill,trigger:true} : {...skill, trigger:false }
			}))
		}, 300)
	}
	/**
	 * 防抖函数
	 * @param fn 延时执行的函数
	 * @param delay 时间-毫秒
	 */
	function delayRun(fn: Function, delay: number) {
		if(timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(()=> {
			fn();
			clearTimeout(timeout);
			timeout = undefined
		}, delay)
	}

	useEffect(() => {
		setSkillsData(skillsData.splice(0,1,{ ...skillsData[0], trigger:  window.innerWidth < Number(config.theme.screens.md.replace('px','')) }))
		observerRef.current = new IntersectionObserver(
			(entries) => {
				console.log(entries, '????????')
				if(entries.length > 1 && entries.every((item=>item.intersectionRatio === 1))) return false;
				if(!entries[0].isIntersecting) {
					// console.log('stack remove', entries[0].target)
					stack.delete((entries[0].target) as HTMLDivElement)
					// console.log(Array.from(stack),'stack remove')
				
				}else {
					// console.log('stack push', (entries[0].target))
					stack.add((entries[0].target) as HTMLDivElement);
					// console.log(Array.from(stack),'stack push')
				}
				executeAnimation()
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 1.0,
			}
		);
		if (containnerRef.current && observerRef.current) {
			const length = containnerRef.current.childNodes.length;
			containnerRef.current.childNodes.forEach((node, index) => {
				if (index !== 0 && index !== length - 1) observerRef.current?.observe(node as Element);
			});
		}
		return () => {
			observerRef.current?.disconnect();
		};
	}, []);

	return (
		<Section
			id="skills"
			ref={containnerRef}
			className={`pb-10 scroll-auto pt-2 flex flex-row md:flex-wrap snap-x snap-mandatory gap-4 overflow-x-scroll md:overflow-visible ${className}`}
		>
			<div className="w-64 md:hidden flex-grow flex-shrink-0" ></div>
			{skillsData.map((skill, index) => {
				return (
					<HoverCard trigger={skill.trigger} className="w-64 snap-center flex-grow flex-shrink-0 overflow-hidden" key={skill.name} dataIndex={index}>
						<HoverCardFirst className="py-8">
							<h3>{skill.name}</h3>
							<Progress current={skill.progress}></Progress>
						</HoverCardFirst>
						<HoverCardSecond trigger={skill.trigger} DisplayType="rotate" className="py-8">
							<p className="text-sm">{skill.desc}</p>
						</HoverCardSecond>
					</HoverCard>
				);
			})}
			<div className="w-64 md:hidden flex-grow flex-shrink-0"></div>
		</Section>
	);
};

export default SkillPanel;
