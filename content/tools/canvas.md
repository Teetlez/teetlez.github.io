+++
title = "canvas tool"
description = "testing"
template = "page.html"
date = 2025-03-26
+++

{% code_canvas(canvas_id="myCanvas", width="400", height="300") %}
  // Example drawing: fill canvas with red color
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 400, 300);
{% end %}
