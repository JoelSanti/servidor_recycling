import { CollectionConfig } from "payload/types";


const CalendarCollection: CollectionConfig = {
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
  };
  
    export default CalendarCollection;