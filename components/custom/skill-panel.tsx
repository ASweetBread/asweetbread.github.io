import React from 'react';
import Section from '../my-components/section';
import { HoverCard, HoverCardFirst, HoverCardSecond } from '../my-components/hover-card';
import Progress from '../my-components/progress';
import { skills } from '@/config/config';
const SkillPanel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	return (
		<Section id="skill" className={`pb-10 pt-2 flex flex-row md:flex-wrap snap-x gap-4 overflow-x-scroll md:overflow-visible ${className}`}>
			<div className="w-64 md:hidden flex-grow flex-shrink-0"></div>
			{skills.map((skill, index) => {
				return (
					<HoverCard className="w-64 snap-center flex-grow flex-shrink-0 overflow-hidden">
						<HoverCardFirst className="py-8">
							<h3>{skill.name}</h3>
							<Progress current={skill.progress}></Progress>
						</HoverCardFirst>
						<HoverCardSecond DisplayType="rotate" className="py-8">
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
