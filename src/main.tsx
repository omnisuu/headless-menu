import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("Could not find app root");

createRoot(root).render(
	<StrictMode>
		<BrowserRouter basename="/headless-menu">
			<Router />
		</BrowserRouter>
	</StrictMode>,
);
