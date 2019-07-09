import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/atoms/Seo';
import Posts from '../components/pages/Root/Posts';
import Layout from '../components/templates/Layout';
import LibraryHeader from '../components/molecules/LibraryHeader';
import LibraryFinder from '../components/molecules/LibraryFinder';
import LibraryFrame from '../components/molecules/LibraryFrame';

const LibraryIndex = ({ location, data }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <Seo title="Index" description="なければ作ればいいじゃない" />
    <LibraryHeader />
    <LibraryFinder />
    <LibraryFrame label="人気の記事">
      <Posts posts={data.allMarkdownRemark.edges} />
    </LibraryFrame>
    <LibraryFrame label="最新の記事">
      人気の記事
    </LibraryFrame>
  </Layout>
);

export default LibraryIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/M/D")
            title
            description
            tags
            hero {
              childImageSharp {
                fixed(width: 128, height: 128) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
