import Image from "next/image";

// assets
import HeroImgMobile from "@/assets/image-hero-mobile.png";
import HeroImgDesktop from "@/assets/image-hero-desktop.png";
import DatabizClient from "@/components/icons/content/DatabizClient";
import AudiophileClient from "@/components/icons/content/AudiophileClient";
import MeetClient from "@/components/icons/content/MeetClient";
import MakerClient from "@/components/icons/content/MakerClient";

const Home = () => {
  return (
    <main className="md:container md:mx-auto px-0 xl:px-20">
      <div className="flex flex-wrap items-center md:flex-nowrap">
        {/* Hero Image mobile 🐱‍🏍 */}
        <Image
          src={HeroImgMobile}
          alt="HeroMobile"
          className="block md:hidden"
        />

        {/* Hero content section 🐱‍💻 */}
        <section className="flex flex-col flex-nowrap items-start space-y-[5rem] md:space-y-[2rem] 2xl:space-y-[10rem] mt-7 md:mt-20">
          <div className="flex flex-col space-y-8 md:space-y-10 md:self-center items-center md:items-start w-full mt-10 px-0 lg:px-20">
            <h1 className="font-bold text-4xl md:text-7xl text-center md:text-left w-full md:w-[84%]">
              Make remote work
            </h1>

            <p className="text-center md:text-justify font-medium px-[3.2rem] md:px-0 text-medium-gray w-full md:w-[70%]">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>

            <button className="bg-black text-white text-sm font-semibold px-5 py-3 rounded-xl">
              Learn More
            </button>
          </div>

          <div className="flex gap-8 items-center pb-10 md:pb-0 px-0 lg:px-20">
            <DatabizClient className="scale-75 md:scale-100" />
            <AudiophileClient className="scale-75 md:scale-100" />
            <MeetClient className="scale-75 md:scale-100" />
            <MakerClient className="scale-75 md:scale-100" />
          </div>
        </section>

        {/* Hero Image desktop 🐱‍🏍 */}
        <section>
          <Image
            src={HeroImgDesktop}
            alt="HeroDesktop"
            className="hidden md:block aspect-[16/9] scale-100 lg:scale-75 lg:h-[800px]"
          />
        </section>
      </div>
    </main>
  );
};

export default Home;
