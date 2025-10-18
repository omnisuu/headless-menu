import { Root } from "@radix-ui/react-tooltip";
import type { ComponentProps, FC } from "react";
import { TooltipProvider } from "./provider";

interface TooltipProps extends ComponentProps<typeof Root> {}

/** Обёртка для подсказки */
const Tooltip: FC<TooltipProps> = ({ ...restProps }) => {
	return (
		<TooltipProvider>
			<Root data-slot="tooltip" {...restProps} />
		</TooltipProvider>
	);
};

export { Tooltip };
