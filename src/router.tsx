import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/layout";
import { type AppRoute, type AppRouteGroup, routesConfig } from "@/config";

/** Рекурсивный рендеринг роутов из конфига */
const renderRoute = (route: AppRoute | AppRouteGroup) => {
	// Если сущность - группа роутов
	const routeAsGroup: AppRouteGroup = route as AppRouteGroup;
	if (routeAsGroup.groupId)
		return (
			<Route key={routeAsGroup.groupId}>
				{route.children?.map((childRoute) => renderRoute(childRoute))}
			</Route>
		);

	route = route as AppRoute;

	// Если нет дочерних роутов
	if (!route.children?.length)
		return <Route key={route.id} path={route.path} element={route.element} />;

	return (
		<Route key={route.id} path={route.path} element={route.element}>
			{route.children.map((childRoute) => renderRoute(childRoute))}
		</Route>
	);
};

export const Router = () => {
	return (
		<Routes>
			{/* Route для лэйаута */}
			<Route element={<Layout />}>
				{routesConfig.map((item) => renderRoute(item))}

				<Route path="*" element={<>Страница не найдена :{"("}</>} />
			</Route>
		</Routes>
	);
};
