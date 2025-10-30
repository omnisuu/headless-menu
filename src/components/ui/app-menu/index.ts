import { AppMenu } from "./app-menu";
import { AppMenuAppWindow } from "./app-window";
import { AppMenuAppWrapper } from "./app-wrapper";
import { AppMenuCombo } from "./combo";
import { AppMenuContent } from "./content";
import { AppMenuFooter } from "./footer";
import { AppMenuGroup } from "./group";
import { AppMenuHeader } from "./header";
import { AppMenuItem } from "./item";

export default Object.assign(AppMenu, {
	/**
	 * Корневая обертка всего приложения.
	 *
	 * @memberof AppMenu
	 * @type {React.ComponentType}
	 * @description
	 * - Является обязательной корневой оберткой
	 * - Предоставляет контекст и базовые стили для всей системы меню
	 * - Может содержать ТОЛЬКО AppMenu и AppMenu.AppWindow
	 *
	 * @example
	 * <AppMenu.AppWrapper>
	 *   <AppMenu>...</AppMenu>
	 *   <AppMenu.AppWindow>...</AppMenu.AppWindow>
	 * </AppMenu.AppWrapper>
	 */
	AppWrapper: AppMenuAppWrapper,

	/**
	 * Основной контейнер контента страницы (кроме самого меню).
	 * Может содержать любой произвольный контент.
	 *
	 * @memberof AppMenu
	 * @type {React.ComponentType}
	 * @description
	 * - Может содержать ЛЮБОЙ контент (произвольные React-элементы)
	 * - Предназначен для размещения основного интерфейса приложения
	 *
	 * @example
	 * <AppMenu.AppWindow>
	 *   <OtherComponents>...</OtherComponents>
	 * </AppMenu.AppWindow>
	 */
	AppWindow: AppMenuAppWindow,

	/**
	 * Заголовочная область меню.
	 * Может содержать любой произвольный контент.
	 *
	 * @memberof AppMenu
	 * @type {React.ComponentType}
	 * @description
	 * - Может содержать ЛЮБОЙ контент
	 * - Обычно содержит логотип
	 * - Должен использоваться внутри AppMenu
	 *
	 * @example
	 * <AppMenu>
	 *   <AppMenu.Header>
	 *     <img src="/logo.png" alt="Logo" />
	 *     <h1>Название приложения</h1>
	 *   </AppMenu.Header>
	 * </AppMenu>
	 */
	Header: AppMenuHeader,

	/**
	 * Основная контентная область меню.
	 * Может содержать ТОЛЬКО AppMenu.Group.
	 *
	 * @memberof AppMenu
	 * @type {React.ComponentType}
	 * @description
	 * - Может содержать ТОЛЬКО AppMenu.Group
	 * - Не может содержать произвольный контент
	 * - Является контейнером для группировки элементов меню
	 * - Должен использоваться внутри AppMenu
	 *
	 * @example
	 * <AppMenu>
	 *   <AppMenu.Content>
	 *     <AppMenu.Group>...</AppMenu.Group>
	 *     <AppMenu.Group>...</AppMenu.Group>
	 *   </AppMenu.Content>
	 * </AppMenu>
	 */
	Content: AppMenuContent,

	/**
	 * Нижняя область (футер) меню.
	 * Может содержать любой произвольный контент.
	 *
	 * @memberof AppMenu
	 * @type {React.ComponentType}
	 * @description
	 * - Может содержать ЛЮБОЙ контент
	 * - Обычно содержит информацию о версии, копирайт, доп. действия
	 * - Должен использоваться внутри AppMenu
	 *
	 * @example
	 * <AppMenu>
	 *   <AppMenu.Footer>
	 *     <div>Версия 1.0.0</div>
	 *     <button onClick={logout}>Выйти</button>
	 *   </AppMenu.Footer>
	 * </AppMenu>
	 */
	Footer: AppMenuFooter,

	/**
	 * Группа элементов меню.
	 * Может содержать ТОЛЬКО AppMenu.Item и AppMenu.Combo.
	 *
	 * @memberof AppMenu
	 * @type {React.ComponentType}
	 * @description
	 * - Может содержать ТОЛЬКО AppMenu.Item и AppMenu.Combo
	 * - Используется для логической группировки элементов меню
	 * - Может иметь заголовок для визуального разделения
	 * - Должен использоваться внутри AppMenu.Content
	 *
	 * @example
	 * <AppMenu.Content>
	 *   <AppMenu.Group label="Навигация">
	 *     <AppMenu.Item to="/home">Главная</AppMenu.Item>
	 *     <AppMenu.Combo title="Документы">...</AppMenu.Combo>
	 *   </AppMenu.Group>
	 * <AppMenu.Content>
	 */
	Group: AppMenuGroup,

	/**
	 * Отдельный элемент меню.
	 * Представляет собой навигационную ссылку.
	 *
	 * @memberof AppMenu
	 * @type {React.ComponentType}
	 * @description
	 * - Базовый элемент навигации
	 * - Имеет свойство 'to' для указания пути
	 * - Может использоваться внутри AppMenu.Group и AppMenu.Combo
	 *
	 * @example
	 * <AppMenu.Item to="/dashboard">
	 *   <HomeIcon />
	 *   Панель управления
	 * </AppMenu.Item>
	 */
	Item: AppMenuItem,

	/**
	 * Комбинированный элемент меню (выпадающий список).
	 * Может содержать ТОЛЬКО AppMenu.Item.
	 *
	 * @memberof AppMenu
	 * @type {React.ComponentType}
	 * @description
	 * - Может содержать ТОЛЬКО AppMenu.Item
	 * - Представляет собой раскрывающуюся группу элементов
	 * - Обычно имеет заголовок и иконку
	 * - Может использоваться внутри AppMenu.Group
	 *
	 * @example
	 * <AppMenu.Combo title={<><CogIcon /> Настройки</>}>
	 *   <AppMenu.Item to="/settings/profile">Профиль</AppMenu.Item>
	 *   <AppMenu.Item to="/settings/security">Безопасность</AppMenu.Item>
	 * </AppMenu.Combo>
	 */
	Combo: AppMenuCombo,
});
