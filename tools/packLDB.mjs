import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { promises as fs } from "fs";

const packs = await fs.readdir("./src/packs");

for (const pack of packs) {
    if (pack === ".gitattributes" || pack === ".DS_Store" || pack === ".gitkeep") continue;
    console.log("Packing " + pack);
    await compilePack(
        `./src/packs/${pack}`,
        `./packs/${pack}`,
        { log: true }
    );
}
