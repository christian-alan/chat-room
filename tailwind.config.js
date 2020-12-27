const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: false,
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1441px',
            xl: '1600px',
            'tablet': { 'max': '62rem' },
            'phone': { 'max': '48rem' }
        },
        fontFamily: {
            'display': ['Fira Sans', 'sans-serif'],
            'body': ['Fira Sans', 'sans-serif'],
        },
        borderRadius: {
            'none': '0',
            'sm': '.375rem',
            default: '2rem',
            'md': '1rem',
            'lg': '4rem',
            'full': '9999rem',
            'circle': '100%'
        },
        fontSize: {
            'xxs': '.65rem',
            xs: '.75rem',
            sm: '.875rem',
            base: '16px',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            'xxl': '1.75rem',
            '3xl': '2rem',
            '4xl': '2.5rem',
            '5xl': '2.85rem',
            '6xl': '3.75rem',
        },
        opacity: {
            '0': '0',
            '1': '.01',
            '2': '.02',
            '3': '.03',
            '4': '.04',
            '5': '.05',
            '10': '.1',
            '15': '.15',
            '20': '.2',
            '25': '.25',
            '30': '.3',
            '35': '.35',
            '40': '.4',
            '45': '.45',
            '50': '.5',
            '55': '.55',
            '60': '.6',
            '65': '.65',
            '70': '.7',
            '75': '.75',
            '80': '.8',
            '85': '.85',
            '90': '.9',
            '95': '.95',
            '100': '1',
        },
        extend: {
            colors: {
                primary: {
                    '25': '#00BBFF25',
                    '100': '#EFFBFF',
                    '200': '#B1EDFF',
                    '300': '#5FDBFF',
                    '400': '#1CCCFF',
                    '500': '#00BBFF',
                    '600': '#00B4F3',
                    '700': '#039CFC',
                    '800': '#0A71B2',
                    '900': '#024976',
                },
                green: {
                    '15': '#0BDDAC15',
                    '100': '#E8F9F2',
                    '200': '#83FFE2',
                    '300': '#4CF8D0',
                    '400': '#18E6B6',
                    '500': '#0BDDAC',
                    '600': '#09B58D',
                    '700': '#069B79',
                    '800': '#02775D',
                    '900': '#004838',
                },
                yellow: {
                    '100': '#FFFBF4',
                    '200': '#FFF6E8',
                    '300': '#FFECCC',
                    '400': '#FDDAA1',
                    '500': '#F2C57C',
                    '600': '#DDAD60',
                    '700': '#C49446',
                    '800': '#B47D24',
                    '900': '#6C470C',
                },
                red: {
                    '100': '#FFF0F0',
                    '200': '#FFDBDB',
                    '300': '#FFC3C3',
                    '400': '#FC9191',
                    '500': '#F27C7C',
                    '600': '#D95656',
                    '700': '#BE4242',
                    '800': '#9D2A2A',
                    '900': '#791414',
                },
                orange: {
                    '100': '#FDF0EA',
                    '200': '#FFD8C4',
                    '300': '#FFC4A5',
                    '400': '#FDAC82',
                    '500': '#FF965F',
                    '600': '#D86E37',
                    '700': '#C45921',
                    '800': '#A34210',
                    '900': '#652402',
                },
                pink: {
                    '100': '#FDE8FF',
                    '200': '#FBC9FF',
                    '300': '#F9B4FF',
                    '400': '#F691FF',
                    '500': '#F474FF',
                    '600': '#D446E0',
                    '700': '#B42DBF',
                    '800': '#921B9B',
                    '900': '#66066E',
                },
                purple: {
                    '20': '#817CF220',
                    '100': '#ECEBFF',
                    '200': '#DBD9FF',
                    '300': '#BBB8FA',
                    '400': '#918CF8',
                    '500': '#817CF2',
                    '600': '#5954D0',
                    '700': '#413CB9',
                    '800': '#2A2696',
                    '900': '#0D0A64',
                },
                dark: {
                    '100': '#EDF5F7',
                    '200': '#D6E9EF',
                    '300': '#4D96AA',
                    '400': '#2E7386',
                    '500': '#1C596A',
                    '600': '#104250',
                    '700': '#0A3541',
                    '800': '#062933',
                    '900': '#041C23'
                },
                light: {
                    '100': '#FFFFFF',
                    '200': '#EDF5F7',
                    '300': '#E6F1F4',
                    '400': '#D3E5EA',
                    '500': '#C2D9E0',
                    '600': '#AAC7D0',
                    '700': '#97B8C3',
                    '800': '#85AAB7',
                    '900': '#6B92A0'
                }
            },
            lineHeight: {
                '1': '1',
            },
            boxShadow: {
                lg: '0 2px 30px rgba(4, 28, 35, .1)',
                xl: '0 3rem 6rem -1rem rgba(0, 0, 0, 0.075)',
                'btn': '0 2px 20px 3px rgba(0,187,255, .12)',
                'btn-secondary': 'inset 0 0 0 2px rgb(0,187,255)',
                'purple': '0 2px 20px 3px rgba(98,93,213, .12)',
                'green': '0 2px 20px 3px rgba(90,245,209, .12)',
                'success': '0 2px 12px rgba(76, 248, 208, .3)',
                'slider': '0 5px 40px -10px rgba(76, 248, 208, .06)'
            },
            transitionDuration: {
                '0': '0',
                '250': '250ms',
                '300': '300ms',
                '400': '400ms',
                '600': '600ms',
                '800': '800ms'
            },
            transitionDelay: {
                '350': '350ms',
                '600': '600ms'
            },
            zIndex: {
                '-1': '-1',
                '1': '1',
                '2': 2,
                '999': 999
            },
            maxWidth: {
                '10': '10rem',
                'logo': '9rem',
                'screen': '100vw'
            },
            height: {
                '40': '40vh',
                '50': '50vh',
                '60': '60vh',
                '70': '70vh',
                '80': '80vh',
                '90': '90vh',
            },
            maxHeight: {
                '10': '10rem',
                'logo': '3rem',
                'screen': '100vh'
            },
            inset: {
                '4': '1rem',
                '1/2': '50%',
                '-1/2': '-50%',
                '100': '100%',
                '-100': '-100%'
            },
            translate: {
                '1/2': '50%',
                '-1/2': '-50%',
            },
            margin: {
                '1/2': '50%',
                '-1/2': '-50%',
                '100': '100%',
                '-100': '-100%',
                'screen20': '20vh',
                'screen25': '25vh',
                'screen30': '30vh',
                'screen35': '35vh',
                'screen40': '40vh',
                'screen45': '45vh',
                'screen50': '50vh',
                'screen55': '55vh',
                'screen60': '60vh',
                'screen65': '65vh',
                'screen70': '70vh',
                'screen75': '75vh',
                'screen80': '80vh',
                'screen85': '85vh',
                'screen90': '90vh',
                'screen95': '95vh',
                'screen': '100vh',
            }
        },
    },
    variants: {
        borderWidth: ['responsive', 'last', 'hover', 'focus'],
        backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
        backgroundOpacity: ['responsive', 'odd', 'even', 'hover', 'focus', 'group-hover'],
    },
    plugins: [
        plugin(function({ addComponents, addBase, config }) {
            addBase({
                'h1': { fontSize: config('theme.fontSize.6xl') },
                'h2': { fontSize: config('theme.fontSize.5xl'), marginBottom: '1.2rem' },
                'h3': { fontSize: config('theme.fontSize.lg') },
                'h1,h2,h3,h4,h5,h6': { fontWeight: '900', lineHeight: '1.25' },
                'a': { color: config('theme.colors.primary.500') },
                'strong': { fontWeight: '900' },
                'p': { marginBottom: '1rem' },
                '.container': { padding: '0 1rem' }
            });
            const extraComponents = {
                '.arrow-right': {
                    width: '20px',
                    height: '0',
                    backgroundColor: '#fff',
                    display: 'inline-block',
                    position: 'relative',
                    transition: 'all .2s ease',
                    marginLeft: '.5rem',
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        right: '0',
                        width: '8px',
                        height: '8px',
                        borderRight: '2px solid',
                        borderBottom: '2px solid',
                        transform: 'rotate(-45deg)',
                        top: '50%',
                        marginTop: '-4px'
                    }
                },
                'a': {
                    '&:hover': {
                        '.arrow-right': {
                            transform: 'translateX(3px)'
                        }
                    },
                },
                '.success--check': {
                    width: '30px',
                    height: '30px',
                    background: config('theme.colors.green.500'),
                    borderRadius: '100%',
                    position: 'relative',
                    boxShadow: config('theme.boxShadow.success'),

                    '&:after': {
                        content: '""',
                        width: '7px',
                        height: '14px',
                        borderRight: '2px solid',
                        borderBottom: '2px solid',
                        borderColor: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'rotate(45deg)',
                        marginTop: '-8px',
                        marginLeft: '-3px'
                    }
                },
                '.overlay': {
                    position: 'relative',
                    zIndex: '1',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        background: config('theme.colors.dark.900'),
                        opacity: '.8',
                        zIndex: '-1'
                    }
                },
                '.checked': {
                    width: '.5rem',
                    height: '.9rem',
                    borderRight: '2px solid',
                    borderBottom: '2px solid',
                    borderColor: 'white',
                    transform: 'rotate(45deg)',
                    position: 'relative',
                    bottom: '2px'
                },
                '.pending': {
                    textAlign: 'center',
                    '&:after': {
                        content: '"..."',
                        fontSize: '1.75rem',
                        color: 'white',
                        lineHeight: '1',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        marginTop: '-.82rem',
                        marginLeft: '-.4rem'
                    }
                }
            }

            addComponents([extraComponents]);
        })
    ],
}