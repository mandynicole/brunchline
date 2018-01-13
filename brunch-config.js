exports.files = {
  javascripts: {
    joinTo: {
      "js/app.js": /^src/,
      "js/vendor.js": /^(?!src\/)/
    },
    order: {
      after: ["src/js/initialize.js", "src/js/app.js"]
    }
  },
  stylesheets: {
    joinTo: "css/app.css",
    order: {
      before: ["src/scss/vendor.scss"],
      after: ["src/scss/base.scss"]
    }
  }
  // templates: {
  //   joinTo: { "js/app.js": "src/views/*.pug" }
  // }
};

exports.conventions = {
  assets: ["src/assets/**/*", "src/views/**/*"]
};

exports.paths = {
  watched: ["src"],
  public: "dist"
};

exports.watcher = {
  usePolling: true
};

exports.modules = {
  nameCleaner: path => path.replace(/^src\//, ""),
  autoRequire: {
    "js/app.js": ["js/initialize", "js/app"]
  }
};

exports.plugins = {
  sass: {
    sourceMapEmbed: true,
    options: {
      includePaths: [
        "node_modules/normalize.css",
        "node_modules/modularscale-sass/stylesheets"
      ]
    }
  },

  postcss: {
    processors: [
      require("postcss-cssnext"),
      require("postcss-utilities"),
      require("autoprefixer")(["last 8 versions"]),
      require("cssnano")
    ],
    options: {
      parser: require("postcss-scss")
    }
  }
};

exports.npm = {
  enabled: true,
  globals: {
    stickybits: "stickybits"
  }
};
