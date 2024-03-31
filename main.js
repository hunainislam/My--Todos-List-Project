import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your todo?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do yoy want to add more Todo?",
            default: "false",
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addMore;
    console.log(todos);
}
