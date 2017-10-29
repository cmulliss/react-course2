- yarn install
- yarn global add babel-cli
- yarn init
- yarn add babel-preset-react babel-preset-env
- babel src/app.js --out-file=public/app.js --presets=env,react --watch
- live-server public

##ES6
- use const by default, or let if need to reassing
- working with let andf const variables are block level scoped
- all arrow functions are anonymous
- arrow function __expression syntax__ allows us to create great things
- arguments object no longer bound with arrow functions
- this keyword no longer bound with arrow functions
- 



##Eslint
- sourcecode here:
https://mead.io/eslint/?utm_source=udemy&utm_campaign=eslint&utm_content=educational&utm_campaign=2017-10-23&utm_source=email-sendgrid&utm_term=7231684&utm_medium=1286908

- can test setup etc at: eslint.org/demo
- - install globally using yarn or npm
- npm install -g eslint
- or
- yarn glocal add eslint
- eslint -v to test
- create .eslintrc in root of directory, will be json file add rules
- install eslint locally 
- sudo npm install --save-dev eslint
- install plugin, ESLint, Dirk Baeumer, look fo rmost popular
- will use local version
## Third party set of rules
- airbnb 
- Google for 'airbnb javascript repository'
- can find their github repo
- look under packages for their eslint config files
- there are 2, base (only js) and other with support for React
- use command listed there
- npm init (to create package.json)
- then install plus dependencies, peer dependencies
- npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-ally
- failed so run
- npm info "eslint-config-airbnb@latest" peerDependencies
- gives:
```javascript
- { eslint: '^4.9.0',
  'eslint-plugin-import': '^2.7.0',
  'eslint-plugin-jsx-a11y': '^6.0.2',
  'eslint-plugin-react': '^7.4.0' }
  ```
  - gives a command like:
  - npm install --save-dev eslint-config-airbnb eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  - sudo npm install --save-dev eslint-config-airbnb eslint@^4.9.0 eslint-plugin-jsx-a11y@^6.0.2 eslint-plugin-import@^2.7.0 eslint-plugin-react@^7.4.0
  - now in .eslintrc swap out 'recommended' for airbnb
  - oops, getting:
  - Cannot find module 'eslint-config-airbnb' Referenced from: ../.eslintrc
  - try:
  - npm install --save eslint-config-airbnb
  - add to rules:
  ```javascript
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": [4, 0],
  ```
  - /Users/cherry/Documents/repos/react-course2/indecison-app/.eslintrc: Configuration for rule "react/jsx-indent" is invalid: Severity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '4')
  - so need to change this to 0
  - 
  

