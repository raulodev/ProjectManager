import { Button, Tooltip } from "@nextui-org/react";
import {
  AiOutlineAppstore,
  AiOutlinePlus,
  AiOutlineUser,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { SidebarProps } from "src/types";

export function Sidebar({ onChangeScreen }: SidebarProps) {
  return (
    <div className="p-2 flex flex-col gap-2 w-14 fixed left-0 top-0 bottom-0 z-20">
      <Tooltip content="Nuevo proyecto" placement="right" color="primary">
        <Button isIconOnly color="primary">
          <AiOutlinePlus />
        </Button>
      </Tooltip>
      <Tooltip content="Proyectos" placement="right" color="primary">
        <Button
          isIconOnly
          color="primary"
          onClick={() => onChangeScreen("projectsScreen")}
        >
          <AiOutlineAppstore />
        </Button>
      </Tooltip>
      <Tooltip content="Clientes" placement="right" color="primary">
        <Button
          isIconOnly
          color="primary"
          onClick={() => onChangeScreen("clientsScreen")}
        >
          <AiOutlineUser />
        </Button>
      </Tooltip>
    </div>
  );
}
