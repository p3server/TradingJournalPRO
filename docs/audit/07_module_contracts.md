=================================================

MÓDULO

State

Responsabilidade observada

Armazenar o estado global da aplicação.

=================================================

ENTRADAS

State

State.data

Parâmetros

trades

selectedDate

currentMonth

currentYear

performanceView

historyFilter

editingTradeId

propFirm

=================================================

SAÍDAS

Objetos

State.get()

Retornos

State.getTrades()

State.getSelectedDate()

State.getCurrentMonth()

State.getCurrentYear()

State.getPerformanceView()

Atualização visual

NÃO ENCONTRADO

=================================================

LEITURA

State.data

State.trades

State.selectedDate

State.currentMonth

State.currentYear

State.performanceView

State.historyFilter

State.editingTradeId

State.propFirm

=================================================

ESCRITA

State.data.trades

State.data.selectedDate

State.data.currentMonth

State.data.currentYear

State.data.performanceView

State.data.editingTradeId

State.data.propFirm

=================================================

DEPENDÊNCIAS

NÃO ENCONTRADO

=================================================

EFEITOS COLATERAIS

NENHUM

=================================================

RESUMO

Entradas:

State

Parâmetros

Saídas:

Objetos

Retornos

Leitura:

State.data

State.trades

State.selectedDate

State.currentMonth

State.currentYear

State.performanceView

State.historyFilter

State.editingTradeId

State.propFirm

Escrita:

State.data.trades

State.data.selectedDate

State.data.currentMonth

State.data.currentYear

State.data.performanceView

State.data.editingTradeId

State.data.propFirm

Dependências:

NÃO ENCONTRADO

Efeitos colaterais:

NENHUM

=================================================

MÓDULO

Storage

Responsabilidade observada

Ler e salvar dados no LocalStorage.

=================================================

ENTRADAS

State

Parâmetros

json

localStorage

=================================================

SAÍDAS

Objetos

State.get()

Retornos

Storage.load()

Storage.save()

Storage.clear()

Storage.exportData()

Storage.importData()

=================================================

LEITURA

localStorage

State.get()

=================================================

ESCRITA

State

localStorage

=================================================

DEPENDÊNCIAS

State

=================================================

EFEITOS COLATERAIS

Atualiza State

Salva Storage

=================================================

RESUMO

Entradas:

State

Parâmetros

Saídas:

Objetos

Retornos

Leitura:

localStorage

State.get()

Escrita:

State

localStorage

Dependências:

State

Efeitos colaterais:

Atualiza State

Salva Storage

=================================================

MÓDULO

trade

Responsabilidade observada

Gerenciar operações de trade e consultas relacionadas.

=================================================

ENTRADAS

State

Trade

Parâmetros

trade

id

data

Eventos

trade:added

trade:updated

trade:removed

trade:duplicated

=================================================

SAÍDAS

Objetos

TradeCRUD.add()

TradeCRUD.update()

TradeCRUD.remove()

TradeCRUD.duplicate()

Retornos

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

Eventos

trade:added

trade:updated

trade:removed

trade:duplicated

=================================================

LEITURA

State.trades

trade.date

trade.account

trade.market

trade.asset

trade.setup

trade.result

=================================================

ESCRITA

State.trades

State.trades.push()

State.trades[index]

State.trades.filter()

State.trades.sort()

=================================================

DEPENDÊNCIAS

State

Storage

Events

TradeValidation

=================================================

EFEITOS COLATERAIS

Atualiza State

Salva Storage

Emite evento

=================================================

RESUMO

Entradas:

State

Trade

Parâmetros

Eventos

Saídas:

Objetos

Retornos

Eventos

Leitura:

State.trades

trade.date

trade.account

trade.market

trade.asset

trade.setup

trade.result

Escrita:

State.trades

State.trades.push()

State.trades[index]

State.trades.filter()

State.trades.sort()

Dependências:

State

Storage

Events

TradeValidation

Efeitos colaterais:

Atualiza State

Salva Storage

Emite evento

=================================================

MÓDULO

calendar

Responsabilidade observada

Gerenciar a interface e a navegação do calendário.

=================================================

ENTRADAS

State

Trade

DOM

Parâmetros

date

month

year

Eventos

click

calendar:daySelected

calendar:monthChanged

=================================================

SAÍDAS

HTML

Eventos

Objetos

CalendarRender.render()

CalendarNavigation.selectDate()

CalendarNavigation.previousMonth()

CalendarNavigation.nextMonth()

Atualização visual

CalendarRender.render()

=================================================

LEITURA

State.currentMonth

State.currentYear

State.selectedDate

Trade.getByDate()

=================================================

ESCRITA

State.currentMonth

