'use client';
import React from 'react';
import { SkillType } from '@/config/config';
import Progress from './progress';

const HoverCard: React.FC<{ trigger?: Boolean, dataIndex?: number } & React.HTMLAttributes<HTMLDivElement>> = function ({ className, children, trigger=false, dataIndex }) {
	const triggerTransClass = 'scale-110'
	return (
		<div 
			tabIndex={dataIndex}
			className={`relative group rounded-md shadow-lg duration-300 ${ trigger ? triggerTransClass: '' } ${className}`}
		>
			{children}
		</div>
	);
};

const HoverCardFirst: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
	return <div className={`p-4 absolute top-0 left-0 right-0 bottom-0 ${className}`}>{children}</div>;
};

const HoverCardSecond: React.FC<{ DisplayType: 'rotate', trigger: Boolean } & React.HTMLAttributes<HTMLDivElement>> = ({ DisplayType, children, className, trigger=false }) => {
	const hoverTransformClasses = {
		rotate: 'md:group-hover:opacity-100 md:group-hover:-rotate-0 origin-bottom-right',
	};
	const triggerTransformClasses = {
		rotate: '-rotate-0 opacity-100 origin-bottom-right',
	};
	return (
		<div
			className={`h-full p-4 text-white opacity-0 rounded-md pointer-events-none -rotate-12 duration-200 ease-out bg-slate-700 ${ trigger ? triggerTransformClasses[DisplayType]: ''} ${hoverTransformClasses[DisplayType]} ${className}`}
		>
			{children}
		</div>
	);
};

const HoverCardThird: React.FC<React.HTMLAttributes<HTMLDivElement> & { skills: SkillType[] }> = ({ className, skills }) => {
	return (
		<div className="absolute pointer-events-none z-10 -top-5 left-0 flex flex-row gap-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-300">
			{skills.map((skill, index) => {
				return (
					<div className="bg-white rounded-sm shadow-md p-4" key={skill.name}>
						<h1>{skill.name}</h1>
						<Progress current={skill.progress}></Progress>
					</div>
				);
			})}
		</div>
	);
};

export { HoverCard, HoverCardFirst, HoverCardSecond, HoverCardThird };
