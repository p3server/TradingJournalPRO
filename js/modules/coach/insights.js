/**
 * COACH INSIGHTS MODULE
 *
 * Responsible for generating
 * trading insights
 */







export function generateInsights(trades = []) {



    const insights = [];







    if (!trades.length) {



        insights.push(

            "Ainda não existem dados suficientes para análise."

        );



        return insights;



    }








    const total =
        trades.length;






    if (total >= 20) {



        insights.push(

            "Existe histórico suficiente para uma análise mais confiável."

        );


    }






    const average =
        calculateAverageResult(trades);







    if (average > 0) {



        insights.push(

            "A média das operações está positiva."

        );



    }






    if (average < 0) {



        insights.push(

            "A média das operações está negativa."

        );


    }







    const sequence =
        calculateLossSequence(trades);






    if (sequence >= 3) {



        insights.push(

            "Foi identificada uma sequência de perdas."

        );



    }







    return insights;



}









function calculateAverageResult(trades) {



    let total = 0;






    trades.forEach(trade => {



        total += calculateResult(trade);



    });






    return (

        total / trades.length

    );



}









function calculateLossSequence(trades) {



    let current = 0;



    let max = 0;







    trades.forEach(trade => {



        if (

            calculateResult(trade) < 0

        ) {



            current++;




            if (

                current > max

            ) {



                max = current;


            }



        }

        else {



            current = 0;



        }



    });







    return max;



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