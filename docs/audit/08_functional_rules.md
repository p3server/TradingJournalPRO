=================================================

08 | REGRAS FUNCIONAIS

Fonte: código do projeto, sem interpretações adicionais.

=================================================

MÓDULO: App

- Ao carregar o DOM, `App.init()` chama `Storage.load()`, `Clock.start()`, inicializa Form, Calendar, History, KPI, Summary, Charts, Coach e PropFirm.
- `App.refresh()` chama `Calendar.refresh()`, `History.refresh()`, `KPI.refresh()`, `Summary.refresh()`, `Charts.refresh()`, `Coach.refresh()` e `PropFirm.refresh()`.
- `App.registerEvents()` adiciona listeners de DOM para `trade:added`, `trade:updated`, `trade:removed` e `trade:duplicated`.
- Quando qualquer um desses eventos ocorre, o `App` chama `this.refresh()`.

=================================================

MÓDULO: Storage

- `Storage.load()` lê `localStorage` em `TradingJournalPro`, faz `JSON.parse` e, se presente, atualiza `State` com `trades`, `selectedDate`, `currentMonth`, `currentYear` e `performanceView`.
- `Storage.save()` grava `JSON.stringify(State.get())` em `localStorage["TradingJournalPro"]`.
- `Storage.clear()` remove a chave `TradingJournalPro` de `localStorage`.
- `Storage.exportData()` retorna `JSON.stringify(State.get(), null, 2)`.
- `Storage.importData(json)` faz `JSON.parse(json)`, atualiza `State` com `trades`, `selectedDate`, `currentMonth`, `currentYear` e `performanceView`, chama `Storage.save()` e retorna `true` em caso de sucesso ou `false` em caso de erro.

=================================================

MÓDULO: Events

- `Events.emit(eventName, detail)` dispara `document.dispatchEvent(new CustomEvent(eventName, { detail }))`.
- `Events.on(eventName, callback)` adiciona um listener DOM com `document.addEventListener(eventName, callback)`.
- `Events.off(eventName, callback)` remove um listener DOM com `document.removeEventListener(eventName, callback)`.

=================================================

MÓDULO: State

- O estado global está em `State.data`, incluindo `trades`, `selectedDate`, `currentMonth`, `currentYear`, `performanceView`, `historyFilter`, `editingTradeId` e `propFirm`.
- `State.get()` retorna `State.data`.
- `State.getTrades()`, `State.getSelectedDate()`, `State.getCurrentMonth()`, `State.getCurrentYear()` e `State.getPerformanceView()` retornam valores específicos.
- `State.setTrades(trades)`, `State.setSelectedDate(date)`, `State.setCurrentMonth(month)`, `State.setCurrentYear(year)` e `State.setPerformanceView(view)` atualizam `State.data`.
- `State.setEditingTrade(id)` e `State.clearEditingTrade()` atualizam `editingTradeId`.
- Propriedades legadas `State.trades`, `State.selectedDate`, `State.currentMonth`, `State.currentYear`, `State.performanceView`, `State.historyFilter`, `State.editingTradeId` e `State.propFirm` são expostas via `Object.defineProperty` e mapeiam para `State.data`.

=================================================

MÓDULO: Trade

