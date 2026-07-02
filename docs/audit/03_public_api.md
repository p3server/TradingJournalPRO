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

Arquivo

[js/modules/app.js](js/modules/app.js)

Função

init()

Quantidade de chamadas

1

Nome

generateAlerts

É utilizado por outro módulo?

SIM

Arquivo

[js/modules/coach/index.js](js/modules/coach/index.js)

Função

getDashboard()

Quantidade de chamadas

1

Nome

generateInsights

É utilizado por outro módulo?

SIM

Arquivo

[js/modules/coach/index.js](js/modules/coach/index.js)

Função

getDashboard()

Quantidade de chamadas

1

Nome

calculateScore

É utilizado por outro módulo?

SIM

Arquivo

[js/modules/coach/index.js](js/modules/coach/index.js)

Função

getDashboard()

Quantidade de chamadas

1

=================================================

EXPORTS NÃO UTILIZADOS

NENHUM

=================================================

API PÚBLICA DO MÓDULO

Coach.init()

Coach.refresh()

Coach.getDashboard()

Coach.getScore()

Coach.getAlerts()

Coach.getInsights()

=================================================

RESUMO

Quantidade de exports

4

Quantidade de exports utilizados

4

Quantidade de exports não utilizados

0
