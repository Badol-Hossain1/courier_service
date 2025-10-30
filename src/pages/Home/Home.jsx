import Banner from './banner/Banner'
import ClientLogo from './ClientLogo/ClientLogo'
import Merchant from './Merchant/Merchant'
import OurService from './OurService/OurService'
import Reviews from './Reviews/Reviews'
import Services from './Services/Services'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <ClientLogo />
            <OurService />
            <Merchant />
            <Reviews />
        </div>
    )
}

export default Home
