import { ChevronRightIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarContent,
	SidebarGroup,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { type AppRoute, routesConfig } from "@/config";

const renderRoute = (route: AppRoute, currentPath: string) => {
	if (route.showInSidebar === false) return null;

	if (!route.children?.length)
		return (
			<SidebarMenuItem key={route.id}>
				<SidebarMenuButton asChild isActive={route.path === currentPath}>
					<Link to={route.path}>
						{route.icon}
						<span>{route.title}</span>
					</Link>
				</SidebarMenuButton>
			</SidebarMenuItem>
		);

	const activeChildId = route.children.find(
		(child) => `${route.path}/${child.path}` === currentPath,
	)?.id;

	return (
		<Collapsible
			key={route.id}
			asChild
			defaultOpen={!!activeChildId}
			className="group/collapsible"
		>
			<SidebarMenuItem>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton tooltip={route.title}>
						{route.icon}
						<span>{route.title}</span>
						<ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenuSub>
						{route.children?.map((subRoute) => (
							<SidebarMenuSubItem key={subRoute.id}>
								<SidebarMenuSubButton
									to={`${route.path}/${subRoute.path}`}
									isActive={subRoute.id === activeChildId}
								>
									<span>{subRoute.title}</span>
								</SidebarMenuSubButton>
							</SidebarMenuSubItem>
						))}
					</SidebarMenuSub>
				</CollapsibleContent>
			</SidebarMenuItem>
		</Collapsible>
	);
};

const AppSidebarContent = () => {
	const { pathname: path } = useLocation();

	return (
		<SidebarContent>
			<SidebarGroup>
				{routesConfig.map((route) => renderRoute(route, path))}
			</SidebarGroup>
		</SidebarContent>
	);
};

export { AppSidebarContent as SidebarContent };
