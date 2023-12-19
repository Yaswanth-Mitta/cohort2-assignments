// Here I am trying to read the data form files and update the data to the files

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());

// let todos = [
//   {
//     title: "Laptop charge",
//     desc: "Where power comes put the pc on charge",
//   },
// ];

let tod;

app.get("/todos", async (req, res) => {
  try {
      const todos = await fs.readFile("todos.jsom", "utf-8", (err, data) => {
          tod = todos;
      res.status(200).json(todos);
    });
  } catch {
    res.status(404).json({ error: "Todos doesnt exit" });
  }
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  if (id < tod.length) {
    res.status(200).json(tod[id]);
  } else {
    res.status(404).json({ error: "Out of the bounds request" });
  }
});

app.post("/todos", async (req, res) => {
  try {
    // Extract the new todo data from the request body
    const newTodo = req.body;

    // Generate a unique ID for the new todo
    const id = todos.length + 1;

    // Add the new todo to the todos array
      newTodo.id = id;
      await fs.writeFile("todos.json" , )
    todos.push(newTodo);

    // Respond with the ID of the created todo
    res.status(201).json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/todos/:id", (req, res) => {
  try {
    const changee = req.body;
    const id = req.params.id;
    todos[id] = changee;
    res.status(200).json(todos);
  } catch {
    res.status(500).json({ error: "Internal servor errror" });
  }
});

app.delete("/todos/:id", (req, res) => {
  try {
    const id = req.params.id;
    todos.splice(id, 1);
    res.status(200).json(todos);
  } catch {
    res.status(500).json({ errot: "Unable to delete at specified indec" });
  }
});

app.listen(3000);
