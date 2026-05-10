const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '88q97n',   // <---- ЭТУ СТРОКУ ДОБАВИТЬ!
  e2e: {
    setupNodeEvents(on, config) {
      // здесь могут быть настройки
    },
  },
});