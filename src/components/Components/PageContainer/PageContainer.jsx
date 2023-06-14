import Nav from "../NavBar/Nav";
const PageContainer = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="page-container">
        {children}
      </div>
    </>
  );
};

export default PageContainer;
