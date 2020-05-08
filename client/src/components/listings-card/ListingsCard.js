import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './listing-card.scss';

function ListingsCard({ job }) {
    return (
      <Link to={`/job/${job._id}`}>
        <div className="listing-card">
          <div className="listing-card__title">{job.title}</div>
          <div className="listing-card__description">{job.description}</div>
          <div className="listing-card__author">{job.author}</div>
        </div>
      </Link>
    );
}

ListingsCard.propTypes = {
    job: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
    })
}

export default ListingsCard;


