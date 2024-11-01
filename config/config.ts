export interface SkillType {
	name: string;
	progress: number;
	desc: string;
	project: string[];
}

export const skills: SkillType[] = [
	{
		name: 'JavaScript/TypeScript',
		progress: 10,
		desc: '熟练掌握HTML、JavaScript、CSS，熟悉Typescript开发，精准复现 UI  产品图，响应式布局，移动端适配。',
		project: ['移动监管'],
	},
	{
		name: 'React',
		progress: 10,
		desc: '熟练使用React，熟悉React Hooks，组件化开发，状态管理redux，路由react-router-dom，网络请求',
		project: ['移动监管'],
	},
	{
		name: 'Next.js',
		progress: 8,
		desc: '开发了一些个人网站来学习Next.js，如：个人博客，个人简历，个人作品集等。',
		project: [],
	},
	{
		name: 'Vue',
		progress: 10,
		desc: '熟悉Vue，熟悉Vuex，Vue-router，网络请求，封装组件，封装指令，了解响应式源码。',
		project: ['Joy Quality', '数字教材编辑器与阅读器', '悦质量'],
	},
	{
		name: 'Webpack/Vite',
		progress: 10,
		desc: '熟悉前端工程化和构建工具 webpack、vite ，有项目性能优化的经验',
		project: [],
	},
	{
		name: 'Three.js',
		progress: 9,
		desc: '制作3D版可视化地图，完成巡航动画制作、模型点击交互',
		project: ['移动监管'],
	},
	{
		name: 'Uniapp',
		progress: 10,
		desc: '跨端开发微信小程序和H5页面，保证两边的一致性',
		project: [],
	},
];
