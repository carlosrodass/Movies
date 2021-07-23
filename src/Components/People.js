import React from 'react'

const people = () => {

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

    return (
        <article className="review">
            <div className="img-container">
                <img className="person-img" src={image}></img>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>

            <div className="button-container">
                <button className="prev-btn" onClick={() => prevPerson()}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={() => nextPerson()}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={() => randomPerson()}>Random worker</button>
        </article>
    )
}

export default People
