import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Upload, CheckCircle2, Loader2 } from "lucide-react";
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
import { ProfilePicture } from "@/components/Upload-Profile/ProfilePicture";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { API_CONFIG } from "@/api";
import api from "../../../intercerptor";

export const Settings = () => {
  const navigate = useNavigate();
  const { handleLogout, isLogoutLoading, profileData, refetchProfile } =
    useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("profilePicture", selectedFile);

    try {
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => Math.min(prev + 10, 90));
      }, 300);

      await api.post(API_CONFIG.endpoints.auth.uploadProfilePic, formData);

      clearInterval(progressInterval);
      setUploadProgress(100);

      // Reset states
      setSelectedFile(null);
      setPreviewUrl(null);

      // Refetch profile data to update the profile picture
      await refetchProfile();

      toast.success("Profile picture updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload profile picture");
      setUploadProgress(0);
    } finally {
      setIsUploading(false);
      setTimeout(() => setUploadProgress(0), 1000);
    }
  };

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
          <h2 className="text-xl font-semibold text-lime-400">
            Profile Picture
          </h2>
          <div className="bg-zinc-900 rounded-lg p-6">
            <div className="flex flex-col items-center gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={
                    previewUrl ||
                    profileData?.user?.profilePicture ||
                    "placeholder"
                  }
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ProfilePicture
                        src={profileData?.user?.profilePicture}
                        size="lg"
                        className="!w-32 !h-32"
                      />
                    )}
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-0 right-0 bg-lime-400 rounded-full p-2 text-black hover:bg-lime-500 transition-colors"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </motion.div>
              </AnimatePresence>

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileSelect(file);
                }}
              />

              <div className="w-full max-w-xs">
                {isUploading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-4"
                  >
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-lime-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${uploadProgress}%` }}
                        transition={{ type: "spring", stiffness: 50 }}
                      />
                    </div>
                  </motion.div>
                )}

                {selectedFile && (
                  <Button
                    onClick={handleUpload}
                    disabled={isUploading}
                    className="w-full bg-lime-400 text-black hover:bg-lime-500 disabled:bg-zinc-800 disabled:text-zinc-500 transition-colors"
                  >
                    {isUploading ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                        >
                          <Upload className="w-5 h-5" />
                        </motion.div>
                        Uploading...
                      </span>
                    ) : uploadProgress === 100 ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        Done!
                      </span>
                    ) : (
                      "Update Profile Picture"
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-lime-400">Account</h2>
          <div className="bg-zinc-900 rounded-lg p-4 space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-400">
                Username
              </label>
              <p className="text-foreground">{profileData?.user?.name}</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-400">Email</label>
              <p className="text-foreground">{profileData?.user?.email}</p>
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