- `Trade.add(trade)` valida o trade com `TradeValidation.validate(trade)`, retorna erros se inválido, caso contrário cria um novo trade com `id`, `createdAt`, `updatedAt`, adiciona em `State.trades`, ordena por `date`, salva em Storage e emite `trade:added` com o novo trade.
- `Trade.update(id, data)` busca o índice do trade por `id`, retorna inválido se não encontrado, cria `updatedTrade` mesclando dados e atualizando `updatedAt`, valida, atualiza `State.trades`, ordena, salva e emite `trade:updated` com o trade atualizado.
- `Trade.remove(id)` filtra `State.trades` para remover o trade com o `id`, salva, emite `trade:removed` com o `id` e retorna `true` se houve remoção.
- `Trade.duplicate(id)` encontra o trade por `id`, cria uma cópia com novo `id`, `createdAt` e `updatedAt`, adiciona a `State.trades`, ordena, salva e emite `trade:duplicated` com a cópia.
- `Trade.sort()` ordena `State.trades` por `new Date(a.date) - new Date(b.date)`.
- `Trade.getAll()` retorna uma cópia de `State.trades`.
- `Trade.getById(id)` retorna o trade com `id` ou `null`.
- `Trade.getByDate(date)` retorna trades com `trade.date === date`.
- `Trade.getByMonth(month, year)` retorna trades cujo `new Date(trade.date)` tem mês e ano iguais a `month` e `year`.
- `Trade.getByYear(year)` retorna trades cujo `new Date(trade.date).getFullYear() === year`.
- `Trade.getByAccount(account)`, `Trade.getByMarket(market)`, `Trade.getByAsset(asset)` e `Trade.getBySetup(setup)` retornam trades com igualdade estrita do campo correspondente.
- `Trade.getWinningTrades()` retorna trades em que `Number(trade.result) > 0`.
- `Trade.getLosingTrades()` retorna trades em que `Number(trade.result) < 0`.

=================================================

MÓDULO: Trade Validation

- `TradeValidation.validate(trade)` valida campos obrigatórios e valores numéricos:
  - `asset` obrigatório.
  - `type` obrigatório.
  - `entry` deve existir e ser maior que zero.
  - `quantity` deve existir e ser maior que zero.
  - `stopLoss`, se definido, deve ser maior que zero.
  - `takeProfit`, se definido, deve ser maior que zero.
- Retorna `{ valid: boolean, errors: [] }`.

=================================================

MÓDULO: Form

- `Form.init()` delega para `FormEvents.initFormEvents()`.
- `Form.validate(data)` delega para `FormValidation.validate(data)`.
- `Form.serialize(formElement)` delega para `FormSerializer.serializeForm(formElement)`.
- `Form.execute()` tenta métodos em ordem nos submódulos e chama o primeiro existente.

=================================================

MÓDULO: Form Events

- `initFormEvents()` localiza `#tradeForm`, registra `input` e `change` em todos os campos `input, select, textarea` para remover a classe `error`, e registra clique em `#resetForm` para resetar o formulário.
- `clearFieldError(field)` remove `error` da classe do campo.

=================================================

MÓDULO: Form Serializer

- `serializeForm(form)` cria `FormData` e mapeia valores com `normalizeValue`.
- `normalizeValue(value)` converte strings vazias para `null`, strings numéricas para `Number`, e retorna o texto caso contrário.
- `prepareTradeObject(data)` monta o objeto de trade com campos padrão:
  - `id: data.id ?? null`
  - `asset: data.asset ?? ""`
  - `type: data.type ?? ""`
  - `entry: data.entry ?? 0`
  - `exit: data.exit ?? 0`
  - `quantity: data.quantity ?? 0`
  - `stopLoss: data.stopLoss ?? null`
  - `takeProfit: data.takeProfit ?? null`
  - `date: data.date ?? new Date().toISOString()`
  - `notes: data.notes ?? ""`

=================================================

MÓDULO: Calendar

- `CalendarNavigation.dayClick(event)` identifica o elemento `.calendar-day` clicado e usa `cell.dataset.date` para selecionar a data.
- `CalendarNavigation.selectDate(date)` chama `CalendarData.setSelectedDate(date)`, `CalendarRender.render()` e dispara `calendar:daySelected` com `detail: { date }`.
- `CalendarNavigation.previousMonth()` decrementa `State.currentMonth`, reduz `year` se `month < 0`, chama `CalendarData.setMonth(month)`, `CalendarData.setYear(year)`, `CalendarRender.render()` e dispara `calendar:monthChanged`.
- `CalendarNavigation.nextMonth()` incrementa `State.currentMonth`, aumenta `year` se `month > 11`, atualiza `CalendarData`, renderiza e dispara `calendar:monthChanged`.
- `CalendarNavigation.events()` registra clique nos botões `#prevMonth`, `#nextMonth` e clique no container `#calendar`.

