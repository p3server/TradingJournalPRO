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
