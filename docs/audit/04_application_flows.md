=================================================

# FLUXO

Cadastro de Trade

=================================================

## INÍCIO DO FLUXO

Clique no botão

submit do formulário

addEventListener

=================================================

## SEQUÊNCIA COMPLETA

Usuário

↓

Clique no botão

↓

submit do formulário

↓

addEventListener

↓

Form

↓

Validação

↓

Trade.add()

↓

TradeValidation.validate()

↓

State

↓

Storage.save()

↓

Events.emit()

↓

App.refresh()

↓

Calendar.refresh()

↓

History.refresh()

↓

KPI.refresh()

↓

Summary.refresh()

↓

Charts.refresh()

↓

Coach.refresh()

↓

PropFirm.refresh()

=================================================

## MÓDULOS ENVOLVIDOS

Form

Trade

State

Storage

Events

App

Calendar

History

KPI

Summary

Charts

Coach

PropFirm

=================================================

## STATE

Leituras

NÃO ENCONTRADO

Escritas

State.trades.push(newTrade)

Propriedades alteradas

State.trades

=================================================

## STORAGE

Leitura

NÃO ENCONTRADO

Escrita

Storage.save()

Método utilizado

save()

=================================================

## EVENTOS

Evento emitido

trade:added

Quem emite

Events.emit()

Quem escuta

App.registerEvents()

=================================================

## DOM

Elementos alterados

NÃO ENCONTRADO

Renderizações executadas

NÃO ENCONTRADO

=================================================

## VALIDAÇÕES

TradeValidation.validate()

=================================================

## FIM DO FLUXO

App.refresh()

=================================================

# FLUXO

Edição de Trade

=================================================

## INÍCIO DO FLUXO

Clique no botão Editar

trade:edit

CustomEvent

=================================================

## SEQUÊNCIA COMPLETA

Usuário

↓

Clique no botão Editar

↓

trade:edit

↓

CustomEvent

↓

History.editTrade()

↓

Trade.update()

↓

TradeValidation.validate()

↓

State

↓

Storage.save()

↓

Events.emit()

↓

App.refresh()

↓

Calendar.refresh()

↓

History.refresh()

↓

KPI.refresh()

↓

Summary.refresh()

↓

Charts.refresh()

↓

Coach.refresh()

↓

PropFirm.refresh()

=================================================

## MÓDULOS ENVOLVIDOS

History

Trade

State

Storage

Events

App

Calendar

KPI

Summary

Charts

Coach

PropFirm

=================================================

## STATE

Leituras

NÃO ENCONTRADO

Escritas

State.trades[index] = updatedTrade

Propriedades alteradas

State.trades

=================================================

## STORAGE

Leitura

NÃO ENCONTRADO

Escrita

Storage.save()

Método utilizado

save()

=================================================

## EVENTOS

Evento emitido

trade:updated

Quem emite

Events.emit()

Quem escuta

App.registerEvents()

=================================================

## DOM

Elementos alterados

NÃO ENCONTRADO

Renderizações executadas

NÃO ENCONTRADO

=================================================

## VALIDAÇÕES

TradeValidation.validate()

=================================================

## FIM DO FLUXO

App.refresh()

=================================================

# FLUXO

Exclusão de Trade

=================================================

## INÍCIO DO FLUXO

NÃO ENCONTRADO

=================================================

## SEQUÊNCIA COMPLETA

Usuário

↓

NÃO ENCONTRADO

↓

deleteTrade(id)

↓

Trade.remove(id)

↓

State.trades = State.trades.filter(...)

↓

Storage.save()

↓

Events.emit("trade:removed", id)

↓

App.refresh()

↓

Calendar.refresh()

↓

History.refresh()

↓

KPI.refresh()

↓

Summary.refresh()

↓

Charts.refresh()

↓

Coach.refresh()

↓

PropFirm.refresh()

=================================================

## MÓDULOS ENVOLVIDOS

History

Trade

State

Storage

Events

App

Calendar

KPI

Summary

Charts

Coach

PropFirm

=================================================

## STATE

Leituras

State.trades.length

Escritas

State.trades = State.trades.filter(...)

Propriedades alteradas

State.trades

=================================================

## STORAGE

Leitura

NÃO ENCONTRADO

Escrita

Storage.save()

Método utilizado

save()

=================================================

## EVENTOS

Evento emitido

trade:removed

Quem emite

Events.emit()

Quem escuta

