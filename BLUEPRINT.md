# Trading Journal Pro - Blueprint

Versão: 1.1
Data: 2026-06-28

## 1. Visão do projeto
O Trading Journal Pro é um dashboard web single-page para organizar e analisar a performance operacional de trades de forma rápida, visual e sem backend. O objetivo é concentrar em uma única tela os principais indicadores, o histórico de trades e os dados de performance para tomada de decisão.

## 2. Objetivo principal
Permitir que o usuário:
- cadastre trades em poucos segundos;
- visualize o desempenho diário, semanal, mensal e total;
- acompanhe o comportamento do capital ao longo do tempo;
- identifique padrões por conta, setup, mercado, ativo e resultado;
- mantenha os dados salvos localmente no navegador.

## 3. Princípios de produto
- Simplicidade: interface direta, sem menus complexos;
- Velocidade: cadastro e consulta rápidos;
- Visualização: gráficos, KPIs e cores em vez de textos excessivos;
- Centralização: tudo em uma única página;
- Automação: métricas calculadas automaticamente.

## 4. Stack tecnológica
- HTML5 para estrutura;
- CSS3 para visual e responsividade;
- JavaScript puro para lógica da aplicação;
- Chart.js para gráficos;
- LocalStorage para persistência local;
- Sem backend, sem banco SQL, sem frameworks.

## 5. Estrutura de arquivos
- index.html: estrutura principal da interface;
- style.css: estilo visual, layout e componentes;
- script.js: lógica principal do app, estado, renderização, cálculos e interação;
- app.js: arquivo complementar ou futuro módulo de organização;
- BLUEPRINT.md: documentação do projeto;
- README.md: instruções gerais.

## 6. Estrutura da interface
A página deve seguir este fluxo:
1. Header
2. KPIs
3. Resumo mensal
4. Calendário
5. Curva de capital
6. Performance
7. Formulário de cadastro de trade
8. Coach
9. Histórico
10. Prop Firm

## 7. Módulos principais
### 7.1 Header
Exibir:
- nome do sistema;
- data atual;
- hora atual;
- ações de backup/importação (futuro).

### 7.2 KPIs
Exibir métricas calculadas automaticamente:
- PNL Hoje
- PNL Semana
- PNL Mês
- PNL Total
- Win Rate
- Payoff
- Profit Factor
- Drawdown

### 7.3 Calendário
Representar os dias com trades cadastrados e mostrar resumos rápidos como:
- valor do dia;
- quantidade de trades;
- indicação positiva ou negativa.

### 7.4 Curva de capital
Exibir evolução do capital ao longo do tempo com gráfico.

### 7.5 Performance
Mostrar comparativos por métrica, como:
- capital;
- win rate;
- payoff;
- profit factor;
- drawdown.

### 7.6 Formulário de trade
Campos principais:
- data;
- conta;
- mercado;
- ativo;
- setup;
- lado;
- contratos;
- resultado;
- observações.

### 7.7 Coach
Seção destinada a insights, alertas ou orientações operacionais com base nos dados do usuário.

### 7.8 Histórico
Listar os trades cadastrados com filtro e visualização organizada.

## 8. Modelo de dados
Cada trade deve possuir, no mínimo, os seguintes campos:
- id
- date
- account
- market
- asset
- setup
- side
- contracts
- result
- notes

## 9. Regras de negócio
- O sistema não executa operações nem gera sinais;
- O sistema apenas organiza e apresenta informações;
- Todos os dados devem ser persistidos localmente;
- Métricas devem ser recalculadas automaticamente após cada cadastro ou remoção;
- A experiência deve funcionar em uma única tela com rolagem vertical.

## 10. Fluxo de uso
1. O usuário cadastra um trade;
2. Os dados são salvos no LocalStorage;
3. Os KPIs, resumo mensal e gráficos são recalculados;
4. A interface é atualizada automaticamente;
5. O usuário consulta a performance a partir do calendário, gráficos e histórico.

## 11. Próximos passos sugeridos
- implementar cadastro e remoção de trades de forma completa;
- calcular corretamente win rate, payoff, profit factor e drawdown;
- renderizar o calendário com resumo diário;
- exibir histórico com filtros;
- adicionar exportação/importação de backup;
- criar uma camada de coach com insights mais úteis.

OFF

Cores:

🟢 lucro

🔴 prejuízo

⚪ OFF

Ao clicar em um dia:

Seleciona aquele dia.

Atualiza o dashboard.

Abre o formulário já preenchido.

10. CURVA DE CAPITAL

Sempre mostrará a evolução financeira.

Filtros:

Diário

Semanal

Mensal

Anual

11. PERFORMANCE

Um único gráfico.

Com seletor.

Exemplo:

Capital

Win Rate

Health

Payoff

Profit Factor

Drawdown

Setup

Conta

O gráfico muda conforme a seleção.

12. CADASTRO DE TRADE

Campos mínimos:

Data

Conta

Mercado

Ativo

Setup

Compra/Venda

Contratos

Resultado $

Resultado Pontos

Resultado R

Observação

Botão Salvar

Nada além disso.

13. HISTÓRICO

Tabela.

Colunas:

Data

Conta

Mercado

Setup

Resultado

Editar

Excluir

Filtros:

Data

Conta

Mercado

Setup

14. COACH

Nunca dará sinais.

Apenas mostrará estatísticas.

Exemplo:

Maior lucro ocorreu no setup ORB.

Seu Win Rate aumentou.

Seu melhor dia continua sendo terça-feira.

Seu maior drawdown foi em junho.

15. PROP FIRM

Mostrar apenas informações importantes.

Exemplo:

Meta

Trailing Drawdown

Dias Operados

Dias Restantes

Consistência

Status

16. LOCAL STORAGE

Todos os dados ficarão apenas no navegador.

Não haverá login.

17. BACKUP

Botão:

Exportar JSON

Importar JSON

Assim você nunca perde seus dados.

18. DESIGN

Tema escuro.

Visual inspirado em Bloomberg Terminal, TradingView e painéis profissionais.

Muito espaço.

Poucas cores.

Verde somente para lucro.

Vermelho somente para prejuízo.

Azul para ações.

Cinza para informações neutras.

19. REGRAS DE DESENVOLVIMENTO

Nunca escrever código duplicado.

Cada função deve ter apenas uma responsabilidade.

Nome das funções em português.

Comentários apenas quando realmente necessários.

Código simples.

Código legível.

20. ROADMAP
Sprint 1 (MVP)
Estrutura HTML
Layout CSS
Calendário
Cadastro
LocalStorage
Histórico
KPIs básicos

Objetivo: sistema utilizável.

Sprint 2
Gráficos
Resumo Mensal
Filtros
Estatísticas

Objetivo: análise completa.

Sprint 3
Health Score
FTAR
Coach
Prop Firm
Backup JSON

Objetivo: versão 1.0.

21. O QUE NÃO FAREMOS

Para manter o projeto simples e concluí-lo rapidamente, ficam fora da versão 1.0:

❌ Login de usuários
❌ Banco de dados
❌ Backend
❌ API de corretoras
❌ Atualização em tempo real
❌ Integração com plataformas de trading
❌ Inteligência artificial
❌ Sistema multiusuário
❌ Várias páginas
❌ Frameworks JavaScript

Esses itens só serão considerados em versões futuras, se realmente fizerem sentido.