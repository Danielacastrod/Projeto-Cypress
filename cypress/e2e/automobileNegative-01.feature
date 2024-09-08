#utf-8
#language: pt

Funcionalidade: automobileNegative-01 - Validação negativa dos formulários

  Cenário: Preenchimento incompleto dos formulários para automóvel
    Dado que acesso o portal Tricentis
    Quando acesso a categoria Automobile
    E envio os dados incompletos do formulário Enter Vehicle Data
    E envio os dados incompletos do formulário Enter Insurant Data
    E envio os dados incompletos do formulário Enter Product Data
    Então deve aparecer uma mensagem pedindo para completar os passos anteriores