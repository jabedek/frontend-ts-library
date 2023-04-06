declare function stopListening(): void;
/**
 * Starts listening for network requests.
 *
 * @param {boolean} enableLogs - Indicates whether to enable logging.
 * @param {Date | undefined} startTime - Filters requests by start time if specified.
 * @param {Date | undefined} endTime - Filters requests by end time if specified.
 */
declare function startListening(enableLogs?: boolean, startTime?: Date, endTime?: Date): void;
export { startListening as startSniffing, stopListening as stopSniffing };
