import fs from "fs";
import path from "path";

export function getPostsNames() {
  const p = fs.readFileSync(path.join(process.cwd(), "lib/records.json"));
  const posts = JSON.parse(p);
  return posts;
}
