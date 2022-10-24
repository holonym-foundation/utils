import { stateAbbreviations } from "./constants.js";

export function getStateAsHexString(state, countryCode) {
  // TODO: Support all countries and states/provinces
  if (!state || countryCode != 2) return "0x";
  state = state.length == 2 ? state : stateAbbreviations[state.toUpperCase()];
  const uint8Array = new TextEncoder("utf-8").encode(state);
  return "0x" + uint8Array.map((x) => x.toString(16).padStart(2, "0")).join("");
}
