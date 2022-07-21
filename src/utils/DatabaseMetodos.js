import { Database } from "../infra/Database.js";
import randomNum from "./randomNum.js";


class DatabaseMetodos {
  static listarTodoBanco() {
    return Database;
  }

  static listarTodosUsuarios() {
    return Database.Usuarios;
  }

  static inserirUsuario(usuario) {
    Database.Usuarios = [...Database.Usuarios, usuario];
    return Database.Usuarios;
  }

  static chooseTip(){
    return Database.Tips[randomNum()];
  }

  static addTip(tip){
    Database.Tips = [...Database.Tips, tip];
    return Database.Tips;
  }



}

export default DatabaseMetodos;
