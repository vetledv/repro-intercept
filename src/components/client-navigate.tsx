"use client";
import { useRouter } from "next/navigation";

export const ClientBackButton = () => {
	const router = useRouter();
	return (
		<button className="w-fit" onClick={() => router.back()}>
			router.back 🟢
		</button>
	);
};

export const ClientHelloButtonPush = () => {
	const router = useRouter();
	return (
		<button className="w-fit" onClick={() => router.push("/hello")}>
			router.push("/hello") 🟢
		</button>
	);
};

export const ClientRouterNavButton = ({
	href,
	emoji,
	shouldReplace,
}: {
	href: string;
	emoji: string;
	shouldReplace?: boolean;
}) => {
	const router = useRouter();
	return (
		<button className="w-fit" onClick={() => router.push(href)}>
			router.push {href === "/" ? "index" : href} {emoji}
		</button>
	);
};
