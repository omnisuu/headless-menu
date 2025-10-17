import { createContext, useContext } from "react";

type SidebarContextType = {
	state: "expanded" | "collapsed";
	open: boolean;
	setOpen: (open: boolean) => void;
	openOnMobile: boolean;
	setOpenOnMobile: (open: boolean) => void;
	isMobile: boolean;
	toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

const useSidebar = () => {
	const ctx = useContext(SidebarContext);
	if (!ctx) throw new Error("useSidebar must be used within a SidebarProvider");
	return ctx;
};

export { SidebarContext, useSidebar };
