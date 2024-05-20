const parsers = {
    json: JSON.parse,
};

export const parseFile = (data, extension) => {
    const parser = parsers[extension];

    if (!parser) {
        throw new Error(`Unsupported file extension "${extension}".`);
    }

    try {
        return parser(data);
    } catch (error) {
        throw new Error(`Failed to parse data with extension "${extension}": ${error.message}`);
    }
};
