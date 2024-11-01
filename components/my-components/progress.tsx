const Progress: React.FC<React.HTMLAttributes<HTMLDivElement> & { current: number }> = ({ current }) => {
	const achieved = '▮';
	const rest = '▯';
	return <div className="text-base leading-6 h-6">{[...Array(10)].map((_, i) => (i < current ? achieved : rest))}</div>;
};

export default Progress;
