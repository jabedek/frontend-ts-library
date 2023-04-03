import { Direction, TimeUnit } from "../../models";
/**
 * Convert time between milliseconds and a given time unit.
 *
 * @param dir - The direction of the conversion.
 * @param timeLength - The length of the time to convert.
 * @param timeUnit - The unit of the time to convert.
 * @returns The converted time.
 */
export function convertTime(
  dir: Direction<"MS">,
  timeLength: number,
  timeUnit: TimeUnit
) {
  const timeUnitFactor =
    timeUnit === "hours" ? 3600 : timeUnit === "minutes" ? 60 : 1;

  if (dir === "fromMS") {
    return Number(timeLength) / timeUnitFactor / 1000;
  }

  if (dir === "toMS") {
    return Number(timeLength) * timeUnitFactor * 1000;
  }
}
