"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Users = {
    slug: 'users',
    auth: {
        tokenExpiration: 30 * 24 * 60 * 60,
    },
    access: {
        create: function (_a) {
            var req = _a.req;
            // Permitir la creación de usuarios si el usuario no está autenticado
            // o si el usuario autenticado tiene el rol 'admin'
            return !req.user || req.user.role === 'admin';
        },
        // Configurar el acceso para otras operaciones (read, update, delete) según sea necesario
    },
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        {
            name: 'role',
            type: 'select',
            label: 'Role',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Resident', value: 'resident' },
            ],
            required: true,
        },
        {
            name: 'firstName',
            type: 'text',
            label: 'First Name',
            required: false, // Make this field optional
        },
        {
            name: 'lastName',
            type: 'text',
            label: 'Last Name',
            required: false, // Make this field optional
        },
        // Add more fields as needed
    ],
    hooks: {
        beforeChange: [
            function (_a) {
                var req = _a.req, data = _a.data;
                // Si el usuario no está autenticado y está intentando crear un usuario 'admin',
                // lanzar un error
                if (!req.user && data.role === 'admin') {
                    throw new Error('Unauthenticated users cannot create admin users');
                }
                return data;
            },
        ],
    },
};
exports.default = Users;
