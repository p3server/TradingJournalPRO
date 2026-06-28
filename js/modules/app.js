/* ==========================================================
   TRADING JOURNAL PRO
   APP.JS
========================================================== */

import { History } from "./history.js";
import { Storage } from "./storage.js";
import { Clock } from "./clock.js";
import { Form } from "./form.js";

/*
    Os módulos abaixo serão adicionados conforme forem sendo
    desenvolvidos.

    import { Calendar } from "./calendar.js";
    import { History } from "./history.js";
    import { KPI } from "./kpi.js";
    import { Summary } from "./summary.js";
    import { Charts } from "./charts.js";
    import { Coach } from "./coach.js";
    import { PropFirm } from "./propFirm.js";
*/

/* ==========================================================
   APP
========================================================== */

export const App = {

    /* ======================================================
       INICIALIZAÇÃO
    ====================================================== */

    init() {

        console.clear();

        console.log("=======================================");
        console.log(" Trading Journal Pro");
        console.log(" Inicializando aplicação...");
        console.log("=======================================");

        // Carrega dados salvos
        Storage.load();

        // Inicia relógio
        Clock.start();

        // Inicializa formulário
        Form.init();

        // Registra eventos globais
        this.events();

        // Primeira atualização da interface
        this.refresh();

        console.log("Aplicação iniciada com sucesso.");

    },

    /* ======================================================
       REFRESH GERAL
    ====================================================== */

    refresh() {

        History.render();
        /*
            Conforme os módulos forem ficando prontos,
            eles serão chamados aqui.

            Calendar.render();
            KPI.render();
            Summary.render();
            Charts.render();
            Coach.render();
            PropFirm.render();
        */

    },

    /* ======================================================
       EVENTOS GLOBAIS
    ====================================================== */

    events() {

        document.addEventListener("trade:added", () => {

            this.refresh();

        });

        document.addEventListener("trade:updated", () => {

            this.refresh();

        });

        document.addEventListener("trade:removed", () => {

            this.refresh();

        });

        document.addEventListener("trade:duplicated", () => {

            this.refresh();

        });

    }

};

/* ==========================================================
   START
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});