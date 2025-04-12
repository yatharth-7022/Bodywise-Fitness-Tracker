import { JSX, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, CheckCircle2, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { PRESIGNUP } from "@/routes/routes";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-hot-toast";
import { SignupData } from "@/types/auth";

export default function SignUp(): JSX.Element {
  const { signUpMutation, isLoading } = useAuth();
  const [formData, setFormData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<SignupData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id as keyof SignupData]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    if (formData.password.length < 8) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters long",
      });
      return;
    }

    signUpMutation.mutate(formData, {
      onError: (error: Error) => {
        try {
          const errorData = JSON.parse(error.message);
          if (Array.isArray(errorData.errors)) {
            const fieldErrors: Partial<SignupData> = {};
            errorData.errors.forEach((err: { param: string; msg: string }) => {
              fieldErrors[err.param as keyof SignupData] = err.msg;
            });
            setErrors(fieldErrors);
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="p-4">
        <Link
          to={PRESIGNUP}
          className="flex items-center text-lime-400 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          <span>Back</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col p-5">
        <div className="mb-6 flex items-center justify-center">
          <div className="bg-[#D6FC03] rounded-full p-2 mr-2">
            <Dumbbell className="w-6 h-6 text-black" />
          </div>
          <h1 className="text-2xl font-bold text-white">BodyWise</h1>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-zinc-400">
            Join thousands building their dream physique
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300" htmlFor="name">
              Full Name
            </label>
            <div className="relative">
              <Input
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className={`bg-zinc-900 border-zinc-700 text-white h-12 pl-4 focus-visible:ring-[#D6FC03] focus-visible:ring-2 focus-visible:border-[#D6FC03] ${
                  errors.name ? "border-red-500" : ""
                }`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
          </div>

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
                className={`bg-zinc-900 border-zinc-700 text-white h-12 pl-4 focus-visible:ring-[#D6FC03] focus-visible:ring-2 focus-visible:border-[#D6FC03] ${
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
            <label
              className="text-sm font-medium text-zinc-300"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                placeholder="••••••••"
                className={`bg-zinc-900 border-zinc-700 text-white h-12 pl-4 focus-visible:ring-[#D6FC03] focus-visible:ring-2 focus-visible:border-[#D6FC03] ${
                  errors.password ? "border-red-500" : ""
                }`}
                required
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <p className="text-xs text-zinc-500">
              Must be at least 8 characters
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#D6FC03] hover:bg-lime-500 text-black font-bold h-12 rounded-md transition-all duration-200 mt-4"
            disabled={isLoading}
          >
            {isLoading ? (
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
                Creating Account...
              </span>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>

        <div className="space-y-3 mb-8">
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-[#D6FC03] mr-2 mt-0.5" />
            <p className="text-sm text-zinc-300">
              Track workouts and see your progress over time
            </p>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5  text-[#D6FC03] mr-2 mt-0.5" />
            <p className="text-sm text-zinc-300">
              Get personalized workout recommendations
            </p>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5  text-[#D6FC03] mr-2 mt-0.5" />
            <p className="text-sm text-zinc-300">
              Connect with a community of fitness enthusiasts
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-zinc-400 mt-auto pt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className=" text-[#D6FC03] font-medium hover:underline"
          >
            Log in
          </Link>
        </div>

        <div className="mt-6 text-center px-4 py-5 bg-zinc-900/60 rounded-xl">
          <p className="text-lg  text-[#D6FC03] font-semibold italic">
            "Do something today that your future self will thank you for."
          </p>
          <p className="text-zinc-500 text-sm mt-1">— Sean Patrick Flanery</p>
        </div>
      </main>
    </div>
  );
}
