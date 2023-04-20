import * as fs from "node:fs/promises";
import * as sxarp from "sharp";

const originalsDir = "./originals";
const thumbnailsDir = "./thumbnails";

async function resize_images(source, dist) {
  try {
    const files = await fs.readdir(source);

    for (let file of files) {
      const [name] = file.split(".");

      await sxarp
        .default(`${source}/${file}`)
        .jpeg()
        .resize(200)
        .toFile(`${dist}/${name}_thumb.jpg`);
      console.log(`converted ${file} to ${name}.jpg`);
    }
  } catch (error) {
    console.log(error);
  }
}

resize_images(originalsDir, thumbnailsDir);
