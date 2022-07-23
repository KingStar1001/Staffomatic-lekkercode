import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | staffomatic', function(hooks) {
    setupApplicationTest(hooks);

    test('visiting /', async function(assert) {
        await visit('/');

        assert.strictEqual(currentURL(), '/');
        assert.dom('button').hasText('See all users');

        await click('button.button');

        assert.strictEqual(currentURL(), '/users');
    });
});