+++
title = "tools"
description = "potentially useful"
template = "module.html"
+++

{{ load_mod(
mod_path="/pkg/text_simplifier_rs.js",
script="
    document.getElementById('simplify-btn').addEventListener('click', () => {
        const inputText = document.getElementById('input-text').value;
        const simplified = simplify_text(inputText);
        document.getElementById('output-text').value = simplified;
    });
") }}
