// NB: Sometimes you will have to install type definition files for certain js libraries
import faker from 'faker';

export class User {
    name: string
    location: {
        lat: number;
        lng: number
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }
}