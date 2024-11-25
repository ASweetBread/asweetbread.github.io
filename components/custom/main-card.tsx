import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { skills } from '@/config/config';
import { useEffect, useState } from 'react';

export default function MainCard() {
	const projects = ['Hybrid App', 'Web App', 'Mini Program', 'WebGL', 'WebGIS', 'Chrom Extension'];

	const randomtype = { allRandom: 'allRandom', partRandom: 'partRandom' };
	const elementBasicSize = { width: 10, height: 4 };
	type elementPostionType = { left: number; top: number };
	const elementPostions: elementPostionType[] = [];
	function checkOverlap(position: elementPostionType) {
		if (elementPostions.length === 0) return false;
		function checkCondition(value: elementPostionType) {
			const xCondition = position.left >= value.left && position.left <= value.left + 10;
			const yCondition = position.top >= value.top && position.top <= value.top + 4;
			// console.log(xCondition, position.left, value.left + 10, value.left);
			// console.log(yCondition, position.top, value.top + 4, value.top);
			return xCondition && yCondition;
		}

		return elementPostions.some((value) => {
			if (checkCondition(value)) return true;
		});
	}
	function getRandomPosition(type: (typeof randomtype)[keyof typeof randomtype]) {
		if (type === 'allRandom') return Math.random() * 100;
		return Math.random() > 0.5 ? 90 : 5 + Math.random() * 5;
	}
	function getPosition() {
		let leftPosition = getRandomPosition(randomtype.allRandom);
		let topPosition = leftPosition < 10 || leftPosition > 90 ? Math.random() * 100 : getRandomPosition(randomtype.partRandom);
		if (checkOverlap({ left: leftPosition, top: topPosition })) {
			const { left, top } = getPosition();
			leftPosition = left;
			topPosition = top;
		}

		return { left: leftPosition, top: topPosition };
	}
	const [spanelements, setSpanelements] = useState<React.JSX.Element[]>([])
	const [animateState, setAnimateState] = useState(false)
	useEffect(()=>{
		const elements = skills.map((value, index) => {
			const { left, top } = getPosition();
			elementPostions.push({ left, top });
			const element = (
				<span key={index} style={{ top: top + '%', left: left + '%' }} className={`inline-block absolute ${animateState? 'animate-spin-slow-reverse': ''}`}>
					{value.name}
				</span>
			);
			return element
		});
		setSpanelements(elements)
		setAnimateState(true)
	},[animateState])
	return (
		<main className="relative">
			<div className="absolute w-full h-full md:flex md:justify-center pt-5 hidden">
				<div className={`absolute h-full ${animateState ? 'animate-spin-slow' : ''}`}>
					{spanelements}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" className="h-full">
						<circle cx="160" cy="160" r="159" className="stroke-muted-foreground fill-none stroke-2"></circle>
						<circle cx="160" cy="160" r="130" className="stroke-muted-foreground fill-none stroke-2"></circle>
					</svg>
				</div>
			</div>
			<CardContainer className="bg-gradient-to-b from-border to-white rounded-md px-8 py-8 shadow-lg shadow-slate-100">
				<CardBody className="">
					<CardItem translateZ="50" className="text-8xl text-muted-foreground border-b border-muted-foreground">
						Skill:
					</CardItem>
					<CardItem translateZ="50" className="mt-2 w-full">
						<h3 className="font-bold text-lg text-muted-foreground">What can I do:</h3>
						<ul className="mt-8 text-right text-xl text-muted-foreground duration-400 hover:text-neutral-400">
							{projects.map((project, index) => {
								return (
									<div className="group cursor-default" key={index}>
										<span className="inline-block duration-300 group-hover:scale-110 group-hover:text-neutral-900">
											{project}
										</span>
									</div>
								);
							})}
						</ul>
					</CardItem>
				</CardBody>
			</CardContainer>
		</main>
	);
}
