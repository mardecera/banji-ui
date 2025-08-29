import { Button } from "banji-ui"

const App = () => {
	const handleClick = () => {
		alert("Button clicked")
	}
	return (
		<div>
			<Button onClick={handleClick}>Button</Button>
			<Button onClick={handleClick} loading>
				Button
			</Button>
			<Button onClick={handleClick} disabled>
				Button
			</Button>
		</div>
	)
}

export default App
