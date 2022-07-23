import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UsersComponent extends Component {
    @tracked checked = false;
    @action toggleShow(e) {
        this.checked = e.target.checked;
        console.log(e.target.checked);
    }

    get results() {
        const model = this.args.model;
        if (this.checked) return model;
        return model.filter((user) => !user.archived);
    }
}