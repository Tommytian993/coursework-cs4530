import React, { useState } from "react";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              {module.editing ? (
                <input
                  className="form-control w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                  defaultValue={module.name}
                />
              ) : (
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => {
                      dispatch(deleteModule(moduleId));
                    }}
                    editModule={(moduleId) => {
                      dispatch(editModule(moduleId));
                    }}
                  />
                </div>
              )}
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li
                      key={lesson._id}
                      className="wd-lesson list-group-item p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import { useParams } from "react-router";
// import * as db from "../../Database";
// export default function Modules() {
//   const { cid } = useParams();
//   const modules = db.modules;
//   return (
//     <div>
//       <ModulesControls />
//       <br />
//       <br />
//       <br />
//       <ul id="wd-modules" className="list-group rounded-0">
//         {modules
//           .filter((module: any) => module.course === cid)
//           .map((module: any) => (
//             <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//               <div className="wd-title p-3 ps-2 bg-secondary">
//                 <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
//                 <ModuleControlButtons />
//               </div>
//               {module.lessons && (
//                 <ul className="wd-lessons list-group rounded-0">
//                   {module.lessons.map((lesson: any) => (
//                     <li className="wd-lesson list-group-item p-3 ps-1">
//                       <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
//                       <LessonControlButtons />
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import { useParams } from "react-router";
// import * as db from "../../Database";

// export default function Modules() {
//   const { cid } = useParams(); // Assumes the route is /Kanbas/Courses/:cid/Modules
//   const modules = db.modules || []; // Fallback in case modules is undefined

//   // Debugging step to ensure we have the correct modules data
//   console.log("Course ID:", cid); // Check if `cid` is correct
//   console.log("Modules data:", modules); // Check if `modules` data is being imported correctly

//   return (
//     <div>
//       <ModulesControls />
//       <br />
//       <br />
//       <br />
//       <ul id="wd-modules" className="list-group rounded-0">
//         {modules
//           .filter((module) => module.course === cid) // Filter modules by course ID
//           .map((module) => (
//             <li
//               key={module._id} // Ensure each module has a unique key
//               className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
//             >
//               <div className="wd-title p-3 ps-2 bg-secondary">
//                 <BsGripVertical className="me-2 fs-3" /> {module.name}
//                 <ModuleControlButtons />
//               </div>
//               {module.lessons && (
//                 <ul className="wd-lessons list-group rounded-0">
//                   {module.lessons.map((lesson) => (
//                     <li
//                       key={lesson._id} // Ensure each lesson has a unique key
//                       className="wd-lesson list-group-item p-3 ps-1"
//                     >
//                       <BsGripVertical className="me-2 fs-3" /> {lesson.name}
//                       <LessonControlButtons />
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }
