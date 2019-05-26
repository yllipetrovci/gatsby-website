import React from 'react';
import { Link } from 'gatsby';
import ScrollLink from './scroll-link';

class CustomLink extends React.Component {

    render = () => {
        const partiallyActive = () => ({ isPartiallyCurrent }) => ({
            className: (isPartiallyCurrent ? ` active` : ``),
        })

        return (
            <div>
                {this.props.exact ?
                    <ScrollLink {...this.props} onClick={this.handleClick}>{this.props.children}</ScrollLink>
                    :
                    <Link getProps={partiallyActive()}{...this.props} onClick={this.handleClick}>{this.props.children}</Link>
                }
            </div>
        );
    }
}

export default CustomLink;