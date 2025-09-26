//@ts-ignore: Generated dynamically, index.ts is mostly meant for documentation and API exposure.
import * as wasm from "../../build/wasm-bindgen/pkg/module.js";

/**
 * Initializes the WASM module
 */
export async function init(): Promise<void> {
    return wasm.default();
}

/**
 * Prints "hiii!"
 */
export async function hello_world(): Promise<void> {
    return wasm.hello_world();
}