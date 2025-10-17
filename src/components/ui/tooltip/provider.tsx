import { Provider } from "@radix-ui/react-tooltip";
import type { ComponentProps, FC } from "react";

interface TooltipProviderProps extends ComponentProps<typeof Provider> {}

const TooltipProvider: FC<TooltipProviderProps> = ({
	delayDuration = 0,
	...restProps
}) => {
	return (
		<Provider
			data-slot="tooltip-provider"
			delayDuration={delayDuration}
			{...restProps}
		/>
	);
};

export { TooltipProvider };
