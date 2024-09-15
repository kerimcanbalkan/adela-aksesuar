type ButtonProps = {
	text: string
	className?: string
	theme?: "primary" | "secondary"
}
export default function CustomButton({ text, className = "", theme = "primary" }: ButtonProps) {
	const baseClass = "font-semibold text-md py-1 px-4 rounded-2xl shadow";
	const themeClasses = theme == "primary" ? "bg-primary text-secondary hover:bg-secondary hover:text-primary" : "bg-secondary text-primary  hover:bg-primary hover:text-secondary"
	return (
		<button className={`${baseClass} ${themeClasses} ${className}`}>
			{text}
		</button>
	)
}
