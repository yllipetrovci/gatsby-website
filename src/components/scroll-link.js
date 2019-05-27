import React from 'react';
import { Link } from 'gatsby';
import { animateScroll } from 'react-scroll';

class ScrollLink extends React.Component {
    
    render = () => {
        return (
            <Link {...this.props} onClick={()=>{animateScroll.scrollToTop();}}>{this.props.children}</Link>
        );
    }
}

export default ScrollLink;