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
        {
            name: 'wasteType',
            type: 'select',
            label: 'Waste Type',
            options: [
                { label: 'Residuos Aprovechables', value: 'residuos_aprovechables' },
                { label: 'Residuos Orgánicos Aprovechables', value: 'residuos_organicos_aprovechables' },
                { label: 'Residuos No Aprovechables', value: 'residuos_no_aprovechables' },
            ],
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
