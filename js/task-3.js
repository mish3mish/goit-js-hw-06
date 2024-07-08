class StringBuilder {
    #value;
    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padStart(string) {
        this.#value += string;

    }

    padEnd(string) {
        this.#value = string += this.#value;

    }

    padBoth(string) {
        this.#value = string + this.#value + string;
    }
}




const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="