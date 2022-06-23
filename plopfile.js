// plopfile.js
module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  //Helpers
  plop.setHelper('upperCase', (txt) => txt.toUpperCase());
  
  //Components
  plop.setGenerator("components", {
    description: "New component for the app",
    prompts: [{
      type: "input",
      name: "name",
      message: "Enter the component name"
    }],
    actions: [{
      type: "addMany",
      destination: "src/components/{{dashCase name}}",
      base: "plop-templates/component",
      templateFiles: `plop-templates/component/*.hbs`, 
    }]
  })

  //Middlewares
  plop.setGenerator("middlewares", {
    description: "New middleware for the app",
    prompts: [{
      type: "input",
      name: "name",
      message: "Enter the name of the middleware"
    }],
    actions: [{
      type: "add",
      path: "src/middlewares/{{dashCase name}}/index.ts",
      templateFile: "plop-templates/middleware.hbs"
    }]
  })


};
