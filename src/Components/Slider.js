import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { getListToSlider, getList } from './../api';

const Slider = () => {

    const [data, setData] = useState([]);

    const getSliderItems = async () => {
        const response = await getListToSlider();
        setData(response.results);

    }

    useEffect(() => {
        getSliderItems();
    }, [])

    return (
        <>
            <Carousel className="carousel" >
                {
                    data && data.map((t) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={`https://image.tmdb.org/t/p/original/${t.backdrop_path}`}
                                    alt={t.title}
                                />
                                <Carousel.Caption>
                                    <h1>{t.title}</h1>
                                    <p>{t.overview}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel >

        </>
    )
}

export default Slider
