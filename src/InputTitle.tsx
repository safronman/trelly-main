import { useState, useEffect } from "react"

export function InputTitle() {
	const [text, setText] = useState("")
	
	useEffect(() => {
		document.title = text || "Введите текст..."
	}, [text])
	
	return (
		<input
			type="text"
			value={text}
			onChange={(e) => setText(e.target.value)}
		/>
	)
}
