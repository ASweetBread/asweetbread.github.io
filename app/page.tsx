import HeaderCus from '@/components/custom/header-cus';
import ColorPalette from '@/components/custom/color-palette';
import MainCard from '@/components/custom/main-card';
import ProjectCard from '@/components/custom/project-card';
import SkillPanel from '@/components/custom/skill-panel';

export default function Home() {
	return (
		<div className="pb-10">
			<ColorPalette></ColorPalette>
			<HeaderCus></HeaderCus>
			<MainCard></MainCard>
			<SkillPanel className="md:mt-10"></SkillPanel>
			<ProjectCard className="mt-10"></ProjectCard>
		</div>
	);
}
