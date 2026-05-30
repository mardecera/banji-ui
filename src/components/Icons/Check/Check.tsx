import { type IconNode, createIcon } from "../createIcon";

const checkNode: IconNode = [["path", { d: "M5 12l5 5l10 -10" }]] as const;

const Check = createIcon("Check", checkNode, "outline");

export default Check;
