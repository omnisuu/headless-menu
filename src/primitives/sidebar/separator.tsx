import { Root as SeparatorRoot } from "@radix-ui/react-separator";
import type { ComponentProps, FC } from "react";

interface SidebarSeparatorProps extends ComponentProps<typeof SeparatorRoot> {}

/** Разделитель элементов сайдбара */
const SidebarSeparator: FC<SidebarSeparatorProps> = ({
	className,
	...restProps
}) => {
	// Radix а не кастомный элемент - компромисс между скоростью, контролируемостью и доступностью
	return <SeparatorRoot data-slot="separator" {...restProps} />;
};

export { SidebarSeparator };
