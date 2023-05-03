import { getTimeInfo, getTimeFormat, reguralFormatDay, clifferFormatDay, linearFormatDay } from "../src/utils"

describe("utils tests", () => {
  it("getTimeInfo should return correct time info for 0 seconds", () => {
    const timeInfo = getTimeInfo(0)
    expect(timeInfo).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0
    })
  })

  it("getTimeInfo should return correct time info for 1 second", () => {
    const timeInfo = getTimeInfo(1)
    expect(timeInfo).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0
    })
  })

  it("getTimeInfo should return correct time info for 60 seconds", () => {
    const timeInfo = getTimeInfo(60)
    expect(timeInfo).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 1
    })
  })

  it("getTimeInfo should return correct time info for 3600 seconds", () => {
    const timeInfo = getTimeInfo(3600)
    expect(timeInfo).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 1,
      minutes: 0
    })
  })

  it("getTimeInfo should return correct time info for 86400 seconds", () => {
    const timeInfo = getTimeInfo(86400)
    expect(timeInfo).toEqual({
      years: 0,
      months: 0,
      days: 1,
      hours: 0,
      minutes: 0
    })
  })

  it("getTimeInfo should return correct time info for 604800 seconds", () => {
    const timeInfo = getTimeInfo(604800)
    expect(timeInfo).toEqual({
      years: 0,
      months: 0,
      days: 7,
      hours: 0,
      minutes: 0
    })
  })

  it("getTimeInfo should return correct time info for 2630016 seconds", () => {
    const timeInfo = getTimeInfo(2630016)
    expect(timeInfo).toEqual({
      years: 0,
      months: 1,
      days: 0,
      hours: 0,
      minutes: 0
    })
  })

  it("getTimeInfo should return correct time info for 31557600 seconds", () => {
    const timeInfo = getTimeInfo(31557600)
    expect(timeInfo).toEqual({
      years: 1,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0
    })
  })

  it("getTimeInfo should return correct time info for 94672800 seconds", () => {
    const timeInfo = getTimeInfo(94672800)
    expect(timeInfo).toEqual({
      years: 3,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0
    })
  })

  it("getTimeFormat should return correct time info for 0 seconds", () => {
    expect(getTimeFormat(0, "YEARS")).toBe(0)
    expect(getTimeFormat(0, "MONTHS")).toBe(0)
    expect(getTimeFormat(0, "WEEKS")).toBe(0)
    expect(getTimeFormat(0, "DAYS")).toBe(0)
    expect(getTimeFormat(0, "HOURS")).toBe(0)
    expect(getTimeFormat(0, "MINUTES")).toBe(0)
  })
  it("getTimeFormat should return correct time info for 1 seconds", () => {
    expect(getTimeFormat(1, "YEARS")).toBe(1)
    expect(getTimeFormat(1, "MONTHS")).toBe(1)
    expect(getTimeFormat(1, "WEEKS")).toBe(1)
    expect(getTimeFormat(1, "DAYS")).toBe(1)
    expect(getTimeFormat(1, "HOURS")).toBe(1)
    expect(getTimeFormat(1, "MINUTES")).toBe(1)
  })

  it("reguralFormatDay should return correct days", () => {
    expect(reguralFormatDay(0)).toBe("0 Days")
    expect(reguralFormatDay(1)).toBe("1 Day")
  })
  it("clifferFormatDay should return correct days", () => {
    expect(clifferFormatDay(0)).toBe("0 Days Cliff then, ")
    expect(clifferFormatDay(1)).toBe("1 Day Cliff then, ")
  })
  it("linearFormatDay should return correct days", () => {
    expect(linearFormatDay([0, 1])).toBe("Linear 0-1 Day")
    expect(linearFormatDay([432000, 864000])).toBe("Linear 5-10 Days")
  })
})
