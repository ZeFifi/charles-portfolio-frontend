import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <div className="flex" style={{ minHeight: "100vh" }}>
    <Nav categories={categories} />
    <div className="flex flex-col w-full">{children}</div>
  </div>
)

export default Layout
