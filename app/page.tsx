import Link from "next/link";


export default function Start() {
	return (
          <section>
          <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="md:text-7xl text-3xl">Project <span className="underline underline-offset-4 decoration-purple-500  decoration-4">Marketplace</span></h1>
            <h1 className="md:text-4xl  text-xl mt-8 text-purple-500">Offer the  <span className="underline underline-offset-4 text-white decoration-3">unimaginable</span> to the world</h1>
            <audio className="md:text-4xl text-3xl mt-10 text-zinc-600 " src="https://xxmxfzfudzisheaosehn.supabase.co/storage/v1/object/public/audio/main2.mp3?t=2023-09-12T11%3A24%3A49.478Z" controls autoPlay/>
            <Link href="/home" color="foreground">
              <button className="mt-8 bg-purple-800 text-white text-semibold shadow-xl shadow-purple-900/40"  color="secondary">Continue</button>
            </Link>
          </div>	
      </section>
    
  );
}
