// build.rs

use std::process::Command;

fn main() {
    // Check if wasm-bindgen is installed
    let wasm_bindgen_installed = Command::new("wasm-bindgen")
        .arg("--version")
        .output()
        .is_ok();

    if !wasm_bindgen_installed {
        // If wasm-bindgen is not installed, install it using cargo
        println!("cargo:warning=wasm-bindgen is not installed. Installing...");
        Command::new("cargo")
            .arg("install")
            .arg("wasm-bindgen-cli")
            .status()
            .expect("Failed to install wasm-bindgen-cli");
    }

    let wasm_opt_installed = Command::new("wasm-opt")
        .arg("--version")
        .output()
        .is_ok();

    if !wasm_opt_installed {
        // If wasm-bindgen is not installed, install it using cargo
        println!("cargo:warning=wasm-opt is not installed. Installing...");
        Command::new("cargo")
            .arg("install")
            .arg("wasm-opt")
            .status()
            .expect("Failed to install wasm-opt");
    }

    // Ensure Cargo rebuilds the project when the build.rs file changes
    println!("cargo:rerun-if-changed=build.rs");
}
