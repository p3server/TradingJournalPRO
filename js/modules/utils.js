/* ==========================================================
   TRADING JOURNAL PRO
   UTILS.JS
========================================================== */

/*
    Responsabilidade:

    - Funções reutilizáveis.
    - Não possui estado.
    - Não acessa LocalStorage.
    - Não manipula HTML.
*/

export const Utils = {

    /* ======================================================
       ID ÚNICO
    ====================================================== */

    generateId() {

        return Date.now();

    },

    /* ======================================================
       DATA ATUAL (YYYY-MM-DD)
    ====================================================== */

    today() {

        return new Date().toISOString().split("T")[0];

    },

    /* ======================================================
       FORMATAR DATA
    ====================================================== */

    formatDate(date) {

        if (!date) return "";

        return new Date(date).toLocaleDateString("pt-BR");

    },

    /* ======================================================
       FORMATAR MOEDA
    ====================================================== */

    formatCurrency(value) {

        const number = Number(value || 0);

        return number.toLocaleString("pt-BR", {

            style: "currency",

            currency: "USD"

        });

    },

    /* ======================================================
       FORMATAR NÚMERO
    ====================================================== */

    formatNumber(value, decimals = 2) {

        return Number(value || 0).toFixed(decimals);

    },

    /* ======================================================
       CLONAR ARRAY
    ====================================================== */

    cloneArray(array) {

        return [...array];

    },

    /* ======================================================
       CLONAR OBJETO
    ====================================================== */

    cloneObject(object) {

        return structuredClone(object);

    },

    /* ======================================================
       ORDENAR TRADES POR DATA
    ====================================================== */

    sortTrades(trades) {

        return [...trades].sort(

            (a, b) => new Date(b.date) - new Date(a.date)

        );

    },

    /* ======================================================
       SOMAR RESULTADOS
    ====================================================== */

    sumResults(trades) {

        return trades.reduce(

            (total, trade) => total + Number(trade.result),

            0

        );

    },

    /* ======================================================
       CONTAR WINS
    ====================================================== */

    countWins(trades) {

        return trades.filter(

            trade => trade.result > 0

        ).length;

    },

    /* ======================================================
       CONTAR LOSSES
    ====================================================== */

    countLosses(trades) {

        return trades.filter(

            trade => trade.result < 0

        ).length;

    },

    /* ======================================================
       PORCENTAGEM
    ====================================================== */

    percentage(value, total) {

        if (total === 0) return 0;

        return (value / total) * 100;

    },

    /* ======================================================
       MESES
    ====================================================== */

    monthName(month) {

        const months = [

            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"

        ];

        return months[month];

    },

    /* ======================================================
       DIAS DA SEMANA
    ====================================================== */

    weekDayName(day) {

        const days = [

            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado"

        ];

        return days[day];

    },

    /* ======================================================
       LIMITE
    ====================================================== */

    clamp(value, min, max) {

        return Math.min(

            Math.max(value, min),

            max

        );

    }

};