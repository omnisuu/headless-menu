import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/layout";

const Homepage = lazy(() => import("@/app/page"));
const Products = lazy(() => import("@/app/products/page"));
const Clients = lazy(() => import("@/app/clients/page"));
const Settings = lazy(() => import("@/app/settings/page"));
const Messages = lazy(() => import("@/app/messages/page"));
const MessagesArchive = lazy(() => import("@/app/messages/archive/page"));

export const Router = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Homepage />} />
				<Route path="/products" element={<Products />} />
				<Route path="/clients" element={<Clients />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/messages" element={<Messages />} />
				<Route path="/messages/archive" element={<MessagesArchive />} />

				<Route path="*" element={<>Страница не найдена :{"("}</>} />
			</Route>
		</Routes>
	);
};
