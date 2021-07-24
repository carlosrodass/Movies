import React, { useState, useEffect } from 'react'
import { getPeople } from './../api';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const People = () => {

    const [data, setData] = useState([getPeople]);
    const [index, setIndex] = useState(getPeople.length)

    const checkNumber = (number) => {
        if (number > data.length - 1) {
            return 0;
        }
        if (number < 0) {
            return data.length - 1;
        }
        return number;

    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            //Comprobando si estoy en el inicio del array o al final
            return checkNumber(newIndex);
        });
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const peopleList = async () => {
        const response = await getPeople();
        setData(response);
        console.log(response);
    }

    useEffect(() => {
        peopleList()
    }, [])

    return (
        <article className="review">
            {
                data && data.map((T) => {
                    <div>
                        <div className="img-container">
                            <img className="person-img" ></img>
                            <span className="quote-icon">
                                {/* <FaQuoteRight /> */}
                            </span>
                        </div>

                        {/* <h4 className="author">{name}</h4> */}
                        {/* <p className="job">{job}</p> */}
                        {/* <p className="info">{text}</p> */}

                        <div className="button-container">
                            <button className="prev-btn" onClick={() => prevPerson()}>
                                {/* <FaChevronLeft /> */}
                            </button>
                            <button className="next-btn" onClick={() => nextPerson()}>
                                {/* <FaChevronRight /> */}
                            </button>
                        </div>
                    </div>
                })
            }
        </article>
    )
}

export default People
