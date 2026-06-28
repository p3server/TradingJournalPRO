/* ==========================================================
   TRADING JOURNAL PRO
   TRADE.JS
========================================================== */

import { State } from "./state.js";
import { Storage } from "./storage.js";
import { Utils } from "./utils.js";

/*
    Responsabilidade:

    - Manipular os trades.
    - Não renderiza HTML.
    - Não acessa elementos da página.
*/

/* ==========================================================
   TRADE
========================================================== */

export const Trade = {

    /* ======================================================
       CONSULTAS
    ====================================================== */

    getAll() {

        return Utils.cloneArray(State.getTrades());

    },

    getById(id) {

        return State.getTrades().find(

            trade => trade.id === id

        );

    },

    getByDate(date) {

        return State.getTrades().filter(

            trade => trade.date === date

        );

    },

    getByMonth(month, year) {

        return State.getTrades().filter(trade => {

            const d = new Date(trade.date);

            return (

                d.getMonth() === month &&

                d.getFullYear() === year

            );

        });

    },

    getByYear(year) {

        return State.getTrades().filter(trade =>

            new Date(trade.date).getFullYear() === year

        );

    },

    /* ======================================================
       CADASTRO
    ====================================================== */

    add(data) {

        const trade = {

            id: Utils.generateId(),

            date: data.date,

            account: data.account,

            market: data.market,

            asset: data.asset,

            setup: data.setup,

            side: data.side,

            contracts: Number(data.contracts),

            result: Number(data.result),

            notes: data.notes

        };

        State.getTrades().push(trade);

        Storage.save();

        document.dispatchEvent(

            new CustomEvent("trade:added", {

                detail: trade

            })

        );

        return trade;

    },

    /* ======================================================
       EDIÇÃO
    ====================================================== */

    update(id, updatedData) {

        const trade = this.getById(id);

        if (!trade) return false;

        Object.assign(trade, updatedData);

        Storage.save();

        document.dispatchEvent(

            new CustomEvent("trade:updated", {

                detail: trade

            })

        );

        return true;

    },

    /* ======================================================
       REMOÇÃO
    ====================================================== */

    remove(id) {

        const trades = State.getTrades();

        const index = trades.findIndex(

            trade => trade.id === id

        );

        if (index === -1) return false;

        trades.splice(index, 1);

        Storage.save();

        document.dispatchEvent(

            new CustomEvent("trade:removed", {

                detail: id

            })

        );

        return true;

    },

    /* ======================================================
       DUPLICAR
    ====================================================== */

    duplicate(id) {

        const trade = this.getById(id);

        if (!trade) return false;

        const copy = {

            ...trade,

            id: Utils.generateId()

        };

        State.getTrades().push(copy);

        Storage.save();

        document.dispatchEvent(

            new CustomEvent("trade:duplicated", {

                detail: copy

            })

        );

        return copy;

    },

    /* ======================================================
       ESTATÍSTICAS DO DIA
    ====================================================== */

    getDayData(date) {

        const trades = this.getByDate(date);

        const result = Utils.sumResults(trades);

        return {

            trades,

            count: trades.length,

            result,

            positive: result > 0,

            negative: result < 0,

            neutral: result === 0

        };

    }

};