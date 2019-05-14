import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/components/transition-page-component.scss';

const TransitionPage = (props) => {
    return (
        <ReactCSSTransitionGroup 
            className="transition-page-components"
            transitionName="fade"
            transitionAppear={true}
            transitionLeave={true}
            transitionEnter={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {props.children}
        </ReactCSSTransitionGroup>
    )
}

export default TransitionPage;