+++
title = "content simplifier tool"
description = "testing"
template = "tool.html"
date = 2025-03-26
draft = true
+++

{{ load_mod(
mod_path="/pkg/text_simplifier_rs.js",
functions="simplify_text",
script="
    document.getElementById('simplify-btn').addEventListener('click', () => {
        const inputText = document.getElementById('input-text').value;
        const simplified = simplify_text(inputText);
        document.getElementById('output-text').value = simplified;
    });
") }}
