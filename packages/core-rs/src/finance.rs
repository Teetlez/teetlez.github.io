use std::{cmp, i64};
use wasm_bindgen::prelude::*;

#[derive(Debug, Clone, Copy, Default)]
struct Widget {
    sale_price: i64,
    unit_cost: i64,
    limit: usize, // Maximum number of this item that can be produced
}

#[wasm_bindgen]
pub fn optimal_item_profit(item_list: &str, fixed_cost: i32) -> String {
    let item_vec = _parse_widget_list(item_list);
    if let Some((optimal_profit, minimum_cost, best_net_profit)) =
        _bounded_knapsask(item_vec, fixed_cost.into(), 8000)
    {
        format!(
            "Optimal Production Profit: {}\nMinimum Production Cost to achieve this profit: {}\nNet Profit after fixed cost: {}",
            optimal_profit, minimum_cost, best_net_profit
        )
    } else {
        "No production plan overcomes the fixed cost.".to_string()
    }
}

fn _bounded_knapsask(
    items: Vec<Widget>,
    fixed_cost: i64,
    max_profit_target: usize,
) -> Option<(usize, i64, i64)> {
    // A large value representing "infinity" to denote unachievable states.
    let inf: i64 = i64::MAX;

    // dp[p] will store the minimum production cost needed to achieve exactly p production profit.
    let mut dp = vec![inf; max_profit_target + 1];
    dp[0] = 0; // Zero cost to achieve zero profit.

    // Process each item in a bounded manner (each used at most 'limit' times)
    for item in &items {
        // Calculate the profit margin for this item.
        let margin = (item.sale_price - item.unit_cost) as usize;
        // Update the DP table in reverse order to avoid reusing the same item more than allowed.
        // We iterate backwards so that the new updates from this item do not get used repeatedly within the same item.
        for p in (0..=max_profit_target).rev() {
            // Only update if the current state is achievable.
            if dp[p] < inf {
                // Try using k copies of the current item, respecting the limit.
                for k in 1..=item.limit {
                    let add_profit = k * margin;
                    if p + add_profit > max_profit_target {
                        break; // Do not exceed our DP table range.
                    }
                    // Update the state if this combination produces a lower cost.
                    dp[p + add_profit] =
                        cmp::min(dp[p + add_profit], dp[p] + (k as i64 * item.unit_cost));
                }
            }
        }
    }

    // Now, compute net profit = (production profit) - fixed_cost.
    // We want to find the production profit level for which the net profit is maximized,
    // while having minimized the variable production cost.
    let mut best_net_profit = -inf;
    let mut optimal_profit = 0;
    for p in 0..=max_profit_target {
        if dp[p] < inf {
            let net_profit = p as i64 - fixed_cost;
            if net_profit > best_net_profit {
                best_net_profit = net_profit;
                optimal_profit = p;
            }
        }
    }

    if best_net_profit < 0 {
        None
    } else {
        Some((optimal_profit, dp[optimal_profit], best_net_profit))
    }
}

fn _parse_widget_list(list: &str) -> Vec<Widget> {
    list.split('\n')
        .map(|i| {
            let mut item_string = i.splitn(3, ',');
            Widget {
                sale_price: item_string
                    .next()
                    .and_then(|s| s.parse().ok())
                    .unwrap_or_default(),
                unit_cost: item_string
                    .next()
                    .and_then(|s| s.parse().ok())
                    .unwrap_or_default(),
                limit: item_string
                    .next()
                    .and_then(|s| s.parse().ok())
                    .unwrap_or_default(),
            }
        })
        .collect()
}

fn _parse_list(list: &str) -> Vec<f32> {
    list.split([' ', '\n', ','])
        .filter_map(|num| num.trim().parse::<f32>().ok())
        .collect::<Vec<f32>>()
}

#[wasm_bindgen]
pub fn gross(income: &str, expenses: &str) -> f32 {
    let income_list = _parse_list(income);
    let expenses_list = _parse_list(expenses);
    income_list.into_iter().sum::<f32>() - expenses_list.into_iter().sum::<f32>()
}

#[wasm_bindgen]
pub fn taxed_gross(profit: f32, tax_rate: f32) -> f32 {
    profit
        * if tax_rate > 1.0 {
            tax_rate / 100.0
        } else {
            tax_rate
        }
}

#[wasm_bindgen]
pub fn break_even(fixed_costs: f32, variable_costs: f32, unit_price: f32) -> i32 {
    (fixed_costs / (unit_price - variable_costs)).ceil() as i32
}

#[wasm_bindgen]
pub fn profit_margin(unit_price: f32, unit_cost: f32) -> f32 {
    unit_price - unit_cost
}

#[wasm_bindgen]
pub fn operating(gross: f32, operating_rate: f32) -> f32 {
    gross * operating_rate
}

#[wasm_bindgen]
pub fn growth(gross: f32, growth_rate: f32) -> f32 {
    gross * growth_rate
}

#[wasm_bindgen]
pub fn savings(gross: f32, savings_rate: f32, tax_rate: f32) -> f32 {
    gross * (savings_rate - tax_rate)
}
