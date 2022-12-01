import React, { Suspense } from "react";
// import "./Home.css";

import styles from "../styles/Home.module.css";


// import Navbar from "./Navbar";

import { useState, useEffect } from "react";
// import Footer from "./Footer";

import dayjs from "dayjs";







import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import Link from "next/link";

const Navbar = dynamic(() => import("../component/NavBar"), {
  ssr: false
});
const Footer = dynamic(() => import("../component/Footer"), {
  ssr: false
});

const Home = () => {
  const [item, setItem] = useState([]);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([]);
  const [event, setEvent] = useState([]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      "https://candleriggs-staging-73rkv.ondigitalocean.app/api/getActiveEvents"
    ).then((result) => {
      result.json().then((resp) => {
        setItem(resp.eventData);
        console.log(resp.eventData);
      });
    });
  }, []);
  const allevents = () => {
    fetch(
      "https://candleriggs-staging-73rkv.ondigitalocean.app/api/getActiveEvents"
    ).then((result) => {
      result.json().then((resp) => {
        setItems(resp.eventData);
        console.log(resp.eventData);
      });
    });
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://candleriggs-staging-73rkv.ondigitalocean.app/api/activeBanner"
    );
    const data = await response.json();
    console.log(data);
    setUser(data.bannerData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // const mustEvent = async () => {
  //   const response = await fetch(
  //     "https://candleriggs-staging-73rkv.ondigitalocean.app/api/mustSee"
  //   );
  //   const data = await response.json();
  //   console.log(data.data);
  //   setEvent(data.data);
  // };

  // useEffect(() => {
  //   mustEvent();
  // }, []);

  return (
    <>
    <Suspense fallback={<div className="loading-lazy">loading....</div>}>

      <Navbar search={search} setSearch={setSearch} />
    </Suspense>
      <div className={styles.exceedContainer} style={{ overflow: "hidden" }}>
        <div className={styles.containerFirst}>
          <div className={styles.f_cont}>
            {user.slice(0, 1).map((imagess, i) => (
              <>
                <div
                  className={`${styles["fContImages"]} ${styles["fContImagesDesktop"]}`}
                  key={i}
                >
                  <Image
                    src={imagess.addBannerImage}
                    className={styles.img_fluid}
                    height={500} width={500}
                    alt=""
                  />
                </div>
                <div
                  className={`${styles["fContImages"]} ${styles["fContImagesMobile"]}`}
                >
                  <Image
                    src={imagess.addMobileBannerImage}
                    className={styles.img_fluid}
                    height={500} width={500}
                    alt=""
                  />
                </div>
              </>
            ))}

            <div className={styles.container}>
              <div className={styles.wts_on}>
                <div
                  className={styles.Link}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p
                    className={styles.pWhat_on}
                    style={{
                      margin: "auto",
                      fontSize: "21px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    What&quot;s On At Glasgow&quot;s Coolest Event Space.
                  </p>
                  <p className={styles.pWhat_on2}>
                    What&quot;s On At Glasgow&quot;s Leading Event Space
                  </p>

                  <p
                    className={styles.wtsView}
                    style={{
                      marginTop: "15px",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "Black",
                        marginTop: "5px",
                      }}
                      href="/"
                    >
                      View All
                    </Link>
                  </p>
                </div>

                <div className={styles.frontImageFlex}>
                  <div
                    className={`${styles["allFrontImage"]} ${styles["row"]} ${styles["row-cols-1 "]} ${styles["row-cols-md-3"]}   ${styles["g-4"]}`}
                    style={{
                      marginTop: "0.5rem",
                      marginBottom: "25rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item && item.length
                      ? item
                          .filter((data) => {
                            if (search == "") {
                              return data;
                            } else if (
                              data.eventName
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            ) {
                              return data;
                            }
                          })
                          .slice(0, 9)
                          .map((data, i) => (
                            <div
                              className={`${styles["col"]} ${styles["home_event"]} ${styles["homeEventCol "]} `}
                              key={i}
                            >
                              {/* <div className="card"> */}
                              {/* <Link
                                to={`/event/${data.eventName
                                  .replaceAll(" ", "-")
                                  .toLowerCase()}`}
                              >
                            </Link> */}
                              <Image
                                src={data.uploadMainImage}
                                style={{ borderRadius: "50px 0px 0px 0px " }}
                                className={`${styles["card-img-top"]}`}
                                height={500} width={500}
                                alt="..."
                              />

                              <div
                                className={`${styles["card-body"]} ${styles["cardbodyh5"]} ${styles["background-color-home"]} `}
                                style={{
                                  background: "#270F33",
                                  fontFamily: "Roboto",
                                }}
                              >
                                <h5 className={styles.card_title}>
                                  {data.eventName.slice(0, 50)}
                                </h5>
                                <p
                                  className={`${styles["card-text"]} ${styles["cardTitle"]} `}
                                >
                                  {data.title.slice(0, 80)}
                                </p>
                                <p
                                  className={`${styles["card-text"]} ${styles["text-1"]} `}
                                >
                                  {data.subTitle.slice(0, 160)}
                                </p>
                                {data.price != 0 ? (
                                  <p
                                    className={`${styles["card-text"]} ${styles["text-2"]} `}
                                  >
                                  
                                    Tickets &#163;{data.price}
                                  </p>
                                ) : (
                                  <p
                                    className={`${styles["card-text"]} ${styles["text-2"]} `}
                                  >
                                    {" "}
                                   {" "}
                                    Free Event
                                  </p>
                                )}
                                <p
                                  className={`${styles["card-text"]} ${styles["text-2-a"]} `}
                                  style={{ fontFamily: "Roboto" }}
                                >
                                  {/* {data.showStartMinute ===0 ? data.showStartHour :} */}
                                  {" "}
                                  Show {data.showStartTime}
                                  {""} | Doors {data.doorOpeningTime}
                                </p>
                                <p
                                  className={`${styles["card-text"]} ${styles["date"]} `}
                                >
                                 {" "}
                                  {dayjs(data.date.slice(0, 10)).format(
                                    "MMM Do YYYY"
                                  )}
                                </p>
                                {data.selectAge === "18+" ||
                                data.selectAge === "All Ages" ? (
                                  <p
                                    className={`${styles["card-text"]} ${styles["CardTextAge"]} `}
                                  >
                                   
                                    &nbsp;Age:&nbsp;{data.selectAge}
                                  </p>
                                ) : null}

                                <Link
                                  href={data.eventLink}
                                  className={`${styles["btn"]} ${styles["btn-primary"]} ${styles["button"]} `}
                                >
                                  Book Tickets
                                </Link>
                              </div>
                            </div>
                          ))
                      : null}
                    
                  </div>
                </div>

                <button className="bottom_home_btn" onClick={allevents}>
                  More Events
                </button>

                <div>
                  {/* <div className="wts_header">
                    <h1 className="wts_header_h1">Must See Events</h1>
                    <p className="wts_header_p">View All</p>
                  </div> */}
                  <div className="wts-on" style={{ display: "none" }}>
                    <div className="" style={{ marginBottom: "6rem" }}>
                      <div
                        className="images"
                        style={{
                          display: "flex",
                          marginLeft: "-52px",
                          height: "100vh",
                        }}
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="loading-lazy">loading....</div>}>
      <Footer />
      </Suspense>
    </>
  );
};

export default Home;
