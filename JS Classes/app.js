class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.b = b;
        this.g = g;
        this.name = name;
    }
    greet() {
        return `Hello from ${this.name}`;
    }
}
const c1 = new Color(255, 67, 89, 'tomato');