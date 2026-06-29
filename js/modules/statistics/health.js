/* ==========================================================
   TRADING JOURNAL PRO
   STATISTICS
   HEALTH.JS
========================================================== */

import { Performance } from "./performance.js";
import { Drawdown } from "./drawdown.js";

export const Health = {

    /* ======================================================
       MÉTRICAS
    ====================================================== */

    getMetrics() {

        return {

            healthScore: this.getScore(),

            healthStatus: this.getStatus()

        };

    },

    /* ======================================================
       HEALTH SCORE
    ====================================================== */

    getScore() {

        const winRate = Performance.getWinRate();

        const payoff = Performance.getPayoff();

        const profitFactor = Performance.getProfitFactor();

        const drawdown = Math.abs(

            Drawdown.getMaximum()

        );

        let score = 0;

        /* Win Rate */

        score += Math.min(winRate, 100) * 0.35;

        /* Payoff */

        score += Math.min(payoff * 20, 100) * 0.25;

        /* Profit Factor */

        score += Math.min(profitFactor * 25, 100) * 0.25;

        /* Drawdown */

        if (drawdown === 0) {

            score += 15;

        } else {

            score += Math.max(

                0,

                15 - (drawdown / 100)

            );

        }

        return Math.round(

            Math.min(score, 100)

        );

    },

    /* ======================================================
       STATUS
    ====================================================== */

    getStatus() {

        const score = this.getScore();

        if (score >= 90) return "Excelente";

        if (score >= 75) return "Muito Bom";

        if (score >= 60) return "Bom";

        if (score >= 45) return "Regular";

        return "Atenção";

    }

};