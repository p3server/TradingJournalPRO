/* ==========================================================
   TRADING JOURNAL PRO
   STATISTICS
   DRAWDOWN.JS
========================================================== */

import { StatisticsHelpers } from "./helpers.js";

export const Drawdown = {

    /* ======================================================
       MÉTRICAS
    ====================================================== */

    getMetrics() {

        return {

            currentDrawdown: this.getCurrent(),

            maxDrawdown: this.getMaximum(),

            peakEquity: this.getPeakEquity()

        };

    },

    /* ======================================================
       MAIOR PICO DA CURVA
    ====================================================== */

    getPeakEquity() {

        const trades = StatisticsHelpers.getTrades();

        let equity = 0;

        let peak = 0;

        trades.forEach(trade => {

            equity += Number(trade.result || 0);

            if (equity > peak) {

                peak = equity;

            }

        });

        return Number(peak.toFixed(2));

    },

    /* ======================================================
       DRAWDOWN ATUAL
    ====================================================== */

    getCurrent() {

        const trades = StatisticsHelpers.getTrades();

        let equity = 0;

        let peak = 0;

        let drawdown = 0;

        trades.forEach(trade => {

            equity += Number(trade.result || 0);

            if (equity > peak) {

                peak = equity;

            }

            drawdown = equity - peak;

        });

        return Number(drawdown.toFixed(2));

    },

    /* ======================================================
       MAIOR DRAWDOWN
    ====================================================== */

    getMaximum() {

        const trades = StatisticsHelpers.getTrades();

        let equity = 0;

        let peak = 0;

        let maxDrawdown = 0;

        trades.forEach(trade => {

            equity += Number(trade.result || 0);

            if (equity > peak) {

                peak = equity;

            }

            const currentDrawdown = equity - peak;

            if (currentDrawdown < maxDrawdown) {

                maxDrawdown = currentDrawdown;

            }

        });

        return Number(maxDrawdown.toFixed(2));

    }

};