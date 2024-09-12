type ButtonProps = {
	text: string
	className?: string
}
export default function Button({ text, className = "" }: ButtonProps) {
	return (
		<button className={`bg-secondary hover:bg-primary hover:text-secondary hover:border-secondary text-primary font-semibold text-md py-1 px-4 border border-primary rounded-2xl shadow ${className}`}>
			{text}
		</button>
	)
}
