import Context from "../models/context";

export default interface Action {
  title: string;
  handler: (ctx: Context) => void;
  icon?: string;
  label?: string;
}