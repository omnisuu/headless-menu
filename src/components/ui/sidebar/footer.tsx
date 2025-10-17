import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SidebarFooterProps extends ComponentProps<"div"> {}

const SidebarFooter: FC<SidebarFooterProps> = ({ className, ...restProps }) => {
	return (
		<div
			data-slot="sidebar-footer"
			data-sidebar="footer"
			className={cn("flex flex-col gap-2 p-2", className)}
			{...restProps}
		/>
	);
};

export { SidebarFooter };
