=================================================

# FLUXO

Inicialização da aplicação

=================================================

## PONTO DE ENTRADA

DOMContentLoaded

↓

App.init()

=================================================

## SEQUÊNCIA COMPLETA

DOMContentLoaded

↓

App.init()

↓

Storage.load()

↓

Clock.start()

↓

Form.init()

↓

Calendar.init()

↓

History.init()

↓

KPI.init()

↓

Summary.init()

↓

Charts.init()

↓

Coach.init()

↓

PropFirm.init()

↓

this.registerEvents()

↓

this.refresh()

↓

console.log("Aplicação inicializada.")

=================================================

## MÓDULOS ENVOLVIDOS

App

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

## STATE

Leitura

NENHUMA

Escrita

NENHUMA

=================================================

## STORAGE

Leitura

Storage.load()

Escrita

NENHUMA

=================================================

## EVENTOS

Liste somente os eventos emitidos durante este fluxo.

NENHUM

=================================================

## DOM

Elementos atualizados

NENHUM

Renderizações executadas

NENHUM

=================================================

## FIM DO FLUXO

console.log("Aplicação inicializada.")
