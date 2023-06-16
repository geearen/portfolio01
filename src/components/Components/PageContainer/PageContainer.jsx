import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
const PageContainer = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="page-container">{children}</div>
      <Footer />
    </>
  );
};

export default PageContainer;
