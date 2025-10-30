import {
	BoxIcon,
	CogIcon,
	HomeIcon,
	ListIcon,
	Loader2,
	MessageSquareDotIcon,
	MessageSquareIcon,
	MessageSquareTextIcon,
	PanelLeftIcon,
	UserIcon,
} from "lucide-react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppMenu from "@/components/ui/app-menu";
import { Button } from "@/components/ui/button";
import { SidebarToggle } from "@/primitives/sidebar";

/**
 * Лэйаут приложения - самое интересное.
 * AppMenu помимо понятных названий и валидации children оснащён JSDocs - всё для беспрецедентного DX...
 * ...поэтому коментариев здесь не очень много
 */
export const Layout = () => {
	return (
		// Обойти наличие завуалированных провайдера, хедера, контента, футера и инсета не получится
		// Сайдбар - это комплексный компонент, который иначе адекватно не спозиционировать и не соструктурировать
		// Но зато можно дать разработчику понимание того как что использовать, и указывать на его ошибки
		<AppMenu.AppWrapper>
			<AppMenu>
				<AppMenu.Header>
					<span>Hello</span>
				</AppMenu.Header>

				<AppMenu.Content>
					<AppMenu.Group label="Основное">
						<AppMenu.Item to="/">
							<HomeIcon />
							Главная
						</AppMenu.Item>

						<AppMenu.Combo
							title={
								<>
									<ListIcon />
									Списки
								</>
							}
						>
							<AppMenu.Item to="/products">
								<BoxIcon />
								Товары
							</AppMenu.Item>

							<AppMenu.Item to="/clients">
								<UserIcon />
								Клиенты
							</AppMenu.Item>
						</AppMenu.Combo>

						<AppMenu.Combo
							title={
								<>
									<MessageSquareIcon />
									Сообщения
								</>
							}
						>
							<AppMenu.Item to="/messages">
								<MessageSquareDotIcon />
								Новые
							</AppMenu.Item>

							<AppMenu.Item to="/messages/archive">
								<MessageSquareTextIcon />
								Архив
							</AppMenu.Item>
						</AppMenu.Combo>
					</AppMenu.Group>

					<AppMenu.Group label="Другое">
						<AppMenu.Item to="/settings">
							<CogIcon />
							Настройки
						</AppMenu.Item>
					</AppMenu.Group>
				</AppMenu.Content>

				<AppMenu.Footer>
					<div className="p-0.5">
						<SidebarToggle asChild>
							<Button
								className="w-full h-7"
								size="sm"
								aria-label="Открыть/закрыть меню"
							>
								<PanelLeftIcon />
							</Button>
						</SidebarToggle>
					</div>
				</AppMenu.Footer>
			</AppMenu>

			<AppMenu.AppWindow>
				<header className="sticky top-0 w-full h-16 bg-background border-b flex items-center justify-between px-4">
					<SidebarToggle asChild>
						<Button size="icon" aria-label="Открыть/закрыть меню">
							<PanelLeftIcon />
						</Button>
					</SidebarToggle>
				</header>

				<Suspense
					fallback={
						<div className="w-full h-full flex items-center justify-center">
							<Loader2 className="animate-spin" />
						</div>
					}
				>
					<Outlet />
				</Suspense>
			</AppMenu.AppWindow>
		</AppMenu.AppWrapper>
	);
};
