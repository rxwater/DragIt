import { IPropConfig } from "Base/RXNode/IPropConfig";
import NumberInput from "Design/PageEditor/AttrebuteBox/PropsInputs/NumberInput";

const elevationRules:Array<IPropConfig> = [
  {
    name:'elevation',
    label:'elevation',
    input:NumberInput,
    props:{
      defaultValue:0,
      min:0,
      max:24,
    }
  },
]

export default elevationRules;