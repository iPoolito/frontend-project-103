const formatters = {
    json: JSON.stringify
};

export default function format({ data, formatType = 'json' }) {
    const formatter = formatters[formatType];

    if (!formatter) {
        throw new Error(`Format type "${formatType}" is not available.`);
    }

    return formatter(data);
}