State.currentYear

State.selectedDate

DOM

=================================================

DEPENDÊNCIAS

State

Trade

CalendarData

CalendarRender

=================================================

EFEITOS COLATERAIS

Atualiza State

Atualiza DOM

Emite evento

=================================================

RESUMO

Entradas:

State

Trade

DOM

Parâmetros

Eventos

Saídas:

HTML

Eventos

Objetos

Atualização visual

Leitura:

State.currentMonth

State.currentYear

State.selectedDate

Trade.getByDate()

Escrita:

State.currentMonth

State.currentYear

State.selectedDate

DOM

Dependências:

State

Trade

CalendarData

CalendarRender

Efeitos colaterais:

Atualiza State

Atualiza DOM

Emite evento

=================================================

MÓDULO

history

Responsabilidade observada

Renderizar e administrar o histórico de trades.

=================================================

ENTRADAS

State

Trade

DOM

Parâmetros

trades

filters

id

Eventos

trade:edit

=================================================

SAÍDAS

HTML

Eventos

Objetos

History.render()

History.refresh()

History.actions.deleteTrade()

History.actions.duplicateHistoryTrade()

History.actions.editTrade()

Atualização visual

HistoryRender.renderHistory()

=================================================

LEITURA

State.getTrades()

trades

filters

=================================================

ESCRITA

DOM

document.dispatchEvent()

=================================================

DEPENDÊNCIAS

State

Trade

HistoryRender

HistoryFilters

HistoryActions

=================================================

EFEITOS COLATERAIS

Atualiza DOM

Emite evento

=================================================

RESUMO

Entradas:

State

Trade

DOM

Parâmetros

Eventos

Saídas:

HTML

Eventos

Objetos

Atualização visual

Leitura:

State.getTrades()

trades

filters

Escrita:

DOM

document.dispatchEvent()

Dependências:

State

Trade

HistoryRender

HistoryFilters

HistoryActions

Efeitos colaterais:

Atualiza DOM

Emite evento

=================================================

MÓDULO

Statistics

Responsabilidade observada

Calcular métricas de performance e saúde da conta a partir dos trades.

=================================================

ENTRADAS

State

Trade

Parâmetros

trades

month

year

=================================================

SAÍDAS

Objetos

Statistics.getDashboard()

Retornos

Profit.getMetrics()

Performance.getMetrics()

Drawdown.getMetrics()

Health.getMetrics()

=================================================

LEITURA

State.trades

State.currentMonth

State.currentYear

trade.result

trade.date

=================================================

ESCRITA

NÃO ENCONTRADO

=================================================

DEPENDÊNCIAS

State

StatisticsHelpers

Profit

Performance

Drawdown

Health

=================================================

EFEITOS COLATERAIS

NENHUM

=================================================

RESUMO

Entradas:

State

Trade

Parâmetros

Saídas:

Objetos

Retornos

Leitura:

State.trades

State.currentMonth

State.currentYear

trade.result

trade.date

Escrita:

NÃO ENCONTRADO

Dependências:

State

StatisticsHelpers

Profit

Performance

Drawdown

Health

Efeitos colaterais:

NENHUM

=================================================

MÓDULO

kpi

Responsabilidade observada

Calcular e renderizar indicadores KPI a partir dos trades.

=================================================

ENTRADAS

State

Parâmetros

trades

DOM

=================================================

SAÍDAS

Objetos

calculateKPI()

HTML

renderKPICards()

Atualização visual

renderKPICards()

=================================================

LEITURA

State.getTrades()

trade.entry

trade.exit

trade.quantity

=================================================

ESCRITA

DOM

=================================================

DEPENDÊNCIAS

State

KPICards

KPIRender

=================================================

EFEITOS COLATERAIS

Atualiza DOM

=================================================

RESUMO

Entradas:

State

Parâmetros

DOM

Saídas:

Objetos

HTML

Atualização visual

Leitura:

State.getTrades()

trade.entry

trade.exit

trade.quantity

Escrita:

DOM

Dependências:

State

KPICards

KPIRender

Efeitos colaterais:

Atualiza DOM

=================================================

MÓDULO

Summary

Responsabilidade observada

Calcular resumos mensais e anuais a partir dos trades.

=================================================

ENTRADAS

State

Parâmetros

trades

=================================================

SAÍDAS

Objetos

Retornos

=================================================

LEITURA

State.getTrades()

trade.date

trade.entry

trade.exit

trade.quantity

=================================================

ESCRITA

NÃO ENCONTRADO

=================================================

DEPENDÊNCIAS

State

MonthlySummary

YearlySummary

=================================================

EFEITOS COLATERAIS

NENHUM

=================================================

RESUMO

