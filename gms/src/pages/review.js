export default function ReviewPage(){

    let review = [
        {
          "avatar": "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.986950029.1691411442&semt=ais",
          "name": "John Smith",
          "review": "Absolutely loved this product! It exceeded all my expectations and the customer service was excellent. Will definitely be recommending it to friends and family."
        },
        {
          "avatar": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.986950029.1691411442&semt=ais",
          "name": "Emily Johnson",
          "review": "I've been using this service for months now and it's been a game-changer for me. The ease of use and the quality of the results have been fantastic. Highly recommended!"
        },
        {
          "avatar": "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.986950029.1691411442&semt=ais",
          "name": "David Wilson",
          "review": "Had a great experience with this company. The product arrived on time and was exactly as described. Will definitely be ordering from them again."
        },
        {
          "avatar": "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.1.986950029.1691411442&semt=ais",
          "name": "Sarah Brown",
          "review": "This product is amazing! It's made such a difference in my daily routine. The customer support team was also very helpful when I had questions. 5 stars!"
        },
        {
          "avatar": "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg&ga=GA1.1.986950029.1691411442&semt=ais",
          "name": "Michael Davis",
          "review": "I'm blown away by the quality of this service. It's clear that the team behind it really cares about their customers. Keep up the great work!"
        },
        {
          "avatar": "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.986950029.1691411442&semt=ais",
          "name": "Jennifer Martinez",
          "review": "I've tried many similar products/services in the past, but this one is by far the best. It's intuitive to use and has exceeded all my expectations. Highly recommend giving it a try!"
        },
        {
          "avatar": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.986950029.1691411442&semt=ais",
          "name": "Christopher Taylor",
          "review": "Great product and great value for money. I've been using it for a while now and haven't encountered any issues. Will definitely be purchasing again in the future."
        },
        {
          "avatar": "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.986950029.1691411442&semt=ais",
          "name": "Amanda Rodriguez",
          "review": "I'm so glad I found this product. It's made my life so much easier. The customer service team was also very responsive and helpful. Highly recommend!"
        },
        {
          "avatar": "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.1.986950029.1691411442&semt=ais",
          "name": "Matthew Anderson",
          "review": "I've been a loyal customer for years now and have never been disappointed. The quality of the product and the level of service are consistently excellent. 10/10!"
        },
        {
          "avatar": "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg&ga=GA1.1.986950029.1691411442&semt=ais",
          "name": "Jessica Thomas",
          "review": "I recently purchased this product and I'm extremely impressed. It's exactly what I was looking for and the customer support team was fantastic. Highly recommend!"
        }
      ]
      

      const formatedreview  = 
        review.map((val)=>{
            return <div className="col-3 " style={{height:"450px",margin:"30px",width:"300px"}}>
                        <div className="allproductbox h-100 w-100" style={{float:"left"}}>
                            <div className="h-25 w-25 "><img className="img-fluid rounded-circle" src={val.avatar}></img></div>
                            <div className="p-auto text-3xl font-serif">{val.name}</div>
                            <div className="p-auto font-mono w-75">{val.review}</div>
                        </div>
                    </div>
        })


    return (
        <>  
        <br></br>
        <br></br>
        <br></br>
        <br></br>
             <section className="review " id="review">
                    <h1 className="heading">Customer's <span className="bg-teal-900">Review</span></h1>
                    <div className="wrapper overflow-y-hidden overflow-x-scroll  ms-36 w-75">
                        {formatedreview}
                    </div>
               </section>
        </>
    )
}