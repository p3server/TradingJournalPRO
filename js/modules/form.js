/* ==========================================================
   TRADING JOURNAL PRO
   FORM.JS
========================================================== */

import { Trade } from "./trade.js";
import { Utils } from "./utils.js";

/*
    Responsabilidade:

    - Controlar o formulário de cadastro.
    - Ler os campos.
    - Validar.
    - Enviar para Trade.
*/

export const Form = {

    /* ======================================================
       INICIAR
    ====================================================== */

    init() {

        const form = document.getElementById("tradeForm");

        if (!form) return;

        form.addEventListener("submit", (event) => {

            event.preventDefault();

            this.submit();

        });

        const dateInput = document.getElementById("tradeDate");

        if (dateInput) {

            dateInput.value = Utils.today();

        }

    },

    /* ======================================================
       ENVIAR FORMULÁRIO
    ====================================================== */

    submit() {

        const trade = {

            date: document.getElementById("tradeDate").value,

            account: document.getElementById("account").value,

            market: document.getElementById("market").value.trim(),

            asset: document.getElementById("asset").value.trim(),

            setup: document.getElementById("setup").value.trim(),

            side: document.getElementById("side").value,

            contracts: Number(

                document.getElementById("contracts").value

            ),

            result: Number(

                document.getElementById("result").value

            ),

            notes: document.getElementById("notes").value.trim()

        };

        if (!this.validate(trade)) {

            return;

        }

        Trade.add(trade);

        this.clear();

    },

    /* ======================================================
       VALIDAÇÃO
    ====================================================== */

    validate(trade) {

        if (!trade.date) {

            alert("Informe a data.");

            return false;

        }

        if (!trade.market) {

            alert("Informe o mercado.");

            return false;

        }

        if (!trade.asset) {

            alert("Informe o ativo.");

            return false;

        }

        if (!trade.setup) {

            alert("Informe o setup.");

            return false;

        }

        if (trade.contracts <= 0) {

            alert("Informe a quantidade de contratos.");

            return false;

        }

        if (isNaN(trade.result)) {

            alert("Informe o resultado.");

            return false;

        }

        return true;

    },

    /* ======================================================
       LIMPAR
    ====================================================== */

    clear() {

        document.getElementById("tradeForm").reset();

        document.getElementById("tradeDate").value = Utils.today();

    },

    /* ======================================================
       PREENCHER (EDIÇÃO FUTURA)
    ====================================================== */

    fill(trade) {

        document.getElementById("tradeDate").value = trade.date;

        document.getElementById("account").value = trade.account;

        document.getElementById("market").value = trade.market;

        document.getElementById("asset").value = trade.asset;

        document.getElementById("setup").value = trade.setup;

        document.getElementById("side").value = trade.side;

        document.getElementById("contracts").value = trade.contracts;

        document.getElementById("result").value = trade.result;

        document.getElementById("notes").value = trade.notes;

    }

};