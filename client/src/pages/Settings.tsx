import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "@/routes/routes";
import { useAuth } from "@/hooks/useAuth";

export const Settings = () => {
  const navigate = useNavigate();
  const { handleLogout, isLogoutLoading, userData } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLogoutLoading && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-lime-400" />
            <p className="text-lg text-white font-medium">Logging out...</p>
          </div>
        </div>
      )}
      <div className="px-6 py-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(DASHBOARD)}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <Separator className="mb-6" />

      <div className="px-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-lime-400">Account</h2>
          <div className="bg-zinc-900 rounded-lg p-4 space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-400">
                Username
              </label>
              <p className="text-foreground">{userData?.user?.name}</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-400">Email</label>
              <p className="text-foreground">{userData?.user?.email}</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-400">
                Account Type
              </label>
              <p className="text-foreground">Free Plan</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-lime-400">Preferences</h2>
          <div className="bg-zinc-900 rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-zinc-400">
                  Toggle between light and dark theme
                </p>
              </div>
              <div className="h-6 w-11 bg-lime-400 rounded-full" />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <h2 className="text-xl font-semibold text-red-500">Danger Zone</h2>
          <div className="bg-zinc-900/50 border border-red-900/50 rounded-lg p-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                >
                  Log Out
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-zinc-900 border-zinc-800 max-w-[400px] w-[90%] mx-auto rounded-xl">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-xl text-white">
                    Are you sure you want to log out?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-zinc-400">
                    You will need to log in again to access your account and
                    tracking data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="gap-2">
                  <AlertDialogCancel className="bg-zinc-800 text-white hover:bg-zinc-700 border-none">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => handleLogout()}
                    className="bg-red-500 text-white hover:bg-red-600"
                  >
                    Log Out
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
