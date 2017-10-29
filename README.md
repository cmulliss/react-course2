yarn install

yarn global add babel-cli

yarn init

yarn add babel-preset-react babel-preset-env

babel src/app.js --out-file=public/app.js --presets=env,react --watch

live-server public

