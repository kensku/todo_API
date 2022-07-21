import UsuarioModel from "../models/UsuarioModel.js";
import validacoesService from "../services/validacoesService.js";
import Validacoes from "../services/validacoesService.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Usuarios {
  static rotas(app) {
    app.get("/usuarios", (req, res) => {
      const response = DatabaseMetodos.listarTodosUsuarios();
      res.status(200).json(response);
    });

    app.post("/usuarios", (req, res) => {
      const isValid = validacoesService.validaNome(req.body.nome);

      if (isValid) {
        const usuario = new UsuarioModel(...Object.values(req.body));
        const response = DatabaseMetodos.inserirUsuario(usuario);
        res.status(201).json(response);
      }else{
        res.status(400).send("Erro")
      }
      const body = req.body;
      console.log(body);
    });
  }
}
export default Usuarios;
