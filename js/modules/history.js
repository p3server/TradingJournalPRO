/* ==========================================================
   TRADING JOURNAL PRO
   HISTORY.JS
========================================================== */

import { Trade } from "./trade.js";
import { Utils } from "./utils.js";

export const History = {

    /* ======================================================
       RENDER
    ====================================================== */

    render() {

        const tbody = document.getElementById("historyTable");

        if (!tbody) return;

        tbody.innerHTML = "";

        const trades = Trade.getAll();

        trades
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .forEach(trade => {

                tbody.appendChild(

                    this.createRow(trade)

                );

            });

    },

    /* ======================================================
       LINHA
    ====================================================== */

    createRow(trade) {

        const tr = document.createElement("tr");

        const color = trade.result >= 0

            ? "positive"

            : "negative";

        tr.innerHTML = `

            <td>${Utils.formatDate(trade.date)}</td>

            <td>${trade.account}</td>

            <td>${trade.market}</td>

            <td>${trade.asset}</td>

            <td>${trade.setup}</td>

            <td class="${color}">
                ${Utils.formatCurrency(trade.result)}
            </td>

            <td>

                <button
                    class="btn-delete"
                    data-id="${trade.id}"
                >
                    Excluir
                </button>

            </td>

        `;

        const button = tr.querySelector(".btn-delete");

        button.addEventListener("click", () => {

            if (!confirm("Excluir este trade?")) return;

            Trade.remove(trade.id);

        });

        return tr;

    }

};