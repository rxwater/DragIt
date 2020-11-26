import { IProp } from "base/Model/IProp";
import OptionSelect from "base/PropsInputs/OptionSelect";

const sizeSchema = [
  {
    value:'false',
    label:'false'
  },
  {
    value:'auto',
    label:'auto'
  },
  {
    value:true,
    label:'true'
  },
  {
    value:'1',
    label:'1'
  },
  {
    value:'2',
    label:'2'
  },
  {
    value:'3',
    label:'3'
  },
  {
    value:'4',
    label:'4'
  },
  {
    value:'5',
    label:'5'
  },
  {
    value:'6',
    label:'6'
  },
  {
    value:'7',
    label:'7'
  },
  {
    value:'8',
    label:'8'
  },
  {
    value:'9',
    label:'9'
  },
  {
    value:'10',
    label:'10'
  },
  {
    value:'11',
    label:'11'
  },
  {
    value:'12',
    label:'12'
  },
]


const colWidthRules:Array<IProp> = [
  {
    name:'xl',
    label:'xl',
    input:OptionSelect,
    props:{
      items:sizeSchema,
    }
  },
  {
    name:'lg',
    label:'lg',
    input:OptionSelect,
    props:{
      items:sizeSchema,
    }
  },
  {
    name:'md',
    label:'md',
    input:OptionSelect,
    props:{
      items:sizeSchema,
    }
  },
  {
    name:'sm',
    label:'sm',
    input:OptionSelect,
    props:{
      items:sizeSchema,
    }
  },

  {
    name:'xs',
    label:'xs',
    input:OptionSelect,
    props:{
      items:sizeSchema,
    }
  },
]

export default colWidthRules;