import { IMetaConfig } from "Base/RXNode/IMetaConfig";
import { MetaConfig } from "Base/RXNode/MetaConfig";
//import withMargin from "./HOCs/withMargin";
import { IMeta } from "./RXNode/IMeta";

var componentsMap : { 
  [key: string]: {
    component?:any,
    rule:IMetaConfig,
  }
} = {}

function register(name:string, component:any, rule:any = MetaConfig): any{
  componentsMap[name] = {
    component,
    rule: new rule(),
  }
}

function registerHtmlTag(name:string, rule:any = MetaConfig){
  componentsMap[name] = {
    rule: new rule()
  }  
}

function resolveComponent(meta:IMeta):any{
  const name = meta.name;
  const componetNode = componentsMap[name];
  let component = componetNode && componetNode.component ? componetNode.component : name;

  return component;
}

function resolveMetaConfig(name:string):IMetaConfig{
  return  componentsMap[name] ? componentsMap[name].rule : new MetaConfig();
}
export {register, resolveComponent, resolveMetaConfig, registerHtmlTag}