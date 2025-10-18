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
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { type AppRoute, type AppRouteGroup, routesConfig } from "@/config";

const renderRoute = (
	route: AppRoute | AppRouteGroup,
	currentPath: string,
	_asGroupItem = false,
) => {
	// Если сущность - группа роутов
	const routeAsGroup = route as AppRouteGroup;
	if (routeAsGroup.groupId)
		return (
			<SidebarGroup key={routeAsGroup.groupId}>
				<SidebarGroupLabel>{routeAsGroup.title}</SidebarGroupLabel>
				<SidebarMenu>
					{routeAsGroup.children?.map((child) =>
						renderRoute(child, currentPath, true),
					)}
				</SidebarMenu>
			</SidebarGroup>
		);

	route = route as AppRoute;
	if (route.showInSidebar === false) return null;

	if (!route.children?.length) {
		const baseContent = (
			<SidebarMenuItem key={_asGroupItem ? route.id : undefined}>
				<SidebarMenuButton asChild isActive={route.path === currentPath}>
					<Link to={route.path}>
						{route.icon}
						<span>{route.title}</span>
					</Link>
				</SidebarMenuButton>
			</SidebarMenuItem>
		);

		if (_asGroupItem) return baseContent;
		return (
			<SidebarGroup key={route.id}>
				<SidebarMenu>{baseContent}</SidebarMenu>
			</SidebarGroup>
		);
	}

	const activeChildId = route.children.find(
		(child) => `${route.path}/${child.path}` === currentPath,
	)?.id;

	const baseContent = (
		<Collapsible
			key={_asGroupItem ? route.id : undefined}
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

	if (_asGroupItem) return baseContent;
	return (
		<SidebarGroup key={route.id}>
			<SidebarMenu>
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
			</SidebarMenu>
		</SidebarGroup>
	);
};

const AppSidebarContent = () => {
	const { pathname: path } = useLocation();

	return (
		<SidebarContent>
			{routesConfig.map((route) => renderRoute(route, path))}
		</SidebarContent>
	);
};

export { AppSidebarContent as SidebarContent };
