# Trading Journal Pro - Blueprint Atualizado

Versão: 1.2
Data: 2026-06-28

## 1. Visão atual do projeto
Trading Journal Pro é um dashboard web single-page focado em organizar e analisar a performance de trades com simplicidade e velocidade. A aplicação deve ser um indicador visual, sem backend e com todos os dados gravados localmente no navegador.

## 2. Objetivo do produto
Entregar um painel único que permita:
- cadastrar trades rapidamente;
- visualizar os principais KPIs de performance;
- navegar pelo histórico diário via calendário;
- acompanhar a evolução do capital;
- consultar resultados por conta, setup e período;
- manter os dados persistidos em LocalStorage.

## 3. Estado atual da implementação
### 3.1 Arquivos e estrutura existentes
- `index.html`: interface completa com header, KPIs, calendário, resumo mensal, gráficos, cadastro de trade, coach, histórico e seção Prop Firm.
- `style.css`: importa módulos de estilo organizados em `css/` (`base.css`, `layout.css`, `cards.css`, `calendar.css`, `form.css`, `table.css`, `charts.css`, `responsive.css`).
- `js/app.js`: módulo principal de inicialização e refresh.
- `js/modules/`: arquitetura modular com módulos independentes.
- `BLUEPRINT.md`: documento de referência do projeto.
- `PROJECT_STATUS.md`, `ROADMAP.md`, `ARCHITECTURE.md`, `MODULES.md`: documentação e status do projeto.

### 3.2 Principais módulos implementados
- `js/modules/state.js`: armazenamento central do estado da aplicação.
- `js/modules/storage.js`: persistência em LocalStorage, import/export JSON e limpeza de dados.
- `js/modules/clock.js`: atualização automática de data e hora.
- `js/modules/trade/`: lógica de trades com CRUD, validação e filtros.
- `js/modules/events/index.js`: barramento de eventos entre módulos.
- `js/modules/calendar/`: renderização do calendário, navegação entre meses e seleção de dias.
- `js/modules/app.js`: fluxo de inicialização, eventos globais e refresh.

### 3.3 Módulos presentes como esqueleto
Os seguintes diretórios/módulos existem, mas estão sem implementação funcional no momento:
- `js/modules/form/`
- `js/modules/history/`
- `js/modules/kpi/`
- `js/modules/summary/`
- `js/modules/charts/`
- `js/modules/coach/`
- `js/modules/propFirm/`

## 4. Interface atual
### 4.1 Header
- `Trading Journal Pro`
- `Performance Dashboard`
- `#currentDate`
- `#currentTime`

### 4.2 KPIs
Cartões exibindo:
- `PNL Hoje`
- `PNL Semana`
- `PNL Mês`
- `PNL Total`
- `Win Rate`
- `Payoff`
- `Profit Factor`
- `Drawdown`

### 4.3 Calendário
- Navegação entre meses com `#prevMonth` e `#nextMonth`
- Grid de dias com `#calendar`
- Labels dos dias da semana
- Datas renderizadas com resultado do dia e número de trades

### 4.4 Resumo Mensal
- Dias Positivos
- Dias Negativos
- Dias OFF
- Quantidade de Trades
- Maior Gain
- Maior Loss

### 4.5 Gráficos
- `Curva de Capital` com `#capitalChart`
- `Performance` com seletor `#performanceFilter` e `#performanceChart`

### 4.6 Formulário de trade
Campos atuais:
- data (`#tradeDate`)
- conta (`#account`)
- mercado (`#market`)
- ativo (`#asset`)
- setup (`#setup`)
- compra/venda (`#side`)
- contratos (`#contracts`)
- resultado (`#result`)
- observações (`#notes`)
- botão `Salvar Trade`

### 4.7 Coach
- painel `#coachPanel` com mensagem padrão

### 4.8 Histórico
- tabela com cabeçalho `Data`, `Conta`, `Mercado`, `Ativo`, `Setup`, `Resultado`, `Ações`
- corpo da tabela em `#historyTable`

### 4.9 Prop Firm
- painel `#propFirmPanel` com mensagem padrão

## 5. Arquitetura técnica
### 5.1 Fluxo de inicialização
- `App.init()` é chamado em `DOMContentLoaded`
- `Storage.load()` carrega dados do LocalStorage
- `Clock.start()` dispara a atualização de data/hora a cada segundo
- `Form.init()` inicializa o módulo de formulário
- `App.events()` registra listeners globais de trade
- `App.refresh()` atualiza a interface

### 5.2 Gerenciamento de estado
`State` mantém:
- `trades`
- `selectedDate`
- `currentMonth`
- `currentYear`
- `performanceView`
- `historyFilter`
- `editingTradeId`
- `propFirm` (configuração e estado da conta Prop Firm)

### 5.3 LocalStorage
Chave: `TradingJournalPro`
Dados salvos:
- trades
- selectedDate
- currentMonth
- currentYear
- performanceView

Funcionalidades:
- `load()`
- `save()`
- `clear()`
- `exportData()`
- `importData(json)`

### 5.4 Eventos
`Events.emit(eventName, detail)` e `Events.on(eventName, callback)` centralizam a comunicação entre módulos.

