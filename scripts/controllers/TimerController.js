class TimerController {
    constructor() {
        this._currentDateEl = document.querySelector(".current-date");
        this._futureDateEl = document.querySelector(".future-date");

        this._yearsEl = document.querySelector(".years");
        this._daysEl = document.querySelector(".days");
        this._hoursEl = document.querySelector(".hours");
        this._minutesEl = document.querySelector(".minutes");
        this._secondsEl = document.querySelector(".seconds");

        this.initialize();
    }

    /* ---------------------------------------------------------------------- */

    initialize() {
        this.setCurrentDate();
        this.setFutureDate();

        this.setDiference();

        setInterval(() => {
            this.setCurrentDate();
            this.setDiference();
        }, 1000);
    }

    /* ---------------------------------------------------------------------- */

    // Método para formatar as datas exibidas.
    formatDate(date) {
        const formatter = new Intl.DateTimeFormat(
            "pt-BR",
            {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );

        const dateString = formatter.formatToParts(date).map(({type, value}) => {
            if (type == "hour")
                return "às " + value;

            return value;
        }).join("");

        return dateString;
    }

    /* ---------------------------------------------------------------------- */

    // Métodos que exibem as datas.
    
    setCurrentDate() {
        this.currentDateEl = this.formatDate(this.currentDate);
    }

    setFutureDate() {
        this.futureDateEl = this.formatDate(this.futureDate);
    }

    /* ---------------------------------------------------------------------- */

    // Método que exibe o tempo que falta.
    setDiference() {
        let diference = this.futureDate.getTime() - this.currentDate.getTime();

        let 
        years = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;

        while (diference > 31536000000) {
            years++;
            diference -= 31536000000;
        }

        this.yearsEl = years;

        while (diference > 86400000) {
            days++;
            diference -= 86400000;
        }

        this.daysEl = days;

        while (diference > 3600000) {
            hours++;
            diference -= 3600000;
        }

        this.hoursEl = hours;

        while (diference > 60000) {
            minutes++;
            diference -= 60000;
        }

        this.minutesEl = minutes;

        while (diference > 1000) {
            seconds++;
            diference -= 1000;
        }
        
        this.secondsEl = seconds;
    }

    /* ------------------------------- getters ------------------------------ */

    get currentDate() {
        return new Date();
    }

    get futureDate() {
        return new Date(Date.UTC(2021, 11, 12, 16));
    }

    get currentDateEl() {
        return this._currentDateEl.innerHTML;
    }

    get futureDateEl() {
        return this._futureDateEl.innerHTML;
    }

    get yearsEl() {
        return this._yearsEl.innerHTML;
    }

    get daysEl() {
        return this._daysEl.innerHTML;
    }

    get hoursEl() {
        return this._hoursEl.innerHTML;
    }

    get minutesEl() {
        return this._minutesEl.innerHTML;
    }

    get secondsEl() {
        return this._secondsEl.innerHTML;
    }

    /* ------------------------------- setters ------------------------------ */

    set currentDateEl(value) {
        this._currentDateEl.innerHTML = value;
    }

    set futureDateEl(value) {
        this._futureDateEl.innerHTML = value;
    }

    set yearsEl(value) {
        this._yearsEl.innerHTML = value;
    }

    set daysEl(value) {
        this._daysEl.innerHTML = value;
    }

    set hoursEl(value) {
        this._hoursEl.innerHTML = value;
    }

    set minutesEl(value) {
        this._minutesEl.innerHTML = value;
    }

    set secondsEl(value) {
        this._secondsEl.innerHTML = value;
    }
}
