import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarGroupLabel as SidebarGroupLabelPrimitive } from "@/primitives/sidebar";

interface SidebarGroupLabelProps
	extends ComponentProps<typeof SidebarGroupLabelPrimitive> {}

const SidebarGroupLabel: FC<SidebarGroupLabelProps> = ({
	className,
	...restProps
}) => {
	return (
		<SidebarGroupLabelPrimitive
			className={cn(
				"text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
				"group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
				className,
			)}
			{...restProps}
		/>
	);
};

export { SidebarGroupLabel };
