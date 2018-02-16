import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    var project1 = "https://github.com/DuncanKeith/TransferPix";
    var project2 = "https://github.com/nicoalimin/Finding_Nico";
    var project3 = "https://github.com/nicoalimin/Course_Room_Scheduler_UBC";
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Have a look at my Projects!</h1>

            <div class="row">
              <div class="column">
                <div class="content">
                  <img src="images/portfolio/logo.jpg" alt="GitHub" />
                  <h5>Art Style Transfer</h5>
                  <p>Used Python, Google's Tensorflow, and VGG16 to create a "digitalized art"</p>
                </div>
              </div>

              <div class="column">
                <div class="content">
                  <img src="images/portfolio/logo.jpg" alt="GitHub" />
                  <h5>Art Style Transfer</h5>
                  <p>Used Python, Google's Tensorflow, and VGG16 to create a "digitalized art"</p>
                </div>
              </div>

              <div class="column">
                <div class="content">
                  <img src="images/portfolio/logo.jpg" alt="GitHub" />
                  <h5>Art Style Transfer</h5>
                  <p>Used Python, Google's Tensorflow, and VGG16 to create a "digitalized art"</p>
                </div>
              </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
