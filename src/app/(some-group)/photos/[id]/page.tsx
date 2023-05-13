import React from "react";
import Photo from "@/components/photo";
import photos from "@/photos";
import { notFound } from "next/navigation";

export default function PhotoPage({
	params: { id },
}: {
	params: {
		id: string;
	};
}) {
	const photo = photos.find((p) => p.id === id);
    console.log(photo?.id)
	if (!photo) return notFound();
	return (
		<div className="container mx-auto my-10">
			<div className="w-1/2 mx-auto border border-gray-700">
				<Photo photo={photo} />
			</div>
		</div>
	);
}
