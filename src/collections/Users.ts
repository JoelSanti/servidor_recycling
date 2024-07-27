import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
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
};

export default Users;