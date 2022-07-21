import TodoModel from "../models/TodoModel.js";

class Todo {
  static rotas(app) {
    app.get("/todo", (req, res) => {
      const tarefa = new TodoModel(
        "Rodape",
        "Rodape do side",
        "5 dias",
        "baixa"
      );

      res.send(tarefa);
    });
  }
}

export default Todo;
