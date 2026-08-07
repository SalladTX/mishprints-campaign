/*
  Add one entry per backer here. tier must match one of:
  "early-bird" | "founder-box" | "booster-pack" | "main-character"
  | "early-bird-case" | "founder-case" | "collector"
  Order doesn't matter, newest can go anywhere, the page sorts for display.

  early-bird (100), main-character (15), early-bird-case (20), and
  collector (20) are capped. The site automatically computes claimed
  spots and fills the progress bars on the tier cards from how many
  entries of each tier appear below.

  Backer wall chip styling is automatic based on tier:
    main-character tier -> gold "Baller" pill
    collector tier      -> animated rainbow "Producer" pill
    everything else     -> plain "Founder" pill
  To give someone the animated rainbow "Producer" pill outside the
  collector tier too (for standout backers), add: style: "producer"
  To give someone the gold "Baller" pill outside the main-character
  tier too, add: style: "baller"

  If someone bought more than one of a capped tier (e.g. multiple
  cases), add qty: N so the claimed-slots count reflects it without
  duplicating their chip on the wall (defaults to 1 if omitted).

  Example:
  { name: "@example_user", tier: "main-character" },
  { name: "@another_user", tier: "founder-box", style: "producer" },
  { name: "@bulk_buyer", tier: "early-bird-case", style: "baller", qty: 2 },
*/
const BACKERS = [
  { name: "@Sallad", tier: "founder-box", style: "producer" },
  { name: "@Nathan M", tier: "early-bird-case", style: "baller", qty: 2 },
  { name: "@Xanigosdragonden", tier: "founder-box", style: "producer" },
  { name: "@Jake F", tier: "founder-box" },
  { name: "@Elise J", tier: "founder-box" },
  { name: "@Alison C", tier: "early-bird-case", style: "baller" },
  { name: "@Daniel U", tier: "early-bird-case", style: "baller" },
  { name: "@April R", tier: "early-bird-case", style: "baller" },
];
