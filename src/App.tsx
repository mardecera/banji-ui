import { Button } from "banji-ui"

const App = () => {
	const handleClick = () => {
		alert("Button clicked")
	}

	return (
		<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
			<Button onClick={handleClick} loading>
				Button
			</Button>
			<Button onClick={handleClick}>Button</Button>
			<Button onClick={handleClick} variant="outline">
				Button
			</Button>
			<Button onClick={handleClick} variant="text">
				Button
			</Button>
			<Button onClick={handleClick} variant="link">
				Button
			</Button>
			<Button onClick={handleClick} icon={<span>🔥</span>} variant="default" size="icon" />
		</div>
	)
}

export default App
