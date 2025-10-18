import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarMenuSubItem as SidebarMenuSubItemPrimitive } from "@/primitives/sidebar";

interface SidebarMenuSubItemProps
	extends ComponentProps<typeof SidebarMenuSubItemPrimitive> {}

const SidebarMenuSubItem: FC<SidebarMenuSubItemProps> = ({
	className,
	...restProps
}) => {
	return (
		<SidebarMenuSubItemPrimitive
			className={cn("group/menu-sub-item relative", className)}
			{...restProps}
		/>
	);
};

export { SidebarMenuSubItem };
