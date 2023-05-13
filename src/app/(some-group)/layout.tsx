export default function GroupLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<div>
			<div>{modal}</div>
			<div>{children}</div>
		</div>
	);
}
