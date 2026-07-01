/* ==========================================================
   TRADING JOURNAL PRO
   FORM
   INDEX.JS
========================================================== */

import * as FormEvents from "./events.js";
import * as FormValidation from "./validation.js";
import * as FormSerializer from "./serializer.js";

/* ==========================================================
   FORM
========================================================== */

export const Form = {

    /* ======================================================
       INIT
    ====================================================== */

    init() {

        this.execute(
            FormEvents,
            [
                "init",
                "initFormEvents",
                "register",
                "start"
            ]
        );

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        // Reservado para futuras atualizações

    },

    /* ======================================================
       VALIDATE
    ====================================================== */

    validate(data) {

        return this.execute(
            FormValidation,
            [
                "validate",
                "validateTrade"
            ],
            data
        );

    },

    /* ======================================================
       SERIALIZE
    ====================================================== */

    serialize(formElement) {

        return this.execute(
            FormSerializer,
            [
                "serialize",
                "serializeForm"
            ],
            formElement
        );

    },

    /* ======================================================
       EXECUTOR
    ====================================================== */

    execute(module, methods, ...args) {

        for (const method of methods) {

            if (typeof module[method] === "function") {

                return module[method](...args);

            }

        }

        console.warn(
            "Form: nenhuma função encontrada em",
            module
        );

        return null;

    }

};