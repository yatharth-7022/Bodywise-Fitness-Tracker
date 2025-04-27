import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { day: "M", hours: 6 },
  { day: "T", hours: 2 },
  { day: "W", hours: 4 },
  { day: "T", hours: 3 },
  { day: "F", hours: 7.5 },
  { day: "S", hours: 2 },
  { day: "S", hours: 5 },
];

export const WeeklyActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis
          dataKey="day"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}hr`}
        />
        <Bar
          dataKey="hours"
          fill="#3B82F6"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
