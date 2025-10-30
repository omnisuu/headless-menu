import type { ReactNode } from "react";
import { Children, isValidElement } from "react";

/** Позволяет проводить валидацию детей элемента на предмет соответствия правилам использования */
const validateChildren = (
	// biome-ignore lint/suspicious/noExplicitAny: TODO Время ограниченно, типизирую позже
	allowedChildren: any[],
	children: ReactNode,
) => {
	const problemChildren: string[] = [];

	Children.forEach(children, (child) => {
		if (isValidElement(child)) {
			if (!allowedChildren.includes(child.type)) {
				// biome-ignore lint/suspicious/noExplicitAny: TODO Время ограниченно, типизирую позже
				let problebComponent = (child.type as any).name;

				if (!problebComponent)
					problebComponent = child.type ? `<${child.type}/>` : "[Неизвестно]";
				else problebComponent = `<${problebComponent}/>`;

				problemChildren.push(problebComponent);
			}
		}
	});

	return problemChildren;
};

export { validateChildren };
