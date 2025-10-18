import type { ComponentProps, FC } from "react";

interface SidebarFooterProps extends ComponentProps<"div"> {}

/** Футер сайдбара */
const SidebarFooter: FC<SidebarFooterProps> = ({ ...restProps }) => {
	return (
		<div data-slot="sidebar-footer" data-sidebar="footer" {...restProps} />
	);
};

export { SidebarFooter };
