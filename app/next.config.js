// eslint-disable-next-line @typescript-eslint/no-var-requires
const WorkerPlugin = require("worker-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase) => {
  const basePath = phase == PHASE_PRODUCTION_BUILD ? "/emruby" : "";
  return {
    env: {
      BASE_PATH: basePath,
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.plugins.push(
          new WorkerPlugin({
            // use "self" as the global object when receiving hot updates.
            globalObject: "self",
          })
        );
      }
      return config;
    },
    basePath: basePath,
    trailingSlash: true,
  };
};
