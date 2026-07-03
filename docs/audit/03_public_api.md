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
