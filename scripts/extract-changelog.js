import fs from "node:fs"

const tag = process.argv[2]
const changelogPath = process.argv[3] || "CHANGELOG.md"
const outputPath = process.argv[4] || ".github/release-notes.md"

if (!fs.existsSync(changelogPath)) {
	fs.writeFileSync(outputPath, "")
	console.log(`Changelog not found at ${changelogPath}`)
	process.exit(0)
}

const changelog = fs.readFileSync(changelogPath, "utf-8")
const lines = changelog.split("\n")

const startIndex = lines.findIndex((line) => line.startsWith(`## [${tag}]`))
if (startIndex === -1) {
	fs.writeFileSync(outputPath, "")
	console.log(`No section found for tag ${tag}`)
	process.exit(0)
}

const endIndex = lines.findIndex((line, idx) => {
	return idx > startIndex && line.startsWith("## [")
})

const block = lines.slice(startIndex, endIndex === -1 ? lines.length : endIndex)

const trimmed = block.length > 3 ? block.slice(2, -1) : []

fs.writeFileSync(outputPath, trimmed.join("\n"))
console.log(`Extracted changelog for ${tag}`)
