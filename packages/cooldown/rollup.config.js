// const nodeVersion = Number(process.versions.node.split(".")[0])
// if (nodeVersion < 16) {
//   throw new Error("Node version must be 16.x or higher")
// }
// import typescript from "rollup-plugin-typescript2"

// export default {
//   input: ["src/index.ts"],
//   output: [
//     {
//       dir: "dist",
//       entryFileNames: "[name].js",
//       format: "cjs",
//       exports: "named"
//     }
//   ],
//   plugins: [typescript()],
//   external: ["react"]
// }
import fs from "node:fs"
import createConfig from "../../rollup.config.js"

const packageJson = JSON.parse(fs.readFileSync("./package.json"))

export default createConfig(packageJson)
