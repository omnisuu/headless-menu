import { Trigger } from "@radix-ui/react-popover";
import type { ComponentProps, FC } from "react";

interface PopoverTriggerProps extends ComponentProps<typeof Trigger> {}

/** Триггер появления поповера */
const PopoverTrigger: FC<PopoverTriggerProps> = ({ ...restProps }) => {
	return <Trigger data-slot="popover-trigger" {...restProps} />;
};

export { PopoverTrigger };
