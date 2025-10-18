import type { FC } from "react";
import { Link } from "react-router-dom";
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { AppRoute } from "@/config";

interface SingleRouteProps {
	route: AppRoute;
	currentPath: string;
	asGroupItem?: boolean;
}

const SingleRoute: FC<SingleRouteProps> = ({
	route,
	currentPath,
	asGroupItem,
}) => {
	const content = (
		<SidebarMenuItem key={asGroupItem ? route.id : undefined}>
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

	if (asGroupItem) return content;

	return (
		<SidebarGroup key={route.id}>
			<SidebarMenu>{content}</SidebarMenu>
		</SidebarGroup>
	);
};

export { SingleRoute };
