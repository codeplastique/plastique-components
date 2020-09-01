import Checkbox from "./Checkbox";

export default class ConnectedCheckbox extends Checkbox{
    protected dependentCheckbox: Checkbox[] = [];
    protected requiredCheckbox: Checkbox[] = [];

    public dependsOn(checkbox: ConnectedCheckbox): void{
        this.requiredCheckbox.push(checkbox);
        checkbox.dependentCheckbox.push(this);
    }

    protected notify() {
        if(this.requiredCheckbox.length > 0 && this.isSelected()) {
            this.requiredCheckbox.forEach(c => c.value = true);
        }
        if(this.dependentCheckbox.length > 0 && !this.isSelected()) {
            this.dependentCheckbox.forEach(c => c.value = false);
        }
        super.notify();
    }
}