/* ==========================================================
   TRADING JOURNAL PRO
   COACH
   INDEX.JS
========================================================== */

import { generateAlerts } from "./alerts.js";
import { generateInsights } from "./insights.js";
import { calculateScore } from "./score.js";

import { State } from "../state.js";

/* ==========================================================
   COACH
========================================================== */

export const Coach = {

    /* ======================================================
       INIT
    ====================================================== */

    init() {

        this.refresh();

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        const dashboard = this.getDashboard(

            State.getTrades()

        );

        this.renderDashboard(dashboard);

        return dashboard;

    },

    /* ======================================================
       RENDER DASHBOARD
    ====================================================== */

    renderDashboard(dashboard) {

        const panel = document.getElementById("coachPanel");

        if (!panel) {

            return;

        }

        panel.innerHTML = `
            <div>Score: ${dashboard.score ?? 0}</div>
            <div>Alertas: ${dashboard.alerts?.length ?? 0}</div>
            <div>Insights: ${dashboard.insights?.length ?? 0}</div>
        `;

    },

    /* ======================================================
       DASHBOARD
    ====================================================== */

    getDashboard(trades = []) {

        return {

            score: calculateScore(trades),

            alerts: generateAlerts(trades),

            insights: generateInsights(trades)

        };

    },

    /* ======================================================
       SCORE
    ====================================================== */

    getScore(trades = []) {

        return calculateScore(trades);

    },

    /* ======================================================
       ALERTAS
    ====================================================== */

    getAlerts(trades = []) {

        return generateAlerts(trades);

    },

    /* ======================================================
       INSIGHTS
    ====================================================== */

    getInsights(trades = []) {

        return generateInsights(trades);

    }

};