Eventos usados até agora:
- `trade:added`
- `trade:updated`
- `trade:removed`
- `trade:duplicated`
- `calendar:daySelected`
- `calendar:monthChanged`

### 5.5 Trade CRUD e filtros
`TradeCRUD` implementa:
- `add(trade)`
- `update(id, data)`
- `remove(id)`
- `duplicate(id)`
- `sort()`

Trade model atual contém:
- `id`
- `createdAt`
- `updatedAt`
- `date`
- `account`
- `market`
- `asset`
- `setup`
- `side`
- `contracts`
- `result`
- `notes`

Filtros implementados:
- `getAll()`
- `getById(id)`
- `getByDate(date)`
- `getByMonth(month, year)`
- `getByYear(year)`
- `getByAccount(account)`
- `getByMarket(market)`
- `getByAsset(asset)`
- `getBySetup(setup)`
- `getWinningTrades()`
- `getLosingTrades()`

### 5.6 Calendário
O calendário atual renderiza:
- dias do mês
- espaços vazios antes do primeiro dia
- cada dia com número, resultado e número de trades
- indicação visual de dias positivos, negativos e OFF
- seleção de dia com clique
- navegação entre meses

### 5.7 Clock
- atualiza `#currentDate` e `#currentTime` a cada segundo
- usa `toLocaleDateString("pt-BR")` e `toLocaleTimeString("pt-BR")`

## 6. Status atual de desenvolvimento
### 6.1 Implementado
- `State` centralizado
- `Storage` com persistência e import/export
- `Clock` funcionando
- `TradeCRUD` com validação, criação, edição, remoção e duplicação
- filtros de trade robustos
- calendário renderizado e navegável
- arquitetura modular com diretórios de módulo
- eventos globais para refresh

### 6.2 Em andamento / pendente
- `App.refresh()` ainda não chama todos os módulos previstos
- `Calendar` não está completamente integrado em `app.js`
- `Form` ainda não possui código de binding e submissão
- `History` não está renderizando dados na tabela
- `KPI`, `Summary`, `Charts`, `Coach`, `Prop Firm` ainda não possuem implementações ativas
- validação de formulário e serialização de dados no módulo `form/` ainda estão vazias
- não há UI de import/export de backup no HTML atual

## 7. Ajustes atuais do roadmap
### Sprint 1 — Fundação
Status: em progresso
- `State` ✅
- `Storage` ✅
- `Utils` (não identificado no corpo do módulo, mas há `js/modules/utils.js`) ✅
- `Trade` ✅
- `Clock` ✅
- `Form` ⬜
- `Refresh` parcial ✅

### Sprint 2 — Dashboard Base
Status: iniciado parcialmente
- `History` ⬜
- `Calendar` ✅
- `KPI` ⬜
- `Summary` ⬜
- `Charts` ⬜

### Sprint 3 — Inteligência
Status: não iniciado
- `Coach` ⬜
- `PropFirm` ⬜

### Sprint 4 — Qualidade
Status: não iniciado
- `Editar trade` ⬜
- `Filtros` ⬜
- `Backup JSON` ⬜
- `Importação` ⬜
- `Responsividade` ⬜
- `Performance` ⬜

### Sprint 5 — Versão 1.0
Status: não iniciado
- Todos os KPIs funcionando ⬜
- Calendário completo ⬜
- Gráficos ⬜
- Coach ⬜
- Prop Firm ⬜
- Backup ⬜
- Testes finais ⬜
- Código limpo ⬜
- Documentação completa ⬜

## 8. Próximos passos recomendados
1. Concluir `Form` com binding e submissão de trade.
2. Implementar `History.render()` e popular `#historyTable`.
3. Integrar o calendário ao `App.refresh()`.
4. Criar `KPI.render()` e atualizar indicadores a partir dos trades.
5. Implementar `Summary.render()` com métricas mensais.
6. Desenvolver gráficos em `Charts` usando Chart.js.
7. Adicionar `Coach` com insights simples.
8. Construir painel `Prop Firm` com resultados importantes.
9. Adicionar botões de export/import JSON no header.
10. Ajustar `style.css` para garantir responsividade e consistência visual.

## 9. Observações arquiteturais
- A aplicação está organizada em módulos isolados por responsabilidade.
- O padrão atual separa `State`, `Storage`, `Events`, `Trade`, `Calendar`, `Clock` e `App`.
- Os módulos de UI ainda precisam ser conectados ao ciclo de refresh.
- O `LocalStorage` guarda todo o estado relevante, permitindo persistência entre sessões.

## 10. Regras de desenvolvimento mantidas
- código simples e legível;
- funções com responsabilidade única;
- nomes de funções em português (quando aplicável);
- evitar duplicação;
- preferir módulos claros e separados.

## 11. O que não está no escopo desta versão 1.0
- login de usuários
- backend
- banco de dados externo
- integração com corretoras
- atualização em tempo real por API
- múltiplas páginas
- frameworks JavaScript externos
- inteligência artificial de signals

---

> Este blueprint reflete o estado atual do projeto baseado no código existente em `index.html`, `js/app.js`, `js/modules/`, `style.css` e na documentação de status. Ele mostra o que já está pronto, o que está parcial e o que ainda falta integrar.