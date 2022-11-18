import { SerieImages, Season } from "../Interfaces";

const baseUrl = 'https://api.tvmaze.com/';


const getSeries = async (page: number) => {
    const response = await fetch(`${baseUrl}shows?page=${page}`);
    const json = await response.json();
    return json
};

const getPeople = async (page: number) => {
    const response = await fetch(`${baseUrl}people?page=${page}`);
    const json = await response.json();
    return json
};

const getPeopleInfo = async (id: number) => {
    const personInfo = await fetch(`${baseUrl}people/${id}`);
    const showInfo = await fetch(`${baseUrl}people/${id}/castcredits?embed=show`);

    const [showJson, personJson] = await Promise.all([
        showInfo,
        personInfo,
    ])

    const [show, person] = await Promise.all([
        showJson.json(),
        personJson.json()
    ])

    let showList = []

    if(Array.isArray(show)) {
        show.forEach((item) => {
            showList.push(item._embedded.show)
        })
    }
    
    let response = { show: showList, detail: person }
    return response
};

const getSerieinfo = async (id: number) => {
    const showInfo = fetch(`${baseUrl}shows/${id}`)
    const showSeasons = fetch(`${baseUrl}shows/${id}/seasons`)
    const showImages = fetch(`${baseUrl}shows/${id}/images`)

    const [infoJson, seasonsJson, imagesJson] = await Promise.all([
        showInfo,
        showSeasons,
        showImages,
    ])

    const [info, seasons, images] = await Promise.all([
        infoJson.json(),
        seasonsJson.json(),
        imagesJson.json(),
    ])

    let finalImage = images[0].resolutions.original.url

    await images.forEach((element: SerieImages) => {
        if (element.type == 'background') {
            finalImage = element.resolutions.original.url
        }
    });

    let fullSeasons = await Promise.all(seasons.map(async (season: Season) => {
        let episodes = await getEpisodesBysSeason(season.id)
        return { ...season, episodes: episodes }
    }));

    let response = { info: info, seasons: fullSeasons, image: finalImage }

    return response
};

const getEpisodesBysSeason = async (seasonId: number) => {
    const response = await fetch(`${baseUrl}seasons/${seasonId}/episodes`);
    const data = await response.json();

    return data;
}

const getEpisode = async (episodeId: number) => {
    const response = await fetch(`${baseUrl}episodes/${episodeId}`);
    const data = await response.json();

    return data;
}

const getSearchSerie = async (name: string) => {
    const response = await fetch(`${baseUrl}search/shows?q=${name}`);
    const data = await response.json();

    let searchResponse = Array()

    if (Array.isArray(data)) {
        data.forEach((value: any) => {
            searchResponse.push(value.show)
        })
    } else {
        searchResponse = data
    }

    return searchResponse
}

export {
    getSeries,
    getSearchSerie,
    getEpisode,
    getEpisodesBysSeason,
    getSerieinfo,
    getPeople,
    getPeopleInfo
}