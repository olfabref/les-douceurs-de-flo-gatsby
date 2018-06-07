import React from "react";
import PropTypes from "prop-types";
import Logo from "../components/Logo";
import Slider from "react-slick";
import { Columns, Container, Heading, Hero, Section } from "react-bulma-components";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Hero size="fullheight" color="dark" gradient>
          <Hero.Body>
            <Container className="has-text-centered">
              <Heading>
                <Logo/>
              </Heading>
              <Heading subtitle size={3}>
                Pâtisseries, Cake Design, and Co.
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
        <Hero size="fullheight" color="dark" gradient>
          <Hero.Body>
            <Container>
              <Columns>
                <Columns.Column size="half">
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
                </Columns.Column>
                <Columns.Column size="half">
                  <Section>
                    <h1 className="title">Cake design</h1>
                  </Section>
                </Columns.Column>
              </Columns>
            </Container>
          </Hero.Body>
        </Hero>
        <Hero size="fullheight" color="dark" gradient>
          <Hero.Body>
            <Container>
              <Columns>
                <Columns.Column size="half">
                  <Section>
                    <h1 className="title">Pâtisseries</h1>
                  </Section>
                </Columns.Column>
                <Columns.Column size="half">
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
                </Columns.Column>
              </Columns>
            </Container>
          </Hero.Body>
        </Hero>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

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
`;
