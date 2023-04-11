import "../../global-extensions";
declare type InputDateTime = "date" | "month" | "time" | "week";
declare type InputChoice = "checkbox" | "radio" | "select";
declare type InputWrite = "text" | "email" | "password" | "number" | "search" | "url" | "tel" | "textarea";
declare type InputType = InputDateTime | InputChoice | InputWrite;
/** Distinct `id` should be provided for HTML (or custom) input if we want to combine it with HTML label and other browser functionalities. */
export declare function createInputId(dataName: string, inputType: InputType): string;
export {};
