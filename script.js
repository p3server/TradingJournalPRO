/* ==========================================================
   TRADING JOURNAL PRO
   Script v0.2
========================================================== */

const App = {

    state: {

    trades: [],

    selectedDate: null,

    currentMonth: new Date().getMonth(),

    currentYear: new Date().getFullYear(),

    performanceView: "Capital"

},

    init() {

        this.storage.load();

        this.clock.start();

        this.form.events();

        this.refresh();

    },

    refresh() {

    this.calendar.render();

    this.history.render();

},

    /* ====================================================== */

    storage: {

        load() {

            const data = localStorage.getItem("tradingJournal");

            if (data) {

                App.state.trades = JSON.parse(data);

            }

        },

        save() {

            localStorage.setItem(

                "tradingJournal",

                JSON.stringify(App.state.trades)

            );

        }

    },

    /* ====================================================== */

    trade: {

        add(trade) {

            App.state.trades.push(trade);

            App.storage.save();

            App.refresh();

        },

        remove(id) {

            App.state.trades = App.state.trades.filter(

                trade => trade.id !== id

            );

            App.storage.save();

            App.refresh();

        }

    },

    /* ====================================================== */

    clock: {

        start() {

            this.update();

            setInterval(() => {

                this.update();

            }, 1000);

        },

        update() {

            const now = new Date();

            const date = now.toLocaleDateString("pt-BR");

            const time = now.toLocaleTimeString("pt-BR");

            const dateEl = document.getElementById("currentDate");

            const timeEl = document.getElementById("currentTime");

            if (dateEl) dateEl.textContent = date;

            if (timeEl) timeEl.textContent = time;

        }

    },

    /* ====================================================== */

    form: {

        events() {

            const form = document.getElementById("tradeForm");

            form.addEventListener("submit", function (e) {

                e.preventDefault();

                App.form.save();

            });

        },

        save() {

            const trade = {

                id: Date.now(),

                date: document.getElementById("tradeDate").value,

                account: document.getElementById("account").value,

                market: document.getElementById("market").value,

                asset: document.getElementById("asset").value,

                setup: document.getElementById("setup").value,

                side: document.getElementById("side").value,

                contracts: Number(document.getElementById("contracts").value),

                result: Number(document.getElementById("result").value),

                notes: document.getElementById("notes").value

            };

            if (!trade.date) {

                alert("Informe a data.");

                return;

            }

            App.trade.add(trade);

            document.getElementById("tradeForm").reset();

        }

    },

        /* ======================================================
       HISTORY
    ====================================================== */

    history: {

        render() {

            const tbody = document.getElementById("historyTable");

            tbody.innerHTML = "";

            let trades = [...App.state.trades];

            // Futuramente filtrará pelo calendário
            if (App.state.selectedDate) {

                trades = trades.filter(

                    trade => trade.date === App.state.selectedDate

                );

            }

            trades

                .sort((a, b) => new Date(b.date) - new Date(a.date))

                .forEach(trade => {

                    const tr = document.createElement("tr");

                    const color = trade.result >= 0

                        ? "positive"

                        : "negative";

                    tr.innerHTML = `

                        <td>${trade.date}</td>

                        <td>${trade.account}</td>

                        <td>${trade.asset}</td>

                        <td>${trade.setup}</td>

                        <td class="${color}">

                            $ ${trade.result.toFixed(2)}

                        </td>

                        <td>

                            <button onclick="App.history.remove(${trade.id})">

                                Excluir

                            </button>

                        </td>

                    `;

                    tbody.appendChild(tr);

                });

        },

        remove(id) {

            if (!confirm("Excluir este trade?")) return;

            App.trade.remove(id);

        }

    },

    /* ======================================================
       CALENDAR
    ====================================================== */

    calendar: {

        init() {

        },

        render() {

        this.renderHeader();

        this.renderDays();

        },

        renderHeader() {

    const meses = [

        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"

    ];

    const titulo = document.getElementById("monthLabel");

    titulo.textContent = `${meses[App.state.currentMonth]} ${App.state.currentYear}`;

},

        renderDays() {

    const calendar = document.getElementById("calendar");

    calendar.innerHTML = "";

    const year = App.state.currentYear;

    const month = App.state.currentMonth;

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Espaços antes do primeiro dia

    for (let i = 0; i < firstDay; i++) {

        const empty = document.createElement("div");

        empty.className = "calendar-empty";

        calendar.appendChild(empty);

    }

    // Dias do mês

    for (let day = 1; day <= daysInMonth; day++) {

        const cell = document.createElement("div");

        cell.className = "calendar-day";

        cell.innerHTML = `

            <strong>${day}</strong>

        `;

        calendar.appendChild(cell);

    }

},

        nextMonth() {

        },

        prevMonth() {

        },

        selectDay(date) {

        },

        events() {

        }

    }

};

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

    
/* ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});