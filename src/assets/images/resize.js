import * as fs from "fs";
import * as sxarp from "sharp";

const originalsDir = "./originals";
const thumbnailsDir = "./thumbnails";

fs.readdir(originalsDir, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    const [name, extension] = file.split(".");

    sxarp
      .default(`${originalsDir}/${file}`)
      .resize(200)
      .toFile(`${thumbnailsDir}/${name}_thumb.${extension}`, (err, info) => {
        if (err) throw err;
        console.log(`Resized ${file} to ${name}_thumb.${extension}`);
      });
  });
});
