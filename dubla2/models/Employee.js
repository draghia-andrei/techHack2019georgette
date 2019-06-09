var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Employee Model
 * ==========
 */
var Employee = new keystone.List('Employee');

Employee.add({
    name: { type: Types.Name, required: true, index: true },
    employeeId: { type: Types.Key, initial: true, required: true, unique: true, index: true },
    email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
    password: { type: Types.Password, initial: true, required: true, restSelected: false },
    isActive: { type: Types.Boolean, initial: true, required: true },

}, 'Permissions', {
        isAdmin: { type: Boolean, label: 'Manager of company', index: true },
    });

// Provide access to Keystone
Employee.schema.virtual('canAccessKeystone').get(function () {
    return this.isAdmin;
});


/**
 * Registration
 */
Employee.defaultColumns = 'name, employeeId, isAdmin, isActive';
Employee.register();
