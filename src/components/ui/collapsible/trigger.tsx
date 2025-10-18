import { CollapsibleTrigger as Trigger } from "@radix-ui/react-collapsible";
import type { ComponentProps, FC } from "react";

interface CollapsibleTriggerProps extends ComponentProps<typeof Trigger> {}

/** Триггер свёртывания/развёртывание сворачиваемого блока */
const CollapsibleTrigger: FC<CollapsibleTriggerProps> = ({ ...restProps }) => {
	return <Trigger data-slot="collapsible-trigger" {...restProps} />;
};

export { CollapsibleTrigger };
