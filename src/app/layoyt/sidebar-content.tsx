import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarContent,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { type AppRoute, routesConfig } from "@/config";

const renderRoute = (route: AppRoute) => {
	if (route.showInSidebar === false) return null;

	if (!route.children?.length)
		return (
			<SidebarMenuItem key={route.id}>
				<SidebarMenuButton asChild>
					<Link to={route.path}>
						{route.icon}
						<span>{route.title}</span>
					</Link>
				</SidebarMenuButton>
			</SidebarMenuItem>
		);

	return (
		<Collapsible
			key={route.id}
			asChild
			// defaultOpen={route.isActive}
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
							<SidebarMenuSubItem key={subRoute.title}>
								<SidebarMenuSubButton to={`${route.path}/${subRoute.path}`}>
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
	return (
		<SidebarContent>
			{routesConfig.map((route) => renderRoute(route))}
		</SidebarContent>
	);
};

export { AppSidebarContent as SidebarContent };
