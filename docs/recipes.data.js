import { cookFilesDataLoader } from "vitepress-plugin-example";

const transformPath = (path) => {
  return path.replace(/^docs\//, "").replace(/\.cook$/, "");
};

export default {
  watch: ["./**/*.cook"],
  load(watchedFiles) {
    return cookFilesDataLoader(watchedFiles, transformPath);
  },
};
