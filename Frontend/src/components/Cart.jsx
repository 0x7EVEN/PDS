import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContestProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cont = styled.div`
  .App {
    font-family: sans-serif;
    text-align: center;
  }
  .padding-y-5 {
    padding-top: 5%;
  }

  .blue-button {
    border: none;
    background-color: #4749ef;
    color: white;
    padding: 10px 20px;
  }

  .color-theme {
    color: #4749ef;
  }
  .sub-ware {
    /* width: 25%; */
    height: 200px;
    width: 200px;
    border: 1px solid black;
  }

  .warehouse {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }

  .filler {
    /* border: 1px solid black; */
    height: 200px;
  }

  .border-black {
    border: 1px solid black;
  }
`;

export default function Cart() {
  const { cart, token } = useContext(AuthContext);
  console.log('cart: ', cart);

  console.log(
    cart,
    cart.reduce((a, { price }) => a + price, 0)
  );

  const handlePurchase = () => {
    const item = {
      cart: {},
      store: '',
    };

    cart.map((el) => {
      item['store'] = el['store'];
      item['cart'][el['name']] = el['quantity'] + 'kg';
    });

    console.log('sending data: ', item);

    axios
      .post('http://localhost:8080/user/checkout', item, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((el) => {
        console.log('getting data', el.data);
      })
      .catch((err) => {
        console.log('getting error', err.message);
      });
  };

  return (
    <Cont>
      <div className='App'>
        <div className='container border'>
          <div className='row text-start padding-y-5'>
            <h1>Cart</h1>
          </div>
          <div className='row m-0 p-0'>
            <div className='col-12 border'>
              <div className='row border'>
                <div className='col-4 border py-2'>Prodcut Name</div>
                <div className='col-4 border py-2'>Store Name</div>
                <div className='col-2 border py-2'>Quantity</div>
                <div className='col-2 border py-2'>Price</div>
              </div>
            </div>
            <div className='col-12'>
              {cart.map((e) => (
                <div className='row'>
                  <div className='col-4 py-2 border'>{e.name}</div>
                  <div className='col-4 py-2 border'>{e.store}</div>
                  <div className='col-2 py-2 border'>{e.quantity}</div>
                  <div className='col-2 py-2 border'>{e.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='row padding-y-5'>
            <div className='col-4'>
              {/* <div className=""></div> */}
              <h4 className='color-theme'>
                Total Price : {cart.reduce((a, { price }) => a + price, 0)}
              </h4>
            </div>
            <div className='offset-4 col-4'>
              {/* <div className=""></div> */}
              {/* <Link to="/success"> */}
              <button onClick={handlePurchase} className='blue-button'>
                Purchase
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </Cont>
  );
}