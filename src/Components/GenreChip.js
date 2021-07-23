import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
// import TagFacesIcon from '@material-ui/icons/TagFaces';
import { getMovieGenres } from './../api';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: '10px',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

const GenreChip = ({
    clickado,
    setGenreID,
    setTrending
}) => {

    const classes = useStyles();
    const [chipData, setChipData] = useState([]);


    const gettinData = async () => {
        const response = await getMovieGenres();
        setChipData(response.genres);
        console.log("Chip", response);
    }

    useEffect(() => {
        gettinData();
    }, [setGenreID])

    return (
        <section className="chip-container">
            <Paper component="ul" className={classes.root}>
                {chipData.map((data) => {
                    return (
                        <li key={data.key}>
                            <Chip
                                label={data.name}
                                clickable={true}
                                onClick={(e) => clickado(setGenreID(data.id))}
                                className={classes.chip}
                            />
                        </li>
                    );
                })}
            </Paper>
        </section>
    )
}

export default GenreChip
