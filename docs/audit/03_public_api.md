=================================================

MÓDULO

Nome:

history

Quantidade de arquivos:

4

Arquivo principal:

[js/modules/history/index.js](js/modules/history/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

History

Arquivo

[js/modules/history/index.js](js/modules/history/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const History = {

    init() {

    },

    render() {

    },

    refresh() {

    },

    filters: HistoryFilters,

    actions: HistoryActions

};

Nome

renderHistory

Arquivo

[js/modules/history/render.js](js/modules/history/render.js)

Tipo (const | function | class)

function

Assinatura completa

export function renderHistory(trades) {

}

Nome

filterTrades

Arquivo

[js/modules/history/filters.js](js/modules/history/filters.js)

Tipo (const | function | class)

function

Assinatura completa

export function filterTrades(trades, filters = {}) {

}

Nome

deleteTrade

Arquivo

[js/modules/history/actions.js](js/modules/history/actions.js)

Tipo (const | function | class)

function

Assinatura completa

export function deleteTrade(id) {

}

Nome

duplicateHistoryTrade

Arquivo

[js/modules/history/actions.js](js/modules/history/actions.js)

Tipo (const | function | class)

function

Assinatura completa

export function duplicateHistoryTrade(id) {

}

Nome

editTrade

Arquivo

[js/modules/history/actions.js](js/modules/history/actions.js)

Tipo (const | function | class)

function

Assinatura completa

export function editTrade(id) {

}

=================================================

USO DOS EXPORTS

Nome

History

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/app.js](js/modules/app.js)

Função

init(), refresh()

Quantidade de chamadas

2

Nome

renderHistory

É utilizado por outro módulo?

NÃO

Nome

filterTrades

É utilizado por outro módulo?

NÃO

Nome

deleteTrade

É utilizado por outro módulo?

NÃO

Nome

duplicateHistoryTrade

É utilizado por outro módulo?

NÃO

Nome

editTrade

É utilizado por outro módulo?

NÃO

=================================================

EXPORTS NÃO UTILIZADOS

renderHistory

filterTrades

deleteTrade

duplicateHistoryTrade

editTrade

=================================================

API PÚBLICA DO MÓDULO

History.init()

History.render()

History.refresh()

History.filters

History.actions

renderHistory()

filterTrades()

deleteTrade()

duplicateHistoryTrade()

editTrade()

=================================================

RESUMO

Quantidade de exports

6

Quantidade de exports utilizados

1

Quantidade de exports não utilizados

5

=================================================

MÓDULO

Nome:

calendar

Quantidade de arquivos:

4

Arquivo principal:

[js/modules/calendar/index.js](js/modules/calendar/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

Calendar

Arquivo

[js/modules/calendar/index.js](js/modules/calendar/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const Calendar = {

    init() {

    },

    render() {

    },

    refresh() {

    },

    destroy() {

    }

};

Nome

CalendarData

Arquivo

[js/modules/calendar/data.js](js/modules/calendar/data.js)

Tipo (const | function | class)

const

Assinatura completa

export const CalendarData = {

    formatDate(year, month, day) {

    },

    getToday() {

    },

    isToday(date) {

    },

    isSelected(date) {

    },

    getFirstWeekDay(year = State.currentYear, month = State.currentMonth) {

    },

    getTotalDays(year = State.currentYear, month = State.currentMonth) {

    },

    getDayData(date) {

    },

    getMonthDays(year = State.currentYear, month = State.currentMonth) {

    },

    getCurrentMonth() {

    },

    getCurrentYear() {

    },

    setMonth(month) {

    },

    setYear(year) {

    },

    getSelectedDate() {

    },

    setSelectedDate(date) {

    }

};

Nome

CalendarNavigation

Arquivo

[js/modules/calendar/navigation.js](js/modules/calendar/navigation.js)

Tipo (const | function | class)

const

Assinatura completa

export const CalendarNavigation = {

    init() {

    },

    cache() {

    },

    events() {

    },

    dayClick(event) {

    },

    selectDate(date) {

    },

    previousMonth() {

    },

    nextMonth() {

    },

    destroy() {

    }

};

Nome

CalendarRender

Arquivo

[js/modules/calendar/render.js](js/modules/calendar/render.js)

Tipo (const | function | class)

const

Assinatura completa

export const CalendarRender = {

    cache() {

    },

    render() {

    },

    renderHeader() {

    },

    renderGrid() {

    },

    createDay(day) {

    },

    destroy() {

    }

};

=================================================

USO DOS EXPORTS

Nome

Calendar

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/app.js](js/modules/app.js)

Função

init(), refresh()

Quantidade de chamadas

2

Nome

CalendarData

É utilizado por outro módulo?

NÃO

Nome

CalendarNavigation

É utilizado por outro módulo?

NÃO

Nome

CalendarRender

É utilizado por outro módulo?

NÃO

=================================================

EXPORTS NÃO UTILIZADOS

CalendarData

CalendarNavigation

CalendarRender

=================================================

API PÚBLICA DO MÓDULO

Calendar.init()

Calendar.render()

Calendar.refresh()

Calendar.destroy()

CalendarData.formatDate()

CalendarData.getToday()

CalendarData.isToday()

CalendarData.isSelected()

CalendarData.getFirstWeekDay()

CalendarData.getTotalDays()

CalendarData.getDayData()

CalendarData.getMonthDays()

CalendarData.getCurrentMonth()

CalendarData.getCurrentYear()

CalendarData.setMonth()

CalendarData.setYear()

CalendarData.getSelectedDate()

CalendarData.setSelectedDate()

CalendarNavigation.init()

CalendarNavigation.cache()

CalendarNavigation.events()

CalendarNavigation.dayClick()

CalendarNavigation.selectDate()

CalendarNavigation.previousMonth()

CalendarNavigation.nextMonth()

CalendarNavigation.destroy()

CalendarRender.cache()

CalendarRender.render()

CalendarRender.renderHeader()

CalendarRender.renderGrid()

CalendarRender.createDay()

CalendarRender.destroy()

=================================================

RESUMO

Quantidade de exports

4

Quantidade de exports utilizados

1

Quantidade de exports não utilizados

3

=================================================

MÓDULO

Nome:

charts

Quantidade de arquivos:

4

Arquivo principal:

[js/modules/charts/index.js](js/modules/charts/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

Charts

Arquivo

[js/modules/charts/index.js](js/modules/charts/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const Charts = {

    init() {

    },

    render() {

    },

    refresh() {

    },

    helpers: Helpers,

    execute(module, methods, trades) {

    }

};

Nome

calculateCapitalChart

Arquivo

[js/modules/charts/capital.js](js/modules/charts/capital.js)

Tipo (const | function | class)

function

Assinatura completa

export function calculateCapitalChart(trades = []) {

}

Nome

calculatePerformanceChart

Arquivo

[js/modules/charts/performance.js](js/modules/charts/performance.js)

Tipo (const | function | class)

function

Assinatura completa

export function calculatePerformanceChart(trades = []) {

}

Nome

calculateTradeResult

Arquivo

[js/modules/charts/helpers.js](js/modules/charts/helpers.js)

Tipo (const | function | class)

function

Assinatura completa

export function calculateTradeResult(trade) {

}

Nome

calculatePercentage

Arquivo

[js/modules/charts/helpers.js](js/modules/charts/helpers.js)

Tipo (const | function | class)

function

Assinatura completa

export function calculatePercentage(value, total) {

}

Nome

formatChartValue

Arquivo

[js/modules/charts/helpers.js](js/modules/charts/helpers.js)

Tipo (const | function | class)

function

Assinatura completa

export function formatChartValue(value) {

}

=================================================

USO DOS EXPORTS

Nome

Charts

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/app.js](js/modules/app.js)

Função

init(), refresh()

Quantidade de chamadas

2

Nome

calculateCapitalChart

É utilizado por outro módulo?

NÃO

Nome

calculatePerformanceChart

É utilizado por outro módulo?

NÃO

Nome

calculateTradeResult

É utilizado por outro módulo?

NÃO

Nome

calculatePercentage

É utilizado por outro módulo?

NÃO

Nome

formatChartValue

É utilizado por outro módulo?

NÃO

=================================================

EXPORTS NÃO UTILIZADOS

calculateCapitalChart

calculatePerformanceChart

calculateTradeResult

calculatePercentage

formatChartValue

=================================================

API PÚBLICA DO MÓDULO

Charts.init()

Charts.render()

Charts.refresh()

Charts.helpers

Charts.execute()

calculateCapitalChart()

calculatePerformanceChart()

calculateTradeResult()

calculatePercentage()

formatChartValue()

=================================================

RESUMO

Quantidade de exports

6

Quantidade de exports utilizados

1

Quantidade de exports não utilizados

5

=================================================

MÓDULO

Nome:

coach

Quantidade de arquivos:

4

Arquivo principal:

[js/modules/coach/index.js](js/modules/coach/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

Coach

Arquivo

[js/modules/coach/index.js](js/modules/coach/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const Coach = {

    init() {

    },

    refresh() {

    },

    getDashboard(trades = []) {

    },

    getScore(trades = []) {

    },

    getAlerts(trades = []) {

    },

    getInsights(trades = []) {

    }

};

Nome

generateAlerts

Arquivo

[js/modules/coach/alerts.js](js/modules/coach/alerts.js)

Tipo (const | function | class)

function

Assinatura completa

export function generateAlerts(trades = []) {

}

Nome

generateInsights

Arquivo

[js/modules/coach/insights.js](js/modules/coach/insights.js)

Tipo (const | function | class)

function

Assinatura completa

export function generateInsights(trades = []) {

}

Nome

calculateScore

Arquivo

[js/modules/coach/score.js](js/modules/coach/score.js)

Tipo (const | function | class)

function

Assinatura completa

export function calculateScore(trades = []) {

}

=================================================

USO DOS EXPORTS

Nome

Coach

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/app.js](js/modules/app.js)

Função

init(), refresh()

Quantidade de chamadas

2

Nome

generateAlerts

É utilizado por outro módulo?

NÃO

Nome

generateInsights

É utilizado por outro módulo?

NÃO

Nome

calculateScore

É utilizado por outro módulo?

NÃO

=================================================

EXPORTS NÃO UTILIZADOS

generateAlerts

generateInsights

calculateScore

=================================================

API PÚBLICA DO MÓDULO

Coach.init()

Coach.refresh()

Coach.getDashboard()

Coach.getScore()

Coach.getAlerts()

Coach.getInsights()

generateAlerts()

generateInsights()

calculateScore()

=================================================

RESUMO

Quantidade de exports

4

Quantidade de exports utilizados

1

Quantidade de exports não utilizados

3

=================================================

MÓDULO

Nome:

events

Quantidade de arquivos:

1

Arquivo principal:

[js/modules/events/index.js](js/modules/events/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

Events

Arquivo

[js/modules/events/index.js](js/modules/events/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const Events = {

    emit(eventName, detail = {}) {

    },

    on(eventName, callback) {

    },

    off(eventName, callback) {

    }

};

=================================================

USO DOS EXPORTS

Nome

Events

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/trade/crud.js](js/modules/trade/crud.js)

Função

emit()

Quantidade de chamadas

4

=================================================

EXPORTS NÃO UTILIZADOS

NENHUM

=================================================

API PÚBLICA DO MÓDULO

Events.emit()

Events.on()

Events.off()

=================================================

RESUMO

Quantidade de exports

1

Quantidade de exports utilizados

1

Quantidade de exports não utilizados

0

=================================================

MÓDULO

Nome:

form

Quantidade de arquivos:

4

Arquivo principal:

[js/modules/form/index.js](js/modules/form/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

Form

Arquivo

[js/modules/form/index.js](js/modules/form/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const Form = {

    init() {

    },

    refresh() {

    },

    validate(data) {

    },

    serialize(formElement) {

    },

    execute(module, methods, ...args) {

    }

};

Nome

initFormEvents

Arquivo

[js/modules/form/events.js](js/modules/form/events.js)

Tipo (const | function | class)

function

Assinatura completa

export function initFormEvents() {

}

Nome

serializeForm

Arquivo

[js/modules/form/serializer.js](js/modules/form/serializer.js)

Tipo (const | function | class)

function

Assinatura completa

export function serializeForm(form) {

}

Nome

validateForm

Arquivo

[js/modules/form/validation.js](js/modules/form/validation.js)

Tipo (const | function | class)

function

Assinatura completa

export function validateForm(data) {

}

=================================================

USO DOS EXPORTS

Nome

Form

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/app.js](js/modules/app.js)

Função

init()

Quantidade de chamadas

1

Nome

initFormEvents

É utilizado por outro módulo?

NÃO

Nome

serializeForm

É utilizado por outro módulo?

NÃO

Nome

validateForm

É utilizado por outro módulo?

NÃO

=================================================

EXPORTS NÃO UTILIZADOS

initFormEvents

serializeForm

validateForm

=================================================

API PÚBLICA DO MÓDULO

Form.init()

Form.refresh()

Form.validate()

Form.serialize()

Form.execute()

initFormEvents()

serializeForm()

validateForm()

=================================================

RESUMO

Quantidade de exports

4

Quantidade de exports utilizados

1

Quantidade de exports não utilizados

3

=================================================

MÓDULO

Nome:

kpi

Quantidade de arquivos:

3

Arquivo principal:

[js/modules/kpi/index.js](js/modules/kpi/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

KPI

Arquivo

[js/modules/kpi/index.js](js/modules/kpi/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const KPI = {

    init() {

    },

    render() {

    },

    refresh() {

    },

    execute(module, methods, trades) {

    }

};

Nome

calculateKPI

Arquivo

[js/modules/kpi/cards.js](js/modules/kpi/cards.js)

Tipo (const | function | class)

function

Assinatura completa

export function calculateKPI(trades = []) {

}

Nome

renderKPICards

Arquivo

[js/modules/kpi/render.js](js/modules/kpi/render.js)

Tipo (const | function | class)

function

Assinatura completa

export function renderKPICards(kpi) {

}

=================================================

USO DOS EXPORTS

Nome

KPI

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/app.js](js/modules/app.js)

Função

init(), refresh()

Quantidade de chamadas

2

Nome

calculateKPI

É utilizado por outro módulo?

NÃO

Nome

renderKPICards

É utilizado por outro módulo?

NÃO

=================================================

EXPORTS NÃO UTILIZADOS

calculateKPI

renderKPICards

=================================================

API PÚBLICA DO MÓDULO

KPI.init()

KPI.render()

KPI.refresh()

KPI.execute()

calculateKPI()

renderKPICards()

=================================================

RESUMO

Quantidade de exports

3

Quantidade de exports utilizados

1

Quantidade de exports não utilizados

2

=================================================

MÓDULO

Nome:

propfirm

Quantidade de arquivos:

4

Arquivo principal:

[js/modules/propFirm/index.js](js/modules/propFirm/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

PropFirm

Arquivo

[js/modules/propFirm/index.js](js/modules/propFirm/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const PropFirm = {

    init() {

    },

    refresh() {

    },

    getRules() {

    },

    getStatus() {

    },

    getCurrentProfit() {

    },

    getRemainingTarget() {

    },

    isTargetReached() {

    },

    getCurrentDrawdown() {

    },

    getRemainingDrawdown() {

    },

    getTodayResult() {

    },

    isDailyLossExceeded() {

    },

    getTradingDays() {

    },

    hasMinimumDays() {

    },

    render() {

    }

};

Nome

PropFirmCalculations

Arquivo

[js/modules/propFirm/calculations.js](js/modules/propFirm/calculations.js)

Tipo (const | function | class)

const

Assinatura completa

export const PropFirmCalculations = {

    getCurrentProfit() {

    },

    getRemainingTarget() {

    },

    isTargetReached() {

    },

    getCurrentDrawdown() {

    },

    getRemainingDrawdown() {

    },

    getTodayResult() {

    },

    isDailyLossExceeded() {

    },

    getTradingDays() {

    },

    hasMinimumDays() {

    },

    getStatus() {

    }

};

Nome

PropFirmRender

Arquivo

[js/modules/propFirm/render.js](js/modules/propFirm/render.js)

Tipo (const | function | class)

const

Assinatura completa

export const PropFirmRender = {

    render() {

    },

    updateValue(id, value) {

    },

    formatCurrency(value) {

    }

};

Nome

PropFirmRules

Arquivo

[js/modules/propFirm/rules.js](js/modules/propFirm/rules.js)

Tipo (const | function | class)

const

Assinatura completa

export const PropFirmRules = {

    profitTarget: 3000,

    dailyLossLimit: -1000,

    maxDrawdown: -2500,

    minimumTradingDays: 5,

    consistencyEnabled: true,

    consistencyLimit: 40,

    trailingDrawdown: true,

    commissionPerContract: 0,

    slippagePerTrade: 0,

    session: {

        enabled: false,

        start: "00:00",

        end: "23:59"

    }

};

Nome

PropFirmPresets

Arquivo

[js/modules/propFirm/rules.js](js/modules/propFirm/rules.js)

Tipo (const | function | class)

const

Assinatura completa

export const PropFirmPresets = {

    DEFAULT: PropFirmRules

};

=================================================

USO DOS EXPORTS

Nome

PropFirm

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/app.js](js/modules/app.js)

Função

init(), refresh()

Quantidade de chamadas

2

Nome

PropFirmCalculations

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/propFirm/index.js](js/modules/propFirm/index.js)

Função

getStatus(), getCurrentProfit(), getRemainingTarget(), isTargetReached(), getCurrentDrawdown(), getRemainingDrawdown(), getTodayResult(), isDailyLossExceeded(), getTradingDays(), hasMinimumDays()

Quantidade de chamadas

10

Nome

PropFirmRender

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/propFirm/index.js](js/modules/propFirm/index.js)

Função

render()

Quantidade de chamadas

1

Nome

PropFirmRules

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/propFirm/index.js](js/modules/propFirm/index.js)

Função

getRules()

Quantidade de chamadas

1

Nome

PropFirmPresets

É utilizado por outro módulo?

NÃO

=================================================

EXPORTS NÃO UTILIZADOS

PropFirmPresets

=================================================

API PÚBLICA DO MÓDULO

PropFirm.init()

PropFirm.refresh()

PropFirm.getRules()

PropFirm.getStatus()

PropFirm.getCurrentProfit()

PropFirm.getRemainingTarget()

PropFirm.isTargetReached()

PropFirm.getCurrentDrawdown()

PropFirm.getRemainingDrawdown()

PropFirm.getTodayResult()

PropFirm.isDailyLossExceeded()

PropFirm.getTradingDays()

PropFirm.hasMinimumDays()

PropFirm.render()

PropFirmCalculations.getCurrentProfit()

PropFirmCalculations.getRemainingTarget()

PropFirmCalculations.isTargetReached()

PropFirmCalculations.getCurrentDrawdown()

PropFirmCalculations.getRemainingDrawdown()

PropFirmCalculations.getTodayResult()

PropFirmCalculations.isDailyLossExceeded()

PropFirmCalculations.getTradingDays()

PropFirmCalculations.hasMinimumDays()

PropFirmCalculations.getStatus()

PropFirmRender.render()

PropFirmRender.updateValue()

PropFirmRender.formatCurrency()

PropFirmRules

PropFirmPresets

=================================================

RESUMO

Quantidade de exports

5

Quantidade de exports utilizados

4

Quantidade de exports não utilizados

1

=================================================

MÓDULO

Nome:

summary

Quantidade de arquivos:

3

Arquivo principal:

[js/modules/summary/index.js](js/modules/summary/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

Summary

Arquivo

[js/modules/summary/index.js](js/modules/summary/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const Summary = {

    init() {

    },

    render() {

    },

    refresh() {

    },

    execute(module, methods, trades) {

    }

};

Nome

calculateMonthlySummary

Arquivo

[js/modules/summary/monthly.js](js/modules/summary/monthly.js)

Tipo (const | function | class)

function

Assinatura completa

export function calculateMonthlySummary(trades = []) {

}

Nome

calculateYearlySummary

Arquivo

[js/modules/summary/yearly.js](js/modules/summary/yearly.js)

Tipo (const | function | class)

function

Assinatura completa

export function calculateYearlySummary(trades = []) {

}

=================================================

USO DOS EXPORTS

Nome

Summary

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/app.js](js/modules/app.js)

Função

init(), refresh()

Quantidade de chamadas

2

Nome

calculateMonthlySummary

É utilizado por outro módulo?

NÃO

Nome

calculateYearlySummary

É utilizado por outro módulo?

NÃO

=================================================

EXPORTS NÃO UTILIZADOS

calculateMonthlySummary

calculateYearlySummary

=================================================

API PÚBLICA DO MÓDULO

Summary.init()

Summary.render()

Summary.refresh()

Summary.execute()

calculateMonthlySummary()

calculateYearlySummary()

=================================================

RESUMO

Quantidade de exports

3

Quantidade de exports utilizados

1

Quantidade de exports não utilizados

2

=================================================

MÓDULO

Nome:

statistics

Quantidade de arquivos:

6

Arquivo principal:

[js/modules/statistics/index.js](js/modules/statistics/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

Statistics

Arquivo

[js/modules/statistics/index.js](js/modules/statistics/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const Statistics = {

    getDashboard() {

    },

    refresh() {

    }

};

Nome

Profit

Arquivo

[js/modules/statistics/profit.js](js/modules/statistics/profit.js)

Tipo (const | function | class)

const

Assinatura completa

export const Profit = {

    getMetrics() {

    },

    getTotal() {

    },

    getToday() {

    },

    getWeek() {

    },

    getMonth() {

    },

    getYear() {

    },

    getAverageTrade() {

    }

};

Nome

Performance

Arquivo

[js/modules/statistics/performance.js](js/modules/statistics/performance.js)

Tipo (const | function | class)

const

Assinatura completa

export const Performance = {

    getMetrics() {

    },

    getBreakEvenTrades() {

    },

    getWinRate() {

    },

    getPayoff() {

    },

    getProfitFactor() {

    }

};

Nome

Drawdown

Arquivo

[js/modules/statistics/drawdown.js](js/modules/statistics/drawdown.js)

Tipo (const | function | class)

const

Assinatura completa

export const Drawdown = {

    getMetrics() {

    },

    getPeakEquity() {

    },

    getCurrent() {

    },

    getMaximum() {

    }

};

Nome

Health

Arquivo

[js/modules/statistics/health.js](js/modules/statistics/health.js)

Tipo (const | function | class)

const

Assinatura completa

export const Health = {

    getMetrics() {

    },

    getScore() {

    },

    getStatus() {

    }

};

Nome

StatisticsHelpers

Arquivo

[js/modules/statistics/helpers.js](js/modules/statistics/helpers.js)

Tipo (const | function | class)

const

Assinatura completa

export const StatisticsHelpers = {

    getTrades() {

    },

    sumResults(trades = []) {

    },

    getWinningTrades(trades = []) {

    },

    getLosingTrades(trades = []) {

    },

    getLargestWin(trades = []) {

    },

    getLargestLoss(trades = []) {

    },

    average(values = []) {

    },

    filterByDate(trades = [], date) {

    },

    filterByMonth(trades = [], month, year) {

    },

    filterByYear(trades = [], year) {

    }

};

=================================================

USO DOS EXPORTS

Nome

Statistics

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/propFirm/calculations.js](js/modules/propFirm/calculations.js)

Função

getDashboard()

Quantidade de chamadas

3

Nome

Profit

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/statistics/index.js](js/modules/statistics/index.js)

Função

getTotal(), getToday(), getWeek(), getMonth(), getYear(), getAverageTrade(), getMetrics()

Quantidade de chamadas

7

Nome

Performance

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/statistics/index.js](js/modules/statistics/index.js)

Função

getMetrics()

Quantidade de chamadas

1

Nome

Drawdown

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/statistics/index.js](js/modules/statistics/index.js)

Função

getMetrics()

Quantidade de chamadas

1

Nome

Health

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/statistics/index.js](js/modules/statistics/index.js)

Função

getMetrics()

Quantidade de chamadas

1

Nome

StatisticsHelpers

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/statistics/profit.js](js/modules/statistics/profit.js)

Função

getTrades(), sumResults(), getLargestWin(), getLargestLoss(), filterByDate(), filterByMonth(), filterByYear()

Quantidade de chamadas

7

=================================================

EXPORTS NÃO UTILIZADOS

NENHUM

=================================================

API PÚBLICA DO MÓDULO

Statistics.getDashboard()

Statistics.refresh()

Profit.getMetrics()

Profit.getTotal()

Profit.getToday()

Profit.getWeek()

Profit.getMonth()

Profit.getYear()

Profit.getAverageTrade()

Performance.getMetrics()

Performance.getBreakEvenTrades()

Performance.getWinRate()

Performance.getPayoff()

Performance.getProfitFactor()

Drawdown.getMetrics()

Drawdown.getPeakEquity()

Drawdown.getCurrent()

Drawdown.getMaximum()

Health.getMetrics()

Health.getScore()

Health.getStatus()

StatisticsHelpers.getTrades()

StatisticsHelpers.sumResults()

StatisticsHelpers.getWinningTrades()

StatisticsHelpers.getLosingTrades()

StatisticsHelpers.getLargestWin()

StatisticsHelpers.getLargestLoss()

StatisticsHelpers.average()

StatisticsHelpers.filterByDate()

StatisticsHelpers.filterByMonth()

StatisticsHelpers.filterByYear()

=================================================

RESUMO

Quantidade de exports

6

Quantidade de exports utilizados

6

Quantidade de exports não utilizados

0

=================================================

MÓDULO

Nome:

trade

Quantidade de arquivos:

4

Arquivo principal:

[js/modules/trade/index.js](js/modules/trade/index.js)

=================================================

EXPORTS PÚBLICOS

Nome

Trade

Arquivo

[js/modules/trade/index.js](js/modules/trade/index.js)

Tipo (const | function | class)

const

Assinatura completa

export const Trade = {

    add(trade) {

    },

    update(id, trade) {

    },

    remove(id) {

    },

    duplicate(id) {

    },

    getAll() {

    },

    getById(id) {

    },

    getByDate(date) {

    },

    getByMonth(month, year) {

    },

    getByYear(year) {

    },

    getByAccount(account) {

    },

    getByMarket(market) {

    },

    getByAsset(asset) {

    },

    getBySetup(setup) {

    },

    getWinningTrades() {

    },

    getLosingTrades() {

    }

};

Nome

TradeCRUD

Arquivo

[js/modules/trade/crud.js](js/modules/trade/crud.js)

Tipo (const | function | class)

const

Assinatura completa

export const TradeCRUD = {

    add(trade) {

    },

    update(id, data) {

    },

    remove(id) {

    },

    duplicate(id) {

    },

    sort() {

    }

};

Nome

TradeFilters

Arquivo

[js/modules/trade/filters.js](js/modules/trade/filters.js)

Tipo (const | function | class)

const

Assinatura completa

export const TradeFilters = {

    getAll() {

    },

    getById(id) {

    },

    getByDate(date) {

    },

    getByMonth(month, year) {

    },

    getByYear(year) {

    },

    getByAccount(account) {

    },

    getByMarket(market) {

    },

    getByAsset(asset) {

    },

    getBySetup(setup) {

    },

    getWinningTrades() {

    },

    getLosingTrades() {

    }

};

Nome

TradeValidation

Arquivo

[js/modules/trade/validation.js](js/modules/trade/validation.js)

Tipo (const | function | class)

const

Assinatura completa

export const TradeValidation = {

    validate(trade) {

    }

};

=================================================

USO DOS EXPORTS

Nome

Trade

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/calendar/data.js](js/modules/calendar/data.js)

Função

getByDate()

Quantidade de chamadas

1

Nome

TradeCRUD

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/trade/index.js](js/modules/trade/index.js)

