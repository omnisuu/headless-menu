import type { ComponentProps, FC } from "react";

interface SidebarMenuSubProps extends ComponentProps<"ul"> {}

/** Обёртка для ПОД-меню сайдбара */
const SidebarMenuSub: FC<SidebarMenuSubProps> = ({ ...restProps }) => {
	return (
		<ul data-slot="sidebar-menu-sub" data-sidebar="menu-sub" {...restProps} />
	);
};

export { SidebarMenuSub };
