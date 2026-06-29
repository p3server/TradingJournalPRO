/* ==========================================================
   TRADING JOURNAL PRO
   CALENDAR
   NAVIGATION.JS
========================================================== */

import { State } from "../state.js";
import { CalendarData } from "./data.js";
import { CalendarRender } from "./render.js";

export const CalendarNavigation = {

    /* ======================================================
       INICIALIZAÇÃO
    ====================================================== */

    init() {

        this.cache();

        this.events();

    },

    /* ======================================================
       CACHE
    ====================================================== */

    cache() {

        this.prevButton = document.getElementById("prevMonth");

        this.nextButton = document.getElementById("nextMonth");

        this.container = document.getElementById("calendar");

    },

    /* ======================================================
       EVENTOS
    ====================================================== */

    events() {

        if (this.prevButton) {

            this.prevButton.addEventListener(

                "click",

                () => this.previousMonth()

            );

        }

        if (this.nextButton) {

            this.nextButton.addEventListener(

                "click",

                () => this.nextMonth()

            );

        }

        if (this.container) {

            this.container.addEventListener(

                "click",

                (event) => this.dayClick(event)

            );

        }

    },

    /* ======================================================
       CLIQUE NO DIA
    ====================================================== */

    dayClick(event) {

        const cell = event.target.closest(".calendar-day");

        if (!cell) return;

        const date = cell.dataset.date;

        if (!date) return;

        this.selectDate(date);

    },

    /* ======================================================
       SELECIONAR DATA
    ====================================================== */

    selectDate(date) {

        CalendarData.setSelectedDate(date);

        CalendarRender.render();

        document.dispatchEvent(

            new CustomEvent(

                "calendar:daySelected",

                {

                    detail: {

                        date

                    }

                }

            )

        );

    },

    /* ======================================================
       MÊS ANTERIOR
    ====================================================== */

    previousMonth() {

        let month = State.currentMonth - 1;

        let year = State.currentYear;

        if (month < 0) {

            month = 11;

            year--;

        }

        CalendarData.setMonth(month);

        CalendarData.setYear(year);

        CalendarRender.render();

        document.dispatchEvent(

            new CustomEvent("calendar:monthChanged")

        );

    },

    /* ======================================================
       PRÓXIMO MÊS
    ====================================================== */

    nextMonth() {

        let month = State.currentMonth + 1;

        let year = State.currentYear;

        if (month > 11) {

            month = 0;

            year++;

        }

        CalendarData.setMonth(month);

        CalendarData.setYear(year);

        CalendarRender.render();

        document.dispatchEvent(

            new CustomEvent("calendar:monthChanged")

        );

    },

    /* ======================================================
       DESTRUIR
    ====================================================== */

    destroy() {

        /*

            Futuramente removeremos listeners,
            caso seja necessário desmontar
            completamente o componente.

        */

    }

};