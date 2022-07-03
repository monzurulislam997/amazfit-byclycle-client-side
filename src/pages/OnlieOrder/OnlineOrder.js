import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import img2 from "../../images/man.png"
import img3 from "../../images/man2.png"
import img4 from "../../images/gamer.png"
import './OnlineOrder.css'
const OnlineOrder = () => {

    const orderNow = (e) => {
        e.preventDefault()
        alert("Online Order isn't available now")
    }
    // backgroundImage: `url(${img})`
    return (
        <div style={{ backgroundColor: "#f5f5f5" }} className=' my-2  body'>




            <div className='mx-4 p-5'>
                <h3 className='text-center'>Consumer Reviews</h3>
                <CardGroup className='' >
                    <Card className="border m-3">
                        <div className='w-25 my-2 mx-auto' ><img src={img2} width="70px" alt="" /></div>
                        <Card.Body>
                            <div className='w-25  mx-auto'>
                                <button className=' text-light border border-none bg-warning'> &#9733; 3</button>
                            </div>

                            <Card.Text>
                                Product was easy to assemble, only had to attach the handle bars and it was easy.
                            </Card.Text>
                            <h5 className="text-primary w-50 mx-auto text-center">Read Full Review</h5>
                        </Card.Body>



                    </Card>
                    <Card className="border m-3">
                        <div className='w-25 my-2 mx-auto' ><img src={img3} width="70px" alt="" /></div>
                        <Card.Body>
                            <div className='w-25  mx-auto'>
                                <button className=' text-light border border-none bg-danger'> &#9733; 1</button>
                            </div>

                            <Card.Text>
                                My son is very happy good price
                            </Card.Text>
                            <h5 className="text-primary w-50 mx-auto text-center">Read Full Review</h5>
                        </Card.Body>



                    </Card>
                    <Card className="border m-3">
                        <div className='w-25 my-2 mx-auto' ><img src={img4} width="70px" alt="" /></div>
                        <Card.Body>
                            <div className='w-25  mx-auto'>
                                <button className=' text-light border border-none bg-success'> &#9733; 5</button>
                            </div>
                            <Card.Text>
                                Awesome Bicycle and Their service also awesome
                            </Card.Text>
                            <h5 className="text-primary w-50 mx-auto text-center">Read Full Review</h5>
                        </Card.Body>



                    </Card>
                </CardGroup>

            </div>




            <div className='w-50  mx-auto '>
                <form >
                    <div className='d-flex flex-column '>
                        <h2 className='text-danger   text-center'>Order <span className='text-success'>One!!</span></h2>

                        <input type="email" className="form-control mb-2" id="exampleInputEmail1" placeholder="Enter Model Name" />
                        <input type="text" className="form-control mb-2 " id="exampleInputEmail1" placeholder="Your  Name" />
                        <input type="number" min='3' className="form-control mb-2" id="exampleInputEmail1" placeholder="Delivery Days" />


                        <select className="form-control my-3" id="exampleInputEmail1" name="cars" >
                            <option value="volvo">--Select area--</option>
                            <option value="saab">Savar</option>
                            <option value="opel">Dhaka</option>
                            <option value="audi">Tangail</option>
                            <option value="saab">Jamalput</option>
                            <option value="opel">Chittagong</option>
                            <option value="audi">Noakhali</option>
                            <option value="saab">Chandpur</option>
                            <option value="opel">Sylhet</option>
                            <option value="audi">Rangpur</option>
                        </select>
                        <input onClick={orderNow} style={{ backgroundColor: "#f04031" }} className="text-light px-5 py-2 rounded border border-none" type="submit" value="Order Now" />
                    </div>
                </form>
            </div>


        </div >


    );
};

export default OnlineOrder;