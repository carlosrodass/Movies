import React, { useState } from 'react';
import Submit from '../Submit';
import { searchMovie, searchTvShow, multi } from '../../api';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import ReactStars from 'react-stars';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Search = () => {

    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [isFounded, setIsFounded] = useState(false);

    const handleSubmit = async (e) => {
        console.log(search);
        if (search) {

            try {
                const response = await multi(search);
                setData(response.results)
                console.log(response.results);
                setIsFounded(true);
            } catch (error) {
                throw error;
            }

        }

        e.preventDefault();
    }
    

    return (
        <div className="list">
            <Submit
                handleSubmit={handleSubmit}
                search={search}
                setSearch={setSearch}
            />
            {
               data.length ? data.map((item) => {
                    const { id, poster_path, title, release_date, item_count } = item;
                    return (
                        <Card className="card" key={id}>
                            <Link to={`movie/${id}`}>
                                <Card.Img className="card-image" variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                            </Link>
                            <Card.Body>
                                <Card.Title className="card-title" style={{ fontWeight: "bolder", fontSize: '2.5vh' }}>
                                    {title}
                                </Card.Title>
                                <Card.Text className="card-text">
                                    <p style={{ fontSize: '1.9vh', fontWeight: 'bolder', color: 'gray' }}>
                                        Release Date: {release_date}
                                    </p>

                                    <ReactStars count={item_count} size={20} color1={'#f4c10f'} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }) : <div style={{ height: '95vh' }}>
                    <p>Search for Movie or Tv show you want</p>
                </div>

            }
        </div>
    )
}

export default Search
