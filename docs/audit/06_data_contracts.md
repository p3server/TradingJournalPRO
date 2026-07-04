=================================================

MODELO

Trade

=================================================

DESCRIÇÃO

Responsabilidade observada.

Modelo de operação comercial armazenado no estado da aplicação.

=================================================

CAMPOS

Nome

id

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

createdAt

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

updatedAt

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

date

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

account

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

market

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

asset

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

setup

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

side

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

contracts

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

result

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

notes

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

points

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

risk

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

NÃO ENCONTRADO

=================================================

ONDE É CRIADO

Arquivo

js/modules/trade/crud.js

Função

TradeCRUD.add()

=================================================

ONDE É ALTERADO

js/modules/trade/crud.js

TradeCRUD.update()

js/modules/trade/crud.js

TradeCRUD.remove()

js/modules/trade/crud.js

TradeCRUD.duplicate()

=================================================

ONDE É LIDO

js/modules/statistics/helpers.js

js/modules/statistics/profit.js

js/modules/statistics/performance.js

js/modules/statistics/drawdown.js

js/modules/statistics/health.js

js/modules/calendar/data.js

js/modules/propFirm/calculations.js

=================================================

PERSISTÊNCIA

State

Storage

LocalStorage

Memória

Não persistido

=================================================

EXEMPLO OBSERVADO

{
  "id": "",
  "createdAt": "",
  "updatedAt": "",
  "date": "",
  "account": "",
  "market": "",
  "asset": "",
  "setup": "",
  "side": "",
  "contracts": 0,
  "result": 0
}

=================================================

RESUMO

Quantidade de campos

13

Quantidade de locais de escrita

3

Quantidade de locais de leitura

8

=================================================

MODELO

State

=================================================

DESCRIÇÃO

Responsabilidade observada.

Armazena o estado global da aplicação.

=================================================

CAMPOS

Nome

trades

Tipo observado

array

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

[]

Nome

selectedDate

Tipo observado

string|null

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

null

Nome

currentMonth

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

new Date().getMonth()

Nome

currentYear

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

new Date().getFullYear()

Nome

performanceView

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

capital

Nome

historyFilter

Tipo observado

null

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

null

Nome

editingTradeId

Tipo observado

null

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

null

Nome

propFirm

Tipo observado

object

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

objeto com enabled false, account "", target 0, trailingDrawdown 0, currentBalance 0, daysTraded 0

=================================================

ONDE É CRIADO

Arquivo

js/modules/state.js

Função

State.data

=================================================

ONDE É ALTERADO

js/modules/state.js

setTrades()

js/modules/state.js

setSelectedDate()

js/modules/state.js

setCurrentMonth()

js/modules/state.js

setCurrentYear()

js/modules/state.js

setPerformanceView()

js/modules/state.js

setEditingTrade()

js/modules/state.js

clearEditingTrade()

js/modules/storage.js

Storage.load()

js/modules/storage.js

Storage.importData()

js/modules/trade/crud.js

TradeCRUD.add()

js/modules/trade/crud.js

TradeCRUD.update()

js/modules/trade/crud.js

TradeCRUD.remove()

js/modules/trade/crud.js

TradeCRUD.duplicate()

js/modules/calendar/data.js

CalendarData.setMonth()

js/modules/calendar/data.js

CalendarData.setYear()

js/modules/calendar/data.js

CalendarData.setSelectedDate()

=================================================

ONDE É LIDO

js/modules/statistics/helpers.js

js/modules/statistics/profit.js

js/modules/statistics/performance.js

js/modules/statistics/drawdown.js

js/modules/statistics/health.js

js/modules/calendar/data.js

js/modules/calendar/render.js

js/modules/calendar/navigation.js

js/modules/storage.js

js/modules/app.js

=================================================

PERSISTÊNCIA

State

Storage

LocalStorage

Memória

Não persistido

=================================================

EXEMPLO OBSERVADO

