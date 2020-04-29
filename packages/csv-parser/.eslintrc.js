const rootConfig = require('../../.eslintrc')

module.exports = {
  extends: "react-app",
  rules: {
    ...rootConfig.rules
  }  
}
