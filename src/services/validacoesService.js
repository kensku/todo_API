class validacoesService{
    static validaNome(nome){
        return nome.length >= 3;
    }
    static validaEmail(email){
        return true;
    }
    static validaTelefone(telefone){
        return true;
    }

    static validaTip(tipTitle){

        return tipTitle.length >= 5;
    }
}

export default validacoesService;