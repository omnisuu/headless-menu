import type { ComponentProps, FC } from "react";

interface SidebarHeaderProps extends ComponentProps<"div"> {}

/** Хедер сайдбара */
const SidebarHeader: FC<SidebarHeaderProps> = ({ ...restProps }) => {
	return (
		<div data-slot="sidebar-header" data-sidebar="header" {...restProps} />
	);
};

export { SidebarHeader };
