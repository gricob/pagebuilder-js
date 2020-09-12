import Context from "../models/context";

export default interface Action {
  title: string;
  onClick?: (ctx: Context) => void;
  onDragStart?: (ctx: Context) => void
  onDragEnd?: (ctx: Context) => void
  icon?: string;
  label?: string;
}