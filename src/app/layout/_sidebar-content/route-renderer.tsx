import type { FC } from "react";
import type { AppRoute, AppRouteGroup } from "@/config";
import { isAppRouteGroup } from "@/lib/utils";
import { NestedRoute } from "./nested-route";
import { RouteGroup } from "./route-group";
import { SingleRoute } from "./single-route";

interface RouteRendererProps {
	route: AppRoute | AppRouteGroup;
	currentPath: string;
	hideHelpers: boolean;
	asGroupItem?: boolean;
}

const RouteRenderer: FC<RouteRendererProps> = ({
	route,
	currentPath,
	hideHelpers,
	asGroupItem = false,
}) => {
	if (isAppRouteGroup(route)) {
		return (
			<RouteGroup
				route={route}
				currentPath={currentPath}
				hideHelpers={hideHelpers}
			/>
		);
	}

	if (route.showInSidebar === false) return null;

	if (!route.children?.length) {
		return (
			<SingleRoute
				route={route}
				currentPath={currentPath}
				asGroupItem={asGroupItem}
			/>
		);
	}

	return (
		<NestedRoute
			route={route}
			currentPath={currentPath}
			hideHelpers={hideHelpers}
			asGroupItem={asGroupItem}
		/>
	);
};

export { RouteRenderer };
