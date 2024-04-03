import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">QUALIFICATION</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=> toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=> toggleTab(2)}
          >
            <i className="uil uil-newspaper qualification__icon"></i>
            Certification
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* sample1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">KMHSSE-Cuddalore</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2017-2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* sample2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">HSC</h3>
                <span className="qualification__subtitle">KMHSSE-Cuddalore</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2019-2020
                </div>
              </div>
            </div>
            {/* sample3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UG-Degree</h3>
                <span className="qualification__subtitle">SJC-Cuddalore</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2020-2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* sample4 */}
            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX expert</h3>
                <span className="qualification__subtitle">Spain-Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2021-present
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* sample5 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Python </h3>
                <span className="qualification__subtitle">GUVI</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* sample6 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Python FullStack</h3>
                <span className="qualification__subtitle">Greens Technologies</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2023-2024
                </div>
              </div>
            </div>
            {/* sample7 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MERN Stack</h3>
                <span className="qualification__subtitle">Self-Learn</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  <i>2024-2023</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
