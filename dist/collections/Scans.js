"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scans = {
    slug: 'scans',
    fields: [
        {
            name: 'scanDate',
            type: 'date',
            label: 'Scan Date',
            required: true,
        },
        {
            name: 'resident',
            type: 'relationship',
            label: 'Resident',
            relationTo: 'users',
            required: true,
        },
    ],
    access: {
        read: function (_a) {
            var user = _a.req.user;
            return user && (user.role === 'resident' || user.role === 'admin');
        },
    },
};
exports.default = Scans;
