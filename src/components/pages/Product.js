//  D A T a image flow
import Data from "../Data/ProductData";
import Data2 from '../Data/PrData2';
//  Product title 🙂
// import ProductTitle from "../ProductTitle";
//  import M o d u l e classes
import style from "../../styles/Product.module.css";
import { Link } from "react-router-dom";
export default function Product() {
  return (
    <>
      <h1>Product</h1>
      {/*  increament grid tye think  */}
      <div className={style.container}>
          {
            Data && Data.map((KEY) => {
              return(
                <div className={style.horizantal}>
                <img src={KEY.image} alt="A I R Bnb" />
                <div className={style.horizontalTitle}>
                 <p className={style.location}>{KEY.location}</p>
                 <p>{KEY.price}</p>
                 <p>{KEY.date}</p>
                </div>

        </div>
              )
            })
          }
      </div>

      {/*  modifications */}
     <div className={style.container} style={{marginTop:'70px'}}> 
          {
            Data2 && Data2.map((item) => {
              return(
                <div className={style.horizantal}>
                  <img src={item.image} alt="A i r Bnb" />
                  <div className={style.horizontalTitle}>
                    <p className={style.location}>{item.location}</p>
                    <p>{item.price}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
              )
            })
          }
     </div>

    </>
  );
}
