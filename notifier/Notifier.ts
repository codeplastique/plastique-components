declare let Noty: any;

class Notifier {
    private static noty(
        type: 'info' | 'warning' | 'error' | 'success',
        text: string
    ): Notification{
        return new Noty({
            theme: '',
            type: type,
            text: text,
            timeout: 10000
        }).show();
    }

    public static info(text: string): Notification{
        return this.noty('info', text)
    };

    public static warning(text: string): Notification{
        return this.noty('warning', text)
    };

    public static error(text: string, error?: any): Notification{
        if(error)
            console.error(error);
        return this.noty('error', text)
    };

    public static success(text: string): Notification{
        return this.noty('success', text)
    }

    public static confirm(text: string, buttonName: string, action: Function): Notification {
        let n = new Noty({
            theme: '',
            type: 'warning',
            text: text,
            timeout: false,
            buttons: [
                Noty.button(buttonName, 'btn btn-block btn-sm noty_btn', () => {
                    n.close();
                    action()
                }),
            ]
        }).show();
        return n;
    };

}

export default Notifier;