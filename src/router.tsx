import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/layout";

const Homepage = lazy(() => import("@/app/page"));

export const Router = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Homepage />} />

				<Route path="*" element={<>Страница не найдена :{"("}</>} />
			</Route>
		</Routes>
	);
};
