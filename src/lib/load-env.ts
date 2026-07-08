import { config } from "dotenv";

let loaded = false;

export function loadEnv() {
  if (loaded || typeof process === "undefined") return;
  config({ quiet: true });
  loaded = true;
}
