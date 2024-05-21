import renderTree from './stylish.js';

const formatters = {
  json: JSON.stringify,
  stylish: renderTree,
};

export default function format({ data, formatType = 'stylish' }) {
  const formatter = formatters[formatType];

  if (!formatter) {
    throw new Error(`Format type "${formatType}" is not available.`);
  }

  return formatter(data);
}
