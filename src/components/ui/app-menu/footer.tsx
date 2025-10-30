import type { FC, ReactNode } from "react";
import { SidebarFooter as SidebarFooterPrimitive } from "@/primitives/sidebar";

type AppMenuFooterProps = {
	children: ReactNode;
};

/** Футер сайдбара */
const AppMenuFooter: FC<AppMenuFooterProps> = ({ children }) => {
	return (
		<SidebarFooterPrimitive className="flex flex-col gap-2 p-2">
			{children}
		</SidebarFooterPrimitive>
	);
};

export { AppMenuFooter };
