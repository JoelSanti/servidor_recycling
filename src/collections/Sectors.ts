import { CollectionConfig } from "payload/types";

const Sectors: CollectionConfig = {
    slug: 'sectors',
    fields: [
      {
        name: 'nombre_sector',
        type: 'text',
      },
    ],
    access: {
      read: () => true, // Todos pueden leer
    },
  };

export default Sectors;