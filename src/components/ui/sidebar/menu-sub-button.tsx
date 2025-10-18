import type { ComponentProps, FC } from "react";
import type { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SidebarMenuSubButton as SidebarMenuSubButtonPrimitive } from "@/primitives/sidebar";

interface SidebarMenuSubButtonProps extends ComponentProps<typeof Link> {
	asChild?: boolean;
	size?: "sm" | "md";
	isActive?: boolean;
}

const SidebarMenuSubButton: FC<SidebarMenuSubButtonProps> = ({
	asChild = false,
	size = "md",
	className,
	...restProps
}) => {
	return (
		<SidebarMenuSubButtonPrimitive
			data-size={size}
			className={cn(
				"text-sidebar-foreground whitespace-nowrap ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
				"data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
				size === "sm" && "text-xs",
				size === "md" && "text-sm",
				"group-data-[collapsible=icon]:hidden",
				className,
			)}
			{...restProps}
		/>
	);
};

export { SidebarMenuSubButton };
