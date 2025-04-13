import { Settings, Timer, Scale, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WorkoutCard } from "@/components/WorkoutCard";
import backWorkout from "@/assets/image/back-workout.jpg";
import legWorkout from "@/assets/image/leg-workouit.jpg";
import shoulderWorkout from "@/assets/image/shoulder-workout.webp";
import chestWorkout from "@/assets/image/chest-workout.jpg";
import { WeeklyActivityChart } from "@/components/WeeklyActivityChart";
import { MonthlyVolumeChart } from "@/components/MonthlyVolumeChart";
import { LOG_WEIGHT } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const Dashboard = () => {
  const { userData } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-zinc-950 text-white relative">
      <div className="max-w-[100vw] overflow-hidden">
        <header className="flex justify-between items-center p-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-zinc-400 text-sm">Good morning!</p>
              <h1 className="text-xl font-semibold">{userData?.user?.name}</h1>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
        </header>

        <main className="px-6">
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-2">
              <Button
                className="bg-blue-600 hover:bg-blue-700 w-full px-2 py-1 text-xs sm:text-sm"
                onClick={() => {
                  navigate(LOG_WEIGHT);
                }}
              >
                <Scale className="w-4 h-4 mr-1" />
                Log Weight
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 w-full px-2 py-1 text-xs sm:text-sm"
                onClick={() => {}}
              >
                <Timer className="w-4 h-4 mr-1" />
                Start Timer
              </Button>
              <Button
                className="bg-yellow-600 hover:bg-yellow-700 w-full px-2 py-1 text-xs sm:text-sm"
                onClick={() => {}}
              >
                Start Session →
              </Button>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Start A Workout</h2>
              <Button variant="link" className="text-blue-400">
                See all
              </Button>
            </div>
            <ScrollArea className="w-full">
              <div className="flex space-x-4 pb-4">
                <WorkoutCard
                  title="Chest Day"
                  duration="35 min"
                  calories="90 cals"
                  image={chestWorkout}
                  lastExercised="Last exercised on 12/5/2023"
                />
                <WorkoutCard
                  title="Back Day"
                  duration="35 min"
                  calories="85 cals"
                  image={backWorkout}
                  lastExercised="Last exercised on 12/4/2023"
                />
                <WorkoutCard
                  title="Leg Day"
                  duration="40 min"
                  calories="100 cals"
                  image={legWorkout}
                  lastExercised="Last exercised on 12/3/2023"
                />
                <WorkoutCard
                  title="Shoulder Day"
                  duration="30 min"
                  calories="75 cals"
                  image={shoulderWorkout}
                  lastExercised="Last exercised on 12/2/2023"
                />
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>

          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">History</h2>
              <Button variant="link" className="text-blue-400">
                See all
              </Button>
            </div>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white text-base">
                  Average weekly activity
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  6h 35m
                  <span className="inline-flex items-center text-green-400 text-xs ml-2">
                    ↑ 12%
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WeeklyActivityChart />
              </CardContent>
            </Card>
          </section>

          <section className="mb-24">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="text-white text-base">
                      Weekly Volume
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      445 Kg
                    </CardDescription>
                  </div>
                  <div>
                    <CardTitle className="text-white text-base">
                      Monthly Volume
                    </CardTitle>
                    <CardDescription className="text-2xl font-bold text-white">
                      2679 Kg
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <MonthlyVolumeChart />
              </CardContent>
            </Card>
          </section>
        </main>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 px-6 py-2">
        <div className="flex justify-between items-center">
          <Button variant="ghost" className="text-blue-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Button>
          <Button variant="ghost">
            <Timer className="w-6 h-6" />
          </Button>
          <Button
            size="lg"
            className="rounded-full bg-blue-600 hover:bg-blue-700 h-14 w-14 flex items-center justify-center"
          >
            <Plus className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Button>
          <Button variant="ghost">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </Button>
        </div>
      </nav>
    </div>
  );
};
