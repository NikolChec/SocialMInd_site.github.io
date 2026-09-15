import { cp, mkdir, readdir, rm, stat } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("../", import.meta.url);
const output = new URL("../dist/", import.meta.url);
const copiedDirectories = ["assets", "images", "videos"];
const copiedExtensions = new Set([".html", ".css", ".js", ".ico", ".json", ".txt", ".xml"]);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const directory of copiedDirectories) {
  try {
    await stat(new URL(`../${directory}/`, import.meta.url));
  } catch {
    continue;
  }
  await cp(new URL(`../${directory}/`, import.meta.url), new URL(`../dist/${directory}/`, import.meta.url), {
    recursive: true,
  });
}

const unpublishedLegacyAssets = [
  "images/.DS_Store",
  "images/presenting.jpg",
  "images/socialmind-logo.png",
  "images/team/arthur-koshkin.png",
  "images/team/arthur.jpeg",
  "images/team/daniel-melnikovskii.png",
  "images/team/nikol.jpeg",
];

for (const relativePath of unpublishedLegacyAssets) {
  await rm(new URL(`../dist/${relativePath}`, import.meta.url), { force: true });
}

for (const entry of await readdir(root, { withFileTypes: true })) {
  if (!entry.isFile() || !copiedExtensions.has(extname(entry.name))) continue;
  await cp(join(root.pathname, entry.name), join(output.pathname, entry.name));
}

console.log("Static site built in dist/");
