type ButtonProps = {
	text: string
}
export default function Button({ text }: ButtonProps) {
	<button className="bg-secondary hover:bg-primary text-gray-800 font-semibold py-2 px-4 border border-primary rounded-full shadow">
		{text}
	</button>
}
