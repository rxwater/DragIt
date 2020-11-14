import { Rule } from "../Rules/Rule";
import { INode } from "../../designer/Core/Node/INode";
import NumberInput from "designer/Attrebutebox/Inputs/NumberInput";
import { IField } from "../Rules/IRule";
import TextInput from "designer/Attrebutebox/Inputs/TextInput";

export class MediasPortletRule extends Rule{
  editPaddingY = '';
  editPaddingX = '';
  empertyPadding = '';
  
  accept(child:INode){
    return false;
  }
  getFields(): Array<IField>{
    return [
      {
        name:'cols',
        label:'cols',
        input:TextInput,
      },
      {
        name:'spacingTop',
        label:'spacing-top',
        input:NumberInput,
        schema:{
          max:100,
          min:0,
          step:1
        }
      },

      {
        name:'spacingRight',
        label:'spacing-right',
        input:NumberInput,
        schema:{
          max:100,
          min:0,
          step:1
        }
      },
      {
        name:'spacingBottom',
        label:'spacing-bottom',
        input:NumberInput,
        schema:{
          max:100,
          min:0,
          step:1
        }
      },
      {
        name:'spacingLeft',
        label:'spacing-left',
        input:NumberInput,
        schema:{
          max:100,
          min:0,
          step:1
        }
      },
      {
        name:'elevation',
        label:'elevation',
        input:NumberInput,
        schema:{
          max:24,
          min:0,
          step:1
        }
      },

    ]
  }

}