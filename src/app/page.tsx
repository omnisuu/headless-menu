import type { FC } from "react";

const Homepage: FC = () => {
	return (
		<div className="p-4">
			<h1>Главная страница</h1>

			<div className="w-full max-w-120 text-right italic text-muted-foreground text-sm">
				<img
					src="/headless-menu/stats.png"
					alt="Показатели по Lighthouse"
					className="w-full"
				/>
				<span>Performance ~ Показатели из dev-режима</span>
			</div>
		</div>
	);
};

export default Homepage;
