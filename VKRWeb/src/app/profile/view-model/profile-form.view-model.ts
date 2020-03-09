export class ProfileFormViewModel {
    public email: string;
    public name: string;
    public surename: string;
    public second_name: string;
    public passsword: string;
    public password_confirm: string;
    public group: string;

    constructor(data: any) {
        this.email = data.email;
        this.name = data.name;
        this.surename = data.surename;
        this.second_name = data.second_name;
        this.passsword = data.passsword;
        this.password_confirm = data.password_confirm;
        this.group = data.group;
    } 
}