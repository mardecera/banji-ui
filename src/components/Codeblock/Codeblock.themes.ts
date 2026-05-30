import type { PrismTheme } from "prism-react-renderer";

export const minimunDark: PrismTheme = {
	plain: {
		color: "#e5e7eb",
		backgroundColor: "#252529"
	},
	styles: [
		{
			types: ["prolog"],
			style: {
				color: "rgb(0, 0, 128)"
			}
		},
		{
			types: ["comment"],
			style: {
				color: "rgb(106, 153, 85)"
			}
		},
		{
			types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
			style: {
				color: "#a78ff7"
			}
		},
		{
			types: ["number", "inserted"],
			style: {
				color: "rgb(181, 206, 168)"
			}
		},
		{
			types: ["constant"],
			style: {
				color: "#ac9aeb"
			}
		},
		{
			types: ["attr-name"],
			style: {
				color: "#ac9aeb"
			}
		},
		{
			types: ["variable"],
			style: {
				color: "#ac9aeb"
			}
		},
		{
			types: ["deleted", "string", "attr-value", "template-punctuation"],
			style: {
				color: "#00aba2"
			}
		},
		{
			types: ["selector"],
			style: {
				color: "rgb(215, 186, 125)"
			}
		},
		{
			types: ["tag"],
			style: {
				color: "rgb(78, 201, 176)"
			}
		},
		{
			types: ["tag"],
			languages: ["markup"],
			style: {
				color: "rgb(86, 156, 214)"
			}
		},
		{
			types: ["punctuation", "operator"],
			style: {
				color: "rgb(212, 212, 212)"
			}
		},
		{
			types: ["punctuation"],
			languages: ["markup"],
			style: {
				color: "#808080"
			}
		},
		{
			types: ["function"],
			style: {
				color: "#4d97f7"
			}
		},
		{
			types: ["class-name"],
			style: {
				color: "#00aba2"
			}
		},
		{
			types: ["char"],
			style: {
				color: "rgb(209, 105, 105)"
			}
		}
	]
};
