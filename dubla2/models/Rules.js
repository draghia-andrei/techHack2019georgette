var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Rules Model
 * ==========
 */
var Rules = new keystone.List('Rules');

Rules.add({
   
});

/**
 * Registration
 */
Rules.defaultColumns = 'identifier, evaluationDate, score';
Rules.register();
