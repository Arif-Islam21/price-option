import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const rechart = () => {
  const studentData = [
    {
      name: "Alice",
      math: 85,
      physics: 78,
      chemistry: 92,
      english: 88,
    },
    {
      name: "Bob",
      math: 70,
      physics: 85,
      chemistry: 80,
      english: 75,
    },
    {
      name: "Charlie",
      math: 95,
      physics: 90,
      chemistry: 88,
      english: 92,
    },
    {
      name: "David",
      math: 80,
      physics: 75,
      chemistry: 82,
      english: 78,
    },
    {
      name: "Emma",
      math: 88,
      physics: 92,
      chemistry: 85,
      english: 90,
    },
    {
      name: "Frank",
      math: 78,
      physics: 80,
      chemistry: 75,
      english: 82,
    },
    {
      name: "Grace",
      math: 92,
      physics: 88,
      chemistry: 90,
      english: 85,
    },
    {
      name: "Harry",
      math: 85,
      physics: 82,
      chemistry: 78,
      english: 80,
    },
    {
      name: "Isabel",
      math: 90,
      physics: 95,
      chemistry: 92,
      english: 88,
    },
    {
      name: "Jack",
      math: 75,
      physics: 78,
      chemistry: 80,
      english: 75,
    },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={studentData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default rechart;
