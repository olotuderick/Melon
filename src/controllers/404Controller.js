export const controller404 = (req, res) => {
  res.render('404', {
    pageTitle: '404 Page',
    message: 'Look like you’re lost in space',
    linkUrl: '/',
    linkText: 'GO HOME',
  })
}
