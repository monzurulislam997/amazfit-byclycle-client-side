import React, { useEffect, useState } from 'react';
import ShowItem from '../ShowItem/ShowItem';

const ShowMyItemStore = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])



    return (
        <div>


            {
                orders.map(order => <ShowItem

                    key={order._id}
                    order={order}
                >
                </ShowItem>)
            }

        </div>
    );
};

export default ShowMyItemStore;