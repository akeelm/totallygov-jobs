import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import TextInput from '../text-input/TextInput';
import './create-listing.scss';

function CreateListing() {
    const listingItem = {
        title: null,
        description: null,
        author: null
    }

    const history = useHistory();
    const [listing, setListing] = useState(listingItem);
    const [formErrors, setFormErrors] = useState(null);
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        if (isDirty && (!listing.title || !listing.description || !listing.author))
          setFormErrors("All fields are required.");
        else setFormErrors(null);
    }, [listing, isDirty])

    const titleChangeHandler = (e) => {
        setListing(Object.assign({}, listing, { title: e.target.value }));
        setIsDirty(true);
    }

    const descriptionChangeHandler = (e) => {
        setListing(Object.assign({}, listing, { description: e.target.value }));
        setIsDirty(true);
    }

    const authorChangeHandler = (e) => {
        setListing(Object.assign({}, listing, { author: e.target.value }));
        setIsDirty(true);
    }

    const saveClickHandler = async () => {
        setIsDirty(true);

        if (isDirty && formErrors === null) {
            await fetch('/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(listing)
            })
            .then(res => res.json())
            .then(res => { if (res._id) history.push('/') })
            .catch((e) => {
                setFormErrors(e);
            });
        }
    }

    return (
      <div>
        Add new job
        <div className="create-listing">
          <div className="create-listing__title">
            <TextInput label="Title" onChange={titleChangeHandler} />
          </div>
          <div className="create-listing__description">
            <TextInput label="Description" onChange={descriptionChangeHandler} />
          </div>
          <div className="create-listing__author">
            <TextInput label="Author" onChange={authorChangeHandler} />
          </div>
          <div className="create-listing__error">
            <span>{formErrors}</span>
          </div>
          <div className="button" onClick={saveClickHandler}>Save</div>
        </div>
        <Link to="/" className="listing__return">
          <span>return to listings</span>
        </Link>
      </div>
    );
}


export default CreateListing;