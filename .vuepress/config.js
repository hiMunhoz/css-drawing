module.exports = {
  title: 'CSS drawing',
  description: 'How to get a beatiful draw with pure HTML and CSS',
  head: [
    ['meta', { name: 'keywords', content: 'drawing, creativity, css, html, desenho, rascunho' }],
    ['link', { rel: 'icon', href: 'https://res.cloudinary.com/marcelo-munhoz/v1527879459/static/images/favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Exemplos', link: '/drawings/' },
      { text: 'Sobre', link: '/about/' }
    ],
    sidebar: [
      '/',
      '/drawings/',
      ['/about/', 'Quem mantêm o site']
    ]
  }
};