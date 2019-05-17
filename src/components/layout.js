/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../styles/components/layout.scss"
import TransitionPage from './transition-page';
import Footer from './footer';
import Navigation from './navigation';
import '../styles/index.scss';

const Layout = ({ children }) => (
  <div className="layout-component">
    <Navigation />
    <TransitionPage>
      <main>{children}</main>
    </TransitionPage>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
