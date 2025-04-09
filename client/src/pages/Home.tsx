import homeBackground from "../assets/image/home-background.jpeg";
export const Home = () => {
  return (
    <div
      className="h-screen py-6 bg-cover w-full bg-center"
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <p className="font-medium text-lg">Welcome</p>
        <div className="flex flex-col text-[100px] gap-1 items-center">
          <h1 className="font-bold ">Build Your Fitness</h1>
          <h1 className="font-black ">Start Tracker</h1>
        </div>
        <p className="font-bold">Achieve Body Goals</p>
        <button className="rounded-lg px-20 py-2 bg-green-400">
          Start Workout
        </button>
        <button className="bg-red-500">hi</button>
      </div>
    </div>
  );
};
