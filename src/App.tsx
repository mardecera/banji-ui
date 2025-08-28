import { Button } from "banji-ui"

const App = () => {
	const handleClick = () => {
		alert("Button clicked")
	}
	return <Button onClick={handleClick}>Button</Button>
}

export default App
