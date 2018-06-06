import React from 'react'
import PropTypes from 'prop-types'
import Logo from "../components/Logo"
import Slider from "react-slick"

export default class IndexPage extends React.Component {
    render() {
        const {data} = this.props
        const {edges: posts} = data.allMarkdownRemark
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <section className="section hero is-fullheight is-dark is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-8 is-offset-2 has-text-centered">
                                    <h1 className="title"><Logo/></h1>
                                    <h2>Pâtisseries, Cake Design, and Co.</h2>
                                    <div className="content">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section columns">
                    <div className="column is-half">
                        <Slider {...settings}>
                            <div>
                                <figure className="image">
                                    <img src="/img/2.jpg"/>
                                </figure>
                            </div>
                            <div>
                                <figure className="image">
                                    <img src="/img/3.jpg"/>
                                </figure>
                            </div>
                            <div>
                                <figure className="image">
                                    <img src="/img/5.jpg"/>
                                </figure>
                            </div>
                            <div>
                                <figure className="image">
                                    <img src="/img/6.jpg"/>
                                </figure>
                            </div>
                        </Slider>
                    </div>
                    <div className="column is-half">
                        <div className="hero is-halfheight">
                            <div className="hero-body">
                                <div className="container has-text-left">
                                    <h1 className="title">Cake design</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section columns">
                    <div className="column is-half">
                        <div className="hero is-halfheight">
                            <div className="hero-body">
                                <div className="container has-text-right">
                                    <h1 className="title">Pâtisseries</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half">
                        <Slider {...settings}>
                            <div>
                                <figure className="image">
                                    <img src="/img/1.jpg"/>
                                </figure>
                            </div>
                            <div>
                                <figure className="image">
                                    <img src="/img/4.jpg"/>
                                </figure>
                            </div>
                        </Slider>
                    </div>
                </section>
            </div>
        )
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
