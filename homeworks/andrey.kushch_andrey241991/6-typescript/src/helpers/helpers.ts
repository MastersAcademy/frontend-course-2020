export function getRandomKey(): string {
    const AKeyCode = 65;
    const ZKeyCode = 90;
    return String.fromCharCode(Math.floor(Math.random() * (ZKeyCode - AKeyCode + 1) + AKeyCode));
}

export function getRandomPoints(keyPoints: number[]): number {
    const [from, to] = keyPoints;
    return Math.floor(Math.random() * (to - from + 1) + from);
}
