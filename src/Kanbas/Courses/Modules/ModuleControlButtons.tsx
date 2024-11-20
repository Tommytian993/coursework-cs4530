import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteModule(moduleId)}
      />
      <GreenCheckmark />
      {FaPlus({ className: "me-2 fs-4" })}
      {IoEllipsisVertical({ className: "fs-4" })}
    </div>
  );
}
