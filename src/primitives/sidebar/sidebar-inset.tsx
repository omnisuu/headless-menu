import type { ComponentProps, FC } from "react";

interface SidebarInsetProps extends ComponentProps<"main"> {}

/** Обёртка для основного контента приложения, соседствующего с сайдбаром */
const SidebarInset: FC<SidebarInsetProps> = ({ ...restProps }) => {
	return <main data-slot="sidebar-inset" {...restProps} />;
};

export { SidebarInset };
