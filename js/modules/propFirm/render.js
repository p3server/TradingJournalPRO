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

        this.updateValue(
            "prop-profit",
            this.formatCurrency(data.currentProfit)
        );

        this.updateValue(
            "prop-target",
            this.formatCurrency(data.remainingTarget)
        );

        this.updateValue(
            "prop-drawdown",
            this.formatCurrency(data.remainingDrawdown)
        );

        this.updateValue(
            "prop-days",
            data.tradingDays
        );

        this.updateValue(
            "prop-status",
            data.targetReached
                ? "Aprovado"
                : "Em Avaliação"
        );

        this.updateValue(
            "prop-daily-loss",
            data.dailyLossExceeded
                ? "Limite Excedido"
                : "OK"
        );

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