Entradas:

State

Parâmetros

Saídas:

Objetos

Retornos

Leitura:

State.getTrades()

trade.date

trade.entry

trade.exit

trade.quantity

Escrita:

NÃO ENCONTRADO

Dependências:

State

MonthlySummary

YearlySummary

Efeitos colaterais:

NENHUM

=================================================

MÓDULO

Charts

Responsabilidade observada

Preparar dados para gráficos de capital e performance a partir dos trades.

=================================================

ENTRADAS

State

Parâmetros

trades

=================================================

SAÍDAS

Objetos

Retornos

=================================================

LEITURA

State.getTrades()

trade.date

trade.entry

trade.exit

trade.quantity

=================================================

ESCRITA

NÃO ENCONTRADO

=================================================

DEPENDÊNCIAS

State

CapitalChart

PerformanceChart

Helpers

=================================================

EFEITOS COLATERAIS

NENHUM

=================================================

RESUMO

Entradas:

State

Parâmetros

Saídas:

Objetos

Retornos

Leitura:

State.getTrades()

trade.date

trade.entry

trade.exit

trade.quantity

Escrita:

NÃO ENCONTRADO

Dependências:

State

CapitalChart

PerformanceChart

Helpers

Efeitos colaterais:

NENHUM

=================================================

MÓDULO

Coach

Responsabilidade observada

Gerar score, alertas e insights a partir dos trades.

=================================================

ENTRADAS

State

Parâmetros

trades

=================================================

SAÍDAS

Objetos

Retornos

=================================================

LEITURA

State.getTrades()

trade.entry

trade.exit

trade.quantity

=================================================

ESCRITA

NÃO ENCONTRADO

=================================================

DEPENDÊNCIAS

State

alerts

insights

score

=================================================

EFEITOS COLATERAIS

NENHUM

=================================================

RESUMO

Entradas:

State

Parâmetros

Saídas:

Objetos

Retornos

Leitura:

State.getTrades()

trade.entry

trade.exit

trade.quantity

Escrita:

NÃO ENCONTRADO

Dependências:

State

alerts

insights

score

Efeitos colaterais:

NENHUM

=================================================

MÓDULO

PropFirm

Responsabilidade observada

Calcular status, limites e renderizar o painel de prop firm.

=================================================

ENTRADAS

Parâmetros

DOM

PropFirmRules

=================================================

SAÍDAS

Objetos

Retornos

HTML

Atualização visual

=================================================

LEITURA

PropFirmRules

Statistics.getDashboard()

Trade.getAll()

document.getElementById()

=================================================

ESCRITA

DOM

=================================================

DEPENDÊNCIAS

PropFirmRules

PropFirmCalculations

PropFirmRender

Statistics

Trade

=================================================

EFEITOS COLATERAIS

Atualiza DOM

=================================================

RESUMO

Entradas:

Parâmetros

DOM

PropFirmRules

Saídas:

Objetos

Retornos

HTML

Atualização visual

Leitura:

PropFirmRules

Statistics.getDashboard()

Trade.getAll()

document.getElementById()

Escrita:

DOM

Dependências:

PropFirmRules

PropFirmCalculations

PropFirmRender

Statistics

Trade

Efeitos colaterais:

Atualiza DOM

=================================================

MÓDULO

clock

Responsabilidade observada

Atualizar data e hora do dashboard a cada segundo.

=================================================

ENTRADAS

DOM

=================================================

SAÍDAS

Atualização visual

=================================================

LEITURA

document.getElementById("currentDate")
document.getElementById("currentTime")

=================================================

ESCRITA

DOM

=================================================

DEPENDÊNCIAS

NÃO ENCONTRADO

=================================================

EFEITOS COLATERAIS

Atualiza DOM

=================================================

RESUMO

Entradas:

DOM

Saídas:

Atualização visual

Leitura:

document.getElementById("currentDate")
document.getElementById("currentTime")

Escrita:

DOM

Dependências:

NÃO ENCONTRADO

Efeitos colaterais:

Atualiza DOM

=================================================

MÓDULO

state

Responsabilidade observada

Armazenar e fornecer acesso ao estado global da aplicação.

=================================================

ENTRADAS

Parâmetros

=================================================

SAÍDAS

Objetos

Retornos

=================================================

LEITURA

this.data

=================================================

ESCRITA

this.data.trades

this.data.selectedDate

this.data.currentMonth

this.data.currentYear

this.data.performanceView

this.data.editingTradeId

this.data.propFirm

=================================================

DEPENDÊNCIAS

NÃO ENCONTRADO

=================================================

EFEITOS COLATERAIS

Atualiza State

=================================================

RESUMO

Entradas:

Parâmetros

