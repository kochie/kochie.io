type RGB = [number, number, number];

function parseColor(color: string): RGB {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    if (!result) {
        throw new Error(`Invalid color: ${color}`);
    }
    return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

function formatColor(rgb: RGB): string {
    return '#' + rgb.map(c => c.toString(16).padStart(2, '0')).join('');
}

function mixColors(color1: string, color2: string, ratio: number): string {
    const rgb1 = parseColor(color1);
    const rgb2 = parseColor(color2);
    const rgb: RGB = [
        Math.round(rgb1[0] * (1 - ratio) + rgb2[0] * ratio),
        Math.round(rgb1[1] * (1 - ratio) + rgb2[1] * ratio),
        Math.round(rgb1[2] * (1 - ratio) + rgb2[2] * ratio)
    ];
    return formatColor(rgb);
}

export function createGradient(color1: string, color2: string, steps: number): string[] {
    const gradient: string[] = [];
    for (let i = 0; i < steps; i++) {
        const ratio = i / (steps - 1);
        gradient.push(mixColors(color1, color2, ratio));
    }
    return gradient;
}


// Example usage
// console.log(createGradient("#ff0000", "#0000ff", 5));
