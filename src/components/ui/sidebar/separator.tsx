import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarSeparator as SidebarSeparatorPrimitive } from "@/primitives/sidebar";

interface SidebarSeparatorProps
	extends ComponentProps<typeof SidebarSeparatorPrimitive> {}

/** Сепаратор для разделов сайдбара */
const SidebarSeparator: FC<SidebarSeparatorProps> = ({
	className,
	...restProps
}) => {
	return (
		<SidebarSeparatorPrimitive
			className={cn("bg-sidebar-border mx-2 w-auto", className)}
			{...restProps}
		/>
	);
};

export { SidebarSeparator };
