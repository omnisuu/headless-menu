import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarGroup as SidebarGroupPrimitive } from "@/primitives/sidebar";

interface SidebarGroupProps
	extends ComponentProps<typeof SidebarGroupPrimitive> {}

/** Группа элементов сайдбара */
const SidebarGroup: FC<SidebarGroupProps> = ({ className, ...restProps }) => {
	return (
		<SidebarGroupPrimitive
			className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
			{...restProps}
		/>
	);
};

export { SidebarGroup };
