import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
export default function Login() {
  const { isLoginLoading, handleInputChange, handleSubmit, errors, formData } =
    useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="p-4">
        <Link to="/" className="flex items-center text-lime-400 font-medium">
          <ArrowLeft className="w-5 h-5 mr-1" />
          <span>Back</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col p-5">
        <div className="mb-6 flex items-center justify-center">
          <div className="bg-lime-400 rounded-full p-2 mr-2">
            <Dumbbell className="w-6 h-6 text-black" />
          </div>
          <h1 className="text-2xl font-bold text-white">FitTrack</h1>
        </div>
        ``
        <div className="mb-8 relative mx-auto">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center mb-6 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-16 h-16 text-lime-400"
            >
              <path d="M6.5 6.5h11"></path>
              <path d="M6.5 17.5h11"></path>
              <path d="M3 10h18"></path>
              <path d="M3 14h18"></path>
              <path d="M4 22V2"></path>
              <path d="M20 22V2"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-zinc-400 text-center">
            Continue your fitness journey
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-zinc-300"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Input
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="you@example.com"
                className={`bg-zinc-900 border-zinc-700 text-white h-12 pl-4 focus-visible:ring-lime-500 focus-visible:ring-2 focus-visible:border-lime-500 ${
                  errors.email ? "border-red-500" : ""
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label
                className="text-sm font-medium text-zinc-300"
                htmlFor="password"
              >
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-lime-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                placeholder="••••••••"
                className={`bg-zinc-900 border-zinc-700 text-white h-12 pl-4 focus-visible:ring-lime-500 focus-visible:ring-2 focus-visible:border-lime-500 ${
                  errors.password ? "border-red-500" : ""
                }`}
                required
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold h-12 rounded-md transition-all duration-200 mt-4"
            disabled={isLoginLoading}
          >
            {isLoginLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Logging in...
              </span>
            ) : (
              "Log In"
            )}
          </Button>
        </form>
        <div className="text-center text-sm text-zinc-400 mt-auto pt-4">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="text-lime-400 font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>
        <div className="mt-6 text-center px-4 py-5 bg-zinc-900/60 rounded-xl">
          <p className="text-lg text-lime-400 font-semibold italic">
            "The only bad workout is the one that didn't happen."
          </p>
        </div>
      </main>
    </div>
  );
}
