import Albums from "@/components/Album/Albums";
import Hero from "@/components/Hero/Hero";
import Player from "@/components/Player";
import Events from "@/components/Events/Events";

export default function Home() {
  return <main>
    <Hero />
    <Player />
    <Events />
    <Albums />
  </main>
}