=================================================

MÓDULO: History

- `History.render()` obtém trades com `State.getTrades()` e delega para `HistoryRender.render(trades)` ou `HistoryRender.renderHistory(trades)`.
- `History.refresh()` chama `this.render()`.
- `deleteTrade(id)` chama `Trade.remove(id)` se `id` existir.
- `duplicateHistoryTrade(id)` chama `Trade.duplicate(id)` se `id` existir.
- `editTrade(id)` dispara `trade:edit` com `detail: { id }` se `id` existir.

=================================================

MÓDULO: KPI

- `KPI.render()` obtém trades com `State.getTrades()` e executa `KPICards.calculateKPI(trades)` e `KPIRender.render(trades)`.
- `KPICards.calculateKPI(trades)` calcula `totalTrades`, `wins`, `losses`, `profit`, `winRate` e `average`.
- `winRate` é `((wins / totalTrades) * 100)` ou `0` se `totalTrades === 0`.
- `average` é `profit / totalTrades` ou `0` se `totalTrades === 0`.
- `profit` é soma dos resultados calculados por `(exit - entry) * quantity` apenas quando `entry`, `exit` e `quantity` existem.

=================================================

MÓDULO: Summary

- `Summary.render()` obtém trades com `State.getTrades()` e chama `MonthlySummary.calculateMonthlySummary(trades)` e `YearlySummary.calculateYearlySummary(trades)`.
- `calculateMonthlySummary(trades)` filtra trades do mês e ano atuais (`new Date().getMonth()/getFullYear()`), soma lucro, conta vitórias e perdas, e retorna `totalTrades`, `wins`, `losses` e `profit`.
- `calculateYearlySummary(trades)` filtra trades do ano atual, soma lucro, conta vitórias e perdas, e retorna `totalTrades`, `wins`, `losses` e `profit`.
- Ambos usam `calculateTradeResult(trade)` que retorna `0` se `entry`, `exit` ou `quantity` estiverem ausentes, caso contrário `((exit - entry) * quantity)`.

=================================================

MÓDULO: Charts

- `Charts.render()` obtém trades com `State.getTrades()` e chama `CapitalChart.calculateCapitalChart(trades)` e `PerformanceChart.calculatePerformanceChart(trades)`.
- `calculateCapitalChart(trades)` acumula resultado de cada trade em `capital`, empilha pontos `{ date, value }` e retorna o array de pontos.
- `calculatePerformanceChart(trades)` conta `wins`, `losses`, soma `profit` para resultados positivos e `loss` para resultados negativos, e retorna `wins`, `losses`, `profit`, `loss` e `total`.
- Ambas usam `calculateTradeResult(trade)` com as mesmas regras de cálculo de resultado.

=================================================

MÓDULO: Coach

- `Coach.refresh()` chama `this.getDashboard(State.getTrades())`.
- `getDashboard(trades)` retorna `score`, `alerts` e `insights`.
- `calculateScore(trades)` retorna `{ score: 0, level: "Sem Dados" }` se não houver trades.
- Se houver trades, `calculateScore` chama `Health.getScore()` e define `level` em:
  - `Elite` se `score >= 90`
  - `Avançado` se `score >= 75`
  - `Intermediário` se `score >= 60`
  - `Em Desenvolvimento` se `score >= 40`
  - `Iniciante` caso contrário.
- `generateAlerts(trades)` retorna mensagem de ausência de dados se não houver trades.
- `generateAlerts(trades)` adiciona alerta se `losses.length >= 3`, ou se `wins.length > 0 && losses.length > wins.length`, ou se alguma trade com `quantity > 100` existir.
- `generateInsights(trades)` retorna mensagem de ausência de dados se não houver trades.
- `generateInsights(trades)` adiciona insights se `total >= 20`, se `average > 0`, se `average < 0`, e se a sequência máxima de perdas for `>= 3`.
- O cálculo de resultado para alertas e insights usa `entry`, `exit` e `quantity` presentes; caso contrário retorna `0`.

