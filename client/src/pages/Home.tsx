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
      <div className="flex font-montserrat justify-end h-full text-white flex-col items-center gap-4">
        <p className="font-bold">Welcome</p>
        <h1 className="font-extrabold">Build Your Fitness</h1>
        <h1 className="font-black">Start Tracker</h1>
        <p className="font-bold">Achieve Body Goals</p>
        <button className=" rounded-lg px-20 py-2 bg-green-400">
          Start Workout
        </button>
        <button className="bg-red-500">hi</button>
      </div>
    </div>
  );
};
