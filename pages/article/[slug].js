/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI, getStrapiURL } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import Image from "next/image"
import classnames from "classnames"

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)
  const imagesUrl = article.attributes.images.data?.map((data) =>
    getStrapiURL(data.attributes.url)
  )
  const imagesCaption = article.attributes.images.data?.map(
    (data) => data.attributes.caption
  )
  const isFlexCol = article.attributes.isFlexCol

  const gallery = article.attributes.images

  console.log(gallery)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div
        className={classnames(
          "flex items-center justify-evenly min-h-full p-4 text-white",
          {
            "flex-col": isFlexCol,
          }
        )}
        style={{ backgroundColor: article.attributes.backgroundColor }}
      >
        <div className="flex flex-col items-center gap-14">
          {gallery?.data?.map((image) => (
            <>
              <div className="relative mb-5 flex justify-center items-center gap-14">
                <img
                  className={classnames("object-contain", {
                    "w-1/3": isFlexCol,
                  })}
                  src={getStrapiURL(image.attributes.url)}
                  alt="Sylvie"
                />
                <div>{image.attributes.caption}</div>
              </div>
            </>
          ))}
        </div>
        <div>
          <div className="uk-section">
            <div className="uk-container uk-container-small">
              <ReactMarkdown
                source={article.attributes.content}
                escapeHtml={false}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories", { populate: "*" })

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

export default Article
