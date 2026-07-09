/* ==========================================================
   TRADING JOURNAL PRO
   SUMMARY
   INDEX.JS
========================================================== */

import * as MonthlySummary from "./monthly.js";
import * as YearlySummary from "./yearly.js";

import { State } from "../state.js";

/* ==========================================================
   SUMMARY
========================================================== */

export const Summary = {

    /* ======================================================
       INIT
    ====================================================== */

    init() {

        this.render();

    },

    /* ======================================================
       RENDER
    ====================================================== */

    render() {

        const trades = State.getTrades();

        const monthly = this.execute(
            MonthlySummary,
            [
                "render",
                "renderMonthly",
                "calculate",
                "calculateMonthlySummary",
                "generate"
            ],
            trades
        );

        const yearly = this.execute(
            YearlySummary,
            [
                "render",
                "renderYearly",
                "calculate",
                "calculateYearlySummary",
                "generate"
            ],
            trades
        );

        this.renderSummary(monthly, yearly);

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        this.render();

    },

    /* ======================================================
       RENDER SUMMARY
    ====================================================== */

    renderSummary(monthly, yearly) {

        const positiveDays = document.getElementById("positiveDays");
        const negativeDays = document.getElementById("negativeDays");
        const offDays = document.getElementById("offDays");
        const tradeCount = document.getElementById("tradeCount");
        const bestDay = document.getElementById("bestDay");
        const worstDay = document.getElementById("worstDay");

        if (positiveDays) {
            positiveDays.textContent = monthly?.wins ?? 0;
        }

        if (negativeDays) {
            negativeDays.textContent = monthly?.losses ?? 0;
        }

        if (offDays) {
            offDays.textContent = 0;
        }

        if (tradeCount) {
            tradeCount.textContent = monthly?.totalTrades ?? 0;
        }

        if (bestDay) {
            bestDay.textContent = monthly?.profit > 0
                ? `$${Number(monthly.profit).toFixed(2)}`
                : "$0.00";
        }

        if (worstDay) {
            worstDay.textContent = monthly?.profit < 0
                ? `$${Number(Math.abs(monthly.profit)).toFixed(2)}`
                : "$0.00";
        }

    },

    /* ======================================================
       EXECUTOR
    ====================================================== */

    execute(module, methods, trades) {

        for (const method of methods) {

            if (typeof module[method] === "function") {

                return module[method](trades);

            }

        }

        console.warn(
            "Summary: nenhuma função encontrada em",
            module
        );

        return null;

    }

};