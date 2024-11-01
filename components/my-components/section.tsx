import React from 'react';
import { cn } from '@/lib/utils';

const Section: React.FC<{ id: string } & React.HTMLAttributes<HTMLDivElement>> = ({ children, id, className }) => {
	return (
		<div id={id} className={cn(`xl:mx-auto xl:w-[80rem] max-w-6xl mx-6 w-auto ${className}`)}>
			{children}
		</div>
	);
};

export default Section;
