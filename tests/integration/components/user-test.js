import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        this.setProperties({
            user: {
                name: "Albert Einstein",
                image: "/images/Einstein.jpg"
            }
        })

        await render(hbs `<User @user={{this.user}} />`);

        assert.dom('p').hasText('Albert Einstein');
        assert.dom('img').exists();
    });
});