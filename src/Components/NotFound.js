import React from 'react'
import nodata from './../images/nodata.jpg'

const NotFound = () => {
    return (
        <section className="notfound">
            <div  className="notfound-wrapper">
                <div className="not-image">
                    {/* <img src={nodata}/> */}
                </div>
                <p>Nothing found try with another one!</p>
            </div>

        </section>
    )
}

export default NotFound
