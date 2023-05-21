import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div
      className="w-1/3 p-16 text-white"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <nav className="flex gap-12">
        <div>
          <div className="font-bold">{categories[0].attributes.name}</div>
          <ul>
            {categories[0].attributes.articles?.data.map((data) => (
              <li key={data.id} className="font-light">
                <Link href={`/article/${data.attributes.slug}`}>
                  <a>{data.attributes.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold">{categories[1].attributes.name}</div>
          <ul className="mb-6">
            {categories[1].attributes.articles?.data.map((data) => (
              <li key={data.id} className="font-light">
                <Link href={`/article/${data.attributes.slug}`}>
                  <a>{data.attributes.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="font-bold">{categories[2].attributes.name}</div>
          <ul>
            {categories[2].attributes.articles?.data.map((data) => (
              <li key={data.id} className="font-light">
                <Link href={`/article/${data.attributes.slug}`}>
                  <a>{data.attributes.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
