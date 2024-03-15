import React, { useState } from "react";
import "./SideBar.css"; // Import the CSS file
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { TbApps } from "react-icons/tb";

function SideMenu() {

  const getTooltip = (sectionName, buttonId) => (
    <Tooltip id={`${buttonId}-tooltip`}>
      {sectionName}
    </Tooltip>
  );
  const sidebarItems = [
    { id: 1, name: 'Home', icon: '/homeIcon.svg', buttonId: '5099F2E5-AD99-4BF2-BF82-DF525FFD0BE2' },
    { id: 2, name: 'HR Service', icon: '/hr.svg', buttonId: '83D3F491-B586-4266-8738-89776471BF21' },
    { id: 3, name: ' My Content', icon: '/folder.svg', buttonId: 'F57D5D29-4967-495C-A648-F7AB66BF8572' },
    { id: 4, name: 'Word', icon: '/editor.svg', buttonId: 'WordOnline' },
    { id: 5, name: 'Image Generator', icon: '/imgedt.svg', buttonId: 'ImageGenerator' },
    {
      id: 6,
      name: 'Apps',
      icon: "/app.png",
      buttonId: '26706956-2AAE-4A22-8960-09B98C35B28C'
    },
    { id: 7, name: 'Picture', icon: '/picture.svg', buttonId: 'ExcelOnline' },
    { id: 8, name: 'Brainstorm', icon: '/brainstrom.svg', buttonId: 'PowerPointOnline' },
    {
      id: 9,
      name: 'Outlook',
      icon:"/reseacrh.svg",
      buttonId: 'Mail'
    },
    {
      id: 10,
      name: 'OneDrive',
      icon:"/ai.svg",
      buttonId: 'Documents'
    },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  return (
    <div className="___cul4co0 ftgf7lp f1ctqxl6">
      <div
        dir="ltr"
        className="fui-FluentProvider ohp-fui-FluentProvider2 ___jdtuxv0 f19n0e5 fxugw4r f1o700av fk6fouc fkhj508 figsok6 f1i3iumi"
      >
        <div
          data-testid="appbar"
          className="ms-bgc-nla AppBarComponent-module__left-nav-container__xENv9"
        >
          <div
            className="___7ztb050 f22iagw f122n59 f1ctqxl6 f1l02sjl f3swjwz f1g0x7ka fhxju0i f1qch9an f1cnd47f f1vx9l62"
            data-tabster='{"mover":{"cyclic":true,"direction":1,"memorizeCurrent":true}}'
          >
            <i
              tabindex="0"
              role="none"
              data-tabster-dummy=""
              aria-hidden="true"
              style={{
                position: "fixed",
                height: "1px",
                width: "1px",
                opacity: "0.001",
                zIndex: "-1",
                contentVisibility: "hidden",
                top: "0px",
                left: "0px",
              }}
            ></i>
            <div
              className="___4vdui50 f22iagw f122n59 fsuw20m f1vx9l62 f1ja72i3"
              role="navigation"
            >
              <div>
                <div
                  className={`77lcry0 f10pi13n sidebar-item `}
                  role="none"
                  aria-label="Home"
                >

                  <button
                    type="button"
                    id="5099F2E5-AD99-4BF2-BF82-DF525FFD0BE2"
                    data-tid="5099F2E5-AD99-4BF2-BF82-DF525FFD0BE2"
                    aria-label="Home"
                    aria-pressed="true"
                    aria-describedby="readerBox-5099F2E5-AD99-4BF2-BF82-DF525FFD0BE2"
                    role="button"
                    data-clicklog="custom"
                    className="fui-Button r1alrhcs ___2hz3x90 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 f1q9pm1r f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"
                  >
                    <span className="fui-Button__icon rywnvv2">
                      <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                        <div className="">
                          {/* <svg
                            fill="var(--colorNeutralForeground3BrandSelected)"
                            className="___12fm75w f1w7gpdv fez10in fg4l7m0"
                            aria-hidden="true"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.45 2.53c-.84-.7-2.06-.7-2.9 0L3.8 8.23c-.5.43-.8 1.05-.8 1.72v9.3c0 .97.78 1.75 1.75 1.75h3c.97 0 1.75-.78 1.75-1.75v-4c0-.68.54-1.23 1.22-1.25h2.56c.68.02 1.22.57 1.22 1.25v4c0 .97.78 1.75 1.75 1.75h3c.97 0 1.75-.78 1.75-1.75v-9.3c0-.67-.3-1.3-.8-1.72l-6.75-5.7Z"
                              fill="var(--colorNeutralForeground3BrandSelected)"
                            ></path>
                          </svg> */}
                        </div>
                        <span
                          className="___fqqoxt0 ftgm304 f1jehi8h f1lmfglv f1in0ah0 f1abmfm4 f1nlzb5t f1p9o1ba f1sil6mw fz5stix f1cmbuwj f17mccla fcpl73t f122n59 fk6fouc f13mqy1h"
                          style={{
                            color: "var(--colorNeutralForeground3Selected)",
                          }}
                        >
                          {/* Home */}
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div>

              {sidebarItems.map((item) => (
                <Link key={item.id} to={item.link}>
                  <div
                    className={`sidebar-item ___77lcry0 f10pi13n ${activeItem === item.id ? 'active' : ''}`}
                    onClick={() => handleItemClick(item.id)}
                    role="none"
                    aria-label={item.name}
                  >
                    <OverlayTrigger
                      key={item.id}
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={getTooltip(item.name, item.buttonId)}
                    >
                      <button
                        type="button"
                        id={item.buttonId}
                        data-tid={item.buttonId}

                        aria-label="Create"
                        aria-pressed="false"

                        aria-describedby="readerBox-83D3F491-B586-4266-8738-89776471BF21"
                        role="button"
                        data-clicklog="custom"
                        className="fui-Button sidebar-item  r1alrhcs ___7t9k0v0 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 fhovq9v f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"

                      >
                        <span className="fui-Button__icon rywnvv2">
                          <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                            <div className="">
                              <img src={item.icon} alt={item.name} style={{ width: "24px", height: "24px" }} />
                            </div>
                            <span
                              className="___fqqoxt0 ... (your other classes)"
                              style={{ color: "var(--colorNeutralForeground3Selected)" }}
                            >
                              {item.name}
                            </span>
                          </div>
                        </span>
                      </button>
                    </OverlayTrigger>
                  </div>
                </Link>
              ))}
              {/* <Link to="/hrmenu">

                <div>
                  <div
                    className={`sidebar-item  ___77lcry0 f10pi13n ${activeItem === 2 ? 'active' : ''}`}
                    onClick={() => handleItemClick(2)}
                    role="none"
                    aria-label="HR"

                  >
                    <button
                      type="button"
                      id="83D3F491-B586-4266-8738-89776471BF21"

                      data-tid="83D3F491-B586-4266-8738-89776471BF21"
                      aria-label="Create"
                      aria-pressed="false"

                      aria-describedby="readerBox-83D3F491-B586-4266-8738-89776471BF21"
                      role="button"
                      data-clicklog="custom"
                      className="fui-Button sidebar-item  r1alrhcs ___7t9k0v0 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 fhovq9v f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"
                    >
                      <span className="fui-Button__icon rywnvv2">
                        <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                          <div className="">
                            <img src="/hr.svg" />
                          </div>
                          <span
                            className="___fqqoxt0 ftgm304 f1jehi8h f1lmfglv f1in0ah0 f1abmfm4 f1nlzb5t f1p9o1ba f1sil6mw fz5stix f1cmbuwj f17mccla fcpl73t f122n59 fk6fouc f13mqy1h"
                            style={{ color: "var(--colorNeutralForeground3)" }}
                          >
                            HR Service
                          </span>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div>
                  <div
                    className={`sidebar-item  ___77lcry0 f10pi13n ${activeItem === 3 ? 'active' : ''}`}
                    onClick={() => handleItemClick(3)}
                    role="none"
                    aria-label="My Content"

                  >
                    <button
                      type="button"
                      id="F57D5D29-4967-495C-A648-F7AB66BF8572 My Content"
                      data-tid="F57D5D29-4967-495C-A648-F7AB66BF8572"
                      aria-label="My Content"
                      aria-pressed="false"
                      aria-describedby="readerBox-F57D5D29-4967-495C-A648-F7AB66BF8572"
                      role="button"
                      data-clicklog="custom"
                      className="fui-Button sidebar-item r1alrhcs ___7t9k0v0 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 fhovq9v f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"
                    >
                      <span className="fui-Button__icon rywnvv2">
                        <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                          <div className="">
                            <img src="/folder.svg" />
                          </div>
                          <span
                            className="___fqqoxt0 ftgm304 f1jehi8h f1lmfglv f1in0ah0 f1abmfm4 f1nlzb5t f1p9o1ba f1sil6mw fz5stix f1cmbuwj f17mccla fcpl73t f122n59 fk6fouc f13mqy1h"
                            style={{ color: "var(--colorNeutralForeground3)" }}
                          >
                            My Content
                          </span>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
              <Link to="/editor">
                <div
                  className={`sidebar-item  ___77lcry0 f10pi13n ${activeItem === 4 ? 'active' : ''}`}
                  onClick={() => handleItemClick(4)}
                  role="none"
                  aria-label="Word"
                >
                  <button
                    type="button"
                    id="WordOnline"
                    data-tid="WordOnline"
                    aria-label="Word"
                    aria-pressed="false"
                    aria-describedby="readerBox-WordOnline"
                    role="button"
                    data-clicklog="custom"
                    className="fui-Button sidebar-item r1alrhcs ___7t9k0v0 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 fhovq9v f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"
                  >
                    <span className="fui-Button__icon rywnvv2">
                      <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                        <div className="">
                          <img
                            src="/editor.svg"

                            data-clicklog="custom"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                        <span
                          className="___fqqoxt0 ftgm304 f1jehi8h f1lmfglv f1in0ah0 f1abmfm4 f1nlzb5t f1p9o1ba f1sil6mw fz5stix f1cmbuwj f17mccla fcpl73t f122n59 fk6fouc f13mqy1h"
                          style={{ color: "var(--colorNeutralForeground3)" }}
                        >
                          Editor
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </Link>
              <Link to="/imagegenrator">
                <div
                  className={`sidebar-item  ___77lcry0 f10pi13n ${activeItem === 5 ? 'active' : ''}`}
                  onClick={() => handleItemClick(5)}
                  role="none"
                  aria-label="Word"
                >
                  <button
                    type="button"
                    id="WordOnline"
                    data-tid="WordOnline"
                    aria-label="Word"
                    aria-pressed="false"
                    aria-describedby="readerBox-WordOnline"
                    role="button"
                    data-clicklog="custom"
                    className="fui-Button sidebar-item r1alrhcs ___7t9k0v0 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 fhovq9v f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"
                  >
                    <span className="fui-Button__icon rywnvv2">
                      <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                        <div className="">
                          <img
                            src="/imgedt.svg"

                            data-clicklog="custom"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                        <span
                          className="___fqqoxt0 ftgm304 f1jehi8h f1lmfglv f1in0ah0 f1abmfm4 f1nlzb5t f1p9o1ba f1sil6mw fz5stix f1cmbuwj f17mccla fcpl73t f122n59 fk6fouc f13mqy1h"
                          style={{ color: "var(--colorNeutralForeground3)" }}
                        >
                          Create image
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </Link>
              <div>
                <div
                  className={`sidebar-item  ___77lcry0 f10pi13n ${activeItem === 6 ? 'active' : ''}`}
                  onClick={() => handleItemClick(6)}
                  role="none"
                  aria-label="Apps"
                >
                  <button
                    type="button"
                    id="26706956-2AAE-4A22-8960-09B98C35B28C"
                    data-tid="26706956-2AAE-4A22-8960-09B98C35B28C"
                    aria-label="Apps"
                    aria-pressed="false"
                    aria-describedby="readerBox-26706956-2AAE-4A22-8960-09B98C35B28C"
                    role="button"
                    data-clicklog="custom"
                    className="fui-Button sidebar-item r1alrhcs ___7t9k0v0 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 fhovq9v f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"
                  >
                    <span className="fui-Button__icon rywnvv2">
                      <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                        <div className="">
                          <svg
                            fill="var(--colorNeutralForeground3)"
                            className="___12fm75w f1w7gpdv fez10in fg4l7m0"
                            aria-hidden="true"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m18.5 2.33 3.17 3.18c.88.88.88 2.3 0 3.18l-2.58 2.59A2.25 2.25 0 0 1 21 13.5v5.25C21 20 20 21 18.75 21H5.25C4.01 21 3 20 3 18.75V5.25C3 4.01 4 3 5.25 3h5.25c1.13 0 2.06.83 2.23 1.92l2.58-2.59c.88-.88 2.3-.88 3.18 0Zm-14 16.42c0 .41.34.75.75.75h6v-6.75H4.5v6Zm8.25.75h6c.41 0 .75-.34.75-.75V13.5a.75.75 0 0 0-.75-.75h-6v6.75Zm-2.25-15H5.25a.75.75 0 0 0-.75.75v6h6.75v-6a.75.75 0 0 0-.75-.75Zm2.25 4.81v1.94h1.94l-1.94-1.94Zm3.62-5.92L13.2 6.57c-.3.3-.3.77 0 1.06l3.18 3.18c.3.3.77.3 1.06 0l3.18-3.18c.3-.3.3-.77 0-1.06l-3.18-3.18a.75.75 0 0 0-1.06 0Z"
                              fill="var(--colorNeutralForeground3)"
                            ></path>
                          </svg>
                        </div>
                        <span
                          className="___fqqoxt0 ftgm304 f1jehi8h f1lmfglv f1in0ah0 f1abmfm4 f1nlzb5t f1p9o1ba f1sil6mw fz5stix f1cmbuwj f17mccla fcpl73t f122n59 fk6fouc f13mqy1h"
                          style={{ color: "var(--colorNeutralForeground3)" }}
                        >
                          Coming soon Apps
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div>

              </div>
              <div>
                <div
                  className={`sidebar-item  ___77lcry0 f10pi13n ${activeItem === 7 ? 'active' : ''}`}
                  onClick={() => handleItemClick(7)}
                  role="none"
                  aria-label="Excel"
                >
                  <button
                    type="button"
                    id="ExcelOnline"
                    data-tid="ExcelOnline"
                    aria-label="Excel"
                    aria-pressed="false"
                    aria-describedby="readerBox-ExcelOnline"
                    role="button"
                    data-clicklog="custom"
                    className="fui-Button sidebar-item r1alrhcs ___7t9k0v0 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 fhovq9v f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"
                  >
                    <span className="fui-Button__icon rywnvv2">
                      <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                        <div className="">
                          <img
                            src="/picture.svg"
                            alt="Excel"
                            className=""
                            data-clicklog="custom"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                        <span
                          className="___fqqoxt0 ftgm304 f1jehi8h f1lmfglv f1in0ah0 f1abmfm4 f1nlzb5t f1p9o1ba f1sil6mw fz5stix f1cmbuwj f17mccla fcpl73t f122n59 fk6fouc f13mqy1h"
                          style={{ color: "var(--colorNeutralForeground3)" }}
                        >
                          Picture
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <div
                  className={`sidebar-item  ___77lcry0 f10pi13n ${activeItem === 8 ? 'active' : ''}`}
                  onClick={() => handleItemClick(8)}
                  role="none"
                  aria-label="PowerPoint"
                >
                  <button
                    type="button"
                    id="PowerPointOnline"
                    data-tid="PowerPointOnline"
                    aria-label="PowerPoint"
                    aria-pressed="false"
                    aria-describedby="readerBox-PowerPointOnline"
                    role="button"
                    data-clicklog="custom"
                    className="fui-Button sidebar-item r1alrhcs ___7t9k0v0 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 fhovq9v f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"
                  >
                    <span className="fui-Button__icon rywnvv2">
                      <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                        <div className="">
                          <img
                            src="/brainstrom.svg"
                            alt="PowerPoint"
                            className=""
                            data-clicklog="custom"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                        <span
                          className="___fqqoxt0 ftgm304 f1jehi8h f1lmfglv f1in0ah0 f1abmfm4 f1nlzb5t f1p9o1ba f1sil6mw fz5stix f1cmbuwj f17mccla fcpl73t f122n59 fk6fouc f13mqy1h"
                          style={{ color: "var(--colorNeutralForeground3)" }}
                        >
                          Brainstrom
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <div
                  className={`sidebar-item  ___77lcry0 f10pi13n ${activeItem === 9 ? 'active' : ''}`}
                  onClick={() => handleItemClick(9)}
                  role="none"
                  aria-label="Outlook"
                >
                  <button
                    type="button"
                    id="Mail"
                    data-tid="Mail"
                    aria-label="Outlook"
                    aria-pressed="false"
                    aria-describedby="readerBox-Mail"
                    role="button"
                    data-clicklog="custom"
                    className="fui-Button sidebar-item r1alrhcs ___7t9k0v0 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 fhovq9v f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"
                  >
                    <span className="fui-Button__icon rywnvv2">
                      <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                        <div className="">
                          <img
                            src="/reseacrh.svg"
                            alt="Outlook"
                            className=""
                            data-clicklog="custom"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                        <span
                          className="___fqqoxt0 ftgm304 f1jehi8h f1lmfglv f1in0ah0 f1abmfm4 f1nlzb5t f1p9o1ba f1sil6mw fz5stix f1cmbuwj f17mccla fcpl73t f122n59 fk6fouc f13mqy1h"
                          style={{ color: "var(--colorNeutralForeground3)" }}
                        >
                          Research
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div> */}
              {/* <div>
                <div
                  className={`sidebar-item  ___77lcry0 f10pi13n ${activeItem === 10 ? 'active' : ''}`}
                  onClick={() => handleItemClick(10)}
                  role="none"
                  aria-label="OneDrive"
                >
                  <button
                    type="button"
                    id="Documents"
                    data-tid="Documents"
                    aria-label="OneDrive"
                    aria-pressed="false"
                    aria-describedby="readerBox-Documents"
                    role="button"
                    data-clicklog="custom"
                    className="fui-Button r1alrhcs ___7t9k0v0 f1sl3k7w f136y8j8 f1brlhvm f10xn8zz ftgf7lp f1m4tk7k fre7gi1 f1358rze fqdk4by f1rvrf73 fzki0ko f3swjwz f1hu3pq6 f19f4twv figsok6 fhovq9v f1xqy1su f1sdsnyy ftqa4ok f2hkw1w f8hki3x f1d2448m f1bjia2o ffh67wi f226i61 f13kzufm flujwa2 fsx75g8 f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d frrh606 f1v5zibi ful5kiu fo2hd23 f1jqcqds ftffrms f2e7qr6 fsr1zz6 f1dvezut fd0oaoj fjvm52t f1cwg4i8 f1mywlt f1njr18z fiwyskv f1o5h46z f1q3txrk f1o7qkhw fzpis3h fsuw20m f1krrbdw f1deotkl f10ostut f1ozlkrg"
                  >
                    <span className="fui-Button__icon rywnvv2">
                      <div className="___11yg1ik f22iagw f1vx9l62 f4d9j23 f122n59 f1aehjj5 f3swjwz fzki0ko">
                        <div className="">
                          <img
                            src="ai.svg"
                            alt="OneDrive"
                            className=""
                            data-clicklog="custom"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                        <span
                          className="___fqqoxt0 ftgm304 f1jehi8h f1lmfglv f1in0ah0 f1abmfm4 f1nlzb5t f1p9o1ba f1sil6mw fz5stix f1cmbuwj f17mccla fcpl73t f122n59 fk6fouc f13mqy1h"
                          style={{ color: "var(--colorNeutralForeground3)" }}
                        >
                          AI analysis
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div> */}
            </div>

          </div>
        </div >
      </div >
    </div >
  );
}

export default SideMenu;
