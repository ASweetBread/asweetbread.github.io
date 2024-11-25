"use client"
import Section from '../my-components/section';
import Progress from '@/components/my-components/progress';
import { HoverCard, HoverCardFirst, HoverCardSecond, HoverCardThird } from '../my-components/hover-card';
import { skills } from '@/config/config';
import { device } from '@/lib/device';
import { useEffect, useState } from 'react';

const ProjectCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	const [isH5, setIsH5] = useState(false);
	useEffect(()=>{
		setIsH5(device.isH5())
		console.log(device.isH5())
	},[])
	return (
		<Section id="project" className={`box-border ${className}`}>
			<div className="w-full md:w-3/5 box-border bg-slate-50 shadow-lg rounded-md relative md:flex md:flex-row">
				<div className="md:w-1/2 md:flex-shrink-0 p-6 flex flex-col">
					<h1 className="text-3xl font-bold mb-4">数据可视化</h1>
					<p className="text-xl">技术栈：echarts、d3、Three.js</p>
					<HoverCard className="my-auto bg-white">
						<HoverCardFirst>
							<h3>移动监管</h3>
							<p>全区的医疗数据展示，丰富的图表类型，交互式数据探索，美观的数字化大屏展示</p>
						</HoverCardFirst>
						<HoverCardSecond DisplayType="rotate">
							<h3>业绩</h3>
							<p>3D版本地区地图，巡航展示动画性能调优，复杂业务表单的展示逻辑，大量数据加载性能优化</p>
						</HoverCardSecond>
						<HoverCardThird className={`${isH5? 'hidden': ''}`} skills={skills.filter((skill) => skill.project.includes('移动监管'))} />
					</HoverCard>
				</div>
				<div className="flex-1 relative py-6">
					<div className="bg-slate-600 w-full relative flex flex-col md:flex-row py-6 px-4 rounded-md md:w-w-over box-border">
						<div className="md:w-2/5 flex-shrink-0">
							<HoverCard className=" bg-white">
								<HoverCardFirst>
									<h3>悦质量</h3>
									<p>配置化车辆检修大屏，在数据库中配置以json的形式配置每个页面的信息，实时显示当前的检修情况。</p>
								</HoverCardFirst>
								<HoverCardSecond DisplayType="rotate">
									<h3>业绩</h3>
									<p>设计和开发整个大屏的渲染逻辑，使用websocket做实时渲染和失败处理，优化代码确保平稳运行。</p>
								</HoverCardSecond>
								<HoverCardThird className={`${isH5? 'hidden': ''}`} skills={skills.filter((skill) => skill.project.includes('悦质量'))} />
							</HoverCard>
							{/* 这个地方之后写一个 三维可视化 项目
							<HoverCard className="mt-5 bg-white">
								<HoverCardFirst>
									<h3>移动监管</h3>
									<p>全区的医疗数据展示，丰富的图表类型，交互式数据探索，美观的数字化大屏展示</p>
								</HoverCardFirst>
								<HoverCardSecond DisplayType="rotate">
									<h3>业绩</h3>
									<p>3D版本地区地图，巡航展示动画性能调优，复杂业务表单的展示逻辑，大量数据加载性能优化</p>
								</HoverCardSecond>
							</HoverCard> */}
						</div>
						<div className="mt-2 md:mt-0 md:px-4 text-white text-lg">
							<p>拥有多年前端开发经验，专注于数据可视化，设计和实现过复杂的数据仪表盘和实时监控系统，优化数据加载和渲染性能。</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-slate-50 mt-5 p-6 shadow-md rounded-md md:flex md:flex-row md:gap-6">
				<div className="md:w-1/2">
					<h1 className="text-3xl font-bold mb-4">Hybrid</h1>
					<p className="text-xl">混合开发的关键是性能与适配</p>
				</div>
				<HoverCard className="mt-4 md:my-auto bg-white">
					<HoverCardFirst>
						<h3>数字教材阅读器</h3>
						<p>基于存在数字教材开发的App端阅读工具</p>
					</HoverCardFirst>
					<HoverCardSecond DisplayType="rotate">
						<h3>业绩</h3>
						<p>对编辑器进行长期的包括资源加载、DOM操作等性能优化，结构化资源、习题集、代码块等自定义资源开发。</p>
					</HoverCardSecond>
					<HoverCardThird className={`${isH5? 'hidden': ''}`} skills={skills.filter((skill) => skill.project.includes('数字教材阅读器'))} />
				</HoverCard>
				<HoverCard className="mt-4 md:my-auto bg-white">
					<HoverCardFirst>
						<h3>Joy Quality</h3>
						<p>用以显示各种车辆维修的各种指标，辅助掌握当前的生产维修状态，设定维修检测的指标报警等等。</p>
					</HoverCardFirst>
					<HoverCardSecond DisplayType="rotate">
						<h3>业绩</h3>
						<p>网页加载速度提高了50%以上，优化了大量数据导致的页面卡顿，对项目的样式重构以设配各种机型。</p>
					</HoverCardSecond>
					<HoverCardThird className={`${isH5? 'hidden': ''}`} skills={skills.filter((skill) => skill.project.includes('Joy Quality'))} />
				</HoverCard>
			</div>
		</Section>
	);
};
export default ProjectCard;
