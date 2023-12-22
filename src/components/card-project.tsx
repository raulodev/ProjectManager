import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import { BiPencil } from "react-icons/bi";
import { Status } from "./status";
import { ClientInfo } from "./client-info";
import { ProyectInterface } from "src/types";

export function CardProject({ project }: { project: ProyectInterface }) {
  return (
    <Card className="max-w-[400px] max-h-44">
      <CardHeader className="flex gap-3">
        <p className="text-md">{project.title}</p>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-2">
          <ClientInfo client={project.client} />
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="justify-between">
        <Button isIconOnly color="primary">
          <BiPencil />
        </Button>
        <Status status={project.status} />
      </CardFooter>
    </Card>
  );
}
