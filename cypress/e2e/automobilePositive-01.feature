#utf-8
#language: pt


Funcionalidade: automobilePositive-01 - Validação positiva dos formulários

  Cenário: Preenchimento completo dos formulários para automóvel
    Dado que acesso o portal Tricentis
    Quando acesso a categoria Automobile
    E envio os dados do formulário Enter Vehicle Data
    E envio os dados do formulário Enter Insurant Data
    E envio os dados do formulário Enter Product Data
    E envio os dados da tabela Select Price Option
    E envio os dados da tabela Send Quote
    Então deve aparecer uma mensagem de confirmação de envio


