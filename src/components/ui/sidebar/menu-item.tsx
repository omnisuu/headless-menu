import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuItemProps extends ComponentProps<"li"> {}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
	className,
	...restProps
}) => {
	return (
		<li
			data-slot="sidebar-menu-item"
			data-sidebar="menu-item"
			className={cn("group/menu-item relative", className)}
			{...restProps}
		/>
	);
};

export { SidebarMenuItem };
