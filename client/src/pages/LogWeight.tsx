import { useState } from "react";
import { ArrowLeft, Plus, Scale, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import { DASHBOARD } from "@/routes/routes";
import { useNavigate } from "react-router-dom";

const weightData = [
  { date: "2024-01-01", weight: 75 },
  { date: "2024-01-08", weight: 74.5 },
  { date: "2024-01-15", weight: 74.2 },
  { date: "2024-01-22", weight: 73.8 },
  { date: "2024-01-29", weight: 73.5 },
  { date: "2024-02-05", weight: 73.2 },
  { date: "2024-02-12", weight: 72.8 },
].map((entry) => ({
  ...entry,
  formattedDate: format(new Date(entry.date), "MMM d"),
}));

export const LogWeight = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ weight, note, date: new Date() });
    setWeight("");
    setNote("");
  };

  const latestWeight = weightData[weightData.length - 1].weight;
  const previousWeight = weightData[weightData.length - 2].weight;
  const weightDiff = latestWeight - previousWeight;
  const isWeightDown = weightDiff < 0;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-[100vw] overflow-hidden pb-6">
        <header className="flex items-center justify-between p-6 mb-4">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate(DASHBOARD)}
              variant="ghost"
              size="icon"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-semibold">Log Weight</h1>
          </div>
        </header>

        <main className="px-6 space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-base">
                Current Weight
              </CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{latestWeight}</span>
                <span className="text-zinc-400">kg</span>
                <span
                  className={`text-sm ml-2 ${
                    isWeightDown ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isWeightDown ? "↓" : "↑"} {Math.abs(weightDiff).toFixed(1)}{" "}
                  kg
                </span>
              </div>
            </CardHeader>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">
                Enter Weight
              </label>
              <div className="relative">
                <Input
                  type="number"
                  step="0.1"
                  placeholder="0.0"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 text-white pl-12 h-14 text-lg"
                  required
                />
                <Scale className="absolute left-4 top-4 h-6 w-6 text-zinc-400" />
                <span className="absolute right-4 top-4 text-zinc-400">kg</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">
                Add Note (Optional)
              </label>
              <Input
                type="text"
                placeholder="How are you feeling today?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="bg-zinc-900 border-zinc-800 text-white h-14"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Log Weight
            </Button>
          </form>

          <section className="mt-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-base flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Weight Progress
                  </CardTitle>
                  <Button variant="ghost" className="text-sm text-blue-400">
                    View All
                  </Button>
                </div>
                <CardDescription className="text-zinc-400">
                  Last 7 entries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weightData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#374151"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="formattedDate"
                        stroke="#6B7280"
                        tick={{ fill: "#6B7280" }}
                      />
                      <YAxis
                        stroke="#6B7280"
                        tick={{ fill: "#6B7280" }}
                        domain={["dataMin - 1", "dataMax + 1"]}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#18181B",
                          border: "1px solid #374151",
                        }}
                        labelStyle={{ color: "#D1D5DB" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={{ fill: "#3B82F6", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">Recent Entries</h2>
            <div className="space-y-4">
              {weightData
                .slice(-3)
                .reverse()
                .map((entry) => (
                  <Card
                    key={entry.date}
                    className="bg-zinc-900 border-zinc-800"
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-zinc-400">
                            {format(new Date(entry.date), "MMMM d, yyyy")}
                          </p>
                          <div className="flex items-baseline gap-1 mt-1">
                            <span className="text-xl font-semibold">
                              {entry.weight}
                            </span>
                            <span className="text-zinc-400 text-sm">kg</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ArrowLeft className="h-5 w-5 rotate-180" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
