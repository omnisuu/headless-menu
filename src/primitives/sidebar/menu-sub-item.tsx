import type { ComponentProps, FC } from "react";

interface SidebarMenuSubItemProps extends ComponentProps<"li"> {}

/** Обёртка для элемента ПОД-меню сайдбара */
const SidebarMenuSubItem: FC<SidebarMenuSubItemProps> = ({ ...restProps }) => {
	return (
		<li
			data-slot="sidebar-menu-sub-item"
			data-sidebar="menu-sub-item"
			{...restProps}
		/>
	);
};

export { SidebarMenuSubItem };
