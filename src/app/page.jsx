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
    <main>
      <div className="flex flex-wrap">
        {/* Hero Image section 🐱‍🏍 */}
        <section>
          <Image
            src={HeroImgMobile}
            alt="HeroMobile"
            className="block md:hidden"
          />
          <Image
            src={HeroImgDesktop}
            alt="HeroDesktop"
            className="hidden md:block"
          />
        </section>

        {/* Hero content section 🐱‍💻 */}
        <section className="flex flex-col space-y-8 items-center w-full mt-10">
          <h1 className="font-bold text-3xl">Make remote work</h1>

          <p className="text-center font-medium text-sm px-[3rem] text-medium-gray">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className="bg-black text-white text-sm font-semibold px-5 py-3 rounded-xl">
            Learn More
          </button>

          <div className="flex pt-7">
            <DatabizClient className="scale-75" />
            <AudiophileClient className="scale-75" />
            <MeetClient className="scale-75" />
            <MakerClient className="scale-75" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
