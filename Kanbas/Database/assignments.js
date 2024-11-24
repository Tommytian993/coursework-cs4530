// 作业数据库 - 包含所有课程作业信息
// 每个作业包含：ID、标题、所属课程、描述、分数、截止日期、可用时间等
export default [
  {
    _id: "A101",
    title: "Propulsion Assignment",
    course: "RS101",
    description:
      "Analyze rocket propulsion systems and calculate thrust efficiency. Submit a comprehensive report on propulsion fundamentals including fuel types, combustion processes, and performance metrics.",
    points: 100,
    dueDate: "2024-05-13T23:59",
    availableFrom: "2024-05-06T00:00",
    availableUntil: "2024-05-13T23:59",
  },
  {
    _id: "A102",
    title: "Combustion Analysis",
    course: "RS101",
    description:
      "Study combustion processes in rocket engines. Analyze combustion stability, efficiency, and design parameters. Include mathematical models and experimental data analysis.",
    points: 150,
    dueDate: "2024-05-20T23:59",
    availableFrom: "2024-05-13T00:00",
    availableUntil: "2024-05-20T23:59",
  },
  {
    _id: "A103",
    title: "Nozzle Design Project",
    course: "RS101",
    description:
      "Design and optimize rocket nozzle geometry for maximum thrust efficiency. Consider different nozzle types, expansion ratios, and performance characteristics.",
    points: 200,
    dueDate: "2024-05-27T23:59",
    availableFrom: "2024-05-20T00:00",
    availableUntil: "2024-05-27T23:59",
  },
  {
    _id: "A201",
    title: "Aerodynamics Quiz",
    course: "RS102",
    description:
      "Test your understanding of fundamental aerodynamic principles including lift, drag, and flow characteristics. Multiple choice and short answer questions.",
    points: 50,
    dueDate: "2024-05-10T23:59",
    availableFrom: "2024-05-03T00:00",
    availableUntil: "2024-05-10T23:59",
  },
  {
    _id: "A202",
    title: "Flow Analysis",
    course: "RS102",
    description:
      "Analyze subsonic and supersonic flow patterns around different airfoil shapes. Use computational fluid dynamics tools and present results with detailed explanations.",
    points: 120,
    dueDate: "2024-05-17T23:59",
    availableFrom: "2024-05-10T00:00",
    availableUntil: "2024-05-17T23:59",
  },
  {
    _id: "A203",
    title: "Heating Analysis",
    course: "RS102",
    description:
      "Study aerodynamic heating effects on spacecraft during re-entry. Analyze thermal protection systems and heat transfer mechanisms.",
    points: 180,
    dueDate: "2024-05-24T23:59",
    availableFrom: "2024-05-17T00:00",
    availableUntil: "2024-05-24T23:59",
  },
  {
    _id: "A301",
    title: "Structural Design Task",
    course: "RS103",
    description:
      "Design spacecraft structural components considering material properties, stress analysis, and weight optimization. Include finite element analysis results.",
    points: 150,
    dueDate: "2024-05-15T23:59",
    availableFrom: "2024-05-08T00:00",
    availableUntil: "2024-05-15T23:59",
  },
  {
    _id: "A302",
    title: "Orbital Calculations",
    course: "RS103",
    description:
      "Perform orbital mechanics calculations including Hohmann transfers, orbital perturbations, and mission planning. Use analytical and numerical methods.",
    points: 100,
    dueDate: "2024-05-22T23:59",
    availableFrom: "2024-05-15T00:00",
    availableUntil: "2024-05-22T23:59",
  },
  {
    _id: "A303",
    title: "Systems Engineering Exam",
    course: "RS103",
    description:
      "Comprehensive examination covering spacecraft systems engineering principles, subsystem integration, and mission design considerations.",
    points: 200,
    dueDate: "2024-05-29T23:59",
    availableFrom: "2024-05-22T00:00",
    availableUntil: "2024-05-29T23:59",
  },
];
