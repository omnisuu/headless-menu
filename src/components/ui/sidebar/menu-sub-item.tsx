import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuSubItemProps extends ComponentProps<"li"> {}

const SidebarMenuSubItem: FC<SidebarMenuSubItemProps> = ({
	className,
	...restProps
}) => {
	return (
		<li
			data-slot="sidebar-menu-sub-item"
			data-sidebar="menu-sub-item"
			className={cn("group/menu-sub-item relative", className)}
			{...restProps}
		/>
	);
};

export { SidebarMenuSubItem };
