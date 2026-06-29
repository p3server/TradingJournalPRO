/* ==========================================================
   TRADING JOURNAL PRO
   CALENDAR
   RENDER.JS
========================================================== */

import { State } from "../state.js";
import { CalendarData } from "./data.js";

export const CalendarRender = {

    /* ======================================================
       CACHE
    ====================================================== */

    cache() {

        this.container = document.getElementById("calendar");

        this.monthLabel = document.getElementById("monthLabel");

    },

    /* ======================================================
       RENDER
    ====================================================== */

    render() {

        if (!this.container) return;

        this.renderHeader();

        this.renderGrid();

    },

    /* ======================================================
       CABEÇALHO
    ====================================================== */

    renderHeader() {

        if (!this.monthLabel) return;

        const date = new Date(

            State.currentYear,

            State.currentMonth

        );

        this.monthLabel.textContent = date.toLocaleDateString(

            "pt-BR",

            {

                month: "long",

                year: "numeric"

            }

        );

    },

    /* ======================================================
       GRADE
    ====================================================== */

    renderGrid() {

        this.container.innerHTML = "";

        const firstDay = CalendarData.getFirstWeekDay();

        const monthDays = CalendarData.getMonthDays();

        /* Espaços vazios */

        for (let i = 0; i < firstDay; i++) {

            const empty = document.createElement("div");

            empty.className = "calendar-empty";

            this.container.appendChild(empty);

        }

        /* Dias */

        monthDays.forEach(day => {

            this.container.appendChild(

                this.createDay(day)

            );

        });

    },

    /* ======================================================
       DIA
    ====================================================== */

    createDay(day) {

        const cell = document.createElement("div");

        cell.className = "calendar-day";

        if (CalendarData.isToday(day.date)) {

            cell.classList.add("today");

        }

        if (CalendarData.isSelected(day.date)) {

            cell.classList.add("selected");

        }

        if (day.positive) {

            cell.classList.add("positive");

        }

        if (day.negative) {

            cell.classList.add("negative");

        }

        if (day.off) {

            cell.classList.add("off");

        }

        let resultText = "OFF";

        if (!day.off) {

            const signal = day.result >= 0 ? "+" : "";

            resultText = `${signal}$ ${day.result.toFixed(2)}`;

        }

        cell.dataset.date = day.date;

        cell.innerHTML = `

            <div class="day-number">

                ${day.day}

            </div>

            <div class="day-result">

                ${resultText}

            </div>

            <div class="day-count">

                ${day.count > 0 ? `${day.count} Trade${day.count > 1 ? "s" : ""}` : ""}

            </div>

        `;

        return cell;

    },

    /* ======================================================
       DESTROY
    ====================================================== */

    destroy() {

        if (!this.container) return;

        this.container.innerHTML = "";

    }

};