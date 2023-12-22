import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { Sidebar } from "./components/sidebar";
import { Projects } from "./pages/project";
import { Clients } from "./pages/clients";
import { ScreensType, ProyectInterface, ClientInterface } from "./types";

const examplesProyects: ProyectInterface[] = [
  {
    title: "Proyecto  ffgfgfg #1",
    status: "started",
    client: {
      id: 1,
      name: "Raul",
      email: "raulodev@gmail.com",
      phone: 56939393,
    },
    totalHours: 100,
    paidHours: 20,
  },
  {
    title: "Proyecto  ffgfgfg #1",
    status: "started",
    client: {
      id: 1,
      name: "Raul",
      email: "raulodev@gmail.com",
      phone: 56939393,
    },
    totalHours: 100,
    paidHours: 20,
  },
  {
    title: "Proyecto  ffgfgfg #1",
    status: "started",
    client: {
      id: 1,
      name: "Raul",
      email: "raulodev@gmail.com",
      phone: 56939393,
    },
    totalHours: 100,
    paidHours: 20,
  },
  {
    title: "Proyecto  ffgfgfg #1",
    status: "started",
    client: {
      id: 1,
      name: "Raul",
      email: "raulodev@gmail.com",
      phone: 56939393,
    },
    totalHours: 100,
    paidHours: 20,
  },
  {
    title: "Proyecto  ffgfgfg #1",
    status: "started",
    client: {
      id: 1,
      name: "Raul",
      email: "raulodev@gmail.com",
      phone: 56939393,
    },
    totalHours: 100,
    paidHours: 20,
  },
  {
    title: "Proyecto #2",
    status: "finished",
    client: {
      id: 1,
      name: "Raul",
      telegramUsername: "raulodev",
    },
    totalHours: 40,
    paidHours: 30,
  },
  {
    title: "Proyecto #2",
    status: "canceled",
    client: {
      id: 1,
      name: "Raul",
    },
    totalHours: 40,
    paidHours: 30,
  },
];

const examplesClient: ClientInterface[] = [
  {
    id: 1,
    name: "Raul",
    email: "raulodev@gmail.com",
    phone: 56939393,
  },
  {
    id: 2,
    name: "Raul",
    email: "raulodev@gmail.com",
    phone: 56939393,
  },
];

function App() {
  const [screen, setScreen] = useState<ScreensType>("clientsScreen");
  const [projects, setProjects] = useState(examplesProyects);
  const [clients, setClients] = useState(examplesClient);

  const handlerScreen = (screen: ScreensType) => {
    setScreen(screen);
  };

  return (
    <div className="flex">
      <Sidebar onChangeScreen={handlerScreen} />
      {screen === "projectsScreen" && <Projects projects={projects} />}
      {screen === "clientsScreen" && <Clients clients={clients} />}
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
