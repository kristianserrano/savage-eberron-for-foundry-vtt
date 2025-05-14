
import { extractPack } from "@foundryvtt/foundryvtt-cli";
import { promises as fs } from "fs";
import path from "path";

const packs = await fs.readdir("./packs");
for (const pack of packs) {
    if (pack === ".gitattributes" || pack === ".DS_Store" || pack === '.gitkeep') continue;
    console.log("Extracting " + pack);
    const directory = `./src/packs/${pack}`;
    try {
        for (const file of await fs.readdir(directory)) {
            const filePath = path.join(directory, file)
            if (file.endsWith(".yml") || file.endsWith(".json")) {
                await fs.unlink(filePath);
            } else {
                fs.rm(filePath, { recursive: true });
            }
        }
    } catch (error) {
        if (error.code === "ENOENT") console.log("No files inside of " + pack);
        else console.log(error);
    }
    await extractPack(
        `./packs/${pack}`,
        `./src/packs/${pack}`,
        {
            clean: true,
            log: true,
            folders: true,
            expandAdventures: true,
        }
    );
}
