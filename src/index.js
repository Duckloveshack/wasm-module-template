import * as wasm from "../build/wasm-bindgen/pkg/module.js"

/**
 * Initializes the wasm module.
 * @returns {void} 
 */
export async function init() {
    return wasm.default();
}

/**
 * Prints "hiiii!"
 * @returns {void}
 */
export async function hello_world() {
    wasm.hello_world();
}