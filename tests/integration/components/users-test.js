import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | users', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        this.setProperties({
            users: [{
                    "id": "1",
                    "type": "user",
                    "attributes": {
                        "name": "Albert Einstein",
                        "image": "/images/Einstein.jpg",
                        "value": "false"
                    }
                },
                {
                    "id": "2",
                    "type": "user",
                    "attributes": {
                        "name": "Walt Disney",
                        "image": "/images/Walt.jpg",
                        "value": "false"
                    }
                },
                {
                    "id": "3",
                    "type": "user",
                    "attributes": {
                        "name": "Bruce Lee",
                        "image": "/images/Bruce.jpg",
                        "value": "false"
                    }
                },
                {
                    "id": "4",
                    "type": "user",
                    "attributes": {
                        "name": "Neil Armstrong",
                        "image": "/images/Neil.jpg",
                        "value": "false"
                    }
                }
            ]
        })

        await render(hbs `<Users @model={{this.users}} />`);

        assert.dom('input').exists();
        assert.dom('.columns').exists();
        assert.dom('.columns .column').exists({ count: 4 });
    });
});