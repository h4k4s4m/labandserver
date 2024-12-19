import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXEmbedProvider } from 'mdx-embed';

export default function Root({ children }) {
  return (
    <MDXProvider>
      <MDXEmbedProvider>{children}</MDXEmbedProvider>
    </MDXProvider>
  );
}
