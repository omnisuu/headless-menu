import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Объединяет TailwindCSS-классы, решает конфликты классов (последний или "!class" - в приоритете) */
export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes));
};
