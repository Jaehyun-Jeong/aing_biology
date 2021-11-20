import React from "react";
import Navigation from './type_02_Navigation';
import "./type_02.css";


class type_02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: true,
      doc_id: null
    };
  }
  content_clicked(doc_id) {
    this.setState({ doc_id: doc_id });
  }
  componentDidUpdate(prev_props, prev_state) {
    if (prev_state.id !== this.state.doc_id) {
      this.scroll_to();
    }
  }
  scroll_to = (e) => {
    let element = document.getElementById(this.state.doc_id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      this.setState({ doc_id: null });
    }
  }
  componentDidMount() {
    this.setState({ is_loading: false })
  }
  render() {
    const { is_loading } = this.state;
    return (
      <section id="container">
        {is_loading ?
          (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            < React.Fragment >
              <div id="type_02">
                <Navigation />
                <div id="type_02_main">
                  <div id="type_02_content">
                    <span id="type_02_content__title">title: hello world</span>
                    <div id="type_02_content__contents">
                      <ul>
                        <li>
                          <span onClick={() => this.content_clicked("A")}>A</span>
                        </li>
                        <li>
                          <span onClick={() => this.content_clicked("B")}>B</span>
                          <ul>
                            <li>
                              <span onClick={() => this.content_clicked("a")}>a</span>
                            </li>
                            <li>
                              <span onClick={() => this.content_clicked("b")}>b</span>
                            </li>
                            <li>
                              <span onClick={() => this.content_clicked("c")}>c</span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span onClick={() => this.content_clicked("C")}>C</span>
                        </li>
                        <li>
                          <span onClick={() => this.content_clicked("D")}>D</span>
                        </li>
                        <li>
                          <span onClick={() => this.content_clicked("E")}>E</span>
                        </li>
                      </ul>
                    </div>
                    <div id="A">
                      <h2>A</h2>
                      <p>In 2009, Ogura performed the motion capture for Hatsune Miku in the game Hatsune Miku: Project DIVA.[3]

                        Ogura was a member of the Japanese idol duo YuiKaori with Kaori Ishihara.[4] She was also a part of the idol unit StylipS (also with Ishihara, along with Arisa Noto and Maho Matsunaga),[5] as well as pop group Happy Style Rookies. As a voice actress, Ogura has portrayed anime characters such as Hinata Hakamada in Ro-Kyu-Bu!, Yunoha Thru in Aquarion Evol, Kokona Aoba in Encouragement of Climb and Tsukiko Tsutsukakushi in The "Hentai" Prince and the Stony Cat. As a solo artist, Ogura's single Raise was used as the ending theme for the anime Campione!,[6] and reached number 8 on the Oricon chart in 2012.[7] Other character songs that Ogura sang for the anime characters she had voiced for have also charted.[8] In 2016, Ogura changed agencies from Sigma Seven to Clare Voice.[9][10] On March 31, 2017, it was announced that YuiKaori would halt activity on June 30 so that Ogura and Ishihara could focus on their solo careers.[9] On June 30, 2017, YuiKaori disbanded. Ogura graduated Showa Women's University with a bachelor's degree in Psychology in March 2018.[11][12] On January 1, 2019, it was announced that Ogura has signed back with UP-FRONT under Just Production as a voice actress.[13] Ogura left Just Production on March 31, 2021, and transferred to Atomic Monkey on April 1, 2021.[14]</p>
                    </div>
                    <div id="B">
                      <h2>B</h2>
                      <div id="a">
                        <h3>a</h3>
                        <p>In February 2017, during a live stream promoting the release of Opportunity, Hanazawa confirmed she and Kensho Ono were dating, after Shūkan Bunshun published allegations about their relationship.[24][25][26] On July 8, 2020, they announced that they married.[27]</p>
                      </div>
                      <div id="b">
                        <h3>b</h3>
                        <p>Tomori Kusunoki (楠木ともり, Kusunoki Tomori, born December 22, 1999) is a Japanese voice actress and singer who is currently affiliated with the Sony Music Artists agency. She made her voice acting debut in 2017 at 17 y.o, and in the same year she was cast in her first main role as Kirara, the heroine of the Japanese mobile game Kirara Fantasia. She has also been cast in main roles in Märchen Mädchen, Love Live! Nijigasaki High School Idol Club and Sword Art Online Alternative Gun Gale Online. In 2019, she won the Best New Actress Award with Manaka Iwami, Coco Hayashi, Rina Honnizumi, and Kaede Hondo.</p>
                      </div>
                      <div id="c">
                        <h3>c</h3>
                        <p>Miyu Tomita (富田 美憂, Tomita Miyu, born November 15, 1999) is a Japanese voice actress and singer from Saitama Pidecture who is signed to Amuse. After aspiring to become a voice actress while studying in elementary school, she participated in two voice acting auditions in 2014, winning one of them. Some of her roles include Otako in Please Tell Me! Galko-chan, Yume Nijino in Aikatsu Stars!, Gabriel White Tenma in Gabriel DropOut, Riko in Made in Abyss, and Rizu Ogata in We Never Learn.</p>
                      </div>
                    </div>
                    <div id="C">
                      <h2>C</h2>
                      <p>A sigmoid function is a mathematical function having a characteristic "S"-shaped curve or sigmoid curve.

                        A common example of a sigmoid function is the logistic function shown in the first figure and defined by the formula:[1]

                        Other standard sigmoid functions are given in the Examples section. In some fields, most notably in the context of artificial neural networks, the term "sigmoid function" is used as an alias for the logistic function.

                        Special cases of the sigmoid function include the Gompertz curve (used in modeling systems that saturate at large values of x) and the ogee curve (used in the spillway of some dams). Sigmoid functions have domain of all real numbers, with return (response) value commonly monotonically increasing but could be decreasing. Sigmoid functions most often show a return value (y axis) in the range 0 to 1. Another commonly used range is from −1 to 1.

                        A wide variety of sigmoid functions including the logistic and hyperbolic tangent functions have been used as the activation function of artificial neurons. Sigmoid curves are also common in statistics as cumulative distribution functions (which go from 0 to 1), such as the integrals of the logistic density, the normal density, and Student's t probability density functions. The logistic sigmoid function is invertible, and its inverse is the logit function.</p>
                    </div>
                    <div id="D">
                      <h2>D</h2>
                      <p>Many natural processes, such as those of complex system learning curves, exhibit a progression from small beginnings that accelerates and approaches a climax over time. When a specific mathematical model is lacking, a sigmoid function is often used.[4]

                        The van Genuchten–Gupta model is based on an inverted S-curve and applied to the response of crop yield to soil salinity.

                        Examples of the application of the logistic S-curve to the response of crop yield (wheat) to both the soil salinity and depth to water table in the soil are shown in logistic function#In agriculture: modeling crop response.

                        In artificial neural networks, sometimes non-smooth functions are used instead for efficiency; these are known as hard sigmoids.

                        In audio signal processing, sigmoid functions are used as waveshaper transfer functions to emulate the sound of analog circuitry clipping.[5]

                        In biochemistry and pharmacology, the Hill equation and Hill–Langmuir equation are sigmoid functions.

                        In computer graphics and real-time rendering, some of the sigmoid functions are used to blend colors or geometry between two values, smoothly and without visible seams or discontinuities.

                        Titration curves between strong acids and strong bases have a sigmoid shape due to the logarithmic nature of the pH scale.</p>
                    </div>
                    <div id="E">
                      <h2>E</h2>
                      <p>Kusunoki was born in Tokyo on December 22, 1999.[2] She became interested in entertainment at an early age; when she was three years old, she began taking piano lessons. She was also a member of her school's brass band during her junior high school years, and a member of a light music club during her high school years.[3] She was also the student council president of her junior high school.[4]

                        During her second year of junior high school, she became interested in anime. She particularly liked the series Kobato, and the portrayal of the lead character by Kana Hanazawa. This inspired her to become a voice actress.[3] She decided to participate in an audition held by the agency Sony Music Artists. Because she felt that it would be difficult to pass the voice acting audition unless she had more experience, she instead auditioned as a singer. She ended up receiving the special prize at the competition.[3]

                        Kusunoki made her debut as a voice actress in 2017, playing a background role in the anime series Eromanga Sensei.[5] In June 2017, she was cast in her first main role as Kirara in the mobile game Kirara Fantasia.[6] In 2018, she was cast as Hazuki Kagimura, the protagonist of the anime series Märchen Mädchen.[7] She played the role of Llenn in the anime series Sword Art Online Alternative Gun Gale Online,[5][8] for which she also sings the ending theme "To see the future".[9] In the same year, she also became a part of KONAMI's media mix project called BandMeshi♪ (バンめし♪), with her voicing the guitarist Yokaze Tsuyuri.[10] Later that year, she was cast as Setsuna Yūki in the Love Live! multimedia franchise.[11] In 2019, she played the role of Melida Angel in the anime television series Assassins Pride;[12] she also performed the series' ending theme "Ijin-tachi no Jikan" (異人たちの時間).[13]

                        In 2020, Kusunoki made her debut as a solo artist under Sacra Music. Her first EP, "Hamidashimono", is the ending theme of The Misfit of Demon King Academy.[14]</p>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        }
      </section>
    );
  }
}

export default type_02;