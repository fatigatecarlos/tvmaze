import dataBase from "./Local";
import { Q } from '@nozbe/watermelondb'
import { SerieDetail, Season } from "../Interfaces";

const getSeries = async () => {
    return await dataBase.get('serie').query().fetch()
}

const isFavorite = async (serieId: number) => {
    return await dataBase.get('serie').query(
        Q.where('idSerie', serieId)
    ).fetchCount()
}

const prepareSerieToAddDb = (serie: SerieDetail) => {
    const dbSerie = {
        idSerie: serie.info.id,
        name: serie.info.name,
        image: serie.info.image.medium ? serie.info.image.medium : '',
    }

    return dbSerie
}

const setFavorite = async (serie: SerieDetail) => {
    const serieCollection = dataBase.collections.get('serie');
    const dbSerie = prepareSerieToAddDb(serie)

    await dataBase.write(async () => {
        await serieCollection.create((serie) => {
            serie.idSerie = dbSerie.idSerie
            serie.name = dbSerie.name
            serie.image = dbSerie.image
        });
    });
}

const deleteFavorite = async (serieId: number) => {
    const favoriteSerie = await dataBase.get('serie').query(
        Q.where('idSerie', serieId)
    ).fetch()

    if(favoriteSerie[0]) {
        await dataBase.write(async () => {
            await favoriteSerie[0].destroyPermanently() 
        });
    }
}

export {
    getSeries,
    setFavorite,
    isFavorite,
    deleteFavorite
}