import React from "react";
import styles from "../styles/Footer.module.css"




const Navbar = ({search, setSearch}) => {

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  }
  return (
   <>

     
    <div>
      <nav className={`${styles["navbar"]} ${styles["navbar_expand_lg"]}`} style={{background:"#270F33"}}>
        <div className="container_fluid">
          <a className={styles.navbar_brand} href="/">
          
            <img
              src="https://18-candleriggs.fra1.digitaloceanspaces.com/logo11.png"
              alt="logo" className={styles.navbarImage}
              style={{ marginLeft: "2rem", width: "6rem" }}
            />
          </a>
         

          <form
            action="#"
            style={{ color: "#9E9D9D" }}
            className={`${styles["firstSearchBar"]} ${styles["navbar_expand_lg"]}`}
          >
            <input type="text" className={styles.search__input} placeholder="Search" onChange={handleSearch} />
            <button className={styles.search__button}>
              <svg className={styles.search__icon}>
                search
              </svg>
            </button>
          </form>
           <button
            className={`${styles["navbar_toggler"]} ${styles["collapsed"]}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation" style={{color:"white"}}
          >
            <span className={`${styles["toggler_icon"]} ${styles["top_bar"]}`}></span>
            <span className={`${styles["toggler_icon"]} ${styles["middle_bar"]}`}></span>
            <span className={`${styles["toggler_icon"]} ${styles["bottom_bar"]}`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item" >
                <a className="nav-link active" aria-current="page" href="/" style={{color:"#003831"}}>
                  Home
                </a>
              </li>
              <li className={styles.nav_item}>
                <a
                  className="nav-link active"
                  aria-current="page" style={{color:"#003831"}}
                  href="/whats-on"
                >
                  What's On
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page" style={{color:"#003831"}}
                  href="/book-venue"
                >
                  Book Venue
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page" style={{color:"#003831"}}
                  href="/gallery"
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page" style={{color:"#003831"}}
                  href="/menu"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page" style={{color:"#003831"}}
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
