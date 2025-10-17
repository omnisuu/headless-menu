import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SidebarHeaderProps extends ComponentProps<"div"> {}

const SidebarHeader: FC<SidebarHeaderProps> = ({ className, ...restProps }) => {
	return (
		<div
			data-slot="sidebar-header"
			data-sidebar="header"
			className={cn("flex flex-col gap-2 p-2", className)}
			{...restProps}
		/>
	);
};

export { SidebarHeader };
