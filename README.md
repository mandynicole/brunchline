# Brunchline

#### Brunchline is built with [Brunch](http://brunch.io), and prefers utilizing [Yarn](https://yarnpkg.com/) over NPM.

## Features

* [SCSS](http://sass-lang.com/)
  * [PostCSS](http://postcss.org/)
    * [autoprefixer](https://github.com/postcss/autoprefixer)
    * [cssnano](http://cssnano.co/)
    * [postcss-scss](https://github.com/postcss/postcss-scss)
* [Pug](https://pugjs.org)
* `src/` instead of `app/`
  * `assets/[img|vid|svg|*]` throws everything straight into `dist/[img|vid|svg|*]`
    * **TODO:** Pipe various filetypes through respective optimizers, etc.
* `dist/` instead of `public/`

#### Example Directory Structure

```
Project/
├── src/
│   ├── assets/
|   |   └── img/
|   |       └── filename.png
|   ├── js/
|       └── initialize.js
|   ├── scss/
|   |   ├── base.scss             [imports partials defined in each subfolder]
|   |   ├── vendor.scss           [imports vendor CSS, in this case, just normalize.css]
|   |   ├── core/
|   |   ├── components/
|   |   └── pages/
├── dist
│   ├── css/
|       └── app.css               [vendor.scss + base.scss]
|   ├── img/
|       └── filename.png
|   ├── js/
|       └── app.js                [initialize.js + other JS]
|   └── index.html
```

---

## Installation

### [Node.js](http://nodejs.org):

> #### macOS
>
> * [Homebrew](https://brew.sh/): `brew install node`
> * Manually: [Download](https://nodejs.org/en/download/) the `.pkg`

> #### Windows
>
> * [Choco](https://chocolatey.org/): `choco install node`
> * Manually: [Download](https://nodejs.org/en/download/) the `.msi`

> #### Linux
>
> * [Linuxbrew](http://linuxbrew.sh/): `brew install node`
> * Manually:
>   * (If Ubuntu 16.04 or below:) `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
>   * `sudo apt-get install -y nodejs`
>   * `sudo apt-get install -y build-essential`

---

### [Yarn](https://yarnpkg.com/):

> **macOS**
>
> * `brew install yarn`
> * (if using a Node Version Manager) `brew install yarn --without-node`

> **Windows**
>
> * [Download](https://yarnpkg.com/latest.msi) the `.msi`
> * [Choco](https://chocolatey.org/): `choco install yarn`

> **Linux (Ubuntu/Debian)** (See [this page](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) for other distros)
>
> * `curl -o- -L https://yarnpkg.com/install.sh | bash /etc/apt/sources.list.d/yarn.list`

---

### [Brunch](http://brunch.io)

1. `yarn global add brunch` — Installs Brunch Globally
2. `yarn install` — Installs project plugins & dependencies as defined in `package.json`.

---

## Run

* `yarn run start` — watches the project with continuous rebuild using `brunch-auto-reload`. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
* `yarn run build` — builds minified project for production
