export default interface Disableable{
    isDisabled(): boolean;
    setDisabled(isDisabled: boolean): void
}