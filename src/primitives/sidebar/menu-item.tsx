import type { ComponentProps, FC } from "react";

interface SidebarMenuItemProps extends ComponentProps<"li"> {}

/** Обёртка для элемента меню сайдбара */
const SidebarMenuItem: FC<SidebarMenuItemProps> = ({ ...restProps }) => {
	return (
		<li data-slot="sidebar-menu-item" data-sidebar="menu-item" {...restProps} />
	);
};

export { SidebarMenuItem };
