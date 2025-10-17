import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw "Could not find app root";

createRoot(root).render(
	<StrictMode>
		<span>Hello!</span>
	</StrictMode>,
);
