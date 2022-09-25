import "./testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonial">
      <h1>What People Say About Us</h1>
      <div className="container">
        <div className="testimonyContainer">
          <div className="img">
            <img src="assets/img/ezekiel.jpeg" alt="" />
          </div>
          <p>
            FIXE exceeded my expectations in both the quality and the range of
            service given. I regret sticking with main dealers and not coming to
            FIXE earlier. Thanks to FIXE and their thorough, knowledgeable and
            customer-focused approach, I have now made a start on work that
            should have been carried out during the three and a half years in
            which I have owned the car. I will happily go back to FIXE in six
            months to continue my service and maintenance routine.
          </p>
          <h3>Ezekiel Agbonkhese</h3>
        </div>
        <div className="testimonyContainer">
          <div className="img">
            <img src="assets/img/isaac.jpeg" alt="" />
          </div>
          <p>
            Super service - Road worthiness inspection booked and carried out
            efficiently- even wash and vac car for me!
          </p>
          <h3>Agulue Isaac</h3>
        </div>
        <div className="testimonyContainer">
          <div className="img">
            <img src="assets/img/miracle.jpeg" alt="" />
          </div>
          <p>
            Diagnosis revealed an expensive problem with my car. Not a happy
            position. However FIXE explained clearly what was happening and why
            the replacement of the parts was necessary. The main car brand
            distributor's diagnosis was not explained by the main distributor
            and in the end proved inaccurate. FIXE on the other hand dealt with
            the situation very professionally and in a very helpful manner.
            Highly recommended.
          </p>
          <h3>Miracle</h3>
        </div>
        <div className="testimonyContainer">
          <div className="img">
            <img src="assets/img/gazi.jpeg" alt="" />
          </div>
          <p>
            Excellent service. Got me out of a hole. Literally. Highly recommend
          </p>
          <h3> Ekene</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
