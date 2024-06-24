import { CollectionConfig } from "payload/types";

const PointsRecycling: CollectionConfig = {
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
      read: () => true, // Todos pueden leer
    },
  };
  
  export default PointsRecycling;