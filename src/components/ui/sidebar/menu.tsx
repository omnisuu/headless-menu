import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuProps extends ComponentProps<"ul"> {}

const SidebarMenu: FC<SidebarMenuProps> = ({ className, ...restProps }) => {
	return (
		<ul
			data-slot="sidebar-menu"
			data-sidebar="menu"
			className={cn("flex w-full min-w-0 flex-col gap-1", className)}
			{...restProps}
		/>
	);
};

export { SidebarMenu };
