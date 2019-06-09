var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * RuleSet Model
 * ==========
 */
var RuleSet = new keystone.List('RuleSet', {
    rest: true,
    restOptions: 'list show create update delete'
});

RuleSet.add({
    identifier: { type: Types.Key, required: true, initial: true, unique: true, index: true },
    condition: { type: Types.Select, initial: true, required: true, index: true },
    evaluationDate: { type: Types.Datetime, default: Date.now, initial: true, required: true },
    transactionCategory: { type: Types.Relationship, ref: 'RuleEvaluationResults', many: true }

});

/**
 * Registration
 */
RuleSet.defaultColumns = 'identifier, evaluationDate, score';
RuleSet.register();
