import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarMenuSub as SidebarMenuSubPrimitive } from "@/primitives/sidebar";

interface SidebarMenuSubProps
	extends ComponentProps<typeof SidebarMenuSubPrimitive> {}

/** Подменю сайдбара, можно считать за UL. Подразумевается расположение в SidebarMenu */
const SidebarMenuSub: FC<SidebarMenuSubProps> = ({
	className,
	...restProps
}) => {
	return (
		<SidebarMenuSubPrimitive
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
