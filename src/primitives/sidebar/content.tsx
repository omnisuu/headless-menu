import type { ComponentProps, FC } from "react";

interface SidebarContentProps extends ComponentProps<"div"> {}

/** Обертка для контента сайдбара */
const SidebarContent: FC<SidebarContentProps> = ({ ...restProps }) => {
	return (
		<div data-slot="sidebar-content" data-sidebar="content" {...restProps} />
	);
};

export { SidebarContent };
