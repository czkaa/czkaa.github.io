module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      lg: {'min': '1500px'},
      md: {'max': '1500px'},
      sm: {'max': '600px'},
      'hover-hover': {'raw': '(hover: hover)'}
    },
    fontSize: {
      lg: ['4rem', {
        letterSpacing: '0.02em',
        lineHeight: '4rem',
      }],
      md: ['2rem', {
        letterSpacing: '-0.02em',
        lineHeight: '2.2rem',
      }],
      sm: ['1.15rem', {
        letterSpacing: '-0.005em',
        lineHeight: '1.25rem',
      }],
      xs: ['0.65rem', {
        letterSpacing: '0.01em',
        lineHeight: '0.8rem',
      }]
    },
    extend: {
      height: {
        'balken' : '3.2rem'
      },
      width: {
        '1/7' : 'calc(100vw / 7)',
        '1/3-screen' : '33.4vw'
      },
      zIndex: {
       '-10': '-10',
      },
      minWidth: {
        'start' : '8rem',
      },
      minHeight: {
        'button' : '5rem'
      },
      maxWidth: {
        'start' : '12rem',
        'end' : '100vw'
      },
     fontFamily: {
       'nature' : 'Nature',
       'migra' : 'Migra',
       'eiko' : 'Eiko',
       'editorial-new' : 'EditorialNew',
       'editorial-new-italic' : 'EditorialNew-LightItalic',
       'keroine' : 'Keroine',
       'diatype' : 'Diatype',
      },
      scale: {
        'mirror': '-1',
      },
      colors: {
        'primary-color' : 'black',
        'secondary-color' : '#dac4f2'
      },
      borderWidth: {
        '1' : '1px'
      },
      borderRadius: {
        '100' : '100%'
      },
      boxShadow: {
        'form': 'inset 4px 3px 15px -6px rgba(0,0,0,0.53)',
        'box': '2px 3px 13px -2px rgba(0,0,0,0.53)',
      },
      animation: {
       'blink': 'blink linear 2s infinite',
       'spin': 'spin linear 5000ms infinite',
       'shrink' : `shrink linear 1 forwards`,
       'rotate' : `rotate 30s linear infinite`,
      },
      transitionDuration: {
        'stempel': '2000ms',
      },
      dropShadow: {
        'custom': '0 0 5px rgba(0, 50, 100, 0.3)',
      },
      keyframes: {
        blink :{
          '0%': { background: 'rgba(100,100,100,1)'},
          '50%': { background: 'rgba(100,100,100,0.75)'},
          '100%': { background: 'rgba(100,100,100,1)'},
        },
        spin: {
          '0%': { transform: 'rotate(0deg)'},
          '100%' : { background: 'rotate(360deg)'},
        },
        shrink: {
          '0%': { maxHeight: '0'},
          '100%': { maxHeight: '50vh' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)'},
          '6%' : { transform: 'rotate(30deg)'},
          '12%' : { transform: 'rotate(30deg)'},
          '16%' : { transform: 'rotate(60deg)'},
          '20%' : { transform: 'rotate(60deg)'},
          '24%' : { transform: 'rotate(90deg)'},
          '28%' : { transform: 'rotate(90deg)'},
          '32%' : { transform: 'rotate(120deg)'},
          '36%' : { transform: 'rotate(120deg)'},
          '40%' : { transform: 'rotate(150deg)'},
          '44%' : { transform: 'rotate(150deg)'},
          '48%' : { transform: 'rotate(180deg)'},
          '52%' : { transform: 'rotate(180deg)'},
          '56%': { transform: 'rotate(210deg)'},
          '60%': { transform: 'rotate(210deg)'},
          '64%' : { transform: 'rotate(240deg)'},
          '68%' : { transform: 'rotate(240deg)'},
          '72%' : { transform: 'rotate(270deg)'},
          '76%' : { transform: 'rotate(270deg)'},
          '80%' : { transform: 'rotate(300deg)'},
          '84%' : { transform: 'rotate(300deg)'},
          '88%': { transform: 'rotate(330deg)'},
          '92%': { transform: 'rotate(330deg)'},
          '96%' : { transform: 'rotate(360deg)'},
          '100%' : { transform: 'rotate(360deg)'},
        },
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
