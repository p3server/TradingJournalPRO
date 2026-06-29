/**
 * HISTORY FILTERS MODULE
 *
 * Responsible for filtering
 * trade history data
 */

/**
 * Filter trades
 */
export function filterTrades(trades, filters = {}) {



    if (!Array.isArray(trades)) {


        return [];


    }

    let result = [...trades];


    /*
        Filter by asset
    */


    if (filters.asset) {


        result = result.filter(
            trade =>


                trade.asset
                    ?.toLowerCase()
                    .includes(
                        filters.asset.toLowerCase()
                    )

        );


    }

    /*
        Filter by trade type
    */


    if (filters.type) {


        result = result.filter(

            trade =>

                trade.type === filters.type

        );


    }



    /*
        Filter profitable trades
    */


    if (filters.result === "win") {


        result = result.filter(

            trade =>

                calculateResult(trade) > 0

        );


    }

    /*
        Filter losing trades
    */


    if (filters.result === "loss") {


        result = result.filter(

            trade =>

                calculateResult(trade) < 0

        );


    }

    return result;

}


/**
 * Calculate trade result
 */
function calculateResult(trade) {

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