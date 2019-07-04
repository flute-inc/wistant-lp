import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import DateAndTags from '../../molecules/DateAndTags';

import styles from './Posts.module.scss';

const PostItem = ({ node, title }) => (
  <div className={styles.item} key={node.fields.slug}>
    {node.frontmatter.hero && <Image className={styles.thumbnail} fixed={node.frontmatter.hero.childImageSharp.fixed} />}
    <div className={styles.inner}>
      {/* <DateAndTags date={node.frontmatter.date} tags={node.frontmatter.tags} /> */}
      <h3 className={styles.title}>
        <Link className={styles.link} to={node.fields.slug}>
          <span className={styles.linkText}>{title}</span>
        </Link>
      </h3>
      <p
        className={styles.excerpt}
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />

      <div className={styles.more}>
        <Link className={styles.moreLink} to={node.fields.slug}>
          <span className={styles.moreLinkText}>記事を読む</span>
        </Link>
      </div>
    </div>
  </div>
);

const Posts = ({ posts }) =>
  posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return <PostItem key={node.fields.slug} node={node} title={title} />;
  });

export default Posts;
