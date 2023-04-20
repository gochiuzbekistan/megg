import * as fs from "node:fs/promises";
import * as sxarp from "sharp";

const dir = "./originals";

async function convert_images(dir) {
  try {
    const files = await fs.readdir(dir);

    for (let file of files) {
      const [name] = file.split(".");
      const inputPath = `${dir}/${file}`;
      const outputPath = `${dir}/${name}_opt.jpg`;

      await sxarp.default(inputPath).jpeg({ quality: 50 }).toFile(outputPath);
      await fs.unlink(inputPath);

      console.log(`converted ${file} to ${name}.jpg`);
    }
  } catch (error) {
    console.log(error);
  }
}

convert_images(dir);
