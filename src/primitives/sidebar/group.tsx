import type { ComponentProps, FC } from "react";

interface SidebarGroupProps extends ComponentProps<"div"> {}

/** Группа сайдбара (для группировки связанных элементов) */
const SidebarGroup: FC<SidebarGroupProps> = ({ ...restProps }) => {
	return <div data-slot="sidebar-group" data-sidebar="group" {...restProps} />;
};

export { SidebarGroup };
