import esbuild from "rollup-plugin-esbuild"

const nodeVersion = Number(process.versions.node.split(".")[0])
if (nodeVersion < 16) {
  throw new Error("Node version must be 16.x or higher")
}

export default function createConfig(packageJson) {
  const output = {
    exports: "named",
    name: packageJson.name
    // sourcemap: true
  }

  const esbuildPlugin = esbuild({
    minify: true,
    tsconfig: "./tsconfig.json",
    platform: "node",
    treeShaking: true,
    loaders: {
      ".json": "json"
    }
  })

  return [
    {
      input: "./src/index.ts",
      plugins: [esbuildPlugin],
      output: [{ file: "./dist/index.js", format: "cjs", ...output }]
    }
  ]
}
