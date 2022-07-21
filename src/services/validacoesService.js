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
}

export default validacoesService;