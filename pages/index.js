import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Carousel, { CarouselItem } from "../components/Carousel"
import { HomeCarousel } from "../components/HomeCarousel"

const Home = ({ articles, carousels, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <HomeCarousel content={carousels} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, carouselsRes, categoriesRes, homepageRes] =
    await Promise.all([
      fetchAPI("/articles", { populate: "*" }),
      fetchAPI("/carousels", { populate: "*" }),
      fetchAPI("/categories", { populate: "*" }),
      fetchAPI("/homepage", {
        populate: {
          hero: "*",
          seo: { populate: "*" },
        },
      }),
    ])

  return {
    props: {
      articles: articlesRes.data,
      carousels: carouselsRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
