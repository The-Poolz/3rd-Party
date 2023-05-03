import { calculateDelays } from "./calculateDelays"
import type { IGetDelayLimits } from "./types/cooldownBlock.type"
import { reguralFormatDay, clifferFormatDay, linearFormatDay } from "./utils"

export function cooldownBlock(limits: IGetDelayLimits) {
  const { StartDelays, CliffDelays, FinishDelays } = limits
  return StartDelays.map((startDelays, index) => {
    const start = Number(startDelays)
    const cliff = Number(CliffDelays[index])
    const finish = Number(FinishDelays[index])

    const { isRegural, isCliffer, isLinear } = calculateDelays(start, cliff, finish)
    if (isRegural !== undefined) return reguralFormatDay(isRegural)

    return (isCliffer !== undefined ? clifferFormatDay(isCliffer) : "") + (isLinear !== undefined ? linearFormatDay(isLinear) : "")
  })
}
