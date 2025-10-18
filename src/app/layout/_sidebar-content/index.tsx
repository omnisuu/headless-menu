import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { SidebarContent } from "@/components/ui/sidebar";
import { routesConfig } from "@/config";
import { isAppRouteGroup } from "@/lib/utils";
import { useSidebar } from "@/primitives/sidebar";
import { RouteRenderer } from "./route-renderer";

const AppSidebarContent = () => {
	const { pathname: currentPath } = useLocation();
	const { state, isMobile } = useSidebar();
	const hideHelpers = state !== "collapsed" || isMobile;

	const renderedRoutes = useMemo(
		() =>
			routesConfig.map((route) => (
				<RouteRenderer
					key={isAppRouteGroup(route) ? route.groupId : route.id}
					route={route}
					currentPath={currentPath}
					hideHelpers={hideHelpers}
				/>
			)),
		[currentPath, hideHelpers],
	);

	return <SidebarContent>{renderedRoutes}</SidebarContent>;
};

export { AppSidebarContent as SidebarContent };
