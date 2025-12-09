import { Button } from "banji-ui"
import "./styles/global.css"

const App = () => {
	const handleClick = () => {
		alert("Button clicked")
	}

	return (
		<div className="container">
			<section>
				<h2>Button</h2>
				<table className="table">
					<thead>
						<tr>
							<th>Size \ Variant</th>
							<th>Loading</th>
							<th>Default</th>
							<th>Outline</th>
							<th>Text</th>
							<th>Link</th>
							<th>Icon</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Small</td>
							<td>
								<Button size="sm" onClick={handleClick} loading>
									Button
								</Button>
							</td>
							<td>
								<Button size="sm" onClick={handleClick}>
									Button
								</Button>
							</td>
							<td>
								<Button size="sm" onClick={handleClick} variant="outline">
									Button
								</Button>
							</td>
							<td>
								<Button size="sm" onClick={handleClick} variant="text">
									Button
								</Button>
							</td>
							<td>
								<Button size="sm" onClick={handleClick} variant="link">
									Button
								</Button>
							</td>
							<td>
								<Button onClick={handleClick} icon={<span>🔥</span>} variant="default" size="icon-sm" />
							</td>
						</tr>
						<tr>
							<td>Default</td>
							<td>
								<Button onClick={handleClick} loading>
									Button
								</Button>
							</td>
							<td>
								<Button onClick={handleClick}>Button</Button>
							</td>
							<td>
								<Button onClick={handleClick} variant="outline">
									Button
								</Button>
							</td>
							<td>
								<Button onClick={handleClick} variant="text">
									Button
								</Button>
							</td>
							<td>
								<Button onClick={handleClick} variant="link">
									Button
								</Button>
							</td>
							<td>
								<Button onClick={handleClick} icon={<span>🔥</span>} variant="default" size="icon" />
							</td>
						</tr>
						<tr>
							<td>Large</td>
							<td>
								<Button size="lg" onClick={handleClick} loading>
									Button
								</Button>
							</td>
							<td>
								<Button size="lg" onClick={handleClick}>
									Button
								</Button>
							</td>
							<td>
								<Button size="lg" onClick={handleClick} variant="outline">
									Button
								</Button>
							</td>
							<td>
								<Button size="lg" onClick={handleClick} variant="text">
									Button
								</Button>
							</td>
							<td>
								<Button size="lg" onClick={handleClick} variant="link">
									Button
								</Button>
							</td>
							<td>
								<Button onClick={handleClick} icon={<span>🔥</span>} variant="default" size="icon-lg" />
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	)
}

export default App