App.registerEvents()

=================================================

## DOM

Elementos alterados

NÃO ENCONTRADO

Renderizações executadas

NÃO ENCONTRADO

=================================================

## VALIDAÇÕES

NENHUMA

=================================================

## FIM DO FLUXO

PropFirm.refresh()

=================================================

# FLUXO

Refresh da Aplicação

=================================================

## RESPONSÁVEL PELO REFRESH

Quem chama App.refresh()

App.init()

App.registerEvents()

Quem pode disparar esse refresh

trade:added

trade:updated

trade:removed

trade:duplicated

=================================================

## SEQUÊNCIA COMPLETA

App.refresh()

↓

Calendar.refresh()

↓

History.refresh()

↓

KPI.refresh()

↓

Summary.refresh()

↓

Charts.refresh()

↓

Coach.refresh()

↓

PropFirm.refresh()

=================================================

## MÓDULOS ENVOLVIDOS

App

Calendar

History

KPI

Summary

Charts

Coach

PropFirm

=================================================

## EVENTOS QUE DISPARAM O REFRESH

Evento

trade:added

Quem emite

Events.emit()

Quem recebe

App.registerEvents()

Evento

trade:updated

Quem emite

Events.emit()

Quem recebe

App.registerEvents()

Evento

trade:removed

Quem emite

Events.emit()

Quem recebe

App.registerEvents()

Evento

trade:duplicated

Quem emite

Events.emit()

Quem recebe

App.registerEvents()

=================================================

## STATE

Leitura

State.getTrades()

Escrita

NÃO ENCONTRADO

Nenhuma alteração

NÃO ENCONTRADO

=================================================

## STORAGE

Leitura

NÃO ENCONTRADO

Escrita

NÃO ENCONTRADO

Nenhum acesso

NÃO ENCONTRADO

=================================================

## DOM

Quais regiões da interface são atualizadas

NÃO ENCONTRADO

Quais módulos renderizam elementos

NÃO ENCONTRADO

=================================================

## FIM DO FLUXO

PropFirm.refresh()

=================================================

# FLUXO

Calendário

=================================================

## EVENTOS DE ENTRADA

### Seleção de um dia

Evento

calendar:daySelected

Função chamada

CalendarNavigation.selectDate()

Primeiro método executado

CalendarData.setSelectedDate()

### Troca de mês

Evento

calendar:monthChanged

Função chamada

CalendarNavigation.previousMonth()

CalendarNavigation.nextMonth()

Primeiro método executado

CalendarData.setMonth()

=================================================

## FLUXO — SELEÇÃO DE DIA

Usuário

↓

Clique no dia

↓

CalendarNavigation.dayClick()

↓

CalendarNavigation.selectDate()

↓

CalendarData.setSelectedDate()

↓

CalendarRender.render()

↓

document.dispatchEvent(new CustomEvent("calendar:daySelected"))

↓

App.refresh()

=================================================

## FLUXO — TROCA DE MÊS

Usuário

↓

Clique no botão anterior/próximo

↓

CalendarNavigation.previousMonth()

CalendarNavigation.nextMonth()

↓

CalendarData.setMonth()

↓

CalendarData.setYear()

↓

CalendarRender.render()

↓

document.dispatchEvent(new CustomEvent("calendar:monthChanged"))

=================================================

## STATE

### Seleção de dia

Leituras

NÃO ENCONTRADO

Escritas

CalendarData.setSelectedDate()

Propriedades alteradas

State.selectedDate

### Troca de mês

Leituras

NÃO ENCONTRADO

Escritas

CalendarData.setMonth()

CalendarData.setYear()

Propriedades alteradas

State.currentMonth

State.currentYear

=================================================

## EVENTOS

Evento

calendar:daySelected

Quem emite

CalendarNavigation.selectDate()

Quem escuta

NÃO ENCONTRADO

Evento

calendar:monthChanged

Quem emite

CalendarNavigation.previousMonth()

CalendarNavigation.nextMonth()

Quem escuta

NÃO ENCONTRADO

=================================================

## MÓDULOS ENVOLVIDOS

CalendarNavigation

CalendarData

CalendarRender

State

App

=================================================

## DOM

Elementos atualizados

calendar

monthLabel

Regiões renderizadas

CalendarRender.render()

=================================================

## FIM DO FLUXO

Seleção de dia

CalendarRender.render()

Troca de mês

CalendarRender.render()
