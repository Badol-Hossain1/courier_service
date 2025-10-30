const featuresData = [
    {
        id: 1,
        title: 'Live Parcel Tracking',
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        // Illustration Placeholder 1: Tracking/Map
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-emerald-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M12 21.7c-3.6-2.5-6-5.8-6-9.7C6 5.6 8.7 3 12 3s6 2.6 6 9c0 3.9-2.4 7.2-6 9.7z"></path>
                <path d="M16 16.5L22 22"></path>
                <path d="M16.5 22h5.5v-5.5"></path>
            </svg>
        ),
    },
    {
        id: 2,
        title: '100% Safe Delivery',
        description:
            'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
        // Illustration Placeholder 2: Security/Protection
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-sky-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
            </svg>
        ),
    },
    {
        id: 3,
        title: '24/7 Call Center Support',
        description:
            'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
        // Illustration Placeholder 3: Headset/Support
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-pink-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14 2h6v6"></path>
                <path d="M14.5 22h4.5a3 3 0 0 0 3-3v-4.5M16 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"></path>
                <circle cx="12" cy="12" r="2.5"></circle>
            </svg>
        ),
    },
]

const FeatureCard = ({ title, description, icon }) => (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100">
        {/* Icon/Illustration Area */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div className="flex items-center justify-center p-3 bg-opacity-10 rounded-xl">
                {icon}
            </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
            <h3 className="text-xl font-extrabold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
)

const OurService = () => {
    return (
        <div data-aos="zoom-in">
            <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8">
                <div className=" ">
                    <header className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl font-black text-primary">
                            Our Core Services
                        </h1>
                        <p className="mt-2 text-lg text-gray-500 max-w-2xl mx-auto">
                            Discover the reliable features that make us the best
                            choice for your logistics needs.
                        </p>
                    </header>

                    {/* Feature List Grid */}
                    <div className="space-y-6">
                        {featuresData.map((feature) => (
                            <FeatureCard
                                key={feature.id}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurService
