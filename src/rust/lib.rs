use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen(start)]
fn start() {
    log("test");
}

#[wasm_bindgen]
pub extern "C" fn hello_world() {
    log("hiiii!");
}
