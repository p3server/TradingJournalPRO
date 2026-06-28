/* ==========================================================
   TRADING JOURNAL PRO
   CLOCK.JS
========================================================== */

/*
    Responsabilidade:

    - Atualizar a data e a hora do Dashboard.
    - Não manipula nenhuma outra parte da aplicação.
*/

export const Clock = {

    interval: null,

    /* ======================================================
       INICIAR
    ====================================================== */

    start() {

        this.update();

        this.interval = setInterval(() => {

            this.update();

        }, 1000);

    },

    /* ======================================================
       PARAR
    ====================================================== */

    stop() {

        if (this.interval) {

            clearInterval(this.interval);

            this.interval = null;

        }

    },

    /* ======================================================
       ATUALIZAR
    ====================================================== */

    update() {

        const now = new Date();

        const currentDate = now.toLocaleDateString("pt-BR");

        const currentTime = now.toLocaleTimeString("pt-BR");

        const dateElement = document.getElementById("currentDate");

        const timeElement = document.getElementById("currentTime");

        if (dateElement) {

            dateElement.textContent = currentDate;

        }

        if (timeElement) {

            timeElement.textContent = currentTime;

        }

    }

};