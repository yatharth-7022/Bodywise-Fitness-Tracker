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
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import { WEIGHTS, DASHBOARD } from "@/routes/routes";

import { WeightResponse } from "@/types/weights";
import { useNavigate } from "react-router-dom";
import { useWeights } from "@/hooks/useWeights";
// import { useWeights } from "@/hooks/useWeights";

export const LogWeight = () => {
  const { handleSubmit, handleInputChange, formData, recentWeights } =
    useWeights();
  const navigate = useNavigate();
  const weightData = recentWeights?.weights.map((entry: WeightResponse) => ({
    ...entry,
    formattedDate: format(new Date(entry.date), "MMM d"),
  }));
  console.log(recentWeights);

  const latestWeight = recentWeights?.weights[0].value;
  const previousWeight = recentWeights?.weights[1].value;
  const weightDiff = latestWeight - previousWeight;
  const isWeightDown = weightDiff < 0;
  console.log(latestWeight, previousWeight);

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
                  name="value"
                  placeholder="0.0"
                  value={formData.value}
                  onChange={handleInputChange}
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
                name="note"
                placeholder="How are you feeling today?"
                value={formData.note}
                onChange={handleInputChange}
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

                      <Line
                        type="monotone"
                        dataKey="value"
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
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold ">Recent Entries</h2>
              <Button
                onClick={() => navigate(WEIGHTS)}
                variant="ghost"
                className="text-sm text-blue-400"
              >
                See All
              </Button>
            </div>
            <div className="space-y-4">
              {recentWeights?.weights?.map((entry: WeightResponse) => (
                <Card key={entry.id} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-zinc-400">
                          {format(new Date(entry.date), "MMMM d, yyyy")}
                        </p>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-semibold">
                            {entry.value}
                          </span>
                          <span className="text-zinc-400 text-sm">kg</span>
                        </div>
                        {entry?.note && (
                          <p className="text-sm w-full truncate text-zinc-400">
                            {entry.note}
                          </p>
                        )}
                      </div>
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
