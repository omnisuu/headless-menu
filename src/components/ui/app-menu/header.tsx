import type { FC, ReactNode } from "react";
import { SidebarHeader as SidebarHeaderPrimitive } from "@/primitives/sidebar";

interface AppMenuHeaderProps {
	children: ReactNode;
}

/** Хедер сайдбара */
const AppMenuHeader: FC<AppMenuHeaderProps> = ({ children }) => {
	return (
		<SidebarHeaderPrimitive className="flex flex-col gap-2 p-2">
			{children}
		</SidebarHeaderPrimitive>
	);
};

export { AppMenuHeader };
