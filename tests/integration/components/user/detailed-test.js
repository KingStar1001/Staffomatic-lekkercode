import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, currentURL } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user/detailed', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        this.setProperties({
            user: {
                name: "Albert Einstein",
                image: "/images/Einstein.jpg",
                value: false,
                archived: false
            }
        })

        await render(hbs `<User::Detailed @model={{this.user}} />`);

        assert.dom('.container').exists();
        assert.dom('#back_button').exists();
        assert.dom('#archive_button').exists();

        assert.dom('.title').hasText('Albert Einstein');
        assert.dom('.subtitle').hasText('Example Value: false');
        assert.dom('.user-unarchived').exists();

        await click('#back_button');
        assert.strictEqual(currentURL(), '/users');
    });
});