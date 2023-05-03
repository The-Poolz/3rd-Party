import { calculateDelays } from "../src/calculateDelays"

describe("Test calculateDelays", () => {
  test("Catch of throw errors of calculateDelays", () => {
    expect(() => {
      calculateDelays(0, 0, 0)
    }).toThrow()

    expect(() => {
      calculateDelays(0, 1, 0)
    }).toThrow()

    expect(() => {
      calculateDelays(2, 0, 1)
    }).toThrow()
  })

  /**
   * StartTime = 0
   * CliffTime = 0
   * FinishTime = 10 Days
   * Text: Linear 0-10 Days
   */
  test("Case when only FinishTime, must get isLinear", () => {
    const result = calculateDelays(0, 0, 10)
    expect(result).toBeDefined()
    expect(result.isLinear).toEqual([0, 10])
    expect(result.isCliffer).not.toBeDefined()
    expect(result.isRegural).not.toBeDefined()
  })

  /**
   * StartTime = 5 days
   * CliffTime = 0
   * FinishTime = 10 Days
   * Text: Linear 5-15 Days
   */
  test("Case when StartTime and FinishTime", () => {
    const result = calculateDelays(5, 0, 10)
    expect(result).toBeDefined()
    expect(result.isLinear).toEqual([5, 15])
    expect(result.isCliffer).not.toBeDefined()
    expect(result.isRegural).not.toBeDefined()
  })

  /**
   * StartTime = 5 days
   * CliffTime = 5 days
   * FinishTime = 10 Days
   * Text: 10 Days Cliff then, Linear 10-15 Days
   */
  test("Case when StartTime, CliffTime and FinishTime", () => {
    const result = calculateDelays(5, 5, 10)
    expect(result).toBeDefined()
    expect(result.isLinear).toEqual([10, 15])
    expect(result.isCliffer).toEqual(10)
    expect(result.isRegural).not.toBeDefined()
  })

  /**
   * StartTime = 5 days
   * CliffTime = 10 days
   * FinishTime = 10 Days
   * Text: 15 Days
   */
  test("Case when test isRegural", () => {
    const result = calculateDelays(5, 10, 10)
    expect(result).toBeDefined()
    expect(result.isLinear).not.toBeDefined()
    expect(result.isRegural).toEqual(15)
    expect(result.isCliffer).not.toBeDefined()
  })

  /**
   * StartTime = 15 days
   * CliffTime = 0
   * FinishTime = 0
   * Text: 15 Days
   */
  test("Case when test isRegural", () => {
    const result = calculateDelays(15, 0, 0)
    expect(result).toBeDefined()
    expect(result.isLinear).not.toBeDefined()
    expect(result.isRegural).toEqual(15)
    expect(result.isCliffer).not.toBeDefined()
  })
})
