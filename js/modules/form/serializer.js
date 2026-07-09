/**
 * FORM SERIALIZER MODULE
 *
 * Responsible for converting
 * HTML form data into application objects
 */

/**
 * Serialize form fields into trade object
 */
export function serializeForm(form) {

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = normalizeValue(value);
    });

    if (form?.elements) {
        Array.from(form.elements).forEach((element) => {
            if (
                element.disabled ||
                element.tagName === "BUTTON" ||
                element.type === "button" ||
                element.type === "submit" ||
                element.type === "reset"
            ) {
                return;
            }

            const rawName = element.name || element.id;

            if (!rawName) {
                return;
            }

            const mappedKey = mapFieldName(rawName);

            if (!mappedKey || mappedKey in data) {
                return;
            }

            data[mappedKey] = normalizeValue(element.value);
        });
    }

    return prepareTradeObject(data);
}

/**
 * Normalize field values
 */
function normalizeValue(value) {
    if (typeof value !== "string") {
        return value;
    }

    const trimmed = value.trim();

    if (trimmed === "") {
        return null;
    }

    if (!isNaN(trimmed)) {
        return Number(trimmed);
    }

    return trimmed;
}

/**
 * Map the existing HTML field IDs to the trade contract
 */
function mapFieldName(key) {
    switch (key) {
        case "tradeDate":
            return "date";
        default:
            return key;
    }
}

/**
 * Prepare final trade structure
 */
function prepareTradeObject(data) {
    return {
        date: data.date ?? new Date().toISOString(),
        account: data.account ?? "",
        market: data.market ?? "",
        asset: data.asset ?? "",
        setup: data.setup ?? "",
        side: data.side ?? "",
        contracts: data.contracts ?? 0,
        result: data.result ?? 0,
        notes: data.notes ?? "",
        points: data.points ?? null,
        risk: data.risk ?? null
    };
}
