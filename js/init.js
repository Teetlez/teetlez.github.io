import init, { simplify_text } from '../pkg/text_simplifier_rs.js';

async function run() {
    await init(); // Initialize WASM module

    document.getElementById('simplify-btn').addEventListener('click', () => {
        const inputText = document.getElementById('input-text').value;
        const simplified = simplify_text(inputText);
        document.getElementById('output-text').value = simplified;
    });
}

run();
