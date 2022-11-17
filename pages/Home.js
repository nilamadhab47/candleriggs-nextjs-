import React from "react";
import { ImTicket } from "react-icons/im";
import { AiFillClockCircle, AiFillCalendar } from "react-icons/ai";
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import { useState, useEffect } from "react";
// import Footer from "./Footer";

import moment from "moment/moment";
import { MdPerson } from "react-icons/md";

const Home = () => {
  const [item, setItem] = useState([]);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([]);
  const [event, setEvent] = useState([]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    // REACT_APP_API_URL=https://candleriggs-staging-73rkv.ondigitalocean.app/api
    fetch("https://candleriggs-staging-73rkv.ondigitalocean.app/api/getActiveEvents").then((result) => {
      result.json().then((resp) => {
        setItem(resp.eventData);
        console.log(resp.eventData);
      });
    });
  }, []);
  const allevents = () => {
    fetch("https://candleriggs-staging-73rkv.ondigitalocean.app/api/getActiveEvents").then((result) => {
      result.json().then((resp) => {
        console.log(resp)
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
  const mustEvent = async () => {
    const response = await fetch("https://candleriggs-staging-73rkv.ondigitalocean.app/api/mustSee");
    const data = await response.json();
    console.log(data.data);
    setEvent(data.data);
  };

  useEffect(() => {
    mustEvent();
  }, []);

  return (
    <>
      {/* <Navbar search={search} setSearch={setSearch} /> */}
      <div 
       className={styles.exceedContainer}
      style={{ overflow: "hidden" }}>
        <div className=
        {styles.containerFirst}
        >
          <div 
          
          className=
          {styles.f_cont}
         >
            {user.slice(0, 1).map((imagess, i) => (
              <>
                <div
                className={`${styles["fContImages"]} ${styles["fContImagesDesktop"]}`}
                
                 key={i}>
                  <img
                    src={imagess.addBannerImage}
                    className=
                {styles.img_fluid}
                    alt=""
                  />
                </div>
                <div 
                
                className={`${styles["fContImages"]} ${styles["fContImagesMobile"]}`}
               >
                  <img
                    src={imagess.addMobileBannerImage}
                    className=
                    {styles.img_fluid}
                   
                    alt=""
                  />
                </div>
              </>
            ))}

            <div
             className=
             {styles.container}
           >
              <div
               className=
               {styles.wts_on}
             >
                <div
                className=
                {styles.Link}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p
                   
                    className=
                {styles.pWhat_on}
                    style={{
                      margin: "auto",
                      fontSize: "21px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    What's On At Glasgow's Coolest Event Space.
                  </p>
                  <p 
                  
                  className=
                {styles.pWhat_on2}
                
                >
                    What's On At Glasgow's Leading Event Space
                  </p>

                  <p
                  className=
                  {styles.wtsView}
                    
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
                      href="/whats-on"
                    >
                      View All
                    </Link>
                  </p>
                </div>

                <div 
                
                className=
                {styles.frontImageFlex}
                >
                  <div
                  className={`${styles["allFrontImage"]} ${styles["row"]} ${styles["row-cols-1 "]} ${styles["row-cols-md-3"]}   ${styles["g-4"]}`}
                   
                    style={{ marginTop: "0.5rem", marginBottom: "25rem","display":"flex",
                  "justifyContent":"center" }}
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
                            <img
                              src={data.uploadMainImage}
                              style={{ borderRadius: "50px 0px 0px 0px " }}
                              className={`${styles["card-img-top"]}`}
                              
                              alt="..."
                            />

                              <div 
                             
                               className={`${styles["card-body"]} ${styles["cardbodyh5"]} ${styles["background-color-home"]} `}
                               
                                style={{ background: "#270F33",'fontFamily':"Roboto" }}
                              >
                                <h5
                                className={styles.card_title}
                               >
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
                                    <ImTicket
                                      style={{
                                        position: "relative",
                                        bottom: "2px",
                                        width: "14px",
                                        height: "14px",
                                        right: "2px",
                                      }}
                                    />
                                    Tickets &#163;{data.price}
                                  </p>
                                ) : (
                                  <p 
                                  
                                  className={`${styles["card-text"]} ${styles["text-2"]} `}
                                 >
                                    {" "}
                                    <ImTicket
                                      style={{
                                        position: "relative",
                                        bottom: "2px",
                                        width: "14px",
                                        height: "14px",
                                        right: "2px",
                                      }}
                                    />{" "}
                                    Free Event
                                  </p>
                                )}
                                <p
                                 className={`${styles["card-text"]} ${styles["text-2-a"]} `}
                                 
                                  style={{ fontFamily: "Roboto" }}
                                >
                                  {/* {data.showStartMinute ===0 ? data.showStartHour :} */}
                                  <AiFillClockCircle
                                    style={{
                                      marginTop: "-3px",
                                      width: "14px",
                                      height: "14px",
                                    }}
                                  />{" "}
                                  Show {data.showStartTime}
                                  {""} | Doors {data.doorOpeningTime}
                                </p>
                                <p
                                
                                className={`${styles["card-text"]} ${styles["date"]} `}
                                >
                                  <AiFillCalendar
                                    style={{ marginTop: "-3px" }}
                                  />{" "}
                                  {moment(data.date.slice(0, 10)).format(
                                    "MMM Do YYYY"
                                  )}
                                </p>
                                {data.selectAge === "18+" ||
                                data.selectAge === "All Ages" ? (
                                  <p 
                                  
                                  className={`${styles["card-text"]} ${styles["CardTextAge"]} `}
                                 >
                                    <MdPerson style={{ marginTop: "-3px" }} />
                                    &nbsp;Age:&nbsp;{data.selectAge}
                                  </p>
                                ) : null}

                                <a
                                  href={data.eventLink}
                                  className={`${styles["btn"]} ${styles["btn-primary"]} ${styles["button"]} `}
                                 
                                >
                                  Book Tickets
                                </a>
                              </div>
                            </div>
                          ))
                      : null}
                    {items && items.length
                      ? items
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
                          .slice(9, 50)
                          .map((data, i) => (
                            <div className="col home_event" key={i}>
                              {/* <div className="card"> */}
                              <Link
                                to={`/event/${data.eventName
                                  .replaceAll(" ", "-")
                                  .toLowerCase()}`}
                              >
                                <img
                                  src={data.uploadMainImage}
                                  style={{ borderRadius: "50px 0px 0px 0px " }}
                                  className="card-img-top"
                                  alt="..."
                                />
                              </Link>

                              <div
                                className="card-body cardbodyh5 background-color-home"
                                style={{ background: "#270F33" }}
                              >
                                <h5 className="card-title">
                                  {data.eventName.slice(0, 50)}
                                </h5>
                                <p className="card-text cardTitle">
                                  {data.title.slice(0, 80)}
                                </p>
                                <p className="card-text text-1">
                                  {data.subTitle.slice(0, 160)}
                                </p>
                                {data.price != 0 ? (
                                  <p className="card-text text-2">
                                    <ImTicket
                                      style={{
                                        position: "relative",
                                        bottom: "2px",
                                        width: "14px",
                                        height: "14px",
                                        right: "2px",
                                      }}
                                    />
                                    Tickets &#163;{data.price}
                                  </p>
                                ) : (
                                  <p className="card-text text-2">
                                    {" "}
                                    <ImTicket
                                      style={{
                                        position: "relative",
                                        bottom: "2px",
                                        width: "14px",
                                        height: "14px",
                                        right: "2px",
                                      }}
                                    />{" "}
                                    Free Event
                                  </p>
                                )}

                                <p
                                  className="card-text text-2-a"
                                  style={{ fontFamily: "Roboto" }}
                                >
                                  <AiFillClockCircle
                                    style={{
                                      marginTop: "-3px",
                                      width: "14px",
                                      height: "14px",
                                    }}
                                  />{" "}
                                  Show {data.showStartTime}
                                  {""} | Doors {data.doorOpeningTime}
                                </p>
                                <p className="card-text date">
                                  <AiFillCalendar
                                    style={{ marginTop: "-3px" }}
                                  />{" "}
                                  {moment(data.date.slice(0, 10)).format(
                                    "MMM Do YYYY"
                                  )}
                                </p>
                                {data.selectAge === "18+" ||
                                data.selectAge === "All Ages" ? (
                                  <p className="card-text CardTextAge">
                                    <MdPerson style={{ marginTop: "-3px" }} />
                                    &nbsp;Age:&nbsp;{data.selectAge}
                                  </p>
                                ) : (
                                  <></>
                                )}

                                <a
                                  href={data.eventLink}
                                  className="btn btn-primary button"
                                >
                                  Book Tickets
                                </a>
                              </div>
                              {/* </div> */}
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
                        {event && event.length
                          ? event.slice(0, 1).map((item, i) => (
                              <div className="event_img" key={i}>
                                <img
                                  src={item.image}
                                  alt="previews"
                                  style={{ position: "relative", top: "10px" }}
                                  className="imageFirst images-events"
                                ></img>
                              </div>
                            ))
                          : null}
                        {event && event.length
                          ? event.slice(1, 2).map((item, i) => (
                              <div className="event_img2" key={i}>
                                <img
                                  alt="previews"
                                  src={item.image}
                                  className="images-events2 "
                                ></img>
                                <div className="event_div">
                                  <div className="event_container">
                                    {/* </div> */}
                                    <h1>{item.eventData.title}</h1>
                                    <p>{item.eventData.subTitle}</p>
                                    <p className="">
                                      <AiFillCalendar />{" "}
                                      {moment(
                                        item.eventData.date.slice(0, 10)
                                      ).format("MMM Do YYYY")}
                                    </p>
                                  </div>
                                  <div
                                    className="event_row"
                                    style={{ display: "flex" }}
                                  >
                                    <p
                                      className=""
                                      style={{ fontFamily: "Roboto" }}
                                    >
                                      <AiFillClockCircle
                                        style={{
                                          marginTop: "-3px",
                                          width: "14px",
                                          height: "14px",
                                        }}
                                      />{" "}
                                      {item.eventData.showStartTime}
                                    </p>
                                    <p
                                      className="card-text text-2"
                                      style={{
                                        fontFamily: "Roboto",
                                        fontSize: "14px",
                                      }}
                                    >
                                      <ImTicket
                                        style={{
                                          position: "relative",
                                          width: "14px",
                                          height: "14px",
                                          right: "2px",
                                          fontWeight: "600",
                                          fontFamily: "Roboto",
                                          fontSize: "14px",
                                        }}
                                      />
                                      Tickets &#163; {item.eventData.price}
                                    </p>
                                    <a
                                      href={item.eventData.eventLink}
                                      className="btn btn-primary button"
                                      style={{ fontSize: "18px" }}
                                    >
                                      Book Tickets
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))
                          : null}

                        {event && event.length
                          ? event.slice(2, 3).map((item, i) => (
                              <div className="event_img" key={i}>
                                <img
                                  alt="previews"
                                  src={item.image}
                                  className="imageThird  images-events"
                                  style={{
                                    position: "relative",
                                    right: "8rem",
                                    zIndex: "-1",
                                    top: "10px",
                                    transform: "rotate(15deg)",
                                  }}
                                ></img>
                              </div>
                            ))
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Must See Event */}

      {/* <div className="must_see">
        {event && event.length
          ? event.slice(0, 1).map((item, i) => (
              <tr className="tabledata tabledata2" key={i}>
                <img src={item.image} alt="" />
              </tr>
            ))
          : null}
        {event && event.length
          ? event.slice(1, 2).map((item, i) => (
              <tr className="tabledata tabledata2" key={i}>
                <img src={item.image} alt="" />
              </tr>
            ))
          : null}
        {event && event.length
          ? event.slice(2, 3).map((item, i) => (
              <tr className="tabledata tabledata2" key={i}>
                <img src={item.image} alt="" />
              </tr>
            ))
          : null}
      </div> */}

      {/* <Footer /> */}
    </>
  );
};

export default Home;