Função

add(), update(), remove(), duplicate()

Quantidade de chamadas

4

Nome

TradeFilters

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/trade/index.js](js/modules/trade/index.js)

Função

getAll(), getById(), getByDate(), getByMonth(), getByYear(), getByAccount(), getByMarket(), getByAsset(), getBySetup(), getWinningTrades(), getLosingTrades()

Quantidade de chamadas

11

Nome

TradeValidation

É utilizado por outro módulo?

SIM

Caso SIM informe:

Arquivo

[js/modules/trade/crud.js](js/modules/trade/crud.js)

Função

validate()

Quantidade de chamadas

2

=================================================

EXPORTS NÃO UTILIZADOS

NENHUM

=================================================

API PÚBLICA DO MÓDULO

Trade.add()

Trade.update()

Trade.remove()

Trade.duplicate()

Trade.getAll()

Trade.getById()

Trade.getByDate()

Trade.getByMonth()

Trade.getByYear()

Trade.getByAccount()

Trade.getByMarket()

Trade.getByAsset()

Trade.getBySetup()

Trade.getWinningTrades()

Trade.getLosingTrades()

TradeCRUD.add()

TradeCRUD.update()

TradeCRUD.remove()

TradeCRUD.duplicate()

TradeCRUD.sort()

TradeFilters.getAll()

TradeFilters.getById()

TradeFilters.getByDate()

TradeFilters.getByMonth()

TradeFilters.getByYear()

TradeFilters.getByAccount()

TradeFilters.getByMarket()

TradeFilters.getByAsset()

TradeFilters.getBySetup()

TradeFilters.getWinningTrades()

TradeFilters.getLosingTrades()

TradeValidation.validate()

=================================================

RESUMO

Quantidade de exports

4

Quantidade de exports utilizados

4

Quantidade de exports não utilizados

0
