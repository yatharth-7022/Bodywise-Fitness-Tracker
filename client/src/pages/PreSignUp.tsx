import React from "react";
import { MoveLeft } from "lucide-react";
import { HOME, SIGNUP } from "../routes/routes";
import { useNavigate } from "react-router-dom";
import male from "../assets/image/male.jpeg";
import female from "../assets/image/female.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const PreSignUp = () => {
  const navigate = useNavigate();
  // return (

  const backgroundImages = [male, female];
  return (
    <div className="relative bg-black w-screen h-screen">
      <Carousel
        className="absolute inset-0 z-0"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {backgroundImages.map((img, index) => (
            <CarouselItem key={index} className="w-full h-screen">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-1000"
                style={{ backgroundImage: `url(${img})` }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="min-h-screen home-container-div py-16 relative  flex gap-10 flex-col justify-end h-full ">
        <MoveLeft
          onClick={() => navigate(HOME)}
          className="absolute top-8 left-8 text-white"
        />
        <p
          className="font-bold italic px-10 text-2xl top-10 text-white
        "
        >
          "Do something today that your future self will thank you for.” — Sean
          Patrick Flanery
        </p>
        <div className="w-full flex justify-center">
          <button
            onClick={() => navigate(SIGNUP)}
            className="rounded-lg text-lg text-black font-bold  w-[70%] py-2 bg-[#D6FC03]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
