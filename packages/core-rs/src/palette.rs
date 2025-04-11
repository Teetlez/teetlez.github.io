use palette::{FromColor, IntoColor, Mix, Oklab, Srgb};
use serde_wasm_bindgen::to_value;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn generate_palette(hex_start: &str, hex_end: &str, steps: usize) -> JsValue {
    match _generate_palette(hex_start, hex_end, steps) {
        Ok(colors) => to_value(&colors)
            .unwrap_or_else(|e| JsValue::from_str(&format!("Serialization error: {}", e))),
        Err(err) => JsValue::from_str(&format!("Palette error: {}", err)),
    }
}

fn _generate_palette(hex_start: &str, hex_end: &str, steps: usize) -> Result<Vec<String>, String> {
    if steps < 2 {
        return Err("At least 2 steps required".to_string());
    }

    let start_rgb = parse_hex_color(hex_start)?;
    let end_rgb = parse_hex_color(hex_end)?;

    let start_oklab: Oklab = start_rgb.into_color();
    let end_oklab: Oklab = end_rgb.into_color();

    let mut colors = Vec::with_capacity(steps);

    for i in 0..steps {
        let t = i as f32 / (steps - 1) as f32;
        let mixed = start_oklab.mix(end_oklab, t);
        let rgb: Srgb<f32> = Srgb::from_color(mixed);
        colors.push(srgb_to_hex(rgb));
    }

    Ok(colors)
}

fn parse_hex_color(hex: &str) -> Result<Srgb<f32>, String> {
    let hex = hex.trim_start_matches('#');
    if hex.len() != 6 {
        return Err("Expected 6-character hex string".into());
    }

    let r = u8::from_str_radix(&hex[0..2], 16).map_err(|_| "Invalid red")?;
    let g = u8::from_str_radix(&hex[2..4], 16).map_err(|_| "Invalid green")?;
    let b = u8::from_str_radix(&hex[4..6], 16).map_err(|_| "Invalid blue")?;

    Ok(Srgb::new(
        r as f32 / 255.0,
        g as f32 / 255.0,
        b as f32 / 255.0,
    ))
}

fn srgb_to_hex(rgb: Srgb<f32>) -> String {
    let r = (rgb.red.clamp(0.0, 1.0) * 255.0).round() as u8;
    let g = (rgb.green.clamp(0.0, 1.0) * 255.0).round() as u8;
    let b = (rgb.blue.clamp(0.0, 1.0) * 255.0).round() as u8;
    format!("#{:02X}{:02X}{:02X}", r, g, b)
}
