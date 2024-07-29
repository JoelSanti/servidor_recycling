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
    read: ({ req: { user } }) => user && (user.role === 'resident' || user.role === 'admin'),
  },
};

export default Scans;