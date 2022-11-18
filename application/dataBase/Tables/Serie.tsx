import { Model } from "@nozbe/watermelondb";
import { field, writer } from "@nozbe/watermelondb/decorators";
import { SerieDetailDb } from "../../Interfaces";

export default class SerieTable extends Model{
    static table = 'serie'

    @field('idSerie') idSerie: number
    @field('name') name: string
    @field('image') image: string

    @writer async addSerie(serie: SerieDetailDb) {
        const newSerie = await this.collections.get('serie').create((serieTable: any) => {
            serieTable.idSerie = serie.idSerie
            serieTable.name = serie.name
            serieTable.image = serie.image
        })
        return newSerie
    }
}