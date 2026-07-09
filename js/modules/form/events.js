/* ==========================================================
   TRADING JOURNAL PRO
   FORM
   EVENTS.JS
========================================================== */

import { validateForm } from "./validation.js";
import { serializeForm } from "./serializer.js";
import { Trade } from "../trade/index.js";

/*
    Responsabilidade:

    - Registrar todos os eventos do formulário.
    - Não valida dados.
    - Não serializa dados.
    - Não salva trades.
    - Não manipula Storage.
*/

export function initFormEvents() {

    const form = document.getElementById("tradeForm");

    if (!form) {

        console.warn("Form: formulário não encontrado.");

        return;

    }

    registerInputEvents(form);

    registerResetButton();

    registerSubmitHandler(form);

}

/* ==========================================================
   INPUTS
========================================================== */

function registerInputEvents(form) {

    const fields = form.querySelectorAll(

        "input, select, textarea"

    );

    fields.forEach(field => {

        field.addEventListener(

            "input",

            () => {

                clearFieldError(field);

            }

        );

        field.addEventListener(

            "change",

            () => {

                clearFieldError(field);

            }

        );

    });

}

/* ==========================================================
   RESET
========================================================== */

function registerResetButton() {

    const button = document.getElementById("resetForm");

    if (!button) {

        return;

    }

    button.addEventListener(

        "click",

        () => {

            const form = document.getElementById("tradeForm");

            if (form) {

                form.reset();

            }

        }

    );

}

/* ==========================================================
   SUBMIT
========================================================== */

function registerSubmitHandler(form) {

    form.addEventListener(

        "submit",

        event => handleSubmit(event)

    );

}

function handleSubmit(event) {

    event.preventDefault();

    const form = event.currentTarget;

    const fields = {};

    form.querySelectorAll("input, select, textarea").forEach(control => {

        const key = control.name || control.id;

        if (key) {

            fields[key] = control.value;

        }

    });

    const validation = validateForm(fields);

    if (!validation.valid) {

        return null;

    }

    const trade = serializeForm(form);

    return Trade.add(trade);

}

/* ==========================================================
   CLEAR ERROR
========================================================== */

function clearFieldError(field) {

    field.classList.remove("error");

}