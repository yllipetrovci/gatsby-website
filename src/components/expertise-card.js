import React from 'react';

const ExpertiseCard = (props) => {
    return (
        <div className="expertise-card-component pl-4 pr-4 pt-4 pb-4">
            <div className="row ">
                <div className="col-12 ">
                    <img src={props.img} alt={props.title} />
                </div>
                <div className="col-12 pt-3 pb-2">
                    <h6>{props.title}</h6>
                </div>
                <div className="col-12 ">
                    <p>{props.paragraph}</p>
                </div>
            </div>
        </div>
    )
}

export default ExpertiseCard;