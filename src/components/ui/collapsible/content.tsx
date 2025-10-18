import { CollapsibleContent as Content } from "@radix-ui/react-collapsible";
import type { ComponentProps, FC } from "react";

interface CollapsibleContentProps extends ComponentProps<typeof Content> {}

/** Контент сворачиваемого блока */
const CollapsibleContent: FC<CollapsibleContentProps> = ({ ...restProps }) => {
	return <Content data-slot="collapsible-content" {...restProps} />;
};

export { CollapsibleContent };
