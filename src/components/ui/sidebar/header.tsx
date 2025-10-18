import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarHeader as SidebarHeaderPrimitive } from "@/primitives/sidebar";

interface SidebarHeaderProps
	extends ComponentProps<typeof SidebarHeaderPrimitive> {}

/** Хедер сайдбара */
const SidebarHeader: FC<SidebarHeaderProps> = ({ className, ...restProps }) => {
	return (
		<SidebarHeaderPrimitive
			className={cn("flex flex-col gap-2 p-2", className)}
			{...restProps}
		/>
	);
};

export { SidebarHeader };
