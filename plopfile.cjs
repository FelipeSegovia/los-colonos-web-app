const plop_library = (plop) => {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "What type of component do you want to create?",
        choices: ["Atom", "Molecule", "Organism", "Template", "Page"],
      },
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/atomic/{{camelCase type}}s/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "plop/templates/components/component.hbs",
      },
      {
        type: "add",
        path: "src/components/atomic/{{camelCase type}}s/{{properCase name}}/index.tsx",
        templateFile: "plop/templates/components/index.hbs",
      },
      {
        type: "add",
        path: "src/components/atomic/{{camelCase type}}s/{{properCase name}}/{{properCase name}}.test.tsx",
        templateFile: "plop/templates/components/test.hbs",
      },
      {
        type: "add",
        path: "src/components/atomic/{{camelCase type}}s/{{properCase name}}/{{properCase name}}.scss",
        templateFile: "plop/templates/components/scss.hbs",
      },
    ],
  });
};

module.exports = plop_library;
