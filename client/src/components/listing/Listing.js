import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import './listing.scss';

function Listing() {
    const { id } = useParams();
    const [listing, setListing] = useState({});
    useEffect(() => {
        fetch(`/api/jobs/${id}`)
        .then(res => res.json())
        .then(setListing);
    }, [id]);

    return (
      <div>
        <div className="listing">
          <div className="listing__title">{listing.title}</div>
          <div className="listing__description">{listing.description}</div>
          <div className="listing__author">{listing.author}</div>
        </div>

        <Link to="/" className="listing__return">
            <span>return to listings</span>
        </Link>
      </div>
    );
}

export default Listing;



