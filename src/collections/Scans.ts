import { CollectionConfig } from 'payload/types';

const Scans: CollectionConfig = {
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
      relationTo: 'users', // Change this to 'users'
      required: true,
    },
  ],
  access: {
    read: ({ req: { user } }) => user && (user.role === 'resident' || user.role === 'admin'),
  },
};

export default Scans;