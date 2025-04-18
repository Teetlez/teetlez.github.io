/* tslint:disable */
/* eslint-disable */
export function generate_palette(hex_start: string, hex_end: string, steps: number): any;
export function optimal_item_profit(item_list: string, fixed_cost: number): string;
export function gross(income: string, expenses: string): number;
export function taxed_gross(profit: number, tax_rate: number): number;
export function break_even(fixed_costs: number, variable_costs: number, unit_price: number): number;
export function profit_margin(unit_price: number, unit_cost: number): number;
export function operating(gross: number, operating_rate: number): number;
export function growth(gross: number, growth_rate: number): number;
export function savings(gross: number, savings_rate: number, tax_rate: number): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly generate_palette: (a: number, b: number, c: number, d: number, e: number) => any;
  readonly optimal_item_profit: (a: number, b: number, c: number) => [number, number];
  readonly gross: (a: number, b: number, c: number, d: number) => number;
  readonly taxed_gross: (a: number, b: number) => number;
  readonly break_even: (a: number, b: number, c: number) => number;
  readonly profit_margin: (a: number, b: number) => number;
  readonly growth: (a: number, b: number) => number;
  readonly savings: (a: number, b: number, c: number) => number;
  readonly operating: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
