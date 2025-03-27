+++
title = "finance tool"
description = "testing"
template = "page.html"
date = 2025-03-26
+++

{{ finance_calc(id="myFinanceCalc", wasm_path="/static/finance_calculator.wasm") }}

{{ live_chart(
  id="financeChart",
  type="line",
  labels='["Jan", "Feb", "Mar", "Apr", "May"]',
  data='[100, 120, 90, 150, 130]',
  dataset_label="Revenue",
  bg_color="rgba(153, 102, 255, 0.2)",
  border_color="rgba(153, 102, 255, 1)"
) }}
