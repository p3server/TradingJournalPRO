/* ==========================================================
   TRADING JOURNAL PRO
   PROPFIRM
   RENDER.JS
========================================================== */

import { PropFirmCalculations } from "./calculations.js";

export const PropFirmRender = {

    /* ======================================================
       RENDERIZA O PAINEL
    ====================================================== */

    render() {

        const data = PropFirmCalculations.getStatus();
        const panel = document.getElementById("propFirmPanel");

        if (!panel) {

            return;

        }

        panel.innerHTML = `
            <div>Lucro atual: ${this.formatCurrency(data.currentProfit)}</div>
            <div>Meta restante: ${this.formatCurrency(data.remainingTarget)}</div>
            <div>Drawdown restante: ${this.formatCurrency(data.remainingDrawdown)}</div>
            <div>Dias operados: ${data.tradingDays}</div>
            <div>Status: ${data.targetReached ? "Aprovado" : "Em Avaliação"}</div>
            <div>Limite diário: ${data.dailyLossExceeded ? "Limite Excedido" : "OK"}</div>
        `;

    },

    /* ======================================================
       ATUALIZA UM ELEMENTO
    ====================================================== */

    updateValue(id, value) {

        const element = document.getElementById(id);

        if (!element) {

            return;

        }

        element.textContent = value;

    },

    /* ======================================================
       FORMATA MOEDA
    ====================================================== */

    formatCurrency(value) {

        return Number(value).toLocaleString(

            "pt-BR",

            {

                style: "currency",

                currency: "BRL"

            }

        );

    }

};