import {observable,action,computed} from 'mobx';
import { DarkMode,LightMode } from '../utility/Theme';
class Theme{
     
    @observable theme=LightMode
    @observable time="hi"
    @observable ScreenShot_Details=''
    @action
    updateDetails=(text)=>{
        this.ScreenShot_Details=text
    }
    @action
    updateTheme=(text)=>{
        this.theme=text
    }
    @action
    Switch=()=>{ 
        if(this.theme==LightMode){
         this.updateTheme(DarkMode)
        }
         else
        this.updateTheme(LightMode)
     };
  
}
export default Theme;