=================================================

MÓDULO: PropFirm

- `PropFirm.getRules()` retorna `PropFirmRules`.
- `PropFirmCalculations.getCurrentProfit()` usa `Statistics.getDashboard().profit.total`.
- `PropFirmCalculations.getRemainingTarget()` calcula `Math.max(0, PropFirmRules.profitTarget - currentProfit)`.
- `PropFirmCalculations.isTargetReached()` compara `currentProfit >= PropFirmRules.profitTarget`.
- `PropFirmCalculations.getCurrentDrawdown()` usa `Statistics.getDashboard().drawdown.current`.
- `PropFirmCalculations.getRemainingDrawdown()` calcula `Math.max(0, PropFirmRules.maxDrawdown + currentDrawdown)`.
- `PropFirmCalculations.getTodayResult()` usa `Statistics.getDashboard().profit.today`.
- `PropFirmCalculations.isDailyLossExceeded()` compara `todayResult <= PropFirmRules.dailyLossLimit`.
- `PropFirmCalculations.getTradingDays()` conta datas distintas de trades com `Trade.getAll()`.
- `PropFirmCalculations.hasMinimumDays()` compara `getTradingDays() >= PropFirmRules.minimumTradingDays`.
- `PropFirmCalculations.getStatus()` retorna `currentProfit`, `remainingTarget`, `targetReached`, `currentDrawdown`, `remainingDrawdown`, `dailyLossExceeded`, `tradingDays` e `minimumDaysReached`.
- `PropFirm.render()` chama `PropFirmRender.render()`, que atualiza elementos DOM pelos IDs `prop-profit`, `prop-target`, `prop-drawdown`, `prop-days`, `prop-status` e `prop-daily-loss`.

=================================================

MÓDULO: PropFirm Rules

- `PropFirmRules.profitTarget` = 3000.
- `PropFirmRules.dailyLossLimit` = -1000.
- `PropFirmRules.maxDrawdown` = -2500.
- `PropFirmRules.minimumTradingDays` = 5.
- `PropFirmRules.consistencyEnabled` = true.
- `PropFirmRules.consistencyLimit` = 40.
- `PropFirmRules.trailingDrawdown` = true.
- `PropFirmRules.commissionPerContract` = 0.
- `PropFirmRules.slippagePerTrade` = 0.
- `PropFirmRules.session.enabled` = false, `start` = "00:00", `end` = "23:59".

=================================================

MÓDULO: Statistics

- `Statistics.getDashboard()` retorna um objeto com `profit`, `performance`, `drawdown` e `health` usando `Profit`, `Performance`, `Drawdown` e `Health`.
- `Statistics.refresh()` retorna `this.getDashboard()`.

=================================================

MÓDULO: Charts Helpers

- `calculateTradeResult(trade)` retorna `0` se `entry`, `exit` ou `quantity` estiverem ausentes, caso contrário `((exit - entry) * quantity)`.
- `calculatePercentage(value, total)` retorna `0` se `!total`, caso contrário `((value / total) * 100).toFixed(2)`.
- `formatChartValue(value)` retorna `Number(Number(value).toFixed(2))`.

=================================================

MÓDULO: Form Validation

- `validateForm(data)` valida `asset`, `type`, `entry`, `quantity`, `stopLoss` e `takeProfit`.

=================================================

RESUMO

O projeto implementa uma arquitetura modular onde:
- `Storage` persiste `State` em `localStorage` e importa/exporta JSON.
- `Trade` altera `State.trades`, salva em `Storage`, ordena por data e emite eventos globais.
- `App` atualiza a interface sempre que trades são adicionados, atualizados, removidos ou duplicados.
- `Calendar` altera data e mês/ano do estado e dispara eventos `calendar:daySelected` e `calendar:monthChanged`.
- `Coach` e `PropFirm` calculam indicadores a partir de `Statistics` e `State`.
- `Form` normaliza e valida dados antes de criar objetos de trade.
