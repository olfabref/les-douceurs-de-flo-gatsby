import React from 'react'
import PropTypes from 'prop-types'
import Content from "../components/Content";

export const RecettesTemplate = ({
                                   title,
                                   content
                                 }) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <Content className="content" content={content}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RecettesTemplate.propTypes = {
  title: PropTypes.string,
}

class Recettes extends React.Component {
    componentDidMount() {
        bulmaCarousel.attach();
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { frontmatter } = this.props.data.markdownRemark

        return (
            <RecettesTemplate
                title={frontmatter.title}
                content={this.props.data.html}
            />
        )
    }
}

Recettes.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Recettes

export const recettesQuery = graphql`
  query Recettes($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
