const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};
const module = {
  id: 101,
  name: "React Basics",
  description: "Introduction to React and component-based architecture",
  course: "Web Development",
};
export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
  //module
  app.get("/lab5/module", (req, res) => {
    res.json(module); // 返回完整的 module 对象
  });
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name); // 返回 module 的 name 属性
  });
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params; // 获取新名称
    module.name = newName; // 更新 module.name
    res.json(module); // 返回更新后的对象
  });
  // new assignment part
  // 更新 assignment 的 score
  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = parseInt(newScore, 10); // 更新 score
    res.json(assignment); // 返回更新后的对象
  });

  // 更新 assignment 的 completed
  app.get("/lab5/assignment/completed/:isCompleted", (req, res) => {
    const { isCompleted } = req.params;
    assignment.completed = isCompleted === "true"; // 更新 completed
    res.json(assignment); // 返回更新后的对象
  });
}
