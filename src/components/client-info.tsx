import React from "react";
import { ClientInterface } from "src/types";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export function ClientInfo({ client }: { client: ClientInterface }) {
  return (
    <div className="flex items-center gap-2">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="flat" isIconOnly radius="full">
            <AiOutlineUser />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="name">{client.name}</DropdownItem>
          {client.email && (
            <DropdownItem key="email">
              <div className="flex items-center gap-1">
                <MdAlternateEmail />
                {client.email}
              </div>
            </DropdownItem>
          )}
          {client.phone && (
            <DropdownItem key="phone">
              <div className="flex items-center gap-1">
                <FiPhone />
                {client.phone}
              </div>
            </DropdownItem>
          )}
          {client.telegramUsername && (
            <DropdownItem key="telegram">
              <div className="flex items-center gap-1">
                <FaTelegramPlane />
                {client.telegramUsername}
              </div>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
      <p>{client.name}</p>
    </div>
  );
}
