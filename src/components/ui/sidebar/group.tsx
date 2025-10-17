import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SidebarGroupProps extends ComponentProps<"div"> {}

const SidebarGroup: FC<SidebarGroupProps> = ({ className, ...restProps }) => {
	return (
		<div
			data-slot="sidebar-group"
			data-sidebar="group"
			className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
			{...restProps}
		/>
	);
};

export { SidebarGroup };
