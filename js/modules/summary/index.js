/**
 * SUMMARY MODULE
 *
 * Responsible for generating
 * trading overview information
 */


import { Storage } from "../../storage.js";



export const Summary = {



    /**
     * Render summary information
     */
    render() {



        const container =
            document.querySelector(
                "#summary"
            );



        if (!container) {


            console.warn(
                "Summary container not found"
            );


            return;


        }



        const trades =
            this.getTrades();



        const summary =
            this.calculate(trades);



        container.innerHTML = `


            <div class="summary-item">

                Total trades:
                ${summary.total}

            </div>



            <div class="summary-item">

                Wins:
                ${summary.wins}

            </div>



            <div class="summary-item">

                Losses:
                ${summary.losses}

            </div>



            <div class="summary-item">

                Result:
                ${summary.result}

            </div>


        `;



    },








    /**
     * Get trades from storage
     */
    getTrades() {



        if (Storage.get) {


            return Storage.get(
                "trades"
            ) || [];


        }



        if (
            Storage.data &&
            Storage.data.trades
        ) {


            return Storage.data.trades;


        }



        return [];


    },










    /**
     * Calculate summary
     */
    calculate(trades) {



        let wins = 0;

        let losses = 0;

        let result = 0;





        trades.forEach(trade => {



            const value =
                this.calculateTradeResult(trade);



            result += value;



            if (value > 0) {


                wins++;


            }
            else if (value < 0) {


                losses++;


            }



        });





        return {


            total: trades.length,


            wins,


            losses,


            result: Number(
                result.toFixed(2)
            )


        };


    },









    /**
     * Calculate single trade result
     */
    calculateTradeResult(trade) {



        if (
            !trade.entry ||
            !trade.exit ||
            !trade.quantity
        ) {


            return 0;


        }



        return (

            (trade.exit - trade.entry)
            *
            trade.quantity

        );


    }




};