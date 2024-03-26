import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import DomainLogos from "./DomainLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >

      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-5">
            Research showcase IGDTUW
          </h1>
          <h3 className="h3 mb-4">
            12-13 April, 2024
          </h3>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Explore the latest advancements in computer science and engineering research, shaping the future of technology.
          </p>
          <div className="flex justify-center">
            <Button href="/pricing" white className="mr-7">
              Register here
            </Button>
            <Button href="/pricing" white>
              Call for Posters
            </Button>
          </div>
        </div>
        <div className="relative max-w-[20rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            {/* <div className="relative bg-n-8 rounded-[1rem]"> */}
              {/* <div className="h-[0.8rem] bg-n-10 rounded-t-[0.9rem]" /> */}

              {/* <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]"> */}
                <h5 className=" relative h5 text-center mb-2">
                    Past memories
                </h5>
                <div class="flex min-h-screen items-center justify-center bg-neutral-800 ">
                  <div class="mx-auto max-w-8xl px-6 mb-4">
                    <div class="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem] justify-center">
                      <div class="group relative h-96 w-[30rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_960_720.jpg" alt="" />
                      </div>
                      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://cdn.pixabay.com/photo/2022/08/17/15/46/family-7392843_960_720.jpg" alt="" />
                      </div>
                      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://cdn.pixabay.com/photo/2020/04/17/14/07/athlete-5055367_960_720.jpg" alt="" />
                      </div>
                      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://cdn.pixabay.com/photo/2021/09/17/15/17/fruit-6633086_960_720.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                </div>


              {/* </div> */}
            {/* </div> */}

            <Gradient />
          </div>
         
          <BackgroundCircles />
        </div>

        <DomainLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
