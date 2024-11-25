import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { CalendarCheck, FilePlus2 } from 'lucide-react';
export default function HeaderCus() {
	return (
		<header className="backdrop-blur top-0 px-8 lg:px-16 xl:px-32 py-4 z-40 w-full border-b flex flex-row sticky">
			<Link href={'/'} className='mr-4'>
				<h1 title="在这里展示自己的技能" className={'text-3xl font-bold'}>
					Home
				</h1>
				{/* 有可能的话，展示自己的真正作品 */}
			</Link>
			<NavigationMenu className="justify-center text-primary">
				<NavigationMenuList>

					<NavigationMenuItem>
						<NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
							<span title="在这里展示自己的练习项目" className="text-lg">
								Code
							</span>
						</NavigationMenuTrigger>
						<NavigationMenuContent></NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem className='relative hidden'>
						<NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
							<span title="学习工具" className="text-lg">
								Learn and Review
							</span>
						</NavigationMenuTrigger>
						<NavigationMenuContent className='bg-white'>
							<ul className='grid gap-x-4 sm:w-[500px] sm:grid-cols-[0.75fr_1fr] p-6'>
								<div className='text-white row-span-2 flex flex-col p-4 justify-end rounded-md bg-gradient-to-br from-main-purple to-main-blue'>
									<div className=' mb-auto flex flex-row justify-end'>
										<FilePlus2/><CalendarCheck />
									</div>
									<h3 className='text-lg font-bold'>Learn and Review</h3>
									<span className='text-base font-light'>这是一个用来学习与复习的模块</span>
								</div>
								<NavigationMenuLink
									className="flex flex-col gap-2 rounded-md hover:bg-violet-50 p-4"
									href="/learn"
								>
									<h3 className="text-lg font-bold">Learn</h3>
									<span className='text-gray-700 font-light'>此模块是一个富文本编辑器，用来记录学习过程中记录的笔记</span>
								</NavigationMenuLink>
								<NavigationMenuLink
									className="flex flex-col gap-2 rounded-md hover:bg-violet-50 p-4"
									href="/review"
								>
									<h3 className="text-lg font-bold">Review</h3>
									<span className='text-gray-700 font-light'>此模块是一个笔记复习管理工具，设定笔记的复习频率等</span>
								</NavigationMenuLink>
							</ul>
							
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
}
