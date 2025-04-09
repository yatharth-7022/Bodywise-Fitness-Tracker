import { useNavigate } from "react-router-dom";
import { PRESIGNUP } from "../routes/routes";
import backImage from "../assets/image/back.jpeg";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen py-20 bg-cover w-full bg-center"
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="home-container-div  text-montserrat flex  justify-end h-full text-white flex-col items-center gap-2">
        <p className="font-medium text-md">Welcome</p>
        <div className="flex flex-col text-3xl items-center">
          <h1 className="font-extrabold ">Build Your Fitness</h1>
          <h1 className="font-extrabold ">Start Tracker</h1>
        </div>
        <p className="font-mediums">Achieve Body Goals</p>
        <button
          onClick={() => navigate(PRESIGNUP)}
          className="rounded-lg text-lg text-black font-bold  px-20 py-2 bg-[#D6FC03]"
        >
          Start Workout
        </button>
      </div>
    </div>
  );
};
