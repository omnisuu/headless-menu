import { Root } from "@radix-ui/react-hover-card";
import type { ComponentProps, FC } from "react";

interface HoverCardProps extends ComponentProps<typeof Root> {}

const HoverCard: FC<HoverCardProps> = ({ ...restProps }) => {
	return <Root data-slot="hover-card" {...restProps} />;
};

export { HoverCard };
