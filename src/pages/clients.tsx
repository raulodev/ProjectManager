import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from "@nextui-org/react";
import { BiPencil } from "react-icons/bi";
import { MdOutlineSearch } from "react-icons/md";
import { ClientInterface } from "src/types";

export function Clients({ clients }: { clients?: ClientInterface[] }) {
  return (
    <div className="ml-14 bg-gray-100 min-h-screen w-full p-4 flex flex-col gap-4">
      <Input
        label="Buscar"
        isClearable
        startContent={<MdOutlineSearch />}
        placeholder="Buscar por el nombre"
        className="max-w-[220px] rounded-xl"
        classNames={{
          inputWrapper: "bg-white hover:bg-white",
          base: "bg-white hover:bg-white",
        }}
      />
      <Table selectionMode="single">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>PHONE</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {clients?.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.phone ?? ""}</TableCell>
              <TableCell>{client.email ?? ""}</TableCell>
              <TableCell>
                <Button isIconOnly variant="light">
                  <BiPencil />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
