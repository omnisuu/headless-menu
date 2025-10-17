import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SidebarContentProps extends ComponentProps<"div"> {}

const SidebarContent: FC<SidebarContentProps> = ({
	className,
	...restProps
}) => {
	return (
		<div
			data-slot="sidebar-content"
			data-sidebar="content"
			className={cn(
				"flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
				className,
			)}
			{...restProps}
		/>
	);
};

export { SidebarContent };
