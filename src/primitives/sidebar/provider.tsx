import type { ComponentProps, FC } from "react";
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Тип контекста сайдбара
type SidebarContextType = {
	state: "expanded" | "collapsed";
	open: boolean;
	setOpen: (open: boolean) => void;
	openOnMobile: boolean;
	setOpenOnMobile: (open: boolean) => void;
	isMobile: boolean;
	toggleSidebar: () => void;
};

// Контекст сайдбара
const SidebarContext = createContext<SidebarContextType | null>(null);

/** Хук для использования контекста сайдбара */
const useSidebar = (cfg?: { customError?: string }) => {
	const ctx = useContext(SidebarContext);
	if (!ctx)
		throw new Error(
			cfg?.customError || "useSidebar must be used within a SidebarProvider",
		);
	return ctx;
};

interface SidebarProviderProps extends ComponentProps<"div"> {
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

/** Провайдер для управления состоянием сайдбара */
const SidebarProvider: FC<SidebarProviderProps> = ({
	defaultOpen = true,
	open: openProp,
	onOpenChange: setOpenProp,
	...restProps
}) => {
	const isMobile = useIsMobile();

	// Состояние для мобильной версии (отдельно от десктопной)
	const [openOnMobile, setOpenOnMobile] = useState(false);
	// Внутреннее состояние, используется если внешнего нет
	const [_open, _setOpen] = useState(defaultOpen);

	// Внешнее состояние > внутреннее состояние
	const open = openProp ?? _open;

	// Универсальная функция установки открытия
	const setOpen = useCallback(
		(updator: boolean | ((newOpen: boolean) => boolean)) => {
			const newOpenState =
				typeof updator === "function" ? updator(open) : updator;

			if (setOpenProp) setOpenProp(newOpenState);
			else _setOpen(newOpenState);
		},
		[open, setOpenProp],
	);

	// Функция переключения состояния открытия
	const toggleSidebar = useCallback(() => {
		if (isMobile) return setOpenOnMobile((open) => !open);
		else setOpen((open) => !open);
	}, [isMobile, setOpen]);

	// Деривированное состояние для удобства
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
			<div data-slot="sidebar-wrapper" {...restProps}></div>
		</SidebarContext.Provider>
	);
};

export { SidebarProvider, useSidebar };
