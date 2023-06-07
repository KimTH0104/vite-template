import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";
import postcssNesting from 'postcss-nesting';

type ViteConfigInput = {
  mode: string,
  command: string,
}

// https://vitejs.dev/config/
export default (args: ViteConfigInput) => {

  const generateScopedName = args.mode === "production"
  ? "[hash:base64:2]"
  : "[local]_[hash:base64:2]"

  return defineConfig({
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "/assets"),
      }
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        less: {
          math:"always",
          relativeUrls: true,
          javascriptEnabled: true,
        }
      },
      postcss: {
        plugins : [
          postcssNesting,
        ]
      },
      modules: {
        localsConvention: "camelCase",
        generateScopedName: generateScopedName,
      }
    }
  });
};
