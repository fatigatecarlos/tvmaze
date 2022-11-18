import { appSchema, tableSchema } from "@nozbe/watermelondb/Schema";

export const schema = appSchema ({
    version: 1,
    tables: [
        tableSchema({
            name: 'serie',
            columns: [
                {name: 'idSerie', type: 'number'},
                {name: 'name', type: 'string'},
                {name: 'image', type: 'string'},
            ]
        })
    ]
})