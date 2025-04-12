import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Progress", value: 75 },
  { name: "Remaining", value: 25 },
];

const COLORS = ["#3B82F6", "#1F2937"];

export const MonthlyVolumeChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
