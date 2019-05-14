import React from 'react';
import { Link } from 'gatsby';
// import ScrollNavLink from './scroll-navlink';

class CustomLink extends React.Component {

    render = () => {
        const partiallyActive = () => ({ isPartiallyCurrent }) => ({
            className: (isPartiallyCurrent ? ` active` : ``),
        })

        return (
            <div>
                {this.props.exact ?
                    <ScrollNavLink {...this.props} onClick={this.handleClick}>{this.props.children}</ScrollNavLink>
                    :
                    <Link getProps={partiallyActive()}{...this.props} onClick={this.handleClick}>{this.props.children}</Link>
                }
            </div>
        );
    }
}

export default CustomLink;