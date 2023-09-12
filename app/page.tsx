import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Home() {
	return (
		<section>
				<div className="flex flex-col items-center justify-center h-screen">
					<h1 className="md:text-7xl text-3xl mb-4">Project Marketplace</h1>
					<h1 className="md:text-4xl  text-xl mt-4 text-purple-500">Offer the unimaginable to the world</h1>
					<audio className="mt-14 md:text-4xl text-3xl mt-4 text-zinc-600 " src="https://xxmxfzfudzisheaosehn.supabase.co/storage/v1/object/public/audio/main2.mp3?t=2023-09-12T11%3A24%3A49.478Z" controls autoPlay/>
					<Link href="/home">
						<Button className="mt-8 bg-purple-800 text-white shadow-xl shadow-purple-900/40"  color="secondary">Continue</Button>
					</Link>
				</div>	
		</section>
	);
}
