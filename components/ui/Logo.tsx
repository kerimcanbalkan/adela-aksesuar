import Image from 'next/image'

export default function Logo() {
	return (
		<Image
			src="/logo.svg"
			width={62}
			height={26}
			alt="Logo"
		/>
	)
}
