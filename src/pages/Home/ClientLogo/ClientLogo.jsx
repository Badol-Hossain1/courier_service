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

const doubled = [...logos, ...logos]

const styleVars = {
    '--marquee-duration': '20s',
    '--logo-height': '58px',
}

const ClientLogo = () => {
    return (
        <div>
            <div className="fast-marquee" style={styleVars}>
                <div className="fast-marquee__viewport" aria-hidden="false">
                    <div className="fast-marquee__track">
                        {doubled.map((logo, idx) => (
                            <a
                                key={`${logo.name}-${idx}`}
                                className="fast-marquee__item"
                                href={logo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={logo.name}
                            >
                                <img src={logo.src} alt={`${logo.name} logo`} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* component-scoped CSS */}
                <style jsx>{`
                    .fast-marquee {
                        width: 100%;
                        --marquee-gap: 4rem;
                    }

                    .fast-marquee__viewport {
                        overflow: hidden;
                        width: 100%;
                    }

                    .fast-marquee__track {
                        display: flex;
                        align-items: center;
                        gap: var(--marquee-gap);
                        /* animate horizontal translate from 0 -> -50% to loop (since we duplicated items) */
                        animation: marquee-scroll var(--marquee-duration) linear
                            infinite;
                        will-change: transform;
                        padding: 0.25rem 0;
                    }

                    .fast-marquee__item {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        flex: 0 0 auto;
                        opacity: 0.95;
                        transition: transform 150ms ease;
                    }

                    .fast-marquee__item:hover {
                        transform: translateY(-4px);
                    }

                    .fast-marquee__item img {
                        height: var(--logo-height);
                        width: auto;
                        display: block;
                        object-fit: contain;
                        filter: saturate(0.95) contrast(0.95);
                    }

                    @keyframes marquee-scroll {
                        from {
                            transform: translateX(100%);
                        }
                        to {
                            transform: translateX(-100%);
                        }
                    }

                    /* small screens: reduce logo size and gap */
                    @media (max-width: 640px) {
                        .fast-marquee__track {
                            gap: 1rem;
                        }
                        .fast-marquee__item img {
                            height: calc(var(--logo-height) * 0.8);
                        }
                    }
                `}</style>
            </div>
        </div>
    )
}

export default ClientLogo
