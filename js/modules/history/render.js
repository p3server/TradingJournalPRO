/**
 * HISTORY RENDER MODULE
 *
 * Responsible only for rendering
 * trade history on screen
 */



export function renderHistory(trades) {



    const container =
        document.querySelector(
            "#history"
        );



    if (!container) {


        console.warn(
            "History container not found"
        );


        return;


    }





    container.innerHTML = "";





    if (!trades || trades.length === 0) {



        container.innerHTML = `

            <div class="empty-history">

                Nenhuma operação registrada.

            </div>

        `;



        return;


    }





    trades.forEach(trade => {



        container.appendChild(
            createHistoryItem(trade)
        );



    });



}









function createHistoryItem(trade) {



    const element =
        document.createElement(
            "div"
        );



    element.className =
        "trade-history-item";



    element.dataset.id =
        trade.id || "";




    element.innerHTML = `


        <div>

            ${trade.asset || "-"}

        </div>


        <div>

            ${trade.type || "-"}

        </div>


        <div>

            Entrada:
            ${trade.entry || "-"}

        </div>


        <div>

            Quantidade:
            ${trade.quantity || "-"}

        </div>


    `;



    return element;


}