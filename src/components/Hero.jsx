const Herosection = () =>{
    return(
<main className="Hero container">
    <div className="Herocontent">
        <h1>
           Stay Refresh!
        </h1>
        <p>
        “The beauty of fragrance is that it speaks
         to your heart, and hopefully
         someone else's.” <br></br>
         – Elizabeth Taylor
        </p>
         <div className="Hero-btn">
            <button>ShopNow</button>
            <button className="sec-btn">Category</button>
         </div>
         <div className="Shop">
            <p>Also Available On</p>
         </div>
         <div className="Img">
            <img src="/images/flipkart.png" alt="flip"></img>
            <img src="/images/amazon.png" alt="amazon"></img>
         </div>

    </div>
    <div className="Heroimg">
        <img src="/images/spray.jpeg" alt="shoe"></img>
    </div>

</main>
    );
};
export default Herosection;