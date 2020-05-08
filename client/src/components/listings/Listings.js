import React, { useEffect, useState } from 'react';
import ListingsCard from './../listings-card/ListingsCard';

function Listings() {
    const [listings, setListings] = useState([]);
    useEffect(() => {
        fetch(`api/jobs`)
        .then(res => res.json())
        .then(setListings);
    }, []);

    return (
      <div>
        Latest jobs:
        {
            listings &&
            listings.map(job => <ListingsCard job={job} />)
        }
      </div>
    );
}

export default Listings;

