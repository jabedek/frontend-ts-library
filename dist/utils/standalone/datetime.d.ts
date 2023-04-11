import { Direction, TimeUnit } from "../../models";
/**
 * Convert time between milliseconds and a given time unit.
 *
 * @param dir - The direction of the conversion.
 * @param timeLength - The length of the time to convert.
 * @param timeUnit - The unit of the time to convert.
 * @returns The converted time.
 */
export declare function convertTime(dir: Direction<"MS">, timeLength: number, timeUnit: TimeUnit): number | undefined;
