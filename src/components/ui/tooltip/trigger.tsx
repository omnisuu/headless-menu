import { Trigger } from "@radix-ui/react-tooltip";
import type { ComponentProps, FC } from "react";

interface TooltipTriggerProps extends ComponentProps<typeof Trigger> {}

/** Триггер появления подсказки */
const TooltipTrigger: FC<TooltipTriggerProps> = ({ ...restProps }) => {
	return <Trigger data-slot="tooltip-trigger" {...restProps} />;
};

export { TooltipTrigger };
