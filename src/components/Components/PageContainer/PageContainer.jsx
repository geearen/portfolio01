import Nav from "../NavBar/Nav";
const PageContainer = ({ children }) => {
  return (
    <div className="main-background">
      <Nav />
      {children}
    </div>
  );
};

export default PageContainer;
