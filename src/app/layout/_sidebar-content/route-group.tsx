import type { FC } from "react";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
} from "@/components/ui/sidebar";
import type { AppRouteGroup } from "@/config";
import { RouteRenderer } from "./route-renderer";

interface RouteGroupProps {
	route: AppRouteGroup;
	currentPath: string;
	hideHelpers: boolean;
}

const RouteGroup: FC<RouteGroupProps> = ({
	route,
	currentPath,
	hideHelpers,
}) => (
	<SidebarGroup key={route.groupId}>
		<SidebarGroupLabel>{route.title}</SidebarGroupLabel>
		<SidebarMenu>
			{route.children?.map((child) => (
				<RouteRenderer
					key={child.id}
					route={child}
					currentPath={currentPath}
					hideHelpers={hideHelpers}
					asGroupItem={true}
				/>
			))}
		</SidebarMenu>
	</SidebarGroup>
);

export { RouteGroup };
