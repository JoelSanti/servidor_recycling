"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PointsRecycling = {
    slug: 'map_points',
    fields: [
        {
            name: 'nombre_punto',
            type: 'text',
        },
        {
            name: 'direccion',
            type: 'text',
        },
        {
            name: 'latitud',
            type: 'number',
        },
        {
            name: 'longitud',
            type: 'number',
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
exports.default = PointsRecycling;
