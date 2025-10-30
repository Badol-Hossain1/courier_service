import Marquee from 'react-fast-marquee'
const logos = [
    {
        name: 'HP',
        href: 'https://www.hp.com',
        src: 'https://logo.clearbit.com/hp.com',
    },
    {
        name: 'Dell',
        href: 'https://www.dell.com',
        src: 'https://logo.clearbit.com/dell.com',
    },
    {
        name: 'Lenovo',
        href: 'https://www.lenovo.com',
        src: 'https://logo.clearbit.com/lenovo.com',
    },
    {
        name: 'Google',
        href: 'https://www.google.com',
        src: 'https://logo.clearbit.com/google.com',
    },
    {
        name: 'Microsoft',
        href: 'https://www.microsoft.com',
        src: 'https://logo.clearbit.com/microsoft.com',
    },
    {
        name: 'Apple',
        href: 'https://www.apple.com',
        src: 'https://logo.clearbit.com/apple.com',
    },
    {
        name: 'Gigabyte',
        href: 'https://www.gigabyte.com',
        src: 'https://logo.clearbit.com/gigabyte.com',
    },
    {
        name: 'Upwork',
        href: 'https://www.upwork.com',
        src: 'https://logo.clearbit.com/upwork.com',
    },
]

const ClientLogo = () => {
    return (
        <div className='bg-white'>
            <h2 className="text-center font-bold text-2xl text-primary mb-4 ">
                We've helped thousands of sales teams
            </h2>
            <Marquee speed={50} gap={10}>
                {logos.map((logo) => {
                    return (
                        <div>
                            <img className="px-10" src={logo.src} alt="" />
                        </div>
                    )
                })}
            </Marquee>
        </div>
    )
}

export default ClientLogo
