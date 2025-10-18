import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarFooter as SidebarFooterPrimitive } from "@/primitives/sidebar";

interface SidebarFooterProps
	extends ComponentProps<typeof SidebarFooterPrimitive> {}

const SidebarFooter: FC<SidebarFooterProps> = ({ className, ...restProps }) => {
	return (
		<SidebarFooterPrimitive
			className={cn("flex flex-col gap-2 p-2", className)}
			{...restProps}
		/>
	);
};

export { SidebarFooter };
