import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarMenuItem as SidebarMenuItemPrimitive } from "@/primitives/sidebar";

interface SidebarMenuItemProps
	extends ComponentProps<typeof SidebarMenuItemPrimitive> {}

/** Элемент меню сайдбара, можно считать за LI */
const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
	className,
	...restProps
}) => {
	return (
		<SidebarMenuItemPrimitive
			className={cn("group/menu-item relative", className)}
			{...restProps}
		/>
	);
};

export { SidebarMenuItem };
