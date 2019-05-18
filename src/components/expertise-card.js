import React from 'react';

const ExpertiseCard = (props) => {
    return (
        <div className="expertise-card-component">
            <div className="row ">
                <div className="col-12 ">
                    <img src={props.img} alt={props.header} />
                </div>
                <div className="col-12 ">
                    <h2>{props.header}</h2>
                </div>
                <div className="col-12 ">
                    <p>{props.paragraph}</p>
                </div>
            </div>
        </div>
    )
}

export default ExpertiseCard;