import {
	ClientBackButton,
	ClientHelloButtonPush,
	ClientRouterNavButton,
} from "@/components/client-navigate";
import photos from "@/photos";
import Link from "next/link";

export default function Photo({ photo }: { photo: (typeof photos)[number] }) {
	return (
		<>
			<div className="bg-white p-4 px-6 text-black">
				<h3>{photo.name}</h3>
				<p>Taken by {photo.username}</p>
				<div className="flex flex-col gap-2 pt-4">
					<Link href="/hello">Link /hello 🟢</Link>
					<ClientRouterNavButton href="/hello" emoji="🟢" />

					<Link href="/world">Link /world 🔴</Link>
					<ClientRouterNavButton href="/world" emoji="🔴" />

					<ClientRouterNavButton href="/" emoji="🔴" />
					<Link href="/">Link index 🔴</Link>
					<a href="/">a index 🟢</a>
				</div>
			</div>
		</>
	);
}
