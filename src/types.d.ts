declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

export type ScreensType = "projectsScreen" | "clientsScreen";

export type StatusType = "finished" | "started" | "canceled";

export interface ClientInterface {
  name: string;
  id: number;
  email?: string;
  phone?: number;
  telegramUsername?: string;
  country?: string;
}

export interface ProyectInterface {
  title: string;
  status: StatusType;
  client: ClientInterface;
  totalHours: number;
  paidHours: number;
}

export interface SidebarProps {
  onChangeScreen: (screen: ScreensType) => void;
}
