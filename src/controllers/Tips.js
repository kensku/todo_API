import TipModel from "../models/TipModel.js";
import validacoesService from "../services/validacoesService.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Tips{

    static rotas(app){

    app.get("/tips", (req, res) => {
        
        const response = DatabaseMetodos.chooseTip()
        res.status(200).json(response);
    });

    app.post("tips", (req, res) => {
        const isValid = validacoesService.validaTip(req.body.tipTtle)

        if(isValid){
            const tip = new TipModel(...Object.values(req.body))
            const response = DatabaseMetodos.addTip(tip)

            res.status(201).json(response)
        }else{
            res.status(400).send(`Error`);
        }
        })
    }
}

export default Tips;