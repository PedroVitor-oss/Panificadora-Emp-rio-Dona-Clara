# 🥖 Panificadora & Empório Dona Clara

Protótipo de solução digital desenvolvido para o **Estudo de Caso 1 — Panificadora & Empório Dona Clara**, da disciplina **Design Profissional — Produção de Portfólio & Desenvolvimento Empresarial**.

## 📌 Sobre o projeto

A Panificadora & Empório Dona Clara é uma padaria artesanal de bairro que tradicionalmente realiza seus atendimentos presencialmente. O crescimento das encomendas e a mudança na rotina dos moradores criaram problemas relacionados a filas, disponibilidade dos produtos e organização dos pedidos.

A proposta deste projeto é criar uma experiência digital simples para permitir que o cliente faça uma solicitação de produto por meio de uma interface semelhante a uma conversa de WhatsApp, enquanto a equipe acompanha os pedidos em uma lista de produção/entrega.

A solução foi pensada como um **protótipo funcional de baixa complexidade**, priorizando facilidade de uso, demonstração do fluxo e baixo custo de implementação.

## 🎯 Problema identificado

De acordo com o estudo de caso, a empresa enfrenta principalmente:

- dependência do atendimento presencial;
- pedidos registrados manualmente;
- risco de produtos esgotados quando o cliente chega à loja;
- erros em encomendas;
- atrasos e trocas de sabores;
- perda de vendas para concorrentes com presença digital;
- dificuldade para alcançar novos moradores e empresas interessadas em coffee breaks.

O projeto procura atacar diretamente a necessidade de **organizar a solicitação de produtos e melhorar a experiência do cliente fora do balcão físico**.

## 💡 Solução proposta

Foi escolhido o desenvolvimento de um **web app/protótipo web**, em vez de um aplicativo nativo ou de um sistema administrativo complexo.

A escolha se deve a três fatores:

1. **Acessibilidade:** o cliente pode acessar uma página pelo navegador sem instalar um aplicativo.
2. **Baixa barreira de adoção:** a interface utiliza uma lógica semelhante a uma conversa de WhatsApp, algo familiar para usuários de diferentes idades.
3. **Simplicidade:** para o cenário apresentado, um protótipo web é suficiente para demonstrar o fluxo principal da solução sem exigir uma infraestrutura de alto custo.

## 🧩 Fluxo principal

### 1. Cliente

O usuário acessa a interface da Dona Clara e abre o atendimento.

O protótipo apresenta opções de produtos:

- Pão de queijo;
- Pão francês;
- Café da casa.

O usuário informa o número correspondente ao produto.

### 2. Confirmação

Após a escolha, o protótipo apresenta uma etapa simulada de pagamento via Pix.

> **Observação:** o pagamento é apenas simulado para fins de protótipo. Não existe integração real com banco, Pix ou gateway de pagamento.

### 3. Preparação

Depois da confirmação simulada, o sistema informa que o produto está sendo preparado e adiciona o pedido à lista de gestão.

### 4. Gestão do pedido

A interface administrativa apresenta os pedidos realizados e permite marcar um pedido como entregue por meio de um checkbox visual.

Ao marcar o pedido, o protótipo informa que o produto está pronto para entrega.

## 🖥️ Funcionalidades implementadas

- Interface responsiva para navegador;
- Tela de atendimento simulando uma conversa;
- Abertura e fechamento do painel de atendimento;
- Seleção de produto por comando numérico;
- Respostas automáticas para opções válidas;
- Tratamento de opção de produto inexistente;
- Simulação de pagamento via Pix;
- Simulação de preparação do pedido;
- Inclusão dinâmica do pedido na lista de gestão;
- Identificação do cliente no pedido;
- Controle visual de pedido entregue;
- Rolagem automática da conversa;
- Feedback visual de interação;
- Layout adaptado para telas menores.

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura simples baseada em arquivos estáticos:

```text
auto_padaria/
├── index.html
├── css/
│   ├── style.css
│   └── zap.css
├── js/
│   └── main.js
├── img/
└── .gitignore
```

### Tecnologias

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura das interfaces |
| CSS3 | Layout, responsividade e identidade visual |
| JavaScript | Interações e regras do protótipo |
| Git/GitHub | Versionamento e entrega |

