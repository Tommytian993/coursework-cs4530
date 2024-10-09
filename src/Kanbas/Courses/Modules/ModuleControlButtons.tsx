import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsGripVertical className="fs-4" />
    </div>
  );
}
