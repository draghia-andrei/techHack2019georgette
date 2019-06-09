var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Transaction Model
 * ==========
 */
var Transaction = new keystone.List('Transaction', {
    rest: true,
    restOptions: 'list show create update delete'
});

Transaction.add({
    transactionId: { type: Types.Key, required: true, initial: true, unique: true, index: true },
    entryReference: { type: Types.Text, required: true, initial: true },
    endToEndId: { type: Types.Text, initial: true },
    mandateId: { type: Types.Text, initial: true },
    checkId: { type: Types.Text, initial: true },
    creditorId: { type: Types.Text, initial: true },
    bookingDate: { type: Types.Date, initial: true },
    valueDate: { type: Types.Date, initial: true },
    transactionAmount: {
        currency: {type: Types.Text, initial: true },
        amount: {type: Types.Text, initial: true }
    },
    creditorName: { type: Types.Text, initial: true },
    creditorAccount: {
        iban: { type: Types.Text, initial: true },
        pan: { type: Types.Text, initial: true },
        maskedPan: { type: Types.Text, initial: true },
        currency: { type: Types.Text, initial: true }
    },
    debtorName: { type: Types.Text, initial: true },
    debtorAccount: {
        iban: { type: Types.Text, initial: true },
        pan: { type: Types.Text, initial: true },
        maskedPan: { type: Types.Text, initial: true },
        currency: { type: Types.Text, initial: true }
    },
    transactionCategory: { type: Types.Relationship, ref: 'TransactionCategory' },
    score: { type: Types.Number, initial: true, required: true}
});

/**
 * Registration
 */
Transaction.defaultColumns = 'code';
Transaction.register();
