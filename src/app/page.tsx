/** @format */

import { BSkyButton } from "@/components/bluesky-button";
import DateNextStream from "@/components/date-next-stream";
import { TwitchButton } from "@/components/twitch-button";
import WavestageHeader from "@/components/wavestage-header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-2 md:p-6 flex flex-col">
      {/* Hero Section */}
      <header className="mb-5 mt-4 md:mt-4 text-center w-full">
        <WavestageHeader />
      </header>

      {/* Next Stream Section */}
      <section className="mb-8 w-full text-center">
        <div className="mx-auto w-1/2">
          <div className="text-xl md:text-2xl text-destructive font-bold mb-2">
            Streaming 3rd Saturday of the month
          </div>
          <h2 className="text-xl md:text-2xl mt-5 font-bold mb-2">
            NEXT STREAM
            <DateNextStream />
          </h2>
        </div>
      </section>
      <section className="mb-12 w-full text-center">
        <div className="mx-auto w-3/4">
          <div className="flex justify-center gap-2">
            <TwitchButton />
            <BSkyButton />
          </div>
        </div>
      </section>

      {/* Video Section */}

      <section className="mx-auto mb-12 w-3/4">
        <Image
          className="w-full rounded-lg"
          src="/images/The_Substrance_Poster_V3.jpg"
          alt="The Substrance Poster"
          width={800}
          height={600}
        />
      </section>

      {/* <section className="mx-auto mb-12 w-3/4 aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/o0O1Rdx7Rbk"
          title="WaveStage Sample Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </section> */}

      {/* Footer */}
      <footer className="text-center mt-auto text-sm ">
        <p>© 2025 WaveStage</p>
        <p>Punch Nazis</p>
      </footer>
    </main>
  );
}
