"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sectors = {
    slug: 'sectors',
    fields: [
        {
            name: 'nombre_sector',
            type: 'text',
        },
    ],
    access: {
        read: function () { return true; }, // Todos pueden leer
    },
};
exports.default = Sectors;
