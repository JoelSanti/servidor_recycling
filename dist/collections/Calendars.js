"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalendarCollection = {
    slug: 'calendars',
    fields: [
        {
            name: 'fecha',
            type: 'date',
        },
        {
            name: 'hora_inicio',
            type: 'text',
        },
        {
            name: 'hora_fin',
            type: 'text',
        },
        {
            name: 'id_sector',
            type: 'relationship',
            relationTo: 'sectors',
        },
    ],
    access: {
        read: function () { return true; }, // Todos pueden leer
    },
};
exports.default = CalendarCollection;
