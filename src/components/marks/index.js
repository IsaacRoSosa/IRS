// Animated logos that replace a project's static image on its card.
// A project opts in with "mark": "<key>" in src/data/projects.json.
import CrosstalkMark from "./CrosstalkMark";
import NoLeetNoScrollMark from "./NoLeetNoScrollMark";
import JobHillMark from "./JobHillMark";

export const marks = {
  crosstalk: CrosstalkMark,
  noleetnoscroll: NoLeetNoScrollMark,
  jobhill: JobHillMark,
};
