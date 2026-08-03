/*
  Add one entry per backer here. tier must match one of:
  "early-bird" | "founder-box" | "booster-pack" | "main-character"
  Order doesn't matter, newest can go anywhere, the page sorts for display.

  early-bird and main-character are capped (100 and 15 respectively).
  The site automatically computes claimed spots and fills the progress
  bars on the tier cards from how many entries of each tier appear below.

  Backer wall chip styling is automatic based on tier:
    main-character tier -> gold "Main Character" pill
    everything else     -> plain "Founder" pill
  To give someone the animated rainbow "Producer" pill instead (for
  standout backers), add: style: "producer"

  Example:
  { name: "@example_user", tier: "main-character" },
  { name: "@another_user", tier: "founder-box", style: "producer" },
*/
const BACKERS = [
  { name: "@Sallad", tier: "founder-box", style: "producer" },
];
