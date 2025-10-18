import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps, FC } from "react";

interface SidebarGroupLabelProps extends ComponentProps<"div"> {
	asChild?: boolean;
}

/** Заголовок группы в сайдбаре */
const SidebarGroupLabel: FC<SidebarGroupLabelProps> = ({
	asChild,
	...restProps
}) => {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			data-slot="sidebar-group-label"
			data-sidebar="group-label"
			{...restProps}
		/>
	);
};

export { SidebarGroupLabel };
