//  style
import styles from '../../styles/Service.module.css';
export default function Services() {
    return(
        <div>
          <div className={styles.services}>
    <h1>Our Services</h1>
    <div className="cen">
        <div className={styles.service}>
           {/*  icon there  */}
           <i className="fa-solid fa-phone"></i>
            <h2>All time support </h2>
            <p>In traveling you touch all time support in 24/7 </p>
        </div>
        {/* <!-- 2 --> */}
        <div className={styles.service}>
            {/* <!-- <!blank-- icon --> --> */}
            <i className="fa-solid fa-house"></i>
            <h2>Comportable place</h2>
            <p>In the house you fill comfortable fell in the place, linke your home</p>
        </div>
        {/* <!-- 3 --> */}
        <div className={styles.service}>
            {/* <!-- <!blank-- icon --> --> */}
            <i className="fa-solid fa-wifi"></i>
            <h2>All time internet connecion</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, excepturi?</p>
        </div>
        {/* <!-- 4 --> */}
        <div className={styles.service}>
            {/* <!-- <!blank-- icon --> --> */}
            <i className="fa-solid fa-car"></i>
            <h2>Best riding expreince </h2>
            <p>in our service you fell very good riding expreince </p>
        </div>
        {/* <!-- 5 --> */}
        <div className={styles.service}>
            {/* <!-- <!blank-- icon --> --> */}
            <i className="fa-solid fa-money-bill"></i>
            <h2>Saving price</h2>
            <p>In our service you fell too much saving cost </p>
        </div>
        {/* <!-- 6 --> */}
        <div className={styles.service}>
            {/* <!-- <!blank-- icon --> --> */}
            <i className="fa-solid fa-building"></i>
            <h2>Luxuryius flat </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, excepturi?</p>
        </div>
    </div>
 </div>



        </div>
    )
}