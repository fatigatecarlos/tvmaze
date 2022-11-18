import React from 'react';
import SeasonItem from "../SeasonItem";
import { Season } from "../../Interfaces";

const SeasonList = (props: {seasons: Array<Season>}) => {
    return (
        <>
            {props.seasons.map((season: Season) => {
                return <SeasonItem key={season.number.toString()} number={season.number} episodes={season.episodes}/>
            })}
        </>
    )
}

export default SeasonList