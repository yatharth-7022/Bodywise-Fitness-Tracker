import { Button } from "@/components/ui/button";
import { DASHBOARD, EXERCISES, TIMER } from "@/routes/routes";
import {
  ChartNoAxesCombined,
  Dumbbell,
  House,
  Plus,
  Timer,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path.startsWith(DASHBOARD)) return "dashboard";
    if (path.startsWith(EXERCISES)) return "exercises";
    if (path.startsWith(TIMER)) return "timer";
    if (path.startsWith("/chart")) return "chart";
    return "dashboard";
  };

  const handleTabClick = (tab: string) => {
    switch (tab) {
      case "dashboard":
        navigate(DASHBOARD);
        break;
      case "exercises":
        navigate(EXERCISES);
        break;
      case "timer":
        navigate(TIMER);
        break;
      case "chart":
        // navigate("/chart"); // Uncomment when chart route is added
        break;
    }
  };

  const activeTab = getActiveTab();

  return (
    <div className="min-h-screen flex justify-center bg-zinc-950">
      <div className="w-full max-w-[414px] flex flex-col relative bg-zinc-950 text-white">
        <main className="h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden">
          {children}
        </main>
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[414px] bg-zinc-900 border-t border-zinc-800 px-6 py-1">
          <div className="flex justify-between items-center">
            <Button
              onClick={() => handleTabClick("dashboard")}
              variant="ghost"
              className={`text-white ${
                activeTab === "dashboard" ? "text-blue-500" : ""
              }`}
            >
              <House />
            </Button>
            <Button
              onClick={() => handleTabClick("timer")}
              variant="ghost"
              className={`text-white ${
                activeTab === "timer" ? "text-blue-500" : ""
              }`}
            >
              <Timer className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-blue-600 hover:bg-blue-700 h-10 w-8 flex items-center justify-center"
            >
              <Plus className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => handleTabClick("exercises")}
              variant="ghost"
              className={`text-white ${
                activeTab === "exercises" ? "text-blue-500" : ""
              }`}
            >
              <Dumbbell />
            </Button>
            <Button
              onClick={() => handleTabClick("chart")}
              variant="ghost"
              className={`text-white ${
                activeTab === "chart" ? "text-blue-500" : ""
              }`}
            >
              <ChartNoAxesCombined />
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};
