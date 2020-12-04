import Checkbox from "./Checkbox";

export default class ConnectedCheckbox extends Checkbox{
    protected dependentCheckbox: ConnectedCheckbox[] = [];
    protected requiredCheckbox: ConnectedCheckbox[] = [];

    public dependsOn(checkbox: ConnectedCheckbox): void{
        this.requiredCheckbox.push(checkbox);
        checkbox.dependentCheckbox.push(this);
    }

    protected onChange() {
        if(this.requiredCheckbox.length > 0 && this.isSelected()) {
            this.requiredCheckbox.forEach(c => c.value = true);
        }
        if(this.dependentCheckbox.length > 0 && !this.isSelected()) {
            this.dependentCheckbox.forEach(c => c.value = false);
        }
        super.onChange();
    }
}