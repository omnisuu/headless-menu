import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SidebarGroupLabelProps extends ComponentProps<"div"> {
	asChild?: boolean;
}

const SidebarGroupLabel: FC<SidebarGroupLabelProps> = ({
	asChild,
	className,
	...restProps
}) => {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			data-slot="sidebar-group-label"
			data-sidebar="group-label"
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
