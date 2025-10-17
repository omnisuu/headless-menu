import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/layoyt";
import { type AppRoute, routesConfig } from "@/config";

const renderRoute = (route: AppRoute) => {
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
			<Route element={<Layout />}>
				{routesConfig.map((item) => renderRoute(item))}

				<Route path="*" element={<>Страница не найдена :(</>} />
			</Route>
		</Routes>
	);
};
