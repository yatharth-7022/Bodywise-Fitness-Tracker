import { Button } from "@/components/ui/button";
import { DASHBOARD, EXERCISES } from "@/routes/routes";
import { Dumbbell, Plus, Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center bg-zinc-950">
      <div className="w-full max-w-[414px] flex flex-col relative bg-zinc-950 text-white">
        <main className="h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden">
          {children}
        </main>
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[414px] bg-zinc-900 border-t border-zinc-800 px-6 py-1">
          <div className="flex justify-between items-center">
            <Button
              onClick={() => navigate(DASHBOARD)}
              variant="ghost"
              className="text-blue-400"
            >
              <svg
                className="w-4 h-4"
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
              <Timer className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-blue-600 hover:bg-blue-700 h-10 w-8 flex items-center justify-center"
            >
              <Plus className="w-4 h-4" />
            </Button>
            <Button onClick={() => navigate(EXERCISES)} variant="ghost">
              <Dumbbell />
            </Button>
            <Button variant="ghost">
              <svg
                className="w-4 h-4"
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
    </div>
  );
};
