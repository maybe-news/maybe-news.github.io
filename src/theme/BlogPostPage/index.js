/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogSidebar from '@theme/BlogSidebar';
import TOC from '@theme/TOC';
import EditThisPage from '@theme/EditThisPage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DiscussionEmbed } from 'disqus-react';
import styles from './styles.module.css';

function BlogPostPage(props) {
  const {siteConfig} = useDocusaurusContext();
  const {content: BlogPostContents, sidebar} = props;
  const {frontMatter, metadata} = BlogPostContents;
  const {title, description, nextItem, prevItem, editUrl, permalink} = metadata;
  const {hide_table_of_contents: hideTableOfContents} = frontMatter;
  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName="blog-wrapper">
      {BlogPostContents && (
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--3">
              <BlogSidebar sidebar={sidebar} />
            </div>
            <main className="col col--7">
              <BlogPostItem
                frontMatter={frontMatter}
                metadata={metadata}
                isBlogPostPage>
                <BlogPostContents />
              </BlogPostItem>
              <div>{editUrl && <EditThisPage editUrl={editUrl} />}</div>
              {(nextItem || prevItem) && (
                <div className="margin-vert--xl">
                  <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
                </div>
              )}
              <div className={styles.commentContainer}>
                <DiscussionEmbed
                  shortname='maybe-news'
                  config={
                    {
                      url: siteConfig.url + permalink,
                      title: title,
                      identifier: permalink,
                    }
                  }
                />
              </div>
            </main>
            {!hideTableOfContents && BlogPostContents.toc && (
              <div className="col col--2">
                <TOC toc={BlogPostContents.toc} />
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPostPage;