Saídas:

Objetos

Retornos

Leitura:

this.data

Escrita:

this.data.trades

this.data.selectedDate

this.data.currentMonth

this.data.currentYear

this.data.performanceView

this.data.editingTradeId

this.data.propFirm

Dependências:

NÃO ENCONTRADO

Efeitos colaterais:

Atualiza State

=================================================

MÓDULO

storage

Responsabilidade observada

Ler, salvar, limpar e importar/exportar dados de estado via LocalStorage.

=================================================

ENTRADAS

State

Parâmetros

=================================================

SAÍDAS

Objetos

Retornos

=================================================

LEITURA

localStorage

State.get()

=================================================

ESCRITA

State.setTrades()

State.setSelectedDate()

State.setCurrentMonth()

State.setCurrentYear()

State.setPerformanceView()

localStorage

=================================================

DEPENDÊNCIAS

State

=================================================

EFEITOS COLATERAIS

Atualiza State

Salva Storage

=================================================

RESUMO

Entradas:

State

Parâmetros

Saídas:

Objetos

Retornos

Leitura:

localStorage

State.get()

Escrita:

State.setTrades()

State.setSelectedDate()

State.setCurrentMonth()

State.setCurrentYear()

State.setPerformanceView()

localStorage

Dependências:

State

Efeitos colaterais:

Atualiza State

Salva Storage

=================================================

MÓDULO

utils

Responsabilidade observada

Fornecer funções reutilizáveis de utilitários sem estado.

=================================================

ENTRADAS

Parâmetros

=================================================

SAÍDAS

Retornos

=================================================

LEITURA

Date

Number

structuredClone

new Date()

Array spread

Math.min

Math.max

=================================================

ESCRITA

NÃO ENCONTRADO

=================================================

DEPENDÊNCIAS

NÃO ENCONTRADO

=================================================

EFEITOS COLATERAIS

NENHUM

=================================================

RESUMO

Entradas:

Parâmetros

Saídas:

Retornos

Leitura:

Date

Number

structuredClone

new Date()

Array spread

Math.min

Math.max

Escrita:

NÃO ENCONTRADO

Dependências:

NÃO ENCONTRADO

Efeitos colaterais:

NENHUM

=================================================

MÓDULO

form

Responsabilidade observada

Registrar eventos do formulário, validar e serializar dados de trade.

=================================================

ENTRADAS

DOM

Parâmetros

formElement

data

=================================================

SAÍDAS

Objetos

Retornos

Eventos

=================================================

LEITURA

document.getElementById("tradeForm")
document.getElementById("resetForm")

=================================================

ESCRITA

DOM

=================================================

DEPENDÊNCIAS

FormEvents

FormValidation

FormSerializer

=================================================

EFEITOS COLATERAIS

Atualiza DOM

=================================================

RESUMO

Entradas:

DOM

Parâmetros

formElement

data

Saídas:

Objetos

Retornos

Eventos

Leitura:

document.getElementById("tradeForm")
document.getElementById("resetForm")

Escrita:

DOM

Dependências:

FormEvents

FormValidation

FormSerializer

Efeitos colaterais:

Atualiza DOM

=================================================

MÓDULO

events

Responsabilidade observada

Centralizar a emissão, registro e remoção de eventos customizados.

=================================================

ENTRADAS

DOM

eventName

callback

detail

=================================================

SAÍDAS

Eventos

=================================================

LEITURA

document

=================================================

ESCRITA

DOM

=================================================

DEPENDÊNCIAS

NÃO ENCONTRADO

=================================================

EFEITOS COLATERAIS

Emite evento

=================================================

RESUMO

Entradas:

DOM

eventName

callback

detail

Saídas:

Eventos

Leitura:

document

Escrita:

DOM

Dependências:

NÃO ENCONTRADO

Efeitos colaterais:

Emite evento

=================================================

MÓDULO

app

Responsabilidade observada

Inicializar e coordenar módulos da aplicação e registrar eventos globais.

=================================================

ENTRADAS

DOM

=================================================

SAÍDAS

Objetos

Retornos

=================================================

LEITURA

document

=================================================

ESCRITA

NÃO ENCONTRADO

=================================================

DEPENDÊNCIAS

Storage

Clock

Form

Calendar

History

KPI

Summary

Charts

Coach

PropFirm

=================================================

EFEITOS COLATERAIS

Inicia módulos

=================================================

RESUMO

Entradas:

DOM

Saídas:

Objetos

Retornos

Leitura:

document

Escrita:

NÃO ENCONTRADO

Dependências:

Storage

Clock

Form

Calendar

History

KPI

Summary

Charts

Coach

PropFirm

Efeitos colaterais:

Inicia módulos
