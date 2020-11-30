import React from "react"
import headerStyles from "./header.module.scss"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `
      )
    return (
        <header className={headerStyles.header}>
            <div className="{headerStyles.overlay}"></div>
           <div className={headerStyles.heroContent}>
          <p className={headerStyles.brand}>
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </p>
            <p className={headerStyles.description}>
            {data.site.siteMetadata.description}</p>
          </div>
          <nav className={headerStyles.navContainer}>
          <ul className={headerStyles.navList}>
              <li>
                <Link to="/" activeClassName={headerStyles.activeMenuItem}>Home</Link>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>
        </header>
      )
    }
    

export default Header