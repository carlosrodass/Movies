import React, { useState, useEffect, useReducer } from 'react';
import Submit from './Submit';
import List from './List';
import Slider from './Slider';

const Intro = () => {

    return (
        <>
            <section className="intro">
                <Slider/>
                <div className="bg-image">
                </div>
                <div className="wrapper">

                </div>

            </section>
            <List />
        </>
    )
}

export default Intro
