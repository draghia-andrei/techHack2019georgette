const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    

    tokens: Array,

    profile: {
        firstName: String,
        lastName: String,
        isActive: Boolean,
        isAdmin: Boolean
    }
}, { timestamps: true });

/**
 * Password hash middleware.
 */
employeeSchema.pre('save', function save(next) {
    const employee = this;
    if (!employee.isModified('password')) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(employee.password, salt, (err, hash) => {
            if (err) { return next(err); }
            employee.password = hash;
            next();
        });
    });
});

/**
 * Helper method for validating employee's password.
 */
employeeSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};

/**
 * Helper method for getting employee's gravatar.
 */
employeeSchema.methods.gravatar = function gravatar(size) {
    if (!size) {
        size = 200;
    }
    if (!this.email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
