import { PopoverClose } from "@radix-ui/react-popover";
import type { FC, ReactNode } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	SidebarMenu,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type { AppRoute } from "@/config";

interface PopoverWithSubmenuProps {
	route: AppRoute;
	activeChildId?: string;
	trigger: ReactNode;
}

const PopoverWithSubmenu: FC<PopoverWithSubmenuProps> = ({
	route,
	activeChildId,
	trigger,
}) => (
	<Popover>
		<PopoverTrigger asChild>{trigger}</PopoverTrigger>
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

export { PopoverWithSubmenu };
