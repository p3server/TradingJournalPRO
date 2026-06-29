/* ==========================================================
   TRADING JOURNAL PRO
   CALENDAR
   DATA.JS
========================================================== */

import { State } from "../state.js";
import { Trade } from "../trade.js";

export const CalendarData = {

    /* ======================================================
       DATA FORMATADA (YYYY-MM-DD)
    ====================================================== */

    formatDate(year, month, day) {

        return [
            year,
            String(month + 1).padStart(2, "0"),
            String(day).padStart(2, "0")
        ].join("-");

    },

    /* ======================================================
       DATA ATUAL
    ====================================================== */

    getToday() {

        return new Date().toISOString().split("T")[0];

    },

    /* ======================================================
       DIA ATUAL
    ====================================================== */

    isToday(date) {

        return date === this.getToday();

    },

    /* ======================================================
       DIA SELECIONADO
    ====================================================== */

    isSelected(date) {

        return State.selectedDate === date;

    },

    /* ======================================================
       PRIMEIRO DIA DO MÊS
    ====================================================== */

    getFirstWeekDay(year = State.currentYear, month = State.currentMonth) {

        return new Date(year, month, 1).getDay();

    },

    /* ======================================================
       TOTAL DE DIAS DO MÊS
    ====================================================== */

    getTotalDays(year = State.currentYear, month = State.currentMonth) {

        return new Date(year, month + 1, 0).getDate();

    },

    /* ======================================================
       DADOS DE UM DIA
    ====================================================== */

    getDayData(date) {

        const trades = Trade.getByDate(date);

        const result = trades.reduce(

            (total, trade) => total + trade.result,

            0

        );

        return {

            date,

            trades,

            count: trades.length,

            result,

            positive: result > 0,

            negative: result < 0,

            neutral: result === 0,

            off: trades.length === 0

        };

    },

    /* ======================================================
       TODOS OS DIAS DO MÊS
    ====================================================== */

    getMonthDays(year = State.currentYear, month = State.currentMonth) {

        const totalDays = this.getTotalDays(year, month);

        const days = [];

        for (let day = 1; day <= totalDays; day++) {

            const date = this.formatDate(

                year,

                month,

                day

            );

            days.push({

                day,

                ...this.getDayData(date)

            });

        }

        return days;

    },

    /* ======================================================
       MÊS ATUAL
    ====================================================== */

    getCurrentMonth() {

        return State.currentMonth;

    },

    /* ======================================================
       ANO ATUAL
    ====================================================== */

    getCurrentYear() {

        return State.currentYear;

    },

    /* ======================================================
       ALTERAR MÊS
    ====================================================== */

    setMonth(month) {

        State.currentMonth = month;

    },

    /* ======================================================
       ALTERAR ANO
    ====================================================== */

    setYear(year) {

        State.currentYear = year;

    },

    /* ======================================================
       DATA SELECIONADA
    ====================================================== */

    getSelectedDate() {

        return State.selectedDate;

    },

    setSelectedDate(date) {

        State.selectedDate = date;

    }

};