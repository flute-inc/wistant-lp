---
title: Gatsby で記事のトップ画像を設定
date: "2019-07-02T20:00:00"
description: 'Gatsbyで記事のトップ画像を設定し、さらにその画像を記事一覧のサムネイルとしても表示する手法について'
tags: ['gatsby', 'gatsby-image']
---

多くのブログでは、記事の先頭にトップ画像を表示しています。ここではGatsbyでトップ画像を設定し、さらにその画像を記事一覧のサムネイルとしても表示する手法について紹介します。

実装はこちら: https://github.com/suzukalight/suzukalight.github.io/pull/2

# gatsby-image

[gatsby-image](https://www.gatsbyjs.org/docs/gatsby-image/) は、Gatsbyにおける画像表示全般を担うコンポーネントで、単なる画像表示だけではなく、下記の特徴があります；

- Lazy loading 対応。自身が表示領域に入るまでは、画像読み込みを行わない。初期レンダリングが早くなる
- srcset 対応。表示環境に適した画像サイズの画像を返すことで、ダウンロードサイズを削減する

```javascript
import Image from 'gatsby-image';

<Image fluid={post.frontmatter.hero.childImageSharp.fluid} />
```

# heroカラムの追加

トップ画像を指定するカラムを、mdファイルの先頭に追加します。

```yaml
---
...
hero: ./title.png
---
```

画像ファイルは、mdと同じディレクトリに格納すればOKでした。

# queryの追加と、トップ画像の表示

markdownからトップ画像設定を抽出し、gatsby-imageが読み取れる形式に変換します；

```javascript{8-14}
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    ...
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        ...
        hero {
          childImageSharp {
            fluid(maxWidth: 980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ...
```

hero で指定した画像を、 `gatsby-plugin-sharp` で変換します。 `fluid` で抽出すると、srcsetで使用できるように、画像をいくつかのサイズに拡縮します。

```javascript{4}
const BlogPostTemplate = ({ location, data, pageContext }) => {
  return (
    ...
    <Image fluid={data.markdownRemark.frontmatter.hero.childImageSharp.fluid} />
    ...
  )
}:
```

gatsby-image には、fuildで生成された画像群をまとめて指定することができます。これによりGatsbyは表示環境にあわせて、自動的に最適な画像を選択し、表示してくれます。

# 記事一覧のサムネイルとして表示

基本的な手法は同じですが、fluidのかわりに `fixed` を指定すると、固定サイズに切り抜いた画像を用意してくれます；

```javascript{7-13}
export const pageQuery = graphql`
  query {
    ...
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      ...
      hero {
        childImageSharp {
          fixed(width: 128, height:128) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;
```

> より正確に言うと、固定サイズに切り抜いた上で、そのx2, x3の画像もあわせて用意してくれる感じです。そうではなくて、本当に単一のファイルのみを取得したい場合には、`resize` オプションも用意されているようです

コンポーネント側もだいたい同じです；

```javascript{1}
<Image fixed={node.frontmatter.hero.childImageSharp.fixed} />
```

# references

- https://codebushi.com/gatsby-featured-images/
- https://www.orangejellyfish.com/blog/a-comprehensive-guide-to-images-in-gatsby/

