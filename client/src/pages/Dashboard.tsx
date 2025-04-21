import { Settings, Timer, Scale } from "lucide-react";
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
// import backWorkout from "@/assets/image/back-workout.jpg";
// import legWorkout from "@/assets/image/leg-workouit.jpg";
// import shoulderWorkout from "@/assets/image/shoulder-workout.webp";
// import chestWorkout from "@/assets/image/chest-workout.jpg";
import { WeeklyActivityChart } from "@/components/WeeklyActivityChart";
import { MonthlyVolumeChart } from "@/components/MonthlyVolumeChart";
import { LOG_WEIGHT, SETTINGS } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useDashboard } from "@/hooks/useDashboard";
import { DefaultRoutine } from "@/types/dashboard";
import { ProfilePicture } from "@/components/ProfilePicture";

export const Dashboard = () => {
  const { defaultRoutines } = useDashboard();
  const { userData, profileData } = useAuth();
  const navigate = useNavigate();
  const defaultRoutinesWithImage = defaultRoutines?.filter(
    (routine: DefaultRoutine) => routine.imageUrl !== null
  );
  console.log(profileData);
  return (
    <div className="min-h-screen bg-zinc-950 text-white relative">
      <div className="max-w-[100vw] overflow-hidden">
        <header className="flex justify-between items-center p-6">
          <div className="flex items-center gap-3">
            <ProfilePicture src={profileData?.user?.profilePicture} size="md" />
            <div>
              <p className="text-zinc-400 text-sm">Good morning!</p>
              <h1 className="text-xl font-semibold">{userData?.user?.name}</h1>
            </div>
          </div>
          <Button
            onClick={() => {
              navigate(SETTINGS);
            }}
            variant="ghost"
            size="icon"
          >
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
                {defaultRoutinesWithImage?.map((routine: DefaultRoutine) => (
                  <WorkoutCard
                    key={routine?.id}
                    id={routine?.id}
                    title={routine?.name}
                    duration="35 min"
                    calories="90 cals"
                    image={`${import.meta.env.VITE_API_URL}${
                      routine?.imageUrl
                    }`}
                    description={routine?.description}
                  />
                ))}
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
    </div>
  );
};

export default Dashboard;
