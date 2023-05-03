import { cooldownBlock } from "../src/cooldownBlock"

const Amounts = ["0"]

describe("Coverage the cooldownBlock method", () => {
  /**
   * StartTime = 5 days
   * CliffTime = 0
   * FinishTime = 0
   * Text: 5 Days
   */
  test("Case 1", () => {
    const mockData = {
      Amounts,
      StartDelays: ["432000"],
      CliffDelays: ["0"],
      FinishDelays: ["0"]
    }
    expect(cooldownBlock(mockData)).toEqual(["5 Days"])
  })
  /**
   * StartTime = 0
   * CliffTime = 0
   * FinishTime = 10 Days
   * Text: Linear 0-10 Days
   */
  test("Case 2", () => {
    const mockData = {
      Amounts,
      StartDelays: ["0"],
      CliffDelays: ["0"],
      FinishDelays: ["864000"]
    }
    expect(cooldownBlock(mockData)).toEqual(["Linear 0-10 Days"])
  })
  /**
   * StartTime = 5 days
   * CliffTime = 0
   * FinishTime = 10 Days
   * Text: Linear 5-15 Days
   */
  test("Case 3", () => {
    const mockData = {
      Amounts,
      StartDelays: ["432000"],
      CliffDelays: ["0"],
      FinishDelays: ["864000"]
    }
    expect(cooldownBlock(mockData)).toEqual(["Linear 5-15 Days"])
  })
  /**
   * StartTime = 5 days
   * CliffTime = 5 days
   * FinishTime = 10 Days
   * Text: 10 Days Cliff then, Linear 10-15 Days
   */
  test("Case 4", () => {
    const mockData = {
      Amounts,
      StartDelays: ["432000"],
      CliffDelays: ["432000"],
      FinishDelays: ["864000"]
    }
    expect(cooldownBlock(mockData)).toEqual(["10 Days Cliff then, Linear 10-15 Days"])
  })

  /**
   * StartTime = 5 days
   * CliffTime = 10 days
   * FinishTime = 10 Days
   * Text: 15 Days
   */
  test("Case 5", () => {
    const mockData = {
      Amounts,
      StartDelays: ["432000"],
      CliffDelays: ["864000"],
      FinishDelays: ["864000"]
    }
    expect(cooldownBlock(mockData)).toEqual(["15 Days"])
  })

  /**
   * StartTime = 15 days
   * CliffTime = 0
   * FinishTime = 0
   * Text: 15 Days
   */
  test("Case 6", () => {
    const mockData = {
      Amounts,
      StartDelays: ["1296000"],
      CliffDelays: ["0"],
      FinishDelays: ["0"]
    }
    expect(cooldownBlock(mockData)).toEqual(["15 Days"])
  })
})
