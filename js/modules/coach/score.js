/**
 * ==========================================================
 * TRADING JOURNAL PRO
 * COACH
 * SCORE.JS
 * ==========================================================
 *
 * Responsável por calcular a pontuação geral
 * da performance do trader.
 */

import { Health } from "../statistics/health.js";

export function calculateScore(trades = []) {

    if (!trades.length) {

        return {

            score: 0,

            level: "Sem Dados"

        };

    }

    const score = Health.getScore();

    let level = "Iniciante";

    if (score >= 90) {

        level = "Elite";

    } else if (score >= 75) {

        level = "Avançado";

    } else if (score >= 60) {

        level = "Intermediário";

    } else if (score >= 40) {

        level = "Em Desenvolvimento";

    }

    return {

        score,

        level

    };

}