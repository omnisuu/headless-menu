import type { ComponentProps, FC } from "react";

interface SidebarMenuProps extends ComponentProps<"ul"> {}

/** Обёртка для меню сайдбара */
const SidebarMenu: FC<SidebarMenuProps> = ({ ...restProps }) => {
	return <ul data-slot="sidebar-menu" data-sidebar="menu" {...restProps} />;
};

export { SidebarMenu };
