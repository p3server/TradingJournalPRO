/**
 * FORM VALIDATION MODULE
 *
 * Responsible for validating
 * trade form data before saving
 */

/**
 * Validate trade form data
 */
export function validateForm(data) {

    const errors = [];

    if (!data.date) {
        errors.push("Date is required");
    } else {
        const date = new Date(data.date);

        if (isNaN(date.getTime())) {
            errors.push("Date is invalid");
        }
    }

    if (!data.account || !data.account.trim()) {
        errors.push("Account is required");
    }

    if (!data.market || !data.market.trim()) {
        errors.push("Market is required");
    }

    if (!data.asset || !data.asset.trim()) {
        errors.push("Asset is required");
    }

    if (!data.setup || !data.setup.trim()) {
        errors.push("Setup is required");
    }

    const validSides = ["BUY", "SELL"];

    if (!validSides.includes(data.side)) {
        errors.push("Trade side is required");
    }

    const contracts = Number(data.contracts);

    if (Number.isNaN(contracts) || contracts <= 0) {
        errors.push("Contracts must be greater than zero");
    }

    const result = Number(data.result);

    if (Number.isNaN(result)) {
        errors.push("Result is invalid");
    }

    if (data.notes) {
        data.notes = data.notes.trim();
    }

    if (data.points !== undefined) {
        data.points = Number(data.points);
    }

    if (data.risk !== undefined) {
        data.risk = Number(data.risk);
    }

    return {
        valid: errors.length === 0,
        errors
    };
}
