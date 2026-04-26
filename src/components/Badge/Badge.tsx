import type { BadgeProps } from "./Badge.types"
import { getBadgeStyles } from "./Badge.helper"

const Badge = (props: BadgeProps) => {
	const { label, tone = "neutral" } = props
	const className = getBadgeStyles({ tone, class: props.className })

	return (
		<span {...props} className={className}>
			{label}
		</span>
	)
}

export default Badge
