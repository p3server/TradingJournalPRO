/**
 * HISTORY ACTIONS MODULE
 *
 * Responsible for trade actions
 * like edit, remove and duplicate
 */



import { removeTrade, duplicateTrade } from "../trade/index.js";







/**
 * Remove trade
 */
export function deleteTrade(id) {



    if (!id) {


        console.warn(
            "Trade id not provided"
        );


        return;


    }




    removeTrade(id);



    dispatchHistoryEvent(
        "trade:removed",
        id
    );


}









/**
 * Duplicate trade
 */
export function duplicateHistoryTrade(id) {



    if (!id) {


        console.warn(
            "Trade id not provided"
        );


        return;


    }





    duplicateTrade(id);



    dispatchHistoryEvent(
        "trade:duplicated",
        id
    );


}










/**
 * Edit trade request
 *
 * Future integration:
 * will open form with selected data
 */
export function editTrade(id) {



    if (!id) {


        console.warn(
            "Trade id not provided"
        );


        return;


    }



    document.dispatchEvent(

        new CustomEvent(
            "trade:edit",
            {

                detail: {
                    id
                }

            }

        )

    );


}









/**
 * Dispatch module events
 */
function dispatchHistoryEvent(type, detail) {



    document.dispatchEvent(

        new CustomEvent(
            type,
            {

                detail

            }

        )

    );



}