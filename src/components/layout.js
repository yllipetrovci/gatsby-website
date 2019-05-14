/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import TransitionPage from './transition-page';
import Footer from './footer';
import Navigation from './navigation';
import '../styles/portal.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <TransitionPage>
            <Navigation />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <main>{children}</main>

              <button type="button" className="btn btn-primary">Click</button>
              <Footer />
            </div>
          </TransitionPage>
        </>
      )
    }
    }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