{
  "trades": [],
  "selectedDate": null,
  "currentMonth": 0,
  "currentYear": 2026,
  "performanceView": "capital",
  "historyFilter": null,
  "editingTradeId": null,
  "propFirm": {
    "enabled": false,
    "account": "",
    "target": 0,
    "trailingDrawdown": 0,
    "currentBalance": 0,
    "daysTraded": 0
  }
}

=================================================

RESUMO

Quantidade de campos

8

Quantidade de locais de escrita

14

Quantidade de locais de leitura

11

=================================================

MODELO

PropFirm

=================================================

DESCRIÇÃO

Responsabilidade observada.

Estrutura de configuração da conta Prop Firm no estado da aplicação.

=================================================

CAMPOS

Nome

enabled

Tipo observado

boolean

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

false

Nome

account

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

"

Nome

target

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

0

Nome

trailingDrawdown

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

0

Nome

currentBalance

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

0

Nome

daysTraded

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

0

=================================================

ONDE É CRIADO

Arquivo

js/modules/state.js

Função

State.data.propFirm

=================================================

ONDE É ALTERADO

js/modules/state.js

State.data.propFirm

=================================================

ONDE É LIDO

js/modules/propFirm/calculations.js

js/modules/propFirm/index.js

=================================================

PERSISTÊNCIA

State

Storage

LocalStorage

Memória

Não persistido

=================================================

EXEMPLO OBSERVADO

{
  "enabled": false,
  "account": "",
  "target": 0,
  "trailingDrawdown": 0,
  "currentBalance": 0,
  "daysTraded": 0
}

=================================================

RESUMO

Quantidade de campos

6

Quantidade de locais de escrita

1

Quantidade de locais de leitura

2

=================================================

MODELO

Statistics

=================================================

DESCRIÇÃO

Responsabilidade observada.

Estrutura de métricas agregadas retornada por Statistics.getDashboard().

=================================================

CAMPOS

Nome

profit

Tipo observado

object

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

performance

Tipo observado

object

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

drawdown

Tipo observado

object

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

health

Tipo observado

object

Obrigatório (SIM / NÃO ENCONTRADO)

SIM

Valor padrão (quando existir)

NÃO ENCONTRADO

=================================================

ONDE É CRIADO

Arquivo

js/modules/statistics/index.js

Função

Statistics.getDashboard()

=================================================

ONDE É ALTERADO

NÃO ENCONTRADO

=================================================

ONDE É LIDO

js/modules/propFirm/calculations.js

=================================================

PERSISTÊNCIA

State

Storage

LocalStorage

Memória

Não persistido

=================================================

EXEMPLO OBSERVADO

{
  "profit": {},
  "performance": {},
  "drawdown": {},
  "health": {}
}

=================================================

RESUMO

Quantidade de campos

4

Quantidade de locais de escrita

0

Quantidade de locais de leitura

1

=================================================

MODELO

StorageData

=================================================

DESCRIÇÃO

Responsabilidade observada.

Estrutura persistida no LocalStorage pela aplicação.

=================================================

CAMPOS

Nome

trades

Tipo observado

array

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

selectedDate

Tipo observado

string|null

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

currentMonth

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

currentYear

Tipo observado

number

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

NÃO ENCONTRADO

Nome

performanceView

Tipo observado

string

Obrigatório (SIM / NÃO ENCONTRADO)

NÃO ENCONTRADO

Valor padrão (quando existir)

NÃO ENCONTRADO

=================================================

ONDE É CRIADO

Arquivo

js/modules/storage.js

Função

Storage.save()

=================================================

ONDE É ALTERADO

js/modules/storage.js

Storage.load()

js/modules/storage.js

Storage.importData()

=================================================

ONDE É LIDO

js/modules/storage.js

=================================================

PERSISTÊNCIA

State

Storage

LocalStorage

Memória

Não persistido

=================================================

EXEMPLO OBSERVADO

{
  "trades": [],
  "selectedDate": null,
  "currentMonth": 0,
  "currentYear": 0,
  "performanceView": "capital"
}

=================================================

RESUMO

Quantidade de campos

5

Quantidade de locais de escrita

2

Quantidade de locais de leitura

1
