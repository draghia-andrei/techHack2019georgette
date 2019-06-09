// var keystone = require('keystone');
// var Types = keystone.Field.Types;

// /**
//  * CustomerProfile Model
//  * ==========
//  */
// var CustomerProfile = new keystone.List('CustomerProfile', {
//     rest: true,
//     restOptions: 'list show create update delete'
// });

// CustomerProfile.add({
//     identifier: { type: Types.Key, required: true, unique: true, index: true },
//     score: { type: Types.Number, required: true },
//     evaluationDate: { type: Types.Datetime, default: Date.now, required: true },
//     ruleEvaluations: {
//         label: { type: Types.Text, required: true },
//         evaluatedSuccessfully: { type: Types.Boolean, required: true }
//     }

// });

// CustomerProfile.schema.pre('save', function (next) {

//     if (this.isModified('score')) {
//         if (score < -1) {
//             score = -1;
//         }
//         if (score > 100) {
//             score = 100;
//         }
//     }

//     next();

// });

// /**
//  * Registration
//  */
// CustomerProfile.defaultColumns = 'identifier, evaluationDate';
// CustomerProfile.register();
