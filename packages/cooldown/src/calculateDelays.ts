export function calculateDelays(start: number, cliff: number, finish: number) {
  /**
   * Validation
   */
  if (!start && !finish) {
    throw new TypeError("StartTime or FinishTime must have values")
  }
  if (start && finish && start >= finish) {
    throw new TypeError("FinishTime must be bigger than StartTime")
  }

  let isLinear
  let isCliffer
  let isRegural

  if (cliff === finish) {
    isRegural = start + finish
  }
  if (!isRegural && finish) {
    isLinear = [start + cliff, finish + start]
  }
  if (!isRegural && cliff) {
    isCliffer = start + cliff
  }
  return {
    isLinear,
    isCliffer,
    isRegural
  }
}
