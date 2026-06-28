/* ==========================================================
   TRADING JOURNAL PRO
   Script v0.3
========================================================== */

const App = {

    /* ======================================================
       STATE
    ====================================================== */

    state: {

        trades: [],

        selectedDate: null,

        currentMonth: new Date().getMonth(),

        currentYear: new Date().getFullYear(),

        performanceView: "Capital"

    },

    /* ======================================================
       MÓDULOS
    ====================================================== */

    /* ======================================================
   STORAGE
====================================================== */

storage: {

    key: "tradingJournal",

    load() {

        try {

            const data = localStorage.getItem(this.key);

            if (!data) {

                App.state.trades = [];

                return;

            }

            App.state.trades = JSON.parse(data);

        }

        catch (error) {

            console.error("Erro ao carregar os dados:", error);

            App.state.trades = [];

        }

    },

    save() {

        try {

            localStorage.setItem(

                this.key,

                JSON.stringify(App.state.trades)

            );

        }

        catch (error) {

            console.error("Erro ao salvar os dados:", error);

        }

    },

    clear() {

        localStorage.removeItem(this.key);

        App.state.trades = [];

    }

},

    /* ======================================================
   UTILS
====================================================== */

utils: {

    id(id) {

        return document.getElementById(id);

    },

    qs(selector) {

        return document.querySelector(selector);

    },

    qsa(selector) {

        return document.querySelectorAll(selector);

    },

    formatCurrency(value = 0) {

        return `$ ${Number(value).toFixed(2)}`;

    },

    formatDate(date) {

        if (!date) return "";

        return new Date(date).toLocaleDateString("pt-BR");

    },

    today() {

        return new Date().toISOString().split("T")[0];

    },

    createId() {

        return Date.now();

    },

    clone(data) {

        return JSON.parse(JSON.stringify(data));

    },

    sortTrades(trades) {

        return [...trades].sort(

            (a, b) => new Date(b.date) - new Date(a.date)

        );

    },

    monthName(month) {

        const months = [

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

        return months[month];

    },

    formatCalendarDate(year, month, day) {

        return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    },

    isToday(date) {

        return date === this.today();

    },

    sum(values) {

        return values.reduce(

            (total, value) => total + Number(value),

            0

        );

    },

    average(values) {

        if (!values.length) return 0;

        return this.sum(values) / values.length;

    },

    percent(value, total) {

        if (total === 0) return 0;

        return (value / total) * 100;

    }

},

    /* ======================================================
   TRADE
====================================================== */

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

    },

    update(updatedTrade) {

        const index = App.state.trades.findIndex(

            trade => trade.id === updatedTrade.id

        );

        if (index === -1) return false;

        App.state.trades[index] = updatedTrade;

        App.storage.save();

        App.refresh();

        return true;

    },

    getAll() {

        return App.utils.clone(App.state.trades);

    },

    getById(id) {

        return App.state.trades.find(

            trade => trade.id === id

        ) || null;

    },

    getByDate(date) {

        return App.state.trades.filter(

            trade => trade.date === date

        );

    }

},

    clock: {},

    form: {},

    calendar: {},

    history: {},

    kpi: {},

    summary: {},

    charts: {},

    coach: {},

    propFirm: {},

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

    },

    /* ======================================================
       INIT
    ====================================================== */

    init() {

    }

};

/* ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

