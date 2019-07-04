let lastId = 2;

export default function(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}