/* ==========================================================
   TRADING JOURNAL PRO
   STATISTICS
   PERFORMANCE.JS
========================================================== */

import { StatisticsHelpers } from "./helpers.js";

export const Performance = {

    /* ======================================================
       MÉTRICAS DE PERFORMANCE
    ====================================================== */

    getMetrics() {

        const trades = StatisticsHelpers.getTrades();

        const winners = StatisticsHelpers.getWinningTrades(trades);

        const losers = StatisticsHelpers.getLosingTrades(trades);

        return {

            totalTrades: trades.length,

            winningTrades: winners.length,

            losingTrades: losers.length,

            breakEvenTrades: this.getBreakEvenTrades(),

            winRate: this.getWinRate(),

            payoff: this.getPayoff(),

            profitFactor: this.getProfitFactor()

        };

    },

    /* ======================================================
       TRADES EMPATADOS
    ====================================================== */

    getBreakEvenTrades() {

        return StatisticsHelpers.getTrades().filter(

            trade => Number(trade.result) === 0

        ).length;

    },

    /* ======================================================
       WIN RATE
    ====================================================== */

    getWinRate() {

        const trades = StatisticsHelpers.getTrades();

        if (!trades.length) return 0;

        const winners = StatisticsHelpers.getWinningTrades(trades);

        return Number(

            ((winners.length / trades.length) * 100).toFixed(2)

        );

    },

    /* ======================================================
       PAYOFF
    ====================================================== */

    getPayoff() {

        const winners = StatisticsHelpers.getWinningTrades(

            StatisticsHelpers.getTrades()

        );

        const losers = StatisticsHelpers.getLosingTrades(

            StatisticsHelpers.getTrades()

        );

        if (!winners.length || !losers.length) return 0;

        const avgWin =

            StatisticsHelpers.sumResults(winners) /

            winners.length;

        const avgLoss =

            Math.abs(

                StatisticsHelpers.sumResults(losers)

            ) /

            losers.length;

        if (avgLoss === 0) return 0;

        return Number(

            (avgWin / avgLoss).toFixed(2)

        );

    },

    /* ======================================================
       PROFIT FACTOR
    ====================================================== */

    getProfitFactor() {

        const winners = StatisticsHelpers.getWinningTrades(

            StatisticsHelpers.getTrades()

        );

        const losers = StatisticsHelpers.getLosingTrades(

            StatisticsHelpers.getTrades()

        );

        const grossProfit =

            StatisticsHelpers.sumResults(winners);

        const grossLoss =

            Math.abs(

                StatisticsHelpers.sumResults(losers)

            );

        if (grossLoss === 0) return 0;

        return Number(

            (grossProfit / grossLoss).toFixed(2)

        );

    }

};