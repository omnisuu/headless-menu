import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarMenu as SidebarMenuPrimitive } from "@/primitives/sidebar";

interface SidebarMenuProps
	extends ComponentProps<typeof SidebarMenuPrimitive> {}

/** Меню сайдбара, можно считать за UL */
const SidebarMenu: FC<SidebarMenuProps> = ({ className, ...restProps }) => {
	return (
		<SidebarMenuPrimitive
			className={cn("flex w-full min-w-0 flex-col gap-1", className)}
			{...restProps}
		/>
	);
};

export { SidebarMenu };