Não há backend, banco de dados ou API externa nesta versão. Os dados são manipulados apenas em memória durante a execução da página.

## 🎨 Decisões de interface

A interface administrativa utiliza tons terrosos e claros para aproximar o sistema da identidade visual esperada para uma panificadora artesanal.

A tela de atendimento utiliza uma linguagem visual inspirada em aplicativos de mensagens para reduzir a curva de aprendizado do cliente.

O painel de pedidos prioriza:

- nome do produto;
- identificação do cliente;
- ação rápida para marcar como entregue.

A intenção é que um atendente consiga compreender a situação do pedido rapidamente sem precisar navegar por diversas telas.

## 📱 Responsividade

O CSS possui regras específicas para telas menores, reduzindo:

- tamanho dos textos;
- espaçamento dos cards;
- tamanho do indicador de entrega;
- dimensões gerais dos componentes.

Dessa forma, a proposta pode ser demonstrada tanto em computador quanto em dispositivos móveis.

## ▶️ Como executar

Por ser um projeto estático, não é necessário instalar dependências.

### Opção 1 — Abrir diretamente

Abra o arquivo:

```text
index.html
```

em um navegador moderno.

### Opção 2 — VS Code + Live Server

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**, caso ainda não possua.
3. Clique com o botão direito em `index.html`.
4. Selecione **Open with Live Server**.

## 🧪 Como testar o protótipo

1. Abra o projeto.
2. Clique no botão **ZAP**.
3. Digite `1`, `2` ou `3`.
4. Observe a resposta automática.
5. O sistema simulará o pagamento e o preparo.
6. Após alguns segundos, o produto aparecerá na lista de gestão.
7. Marque o pedido como entregue.
8. Observe a mensagem de confirmação.

Também é possível testar uma entrada inválida, como `4`, para visualizar o tratamento de produto inexistente.

## 🔐 Segurança

O projeto não utiliza credenciais, tokens ou chaves de API.

O arquivo `.gitignore` deve ser mantido configurado para impedir o versionamento de arquivos sensíveis, como `.env`.

Como esta versão não possui backend nem autenticação, não existem credenciais reais de pagamento ou banco de dados no projeto.

## 🚧 Limitações do protótipo

Esta entrega tem como objetivo demonstrar a solução e o fluxo de uso. Para transformar o protótipo em um produto real, seriam necessários recursos adicionais, como:

- backend;
- banco de dados;
- autenticação de funcionários;
- cadastro de produtos;
- controle de estoque;
- pedidos reais;
- integração com Pix;
- persistência dos pedidos;
- notificações;
- gestão de encomendas maiores;
- controle de horários de retirada;
- histórico de pedidos;
- proteção contra manipulação de dados no navegador.

Esses itens não fazem parte da implementação atual e, portanto, não são apresentados como funcionalidades existentes.

## 📈 Evolução planejada

Uma possível evolução seria separar o sistema em três áreas:

```text
Cliente
   ↓
Pedido / Pagamento
   ↓
Backend
   ↓
Painel da Padaria
   ↓
Produção / Entrega
```

Em uma versão futura, o sistema poderia utilizar uma API REST e banco de dados para armazenar os pedidos permanentemente.

Também seria possível adicionar um catálogo completo, encomendas de bolos e tábuas de frios, pedidos para coffee breaks e notificações de status.

## 📚 Relação com o estudo de caso

A solução foi construída com base nos problemas apresentados no estudo de caso da Panificadora & Empório Dona Clara: dependência do atendimento presencial, registros manuais, dificuldades nas encomendas e necessidade de um canal digital para atender os clientes. 

O objetivo principal do projeto é demonstrar como uma solução digital simples pode reduzir a dependência do balcão e organizar o fluxo inicial de pedidos.

## 👨‍💻 Autor

**Pedro Vitor**

Projeto acadêmico desenvolvido para a disciplina **Design Profissional — Produção de Portfólio & Desenvolvimento Empresarial**.

---

## 📄 Licença

Este projeto utiliza a licença MIT. Consulte o arquivo `LICENSE` para os termos de uso.
