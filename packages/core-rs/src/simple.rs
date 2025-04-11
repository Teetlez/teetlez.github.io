use std::collections::HashMap;
use wasm_bindgen::prelude::*;

// Expose the function to JavaScript
#[wasm_bindgen]
pub fn simplify_text(input: &str) -> String {
    let glossary = get_glossary();
    let words: Vec<&str> = input.split_whitespace().collect();
    let simplified: Vec<String> = words
        .iter()
        .map(|word| simplify_word(word, &glossary))
        .collect();

    simplified.join(" ")
}

// Replace complex words using a predefined glossary
fn simplify_word(word: &str, glossary: &HashMap<&str, &str>) -> String {
    let cleaned_word = word
        .trim_matches(|c: char| !c.is_alphanumeric())
        .to_lowercase();
    if let Some(&simple) = glossary.get(cleaned_word.as_str()) {
        simple.to_string()
    } else {
        word.to_string()
    }
}

// Example glossary for jargon replacement
fn get_glossary() -> HashMap<&'static str, &'static str> {
    let mut glossary = HashMap::new();
    glossary.insert("utilization", "use");
    glossary.insert("obfuscates", "hides");
    glossary.insert("terminology", "terms");
    glossary.insert("frequently", "often");
    glossary.insert("discourse", "talk");
    glossary.insert("inherent", "basic");
    glossary.insert("academic", "school");
    glossary
}

// Entry point for the wasm module
#[wasm_bindgen(start)]
pub fn run() {
    // Setup frontend interaction
    let window = web_sys::window().expect("No global `window` exists");
    let document = window.document().expect("Should have a document on window");

    let input = document.get_element_by_id("input-text").unwrap();
    let output = document.get_element_by_id("output-text").unwrap();
    let button = document.get_element_by_id("simplify-btn").unwrap();

    let closure = Closure::wrap(Box::new(move || {
        let input_text = input
            .dyn_ref::<web_sys::HtmlTextAreaElement>()
            .unwrap()
            .value();
        let simplified_text = simplify_text(&input_text);
        output
            .dyn_ref::<web_sys::HtmlTextAreaElement>()
            .unwrap()
            .set_value(&simplified_text);
    }) as Box<dyn FnMut()>);

    button
        .dyn_ref::<web_sys::HtmlButtonElement>()
        .unwrap()
        .set_onclick(Some(closure.as_ref().unchecked_ref()));

    closure.forget();
}
