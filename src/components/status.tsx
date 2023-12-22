import React from "react";
import { Chip } from "@nextui-org/react";
import { StatusType } from "src/types";

export function Status({ status }: { status: StatusType }) {
  return (
    <Chip
      color={
        status === "started"
          ? "primary"
          : status === "finished"
          ? "success"
          : "danger"
      }
      variant="dot"
    >
      {status}
    </Chip>
  );
}
