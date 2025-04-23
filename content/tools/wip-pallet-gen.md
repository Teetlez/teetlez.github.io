+++
title = "Palette generator tool"
description = "testing"
template = "tool.html"
date = 2025-03-26
+++

{{ palette_gen(
    mod_path="/core-bindings/core_rs.js",
    start_color="#00b4d8",
    end_color="#03045e",
    steps=6,
    container_id="customPalette"
) }}
