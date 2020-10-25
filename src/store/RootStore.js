import Theme from './Store'
class RootStore {
    theme:Theme
    constructor(){
        this.theme=new Theme(this);
    }
}
export default new RootStore();