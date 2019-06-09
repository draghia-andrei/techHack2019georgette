var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * TransactionCategory Model
 * ==========
 */
var TransactionCategory = new keystone.List('TransactionCategory', {
    rest: true,
    restOptions: 'list show create update delete'
});

TransactionCategory.add({
    key: { type: Types.Key, initial: true, required: true, index: true },
    name: { type: String, inital: true, required: true },
});


/**
 * Registration
 */
TransactionCategory.defaultColumns = 'key, name';
TransactionCategory.register();
