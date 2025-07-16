// copy-css.mjs
import fs from "fs";
import path from "path";

function copyCssFiles(srcDir, destDir) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyCssFiles(srcPath, destPath);
    } else if (entry.name.endsWith(".css")) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyCssFiles("src", "dist");
