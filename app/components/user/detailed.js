import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UserDetailedComponent extends Component {
    @action toggleArchive() {
        const model = this.args.model;
        model.toggleArchive();
        model.save();
    }
}