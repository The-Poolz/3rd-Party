import type { TimeInfo, TimeUnit } from "./types/utils.type"

export function getTimeInfo(seconds: number): TimeInfo {
  const minute = 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30.44
  const year = day * 365.25

  const years = Math.floor(seconds / year)
  seconds -= years * year

  const months = Math.floor(seconds / month)
  seconds -= months * month

  const days = Math.floor(seconds / day)
  seconds -= days * day

  const hours = Math.floor(seconds / hour)
  seconds -= hours * hour

  const minutes = Math.floor(seconds / minute)

  return {
    years,
    months,
    days,
    hours,
    minutes
  }
}

export function getTimeFormat<T extends keyof typeof TimeUnit>(seconds: number, format: T): number {
  const minutes = Math.ceil(seconds / 60)
  const hours = Math.ceil(minutes / 60)
  const days = Math.ceil(hours / 24)
  const weeks = Math.ceil(days / 7)
  const months = Math.ceil(days / 30)
  const years = Math.ceil(days / 365)

  switch (format) {
    case "YEARS":
      return years
    case "MONTHS":
      return months
    case "WEEKS":
      return weeks
    case "DAYS":
      return days
    case "HOURS":
      return hours
    case "MINUTES":
      return minutes
    default:
      return 0
  }
}

export function reguralFormatDay(seconds: number) {
  const count = getTimeFormat(seconds, "DAYS")
  return count + " Day" + (count !== 1 ? "s" : "")
}

export function clifferFormatDay(seconds: number) {
  const count = getTimeFormat(seconds, "DAYS")
  return count + " Day" + (count !== 1 ? "s" : "") + " Cliff then, "
}

export function linearFormatDay(seconds: number[]) {
  const countStart = getTimeFormat(seconds[0], "DAYS")
  const countFinish = getTimeFormat(seconds[1], "DAYS")
  return "Linear " + countStart + "-" + countFinish + " Day" + (countFinish !== 1 ? "s" : "")
}
