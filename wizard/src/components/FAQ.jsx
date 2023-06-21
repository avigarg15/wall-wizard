import React, { useState } from "react";
import "../styles/faq.css";

const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="question">
      <button className="question-button" onClick={toggleExpand}>
        {question}
      </button>
      {expanded && <div className="answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="question-list">
        <Question
          question="What is WallWizard?"
          answer="Aapkapainter.com is the most reliable and easiest way to get your home painting done. Connecting well-trained painters to needful customers, AapkaPainter creates a platform with an automated process which will give you estimate about how much paint will be required according to your area"
        />
        <hr />
        <Question
          question="What is the overall house painting procedure once the quote is requested?"
          answer="You will receive a call from our painting experts very soon. Then as per your comfort, we schedule a visit at your site and our qualified engineers will guide you with all your residential painting service requirements along with helping you choose the right paint product, keeping your budget intact. Further, you get an email with completely customized quotation on the same day (in the best of situations). View your quotation, along with detailed measurements on your dashboard. We are always available, should you need any clarification or further customization."
        />
        <hr />
        <Question
          question="Why AapkaPainter and not any local painter?"
          answer="We are true to our work and words. We do not charge a lump sum. We measure the exact square feet and ensure usage of materials promised. And yes, work is delivered on time . Our empanelled teams of painters are trained to deliver and are ably managed by a full team of project managers to assure job completion and satisfaction."
        />
        <hr />
        <Question
          question="Latest Home Painting Servicing Ideas"
          answer="Whether you’re looking to get interior house painting service done with the best wall paints, want to revamp your home furniture that is looking a little worn out or give the metal surfaces in your home a nice shiny look with some polishing, our painting ideas have got you covered."
        />
        <hr />
        <Question
          question="How do we operate?"
          answer="We are here to help you with all your painting needs. One of the best house painting services in the business, WallWizard acts as a platform providing a range of professional home painting services including interior and exterior painting, wood painting, textures and stencils. We offer excellent bang for your buck with affordable house painting costs."
        />
        <hr />
        <Question
          question="Services Provided by Aapkapainter"
          answer="When you start searching extensively for wall painters in Mumbai, Bangalore, Hyderabad, Chennai and other big cities in India, you might find a plethora of home painting services but then you need to choose the best option. When you find the one, you need to explain how you envision your home and the end result doesn’t turn out the way you had expected it. This is a problem that most of you face. With us you don’t have to look for ‘painters near me’ or ‘house painters near me’ anymore as we are already associated with some of the best painters in Bangalore, Mumbai and other major cities."
        />
        <hr />
      </div>
    </div>
  );
};

export default FAQ;
