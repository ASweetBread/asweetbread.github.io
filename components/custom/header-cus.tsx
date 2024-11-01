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
export default function HeaderCus() {
	return (
		<header className="backdrop-blur top-0 px-8 lg:px-16 xl:px-32 py-4 z-40 w-full border-b flex flex-row sticky">
			<NavigationMenu className="justify-center text-primary">
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href={'/'}>
							<h1 title="在这里展示自己的技能" className={'text-2xl font-bold'}>
								Home
							</h1>
							{/* 有可能的话，展示自己的真正作品 */}
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
							<span title="在这里展示自己的练习项目" className="text-lg">
								Code
							</span>
						</NavigationMenuTrigger>
						<NavigationMenuContent></NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
}
