/* ==========================================================
   TRADING JOURNAL PRO
   FORM
   EVENTS.JS
========================================================== */

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
   CLEAR ERROR
========================================================== */

function clearFieldError(field) {

    field.classList.remove("error");

}