## 1.2.5 (2025-01-01)

### Bug Fix

- correct git user configuration in release workflow ([a4c1e5c](https://github.com/biemch/biem-template-utils/commit/a4c1e5ce8c03b8ec323a2ef29022ac10e9f3ec57))

## 1.2.4 (2024-12-31)

### Bug Fix

- update node engine version to 20.12.2 ([4ee2573](https://github.com/biemch/biem-template-utils/commit/4ee2573990f1b5ffdd6e379eec2eebd7fdc84ec9))

## 1.2.3 (2024-12-30)

### Bug Fix

- eslint rules ([5e4813a](https://github.com/biemch/biem-template-utils/commit/5e4813abe4499535f2a6c26de0297046e29c280e))

## 1.2.2 (2024-12-29)

## 1.2.1 (2024-12-28)

### Bug Fix

- sort imports in vite.config.js ([c61f70d](https://github.com/biemch/biem-template-utils/commit/c61f70d4c72c75cd53148ca969265b41aa0db4f1))
- remove package-lock.json file ([1cad1bc](https://github.com/biemch/biem-template-utils/commit/1cad1bc3213c5fee68ed11a13f9321b97b12f8f9))

## 1.2.0 (2024-12-28)

## 1.1.4 (2024-12-28)

### Feature

- configure nunjucks with autoescape: true to prevent XSS attacks. use safe filter to ensure JSON data is safely injected. ([b5a80b4](https://github.com/biemch/biem-template-utils/commit/b5a80b459ac332fc757bf8e6ab1d3b39b70ad286))

## 1.1.3 (2024-12-28)

### Bug Fix

- update release action parameters for consistency ([2074d6f](https://github.com/biemch/biem-template-utils/commit/2074d6fc9c70f4163db192aeffaa89c8a7db041c))
- update create release action to use elgohr/github-release-action@v5 ([6ee4ed5](https://github.com/biemch/biem-template-utils/commit/6ee4ed5a3dfe3e22df19f536b67701cdedc866e8))

## 1.1.2 (2024-12-28)

### Bug Fix

- update create-release action to version 1.14.0 ([8e85468](https://github.com/biemch/biem-template-utils/commit/8e85468476efc45ff05bb4735600023481e9c424))

## v1.1.1 (2024-12-28)

### Bug Fix

- update github actions workflow to use latest action versions ([aedf931](https://github.com/biemch/biem-template-utils/commit/aedf931989b19d5987dd86e6ea6c551e7f4f23ac))
- update workflows to trigger on release creation and push to master ([9513653](https://github.com/biemch/biem-template-utils/commit/951365372aa7397b49fda75749b7682e659fe31a))

## v1.1.0 (2024-12-28)

### Feature

- add github actions workflow for automated release creation ([3a14445](https://github.com/biemch/biem-template-utils/commit/3a14445b1705a66edbb3bcca1afaa1c2e6d64b77))
- add .npmrc file to configure version tagging ([63f09b9](https://github.com/biemch/biem-template-utils/commit/63f09b96f8329813ddd0e24e9dd36007861b36fe))

### Bug Fix

- trigger release workflow on release creation ([ff943d0](https://github.com/biemch/biem-template-utils/commit/ff943d0fff46444fbaf6e720dc11ce816190daa4))

## 1.0.30 (2024-12-28)

## v1.0.29 (2024-12-28)

### Feature

- add github actions workflow for automated package publishing ([e20dcdb](https://github.com/biemch/biem-template-utils/commit/e20dcdb2ee67f223d7659940334948d5c15a6e6d))

## v1.0.28 (2024-12-28)

### Feature

- update ESLint config and add new plugins for improved import management ([8d747ae](https://github.com/biemch/biem-template-utils/commit/8d747ae4baf9798f4a7288a98042634b8b340b5e))
- add README.md ([d026b2d](https://github.com/biemch/biem-template-utils/commit/d026b2dcd88fba52c54183cb22ba61e22bd987df))
- initial commit ([58a05b8](https://github.com/biemch/biem-template-utils/commit/58a05b830083d097317c974457b1e4effb9b2f60))

### Bug Fix

- remove unnecessary blank lines in index.ts ([251cbf2](https://github.com/biemch/biem-template-utils/commit/251cbf286b24dc0855c1d752bf214bb177ed3a1a))
- refactor imports and update config type in vite plugin ([e963d67](https://github.com/biemch/biem-template-utils/commit/e963d672e2415116ac6d8ab152d36499fc63399b))
- bump version to 1.0.27 in package.json ([dbbb290](https://github.com/biemch/biem-template-utils/commit/dbbb290db62fff4e52cd2a6ced4dcba4ded70683))
- update react and react-dom peer dependencies in package.json ([b2aecfd](https://github.com/biemch/biem-template-utils/commit/b2aecfd94de9e77e4d77eb6d38696a8cba0d112e))
- bump version to 1.0.26 in package.json ([a0cae2b](https://github.com/biemch/biem-template-utils/commit/a0cae2b4f090d89a756aaf82463ba6879cf235c5))
- update repository field format in package.json ([8677b20](https://github.com/biemch/biem-template-utils/commit/8677b20bd6329a420fda0817cf91342f596719fb))
- bump version to 1.0.25 in package.json ([304f1bf](https://github.com/biemch/biem-template-utils/commit/304f1bff3ca4e8aac3bb896f88866e6e96af06c4))
- add prepublishOnly script and format:pkg script to package.json ([6429733](https://github.com/biemch/biem-template-utils/commit/6429733b29590b8e7aad794e2fb33dbaee8ded2f))
- add glob and nunjucks as peer dependencies in package.json ([0b8483d](https://github.com/biemch/biem-template-utils/commit/0b8483d25386b8839ce3a9d4e7d90a1302341e7c))
- add exports field to package.json for improved module resolution ([9766230](https://github.com/biemch/biem-template-utils/commit/976623001124f55811ce49bc3adafb00e227d36c))
- update dependencies ([dce57c0](https://github.com/biemch/biem-template-utils/commit/dce57c0fc51d02bee6a1aaa06b6f183b5c474cf1))
- enhance vite config for better type handling and bundle generation ([c6fc448](https://github.com/biemch/biem-template-utils/commit/c6fc4483e793903e0ad7365569ba9138f83d18ef))
- remove unused export of vite template plugin from index.ts ([c839b83](https://github.com/biemch/biem-template-utils/commit/c839b83328844afa70de782c6c10216c6d5399e1))
- change vite template plugin to default export ([f71b5e6](https://github.com/biemch/biem-template-utils/commit/f71b5e6d3063aeb84e01383e7ab41239657ec4cc))
- change imports to use type imports ([7edb496](https://github.com/biemch/biem-template-utils/commit/7edb4963664e2c6ee1ba9b70d418d568185e7429))
- update tsconfig to include all typescript files ([ce90df8](https://github.com/biemch/biem-template-utils/commit/ce90df8cb4e1e6c0b5b3e2e72493bea7bc75b708))
- update eslint config to ignore dist directory ([3124836](https://github.com/biemch/biem-template-utils/commit/31248364537e7804aa9f9834fd5cca27630b9403))
