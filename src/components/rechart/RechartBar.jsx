import { LineChart, Line, XAxis, YAxis } from "recharts";

const RechartBar = () => {
  const studentData = [
    {
      id: 1,
      studentId: 101,
      name: "John Smith",
      mathScore: 85,
      physicsScore: 78,
      chemistryScore: 92,
      englishScore: 70,
    },
    {
      id: 2,
      studentId: 102,
      name: "Emma Johnson",
      mathScore: 78,
      physicsScore: 90,
      chemistryScore: 85,
      englishScore: 80,
    },
    {
      id: 3,
      studentId: 103,
      name: "Michael Brown",
      mathScore: 92,
      physicsScore: 85,
      chemistryScore: 88,
      englishScore: 75,
    },
    {
      id: 4,
      studentId: 104,
      name: "Sophia Miller",
      mathScore: 70,
      physicsScore: 82,
      chemistryScore: 80,
      englishScore: 85,
    },
    {
      id: 5,
      studentId: 105,
      name: "Olivia Davis",
      mathScore: 88,
      physicsScore: 91,
      chemistryScore: 93,
      englishScore: 90,
    },
    {
      id: 6,
      studentId: 106,
      name: "James Wilson",
      mathScore: 76,
      physicsScore: 79,
      chemistryScore: 81,
      englishScore: 72,
    },
    {
      id: 7,
      studentId: 107,
      name: "Emily Martinez",
      mathScore: 90,
      physicsScore: 87,
      chemistryScore: 84,
      englishScore: 88,
    },
    {
      id: 8,
      studentId: 108,
      name: "William Anderson",
      mathScore: 83,
      physicsScore: 89,
      chemistryScore: 86,
      englishScore: 78,
    },
    {
      id: 9,
      studentId: 109,
      name: "Ava Taylor",
      mathScore: 79,
      physicsScore: 75,
      chemistryScore: 77,
      englishScore: 82,
    },
    {
      id: 10,
      studentId: 110,
      name: "Alexander Clark",
      mathScore: 95,
      physicsScore: 94,
      chemistryScore: 97,
      englishScore: 93,
    },
  ];

  return (
    <div>
      <div>
        <LineChart width={400} height={400} data={studentData}>
          <XAxis></XAxis>
          <YAxis></YAxis>
          <Line type="monotone" dataKey="mathScore" stroke="#8284d8" />
          <Line type="monotone" dataKey="physicsScore" stroke="blue" />
          <Line type="monotone" dataKey="chemistryScore" stroke="green" />
          <Line type="monotone" dataKey="englishScore" stroke="red" />
        </LineChart>
      </div>
      <div></div>
    </div>
  );
};

export default RechartBar;
