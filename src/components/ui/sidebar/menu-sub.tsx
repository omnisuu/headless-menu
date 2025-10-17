import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuSubProps extends ComponentProps<"ul"> {}

const SidebarMenuSub: FC<SidebarMenuSubProps> = ({
	className,
	...restProps
}) => {
	return (
		<ul
			data-slot="sidebar-menu-sub"
			data-sidebar="menu-sub"
			className={cn(
				"border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
				"group-data-[collapsible=icon]:hidden",
				className,
			)}
			{...restProps}
		/>
	);
};

export { SidebarMenuSub };
