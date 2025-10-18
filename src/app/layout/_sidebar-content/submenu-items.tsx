import type { FC } from "react";
import {
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type { AppRoute } from "@/config";

interface SubmenuItemsProps {
	route: AppRoute;
	activeChildId?: string;
}

const SubmenuItems: FC<SubmenuItemsProps> = ({ route, activeChildId }) => (
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
);

export { SubmenuItems };
