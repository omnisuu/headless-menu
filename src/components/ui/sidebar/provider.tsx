import type { ComponentProps, CSSProperties, FC } from "react";
import { useCallback, useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { SidebarContext } from "./context";

const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_ICON = "3rem";

interface SidebarProviderProps extends ComponentProps<"div"> {
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

/** Provides all necessary states & funcs for sidebar */
const SidebarProvider: FC<SidebarProviderProps> = ({
	defaultOpen = true,
	open: openProp,
	onOpenChange: setOpenProp,
	className,
	...restProps
}) => {
	const isMobile = useIsMobile();

	const [openOnMobile, setOpenOnMobile] = useState(false);
	// Internal state, in case external is not provided
	const [_open, _setOpen] = useState(defaultOpen);

	const open = openProp ?? _open;

	const setOpen = useCallback(
		(updator: boolean | ((newOpen: boolean) => boolean)) => {
			const newOpenState =
				typeof updator === "function" ? updator(open) : updator;

			if (setOpenProp) setOpenProp(newOpenState);
			else _setOpen(newOpenState);
		},
		[open, setOpenProp],
	);

	// Helper to toggle sidebar expansion
	const toggleSidebar = useCallback(() => {
		if (isMobile) return setOpenOnMobile((open) => !open);
		else setOpen((open) => !open);
	}, [isMobile, setOpen]);

	const state: "expanded" | "collapsed" = open ? "expanded" : "collapsed";

	const contextValue = useMemo(
		() => ({
			state,
			open,
			setOpen,
			isMobile,
			openOnMobile,
			setOpenOnMobile,
			toggleSidebar,
		}),
		[state, open, setOpen, isMobile, openOnMobile, toggleSidebar],
	);

	return (
		<SidebarContext.Provider value={contextValue}>
			<div
				data-slot="sidebar-wrapper"
				style={
					{
						"--sidebar-width": SIDEBAR_WIDTH,
						"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
						...restProps.style,
					} as CSSProperties
				}
				// Default styles, "className" styles has a priority for "cn" (as the last arg)
				className={cn(
					"group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
					className,
				)}
				{...restProps}
			></div>
		</SidebarContext.Provider>
	);
};

export { SidebarProvider };
