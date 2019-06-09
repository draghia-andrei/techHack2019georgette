var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * RuleEvaluationResults Model
 * ==========
 */
var RuleEvaluationResults = new keystone.List('RuleEvaluationResults');

RuleEvaluationResults.add({
    label: { type: Types.Text, initial: true, required: true },
    evaluatedSuccessfully: { type: Types.Boolean, initial: true, required: true }
});

/**
 * Registration
 */
RuleEvaluationResults.defaultColumns = 'label, evaluatedSuccessfully';
RuleEvaluationResults.register();
