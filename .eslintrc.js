module.exports = {
    root: true,
    env: {
        "node": true,
        "browser": true,
        "es6": true
    },
    globals: {
        "cordova": true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        "no-console": 'off',
        "no-debugger": 'off',
        "indent": [2, 4],
        "comma-dangle":"off",
        "max-len":"off",
        "no-param-reassign":"off",
        "no-plusplus": "off",
        "linebreak-style": "off"
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
