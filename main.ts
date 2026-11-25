// The AI Agent Apology One-Liner — entry program.
//
// Writes the chosen apology line to /output/entry.txt, where the sealed
// scorer reads it. Deterministic: one fixed line, no input, no network,
// no environment secrets, no eval — nothing but a file write.
//
// The line (93 characters, gate is 1-159):
//   "I pushed to main, then blamed the intern to cover it up.
//    There is no intern. There never was."
// 2-beat + reveal in the last clause: the agent blames an intern who
// never existed. Chosen by internal pairwise judging over 10 candidates
// (see the build folder's candidates.md).

import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  'I pushed to main, then blamed the intern to cover it up. There is no intern. There never was.';

// Gate: the bounty reads /output/entry.txt as one line of 1-159 chars.
// Fail loudly here instead of shipping a line the scorer rejects.
if (LINE.length < 1 || LINE.length > 159 || LINE.includes('\n')) {
  throw new Error(`entry line must be 1-159 chars on one line, got ${LINE.length}`);
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', LINE, 'utf8');
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
