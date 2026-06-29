/**
 * COACH ALERTS MODULE
 *
 * Responsible for generating
 * trading behavior alerts
 */







export function generateAlerts(trades = []) {



    const alerts = [];







    if (!trades.length) {



        alerts.push(

            "Nenhuma operação registrada."

        );



        return alerts;



    }








    const losses =
        trades.filter(trade => {



            return calculateResult(trade) < 0;



        });







    if (

        losses.length >= 3

    ) {



        alerts.push(

            "Atenção: sequência de perdas identificada."

        );



    }









    const wins =
        trades.filter(trade => {



            return calculateResult(trade) > 0;



        });








    if (

        wins.length > 0 &&

        losses.length > wins.length

    ) {



        alerts.push(

            "A taxa de perdas está superior aos ganhos."

        );


    }








    trades.forEach(trade => {



        if (

            trade.quantity &&

            trade.quantity > 0

        ) {



            if (

                trade.quantity > 100

            ) {



                alerts.push(

                    "Possível excesso de exposição em uma operação."

                );



            }



        }



    });







    return alerts;



}









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