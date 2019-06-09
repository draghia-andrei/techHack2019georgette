var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Validation Model
 * ==========
 */
var Validation = new keystone.List('Validation', {
    rest: true,
    restOptions: 'list show create update delete'
});

Validation.add({
    identifier: { type: Types.Key, required: true, initial: true, unique: true, index: true },
    score: { type: Types.Number, initial: true, required: true, index: true },
    evaluationDate: { type: Types.Datetime, default: Date.now, initial: true, required: true },
    transactionCategory: { type: Types.Relationship, ref: 'RuleEvaluationResults', many: true }

});

Validation.schema.pre('save', function (next) {

    if (this.isModified('score')) {
        if(this.score < -1 ) {
            this.score = -1;
        }
        if (this.score > 100) {
            this.score = 100;
        }
    }

    next();

});

/**
 * Registration
 */
Validation.defaultColumns = 'identifier, evaluationDate, score';
Validation.register();
