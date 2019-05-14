import React from 'react';
import { Helmet } from "react-helmet";
// import Config from '../config';

class HelmetExtend extends React.Component {

    constructor(props) {
        super(props);

        this._webAddress = 'localhost';
        this._metadata = {};
        const $this = this;

        React.Children.forEach(props.children, (element, index) => {
            if (element && element.props && element.props.metadata && element.props.children) {
                $this._metadata[element.props.metadata] = element.props.children;
            }
        });
    }

    render = () => {
        return (
            <Helmet>
                <title>{this._metadata.title}</title>
                <meta http-equiv="content-language" content="en-us" />
                <html lang="en" amp />
                <meta name="description" content={this._metadata.description} />
                <meta name="keywords" content={this._metadata.keywords} />
                <meta property="og:title" content={this._metadata.title} />
                <meta property="og:description" content={this._metadata.description} />
                <meta property="og:url" content={this._webAddress + (this._metadata.path || '')} />
                {/* <meta property="og:image" content={this._webAddress + (this._metadata.image || LogoFull)} /> */}
                <meta property="og:type" content={this._metadata.type || "website"} />
                {/* <meta name="twitter:title" content={this._metadata.title} /> */}
                {/* <meta name="twitter:description" content={this._metadata.description} /> */}
                {/* <meta property="fb:app_id" content={Config.SocialMedia.Facebook.AppId} /> */}
                ({this._metadata.canonicalurl && <link rel="canonical" href={this._webAddress + (this._metadata.canonicalurl || '')} />})
                {/* {this.props.noIndex && (<meta name="robots" content="noindex" />)} */}
            </Helmet>
        );
    }
}

export default HelmetExtend;
