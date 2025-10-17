import { CollapsibleTrigger as Trigger } from "@radix-ui/react-collapsible";
import type { ComponentProps, FC } from "react";

interface CollapsibleTriggerProps extends ComponentProps<typeof Trigger> {}

const CollapsibleTrigger: FC<CollapsibleTriggerProps> = ({ ...restProps }) => {
	return <Trigger data-slot="collapsible-trigger" {...restProps} />;
};

export { CollapsibleTrigger };
