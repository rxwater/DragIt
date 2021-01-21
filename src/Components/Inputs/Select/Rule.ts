import { IMeta } from "Base/RXNode/IMeta";
import { IPropConfig } from "Base/RXNode/IPropConfig";
import OptionSelect from "Design/PageEditor/AttrebuteBox/PropsInputs/OptionSelect";
import StringInput from "Design/PageEditor/AttrebuteBox/PropsInputs/StringInput";
import apiRule from "Base/RXNode/Configs/apiRule";
import inputRules from "Base/RXNode/Configs/inputRules";
import itemsRule from "Base/RXNode/Configs/itemsRule";
import { MetaConfig } from "Base/RXNode/MetaConfig";

export class SelectRule extends MetaConfig{
  editPaddingY = '';
  editPaddingX = '';
  empertyPadding = '';
  hasField = true;
  hasValidation = true;

  accept(child:IMeta){
    return false;
  }

  getPropConfigs(): Array<IPropConfig>{
    return [
      ...inputRules,
      {
        name:'size',
        label:'size',
        input:OptionSelect,
        props:{
          items:[
            {
              value:'medium',
              label:'Medium'
            },
            {
              value:'small',
              label:'Small'
            },
          ]
        },
      },
      /*{
        name:'multiple',
        label:'multiple-select',
        xs:6,
        input:BooleanInput,
      },*/
      {
        name:'itemKey',
        label:'item-key',
        input:StringInput,
      },
      {
        name:'itemName',
        label:'item-name',
        input:StringInput,
      },

      {
        name:'helperText',
        label:'helper-text',
        xs:12,
        input:StringInput,
      },
      itemsRule,
      apiRule,
    ]
  }


}