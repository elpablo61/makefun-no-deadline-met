import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning line (127 characters): the speaker moved the deadline
// themselves at 2 a.m. while half asleep, then spent the morning
// blaming whoever moved it. One sentence, one scene, the turn lands
// on the last word: the culprit is the speaker.
const LINE =
  "I moved the deadline myself in the calendar at 2 a.m., while half asleep, and then spent the morning angry at whoever moved it.";

// The gate accepts 1-200 characters of non-whitespace text; fail loudly
// instead of writing an entry the scorer would refuse. The entry must
// also stay one single line: a newline inside it would break the form.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
