'use client';
import config from '@/tailwind.config.ts';
import React, { useRef, useEffect } from 'react';
export default function ColorPalette() {
	const ColorPalette = useRef(null);
	const { colors } = config.theme.extend;

	let _DragEvent: ((ev: MouseEvent) => void) | undefined;
	useEffect(() => {
		if (ColorPalette.current) {
			const target = ColorPalette.current as HTMLDivElement;
			let isShow = false;
			document.addEventListener('keydown', (e) => {
				if (e.ctrlKey && e.key === 'm') {
					target.style.display = isShow ? 'none' : 'block';
					isShow = !isShow;
				}
			});
		}
	}, []);
	function startDragEvent(event: React.MouseEvent) {
		if (ColorPalette.current) {
			document.body.style.userSelect = 'none';
			console.log('startDragEvent');
			const { offsetX, offsetY } = event.nativeEvent;
			const target = ColorPalette.current as HTMLDivElement;
			let timeout: NodeJS.Timeout | undefined = undefined;
			_DragEvent = (ev) => {
				if (timeout) return;
				console.log('dragging');
				timeout = setTimeout(() => {
					target.style.left = `${ev.clientX - offsetX}px`;
					target.style.top = `${ev.clientY - offsetY}px`;
					timeout = undefined;
				}, 16.6);
			};
			document.addEventListener('mousemove', _DragEvent);
			document.addEventListener('mouseup', cleanup);
		}
	}
	function cleanup() {
		if (_DragEvent && ColorPalette.current) {
			document.body.style.userSelect = 'auto';
			console.log('cleanup');
			const target = ColorPalette.current as HTMLDivElement;
			document.removeEventListener('mousemove', _DragEvent);
			_DragEvent = undefined;
			document.removeEventListener('mouseup', cleanup);
		}
	}

	return (
		<div className="fixed hidden bg-white rounded-md z-50 border border-slate-700" ref={ColorPalette}>
			<h1 onMouseDown={startDragEvent}>调色盘</h1>
			<div className="flex flex-row ">
				{Object.keys(colors).map((color, index) => {
					return (
						<div
							style={{ textShadow: '0 0 5px #fff' }}
							className={`flex-1 h-8 bg-${color} text-xs px-2 py-2 hover:text-white`}
							key={index}
						>
							{color}
						</div>
					);
				})}
			</div>
			<div className="flex flex-row ">
				{Object.keys(colors).map((color, index) => {
					return (
						<div
							style={{ textShadow: '0 0 5px #fff' }}
							className={`flex-1 h-8 bg-${color}-foreground text-xs px-2 py-2 hover:text-white`}
							key={index}
						>
							{color}
						</div>
					);
				})}
			</div>
		</div>
	);
}
