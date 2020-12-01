export function getRandomKey(): string {
    const AKeyCode = 65;
    const ZKeyCode = 90;
    return String.fromCharCode(Math.floor(Math.random() * (ZKeyCode - AKeyCode + 1) + AKeyCode));
}

export function getRandomPoints(isKeyRight: boolean | undefined): number {
    const rightKey = [5, 10];
    const wrongKey = [20, 25]
    const noKey = [10, 15];

    if (isKeyRight) {
        const [from, to] = rightKey;
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    if (isKeyRight === false) {
        const [from, to] = wrongKey;
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    const [from, to] = noKey;
    return Math.floor(Math.random() * (to - from + 1) + from);
}
