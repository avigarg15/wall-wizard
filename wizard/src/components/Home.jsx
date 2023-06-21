import React from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Card from './Card';
import '../styles/navbar.css';
import '../styles/twoDivsSideBySide.css';
import ContactForm from "./ContactForm";
import '../styles/paintingoffers.css'
import ProductCard from "./ProductCard";
import FAQ from "./FAQ";

import '../styles/faq.css';
import EstimateForm from "./EstimateForm";

const Home = () => {



  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const styles = {
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to bottom right, #F58C76, #F58C76, #F58C76, #FBAD85, #F58C76, #F58C76, #F58C76)',
    zIndex: 9999,

  };
  const stylesinsidediv = {

    width: '800px',
    height: '500px',
    backgroundColor: '#EAE7DC',
    borderRadius: '20px',
    zIndex: 9999,
    marginLeft: 'auto',
    marginRight: 'auto',
    overflowWrap: 'auto',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    justifyContent: 'space-evenly',
    alignItems: 'center'


  };

  const imageStyles = {
    width: '100%',
    height: '100%'
  }

  const imageUrl = "/brickHomePage.jpeg";

  const backgroundStyles = {

    backgroundImage: `url('/brickHomePage.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    // width: '400p/x',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0.9,
    // marginLeft: 'auto',
    // marginRight: 'auto',
    justifyContent: 'center',

    // overflowWrap: 'auto'


  };

  const buttonStyles = {
    // position: 'relative',
    // top: '40%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // width: '55%',
    // height: '200',
    // width: '100%',
    backgroundColor: '#FFB133',
    color: 'white',
    padding: '1em',
    border: 'none',
    borderRadius: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
    cursor: 'pointer',
    minWidth: '400px'
    // maxWidth: '500px',
  };
  const buttonStyles2 = {
    // position: 'relative',
    // top: '45%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // width: '50%',
    // height: '16%'
    minWidth: '400px',
    backgroundColor: '#FFB133',
    color: 'white',
    padding: '1em',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer'
  };

  const mediaQuery = `@media (max-width: 768px) and (max-zoom: 1.5) {
    ${stylesinsidediv} {
      width: 80%;
      height: auto;
    }
  }`;
  const cardimageurl = "/logo512.png";

  const cardsData = [
    { image: 'roof.jpg', number: 1, text: 'Free Survey & Quotation' },
    { image: 'indian-business-man.jpg', number: 2, text: 'Accept Quotaion' },
    { image: 'indian-guy-designer.jpg', number: 3, text: 'Online Colour consultation' },
    { image: 'masked-painter-work.jpg', number: 4, text: 'Painting Begins' },
    { image: 'blank-vertical-picture.jpg', number: 5, text: 'Finishing and Handover' },
    // Add data for other cards
  ];
  const cardsData2 = [
    { image: '/Paint_Products.gif', text: 'Free Survey & Quotation' },
    { image: '/Paint Calculator.gif', text: 'Accept Quotaion' },
    { image: '/Color Visualizer.gif', text: 'Online Colour consultation' },
    { image: '/Textures.gif', text: 'Painting Begins' },
    { image: '/Interior Painting.gif', text: 'Finishing and Handover' },
    { image: '/Exterior Painting - 1.gif', text: 'Finishing and Handover' },
    { image: '/Stencils.gif', text: 'Finishing and Handover' },
    { image: '/Water Proofing - 1.gif', text: 'Finishing and Handover' },
    { image: '/Wood Painting.gif', text: 'Finishing and Handover' },
    { image: '/Metal Painting - 1.gif', text: 'Finishing and Handover' },
    // Add data for other cards
  ];





  return (
    <>



      <div style={backgroundStyles} >
        <h1 style={{ marginBottom: '50px', textAlign: 'center', color: 'white', fontSize: '50px', overflow: 'hidden' }}>Welcome To Wall Wizard. Your Trusted Paint Experts!</h1>
        <div style={stylesinsidediv}>
          <h4 style={{ textAlign: 'center', color: 'black', fontSize: '30px' }}>Experience Now</h4>

          {isAuthenticated ?
            (<Link to='/EstimateForm'>
              <button style={buttonStyles}>
                <h5>Fresh Painting</h5>
                <p>If you are planning a complete renovation and need to start with surface preparation or wall has major undulations</p>
                <p>2 Coats of Putty | 1 coat of Primer | 2 coat of Paint</p>

              </button>
            </Link>) : (<Link onClick={loginWithRedirect}>
              <button style={buttonStyles}>
                <h5>Fresh Painting</h5>
                <p>If you are planning a complete renovation and need to start with surface preparation or wall has major undulations</p>
                <p>2 Coats of Putty | 1 coat of Primer | 2 coat of Paint</p>
              </button>
            </Link>)
          }


          {
            isAuthenticated ?
              (<Link to="/EstimateForm">
                <button style={buttonStyles2}>
                  <h5>Rental Painting</h5>
                  <p>If you need a quick, economical coat of paint for rental purpose</p>
                  <p>1 or 2 coats of Paint</p>
                </button>
              </Link>) :

              (<Link onClick={loginWithRedirect}>
                <button style={buttonStyles2}>
                  <h5>Rental Painting</h5>
                  <p>If you need a quick, economical coat of paint for rental purpose</p>
                  <p>1 or 2 coats of Paint</p>
                </button>
              </Link>)
          }


        </div>

      </div>



      <div style={styles}>



        <br></br>


        <h3 style={{ position: 'relative', top: '21.5%', textAlign: 'center', color: 'white', fontSize: '30px', fontFamily: 'cursive', marginLeft: '29px', marginRight: '29px', marginBottom: '29px' }}>OUR POPULAR SERVICES</h3>
        <div class="cards-wrapper">
          <div class="card-services">
            <img src={"/interior.jpg"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">Interior Painting</h6>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div class="card-services">
            <img src={"/exterior-ser.jpg"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">Exterior Painting</h6>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div class="card-services">
            <img src={"/waterproofing-wp.jpg"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">Water Proofing </h6>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div class="card-services">
            <img src={"/002.jpg"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">Stencil Painting</h6>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div class="card-services">
            <img src={"/aapkapainter-asian-paints.jpg"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">Texture Painting</h6>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div class="card-services">
            <img src={"/walpaper.jpg"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">WallPaper For Walls</h6>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div class="card-services">
            <img src={"/grouting.jpg"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">Grouting Services</h6>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          {/* <div class="card-services">
            <img src={"/Wood Coating.jpg"} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">Wood Coating</h6>
              
            </div>
          </div> */}
        </div>

        <br></br>
        <br></br>
        <br></br>

      </div>
      <div className="HowItWorks">
        <h6 style={{ position: 'relative', top: '21.5%', textAlign: 'center', color: 'black', fontSize: '25px', marginLeft: '29px', marginRight: '29px', marginBottom: '5px', marginTop: '50px' }}>HOW IT WORKS</h6>
        <p style={{ position: 'relative', top: '21.5%', textAlign: 'center', color: 'black', fontSize: '20px', marginLeft: '29px', marginRight: '29px', marginBottom: '15px' }}>5 simple steps to a beatuful transformation!</p>

        <div className="fleq">
          {cardsData.map((card, index) => (
            <Card key={index} image={card.image} number={card.number} text={card.text} />
          ))}
        </div>

      </div>

      <h6 style={{ position: 'relative', top: '21.5%', textAlign: 'center', color: 'black', fontSize: '25px', marginTop: '50px', backgroundColor: '#F2F2F2', padding: '20px', boxSizing: 'border-box' }}>Our Painting Service Offers</h6>
      <div className="ourPaintingOffers">
        <div className="paintingContainer">

          <div className="photo">
            <img src="/bluestencil.jpg" alt="" />
          </div>
          <div className="textdiv">
            <h4>Wall Stencil Painting Services</h4>
            <p>Taken a liking for a particular design or stencil painters? Lovely. The same can now be replicated on a wall, pixel-perfect! We offer wall stencils painting services and custom house painting designs, matching every pixel of its floral patterns or geometric shapes, a space theme or ethnic elements. Wall stencil painting and decorating services are our wall stencil artists and stencil painters’ cup of tea. Decorate your interior walls with beautiful aapkapainter designs and wall stencils. We bring to you custom wall painting service in Bangalore, wall stencil painting Mumbai and Hyderabad. Translate what’s on your mind and let your walls speak.</p>
          </div>
        </div>

      </div>


      <h6 style={{ position: 'relative', top: '21.5%', textAlign: 'center', color: 'black', fontSize: '25px', marginTop: '50px', backgroundColor: '#F2F2F2', padding: '20px', boxSizing: 'border-box' }}>Get In Touch</h6>

      <div>
        <ContactForm />
      </div>

      <h6 style={{ position: 'relative', top: '21.5%', textAlign: 'center', color: 'black', fontSize: '25px', marginTop: '10px', backgroundColor: '#F2F2F2', padding: '20px', boxSizing: 'border-box' }}>PRODUCTS AND SERVICES</h6>

      <div className="fleq">
        {cardsData2.map((card, index) => (
          <ProductCard key={index} image={card.image} text={card.text} />
        ))}
      </div>
      <h6 style={{ position: 'relative', top: '21.5%', textAlign: 'center', color: 'black', fontWeight: 'bolder', fontSize: '25px', marginTop: '20px', marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>Frequenty Asked Questions</h6>


      <div className="faq">
        <FAQ />
      </div>






    </>

  );
};

export default Home;
