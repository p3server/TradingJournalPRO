/* ==========================================================
   TRADING JOURNAL PRO
   PROPFIRM
   CALCULATIONS.JS
========================================================== */

import { Statistics } from "../statistics/index.js";
import { Trade } from "../trade/index.js";
import { PropFirmRules } from "./rules.js";

export const PropFirmCalculations = {

    /* ======================================================
       LUCRO ATUAL
    ====================================================== */

    getCurrentProfit() {

        return Statistics.getDashboard().profit.total;

    },

    /* ======================================================
       META RESTANTE
    ====================================================== */

    getRemainingTarget() {

        const remaining =

            PropFirmRules.profitTarget -

            this.getCurrentProfit();

        return Math.max(0, remaining);

    },

    /* ======================================================
       META ATINGIDA
    ====================================================== */

    isTargetReached() {

        return this.getCurrentProfit() >=

            PropFirmRules.profitTarget;

    },

    /* ======================================================
       DRAWDOWN ATUAL
    ====================================================== */

    getCurrentDrawdown() {

        return Statistics.getDashboard()

            .drawdown.current;

    },

    /* ======================================================
       DRAWDOWN RESTANTE
    ====================================================== */

    getRemainingDrawdown() {

        return Math.max(

            0,

            PropFirmRules.maxDrawdown +

            this.getCurrentDrawdown()

        );

    },

    /* ======================================================
       LIMITE DIÁRIO
    ====================================================== */

    getTodayResult() {

        return Statistics.getDashboard()

            .profit.today;

    },

    isDailyLossExceeded() {

        return this.getTodayResult() <=

            PropFirmRules.dailyLossLimit;

    },

    /* ======================================================
       DIAS OPERADOS
    ====================================================== */

    getTradingDays() {

        const dates = new Set();

        Trade.getAll().forEach(trade => {

            dates.add(trade.date);

        });

        return dates.size;

    },

    hasMinimumDays() {

        return this.getTradingDays() >=

            PropFirmRules.minimumTradingDays;

    },

    /* ======================================================
       STATUS GERAL
    ====================================================== */

    getStatus() {

        return {

            currentProfit:

                this.getCurrentProfit(),

            remainingTarget:

                this.getRemainingTarget(),

            targetReached:

                this.isTargetReached(),

            currentDrawdown:

                this.getCurrentDrawdown(),

            remainingDrawdown:

                this.getRemainingDrawdown(),

            dailyLossExceeded:

                this.isDailyLossExceeded(),

            tradingDays:

                this.getTradingDays(),

            minimumDaysReached:

                this.hasMinimumDays()

        };

    }

};