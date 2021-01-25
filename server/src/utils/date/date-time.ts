export interface DateTime {
    timestamp: number,
    value: string
}

export const getSystemDateTime = (): DateTime => {
    const timestamp = Date.now();
    const date = new Date(timestamp);

    return {
        timestamp: timestamp,
        value: date.toLocaleDateString()
    }
}

export const parse = (value: string) => {
    const timestamp = Date.parse(value);
    const date = new Date(timestamp);

    return {
        timestamp: timestamp,
        value: date.toLocaleDateString()
    }
}