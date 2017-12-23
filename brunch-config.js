// See http://brunch.io for documentation.
exports.files = {
  javascripts: { joinTo: "js/app.js" },
  stylesheets: {
    joinTo: "css/app.css",
    order: {
      before: ["src/scss/vendor.scss"],
      after: ["src/scss/base.scss"]
    }
  }
};

exports.watcher = {
  usePolling: true
};

exports.modules = {
  nameCleaner: path => path.replace(/^src\//, "")
};

exports.paths = {
  watched: ["src"],
  public: "dist"
};

exports.conventions = {
  assets: ["src/assets/**/*", "src/views/**/*"]
};

exports.plugins = {
  sass: {
    sourceMapEmbed: true,
    options: {
      includePaths: ["node_modules/normalize.css"]
    }
  },

  postcss: {
    processors: [
      require("autoprefixer")(["last 8 versions"]),
      require("cssnano")
    ],
    options: {
      // NOTE: Does not parse SCSS, just makes PostCSS plugins Sass-friendly
      parser: require("postcss-scss")
    }
  }
};
