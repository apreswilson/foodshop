import Nav from "../nav/nav";
import Footer from "../footer/footer";

interface Layout {
  children: React.ReactElement
}

const PageLayout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout;