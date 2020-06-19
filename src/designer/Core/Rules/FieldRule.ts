import { Rule } from "./Rule";
import { INode } from "../Node/INode";
import { IMeta } from "../Node/IMeta";

export class FieldRule extends Rule{
  editPaddingY = '';
  editPaddingX = '';
  empertyPadding = '';

  match(meta:IMeta){
    return meta.name === 'Field';
  }
  
  accept(child:INode){
    return false;
  }
}