import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout.js';

const WpPageTemplate = ({ data }) => {
  const page = data.wpPage

  return (
    <Layout>
      <h1>{page.title}</h1>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`;
export default WpPageTemplate;
