"use client";
import { useRouter } from "next/navigation";

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
