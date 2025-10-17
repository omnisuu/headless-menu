import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../separator";

interface SidebarSeparatorProps extends ComponentProps<typeof Separator> {}

const SidebarSeparator: FC<SidebarSeparatorProps> = ({
	className,
	...restProps
}) => {
	return (
		<Separator
			data-slot="sidebar-separator"
			data-sidebar="separator"
			className={cn("bg-sidebar-border mx-2 w-auto", className)}
			{...restProps}
		/>
	);
};

export { SidebarSeparator };
