import { RouteProp } from '@react-navigation/native';

export interface SerieDetail {
    info: {
        id: number
        name: string
        schedule: {
            days: Array<string>,
            time: string
        },
        ended: string,
        premiered: string,
        genres: Array<string>,
        summary: string
    },
    image: string,
    seasons: Array<Season>,
}

export interface SerieDetailDb {

    idSerie: number,
    name: string,
    days: string,
    time: string,
    ended: string,
    premiered: string,
    genres: string,
    summary: string,
    image: string,
}

export interface Season {
    id: number,
    number: number,
    episodes: Array<Episode>,
}

export interface SeasonDb {
    idSeason: number,
    number: number,
}

export interface Episode {
    id: number,
    name: string,
    image: {
        medium: string,
        original: string
    }
    rating: {
        average: number
    }
}

export interface EpisodeDb {
    idEpisode: number,
    name: string,
    seasonNumber: number,
    image: string,
    rating: number,
    seasonId: number
}

export interface EpisodeFull {
    id: number,
    name: string,
    season: number,
    image: {
        original: string
        },
    rating: {
        average: number
        },
    summary: string
}

export interface CardSerie {
    id: number,
    image: string,
    title: string
}

export type RootStackParamListEpisode = {
    Episode: { id: number },
};

export type RootStackParamListDetail = {
    Details: { id: number },
};

export interface SerieCardInterface {
    id: string,
    image: {medium: string},
    name: string
}

export interface SerieImages {
    type: string,
    resolutions: {original: {url: string}},
}

export type RootStackParamList = {
  Episode: { id: number };
  Detail: { id: number };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>;