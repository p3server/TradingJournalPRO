/* ==========================================================
   TRADING JOURNAL PRO
   CALENDAR
   INDEX.JS
========================================================== */

import { CalendarRender } from "./render.js";
import { CalendarNavigation } from "./navigation.js";

export const Calendar = {

    /* ======================================================
       INICIALIZAÇÃO
    ====================================================== */

    init() {

        CalendarRender.cache();

        CalendarNavigation.init();

        this.render();

    },

    /* ======================================================
       RENDER
    ====================================================== */

    render() {

        CalendarRender.render();

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        this.render();

    },

    /* ======================================================
       DESTRUIR
    ====================================================== */

    destroy() {

        CalendarRender.destroy();

    }

};