import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const Section: React.ForwardRefRenderFunction<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>> = ({ children, id, className, onScroll },ref) => {
	return (
		<div id={id} ref={ref} className={cn(`xl:mx-auto xl:w-[80rem] max-w-6xl md:mx-auto mx-6 w-auto ${className}`)} onScroll={onScroll}>
			{children}
		</div>
	);
}

export default forwardRef(Section);
