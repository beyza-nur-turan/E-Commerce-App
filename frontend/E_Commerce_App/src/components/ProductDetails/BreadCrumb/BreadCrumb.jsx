import "../../../css/breadCrumb.css";

const Breadcrumb = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Ana Sayfa</a>
          </li>
          <li>
            <a href="#">Kadın</a>
          </li>
          <li>
            <a href="#">Kaban</a>
          </li>
          <li>Kadın Turuncu Kaban</li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;