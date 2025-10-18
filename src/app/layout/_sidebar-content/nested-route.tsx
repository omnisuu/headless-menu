import { ChevronRightIcon } from "lucide-react";
import type { FC } from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { AppRoute } from "@/config";
import { PopoverWithSubmenu } from "./popover-with-submenu";
import { SubmenuItems } from "./submenu-items";

interface NestedRouteProps {
	route: AppRoute;
	currentPath: string;
	hideHelpers: boolean;
	asGroupItem?: boolean;
}

const NestedRoute: FC<NestedRouteProps> = ({
	route,
	currentPath,
	hideHelpers,
	asGroupItem,
}) => {
	const activeChildId = route.children?.find(
		(child) => `${route.path}/${child.path}` === currentPath,
	)?.id;

	const triggerContent = (
		<SidebarMenuButton tooltip={route.title}>
			{route.icon}
			<span>{route.title}</span>
			<ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
		</SidebarMenuButton>
	);

	const collapsibleTrigger = hideHelpers ? (
		<CollapsibleTrigger asChild>{triggerContent}</CollapsibleTrigger>
	) : (
		<PopoverWithSubmenu
			route={route}
			activeChildId={activeChildId}
			trigger={triggerContent}
		/>
	);

	const content = (
		<Collapsible
			key={asGroupItem ? route.id : undefined}
			asChild
			defaultOpen={!!activeChildId}
			className="group/collapsible"
		>
			<SidebarMenuItem>
				{collapsibleTrigger}
				<CollapsibleContent>
					<SubmenuItems route={route} activeChildId={activeChildId} />
				</CollapsibleContent>
			</SidebarMenuItem>
		</Collapsible>
	);

	if (asGroupItem) return content;

	return (
		<SidebarGroup key={route.id}>
			<SidebarMenu>{content}</SidebarMenu>
		</SidebarGroup>
	);
};

export { NestedRoute };
