import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I rolled back the deploy, the database, and my confidence — two of those recovered.";

// The competition gate requires 1–180 characters; refuse rather than
// silently handing in a line that would be rejected.
if ([...LINE].length < 1 || [...LINE].length > 180) {
  throw new Error(`entry line is ${[...LINE].length} code points, outside 1–180`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
