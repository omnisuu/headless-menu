import { Trigger } from "@radix-ui/react-hover-card";
import type { ComponentProps, FC } from "react";

interface HoverCardTriggerProps extends ComponentProps<typeof Trigger> {}

const HoverCardTrigger: FC<HoverCardTriggerProps> = ({ ...restProps }) => {
	return <Trigger data-slot="hover-card-trigger" {...restProps} />;
};

export { HoverCardTrigger };
