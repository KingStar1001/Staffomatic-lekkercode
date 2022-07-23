import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UsersComponent extends Component {
    @tracked query = false;
    @action toggleShow(value) {
        this.query = value;
    }

    get results() {
        const model = this.args.model;
        if (this.query) return model;
        return model.filter((user) => !user.archived);
    }
}