import styles from "../styles/landing.module.css";
import { useState } from "react";
export const Landing = () => {
  const [show, setShow] = useState(false);
  const button = {
    bg: "teal",
    text: "Get Started",
    width: "40%",
    br: "9px",
    color: "#ffffff",
    height: "50px",
    fontSize: "18px",
  };
  return (
    <div className={styles.landing}>
      <div>
        <div className={styles.landing1}>
          <p>Invest in STOCKS</p>
          <p>Join a new generation of investors</p>
          <Button styles={button} />
        </div>
      </div>
      <div>
        <div className={styles.landing2}>
          <div>
            <img
              src="data:image/png;base64,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"
              alt="logo"
            />
            <p>Mutual Funds</p>
          </div>
          <div>
            <img
              src="data:image/png;base64,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"
              alt="logo"
            />
            <p>Stocks</p>
          </div>
        </div>
        <div className={styles.landing2}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5LrnYj9Hf2Rr77qQeKN9QLouFsyIe5edvA&usqp=CAU"
              alt="logo"
            />
            <p>Futures & Options</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFp_n4vjsLgrDi0O-57MRMbp5RUkhz65rEqg&usqp=CAU"
              alt="logo"
            />
            <p> US Stocks</p>
          </div>
        </div>
        <div className={styles.landing2}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pbbcsgcWEsBfuxB2XDTUEixWT-0Pd7Syrg&usqp=CAU"
              alt="logo"
            />
            <p>IPO</p>
          </div>
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADoCAMAAABVRrFMAAAAbFBMVEX///9POIFNNoBKMX5BJHlMNH9GLHxFKnv19PhIL31DJ3o9HXfY0+Ll4uzw7fSDd6Lf2+eCdKNVPoWxqcWflbd6a55cR4p1ZZlkUY/Sz9y6s8zLxtiPg6yaj7SimbhxX5hpV5KqocA1D3MqAG3k3LFtAAAJt0lEQVR4nO2daZerKBCGI4ggLh1jYhKNWWb+/3+cqIl7FBBc5vB8ut23T5q3waKoKsrdTqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDT/a45pQbz0QGQTO3aBky49FMlEyPhAz/7wj3pJHN4LjuufYc8xSuxDMvCDqeFQjK0C5zXfEAV5WZUyA9Fg3/tTJLlhC9R+kg78DVbCAxp1IA2S9pr0kltkQtD4Obx+Za0RGwDSw/kvDeNrRhymwQVRGxktsLv0wEcx22N+i0PQxtTMoNiGHVXbVcbCBpQ54yp6ANb6lR3AuI4eZdBbeuCjnOC4jh5lxtLjHie0xnV0gaelxz2OK2RC8Pqdq93OFnjQgDniYa6C1OZXtoXFuNvtBey+uX7fKuPZ62QMsQXLmBFz2xAaLj1mRiJOGwLA0iNmJaT/0ynbkYjrSUMHsvSImYm5Js3cwi795cHhPMLz0qPlYd8+WQ9g9UdK1gq7EaH3pcfKyY1RGnwsPVJuTphFGEJbcIVbPBgOamAjDmMLBmnm+iPDfZDzmDR6W3qMgoxJs4KlRygMOQ1JQ8/teFUdhmYN0G1t0S3I5aeftY0IwW/8n5FVuFXz8eXv16QBvP6w8BCe8dM3BsaWH7TYGDiEAifdqnX0A3PwNAMsI9ykthiMBlUBvWzPcyQjE/YB0fPGHrfkwBoFh/Zx6cHycKQcQUccbWYDICceYdmS3Ej8as+8EkucTURTE8yds3ifrjcgLXZEkvAbkPYSEmasP7x/Eyx1MdYeemSNM/YBzBVvbGxRxp+Yqz2zTRT23rNXmr64TRVmGNZljc7/lGesBEbri4ffxa1iQ9phbdJCsfq/Lgit61iTiG7QPdJWFSDZy3jGSmlgPdLIgd8JHpJmrOZZewrVaw5IW0slxU2oXHMI+FxaUw5f/Qcb1t/Sqt7sLWlmsQZd3j3mLEZiZQU5bAneYr+0pXds/nJGVuCy3rH/O9kymWUT2SeBgmhmlgyNhMrWYs5yF4F8pqyEOMv5ImfJXlWHpR41dXaxxFkk4k84CjRFAc4Sbr98R7iHJapxXcw6ZQAOMfIpC2SgmOugweFvgAAMSwOzH0PZzy4jt8uCkb+QPfOBhiNAYF4HP+k48riCma+Rp+wu/kRlBrrMpCnH48hET1U2r/849nBwKLuNF8TMWCJ+5YkI9zeS8IvOIK/biG3MsObrosLlMILo+Ca9v8JG34nAzFuDsDgygM5VMZLwBfGBXfQ3wSY9VzsA+04/o+Xnv8v51QidU3kwKUJDbPKceSaN9zq4ZYMKWhYQxzj7GjMt7Jkm7cE3ZdaRNCg/p/iSqdXBPD7/nnPKJu9nGfYc5nF8A1KgDDjqAweEN3QqRZmB1TsiIa8yKkUZipQru/CafHhyG5QGvPjywritKXf5r/xxfGjW+fc7wuSfvJ8S636NnoqV8fjCfdjl1U5eS6R40rxpOSVAqzwEbzcipPa6azolYIWwWd2riLmXtdLuc0Sk7RM0nRz78ap5EvwZRaWTJpKThoHnZzQ/SWTyR3bGSYh4+b3jEcri2OrC/Lwu409loVAWB2BlfrGQ/egq8wPBXIeyWA/h7UTTq8x/IdFMqa2qHtcTKvWrG2vixQHkCBO0AJEij59/C8qoXcN1Dxad4sMAqkiZSAOyN1a1hkK+u0AdVJ3SOMMEJbVSo/u0Ii1VyoSLP2pJWfZCagAAQlmGDZXBVmCuTVld2mA3g1IVxBgah8sjePM4ZF9lvxupsiDiyoBTGcjfV/6/IGycYre2KxM3fBgUImVOyIRSpFoHhrHUG6LPuMfX8ONTNNRvexJTCltQVYjv9Tcl/vwJ8OVnjpQoi19Nqsmv1b4lv60IwsfG8Anx56jjmXbbwK4KIH56+lZUlVp5SRo8LtHh8gzuV8XyJt6jqO3Yx/5Zo2U+ww+fiFoQobfJR9Cih5vK6jJvajUSrZol9dr+8j0Kfmq37sECmz7UnTsnKwNV4z8SdW1/+f6AEPfphuZJ1ZqcrOxt+8s11almLa/nktOv3wNVFfRMV1ZPpietg8PXufSiAb9b0Xs/JCgzYOUfNQ3k9+7B3hh0UaiSzkQylBlWZfvTmoH8eoTeWG0QViFNijKDVguqOhV9S5B8MHpQwgp8R6HIVZfqIn/li3xd3a7F7JYJKrhYQiTdeMSxV1Clzuwi9dQpBrWs4O9itrY2BVFwScqA9SnaLI0gLKYsaS8K55Y9fW7LWiooCWcoJGLUVlB+/SnMb1uP8rz6aEqzpAfnROMgY3zq/F6tHQ5XtqZ5K7G24UuCN5fHipXblHaeBz2vjnWJ8jcg+ajxf9L77b0UVXsXU9BK7QN8fdtOBGyYdP5Teo9EsbdUjAJw/umttQ7POzffFVBmC0nrSZPsZRE1d7KKjJ/X2sreeq7FfpevvWYUV7p5vCm5CGPlW28r6ZiF8K/FGslvI1yb68WRvBw7G44UirNJyzxlXgmJnKyw4p/83NbsH4Ald/wVSzOxKWvVuRbfLHyV/Hc3bz5ILwvkfeEBE2ZmGkmzlgfY7eXWXK3SS92VTFqhrFlrADp9QvyGbyf/7RcqLrz3KespIAvqD6KCV7HwvPCAkdx3byvrrrbGbqpA2V7+zfDcWLSU9d07q3tf4CBd2e4lfT0WRZnnXmXp81x6v/WKYyX1PGfZfnHRdfnP7n5vt3dQFTipuyFqqgzkdnDJ3I3sU5vu9mfkmU9czk5dmZriW56LTEzKzOxTm+72RxkxzSrEWPdSFF1N2MvrlJSTVxr7ja3yEz/YEbcKetSKvpTdSXMtqQuycIkbPcJ7hk5qiUl1V9IEeqEOUGzLjXwhsDsBgdrhEwB1Vy68p8R9DRRv+mlUlaND3Mx21tPbWGUvG/IncV/rO6EBiqPHOSe4vcJ7LciqulNDyHYNiYVPVL9VgAvQB2hbuP5kK789vr9IM//FWF22UK09w5siXqakaftcM2BqVzTPhVY/cORo+8Tqnwwmd65+UftH+9XnQnz2r770dftvMF+PL/dkSdi47UduRPzLSLRWRfrsN14a0aGKIzZpURH5CAbNEp77jWkkuUVm9831XMBPEi00fk4boMECPYdIkl5MPEXdN3nUrXP56LLgUh2wiBe+p47aSMykWKVt8O/P7I9U+xgELdNIF315AvHi9IFb42KjEdF+/5GehpPHiE3HQdHpmKyhESdx49vFcSi2a0XAvwA2ptnoux3NCSH7DKKusFGMfRKmp6fxuaPlmN9/OOU3TPr+XhSEseutbOys5Le03L3fxHXdxN3Me0c0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1GI4//APNTjs18iyvaAAAAAElFTkSuQmCC"
              alt="logo"
            />
            <p>Fixed Diposits</p>
          </div>
        </div>

        {show && (
          <div
            style={{
              zIndex: "999",
              position: "absolute",
              bottom: "-100px",
              right: "250px",
            }}
          >
           
          </div>
        )}
        <div style={{ position: "relative" }}>
          <button
            className={styles.help}
            style={{
              float: "left",
            }}
            onClick={() => {
              setShow(!show);
            }}
          >
            Chat With Us
          </button>
        </div>
      </div>
    </div>
  );
};
