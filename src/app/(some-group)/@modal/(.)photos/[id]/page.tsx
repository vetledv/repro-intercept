import Modal from "@/components/modal";
import Photo from "@/components/photo";
import photos from "@/photos";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function PhotoModal({
	params: { id: photoId },
}: {
	params: {
		id: string;
	};
}) {
	const photo = photoId && photos.find((p) => p.id === photoId);
	if (!photo) return notFound();

	return (
		<Modal>
			<Photo photo={photo} />
		</Modal>
	);
}
