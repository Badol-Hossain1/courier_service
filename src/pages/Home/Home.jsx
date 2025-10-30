import Banner from './banner/Banner'
import ClientLogo from './ClientLogo/ClientLogo'
import OurService from './OurService/OurService'
import Services from './Services/Services'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <ClientLogo />
            <OurService />
        </div>
    )
}

export default Home
