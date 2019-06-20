export class User {
    constructor(userObj) {
        this.id = userObj.id;
        this.name = userObj.name;
        this.email = userObj.email;
        this.city = userObj.address.city;
    }
}
