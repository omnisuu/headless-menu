import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { AppRoute, AppRouteGroup } from "@/config";

/** Объединяет TailwindCSS-классы, решает конфликты классов (последний или "!class" - в приоритете) */
export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes));
};

export const isAppRouteGroup = (
	route: AppRoute | AppRouteGroup,
): route is AppRouteGroup => {
	return "groupId" in route;
};
