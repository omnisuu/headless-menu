import { PopoverClose } from "@radix-ui/react-popover";
import { ChevronRightIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
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
import { useSidebar } from "@/primitives/sidebar";

const renderRoute = (
	route: AppRoute | AppRouteGroup,
	currentPath: string,
	hideHelpers: boolean,
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
						renderRoute(child, currentPath, hideHelpers, true),
					)}
				</SidebarMenu>
			</SidebarGroup>
		);

	route = route as AppRoute;
	if (route.showInSidebar === false) return null;

	if (!route.children?.length) {
		const baseContent = (
			<SidebarMenuItem key={_asGroupItem ? route.id : undefined}>
				<SidebarMenuButton
					asChild
					isActive={route.path === currentPath}
					tooltip={route.title}
				>
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

	let collapsibleTrigger = (
		<CollapsibleTrigger asChild>
			<SidebarMenuButton tooltip={route.title}>
				{route.icon}
				<span>{route.title}</span>
				<ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
			</SidebarMenuButton>
		</CollapsibleTrigger>
	);

	if (!hideHelpers)
		collapsibleTrigger = (
			<Popover>
				<PopoverTrigger asChild>{collapsibleTrigger}</PopoverTrigger>

				<PopoverContent side="right" className="p-1">
					<span className="text-muted-foreground text-xs block pl-1.5 pt-1 pb-1">
						{route.title}
					</span>
					<SidebarMenu>
						{route.children?.map((subRoute) => (
							<SidebarMenuSubItem key={subRoute.id}>
								<PopoverClose asChild>
									<SidebarMenuSubButton
										to={`${route.path}/${subRoute.path}`}
										isActive={subRoute.id === activeChildId}
										className="rounded-sm"
									>
										<span>{subRoute.title}</span>
									</SidebarMenuSubButton>
								</PopoverClose>
							</SidebarMenuSubItem>
						))}
					</SidebarMenu>
				</PopoverContent>
			</Popover>
		);

	const baseContent = (
		<Collapsible
			key={_asGroupItem ? route.id : undefined}
			asChild
			defaultOpen={!!activeChildId}
			className="group/collapsible"
		>
			<SidebarMenuItem>
				{collapsibleTrigger}
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
			<SidebarMenu>{baseContent}</SidebarMenu>
		</SidebarGroup>
	);
};

const AppSidebarContent = () => {
	const { pathname: path } = useLocation();
	const { state, isMobile } = useSidebar();

	return (
		<SidebarContent>
			{routesConfig.map((route) =>
				renderRoute(route, path, state !== "collapsed" || isMobile),
			)}
		</SidebarContent>
	);
};

export { AppSidebarContent as SidebarContent };
