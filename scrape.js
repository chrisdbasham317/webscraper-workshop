var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://aqueous-plateau-46817.herokuapp.com/')
  .wait('.button--close-modal')
  .click('.button--close-modal')
  .click("a[href='/battle']")
  .wait('.button--start-fight')
  .select("select[name='challenger1']", 'Aquaman')
  .select("select[name='challenger2']", 'Superman')
  .click('.button--start-fight')
  .wait('.link--winner')
  .click('.link--winner')
  .wait('.h2--winner-name')
  .evaluate(function (result, done) {
    var winner = document.querySelector('.h2--winner-name')
    return winner ? 'Superman is the winner, and your app is awake' : "Something went very wrong"
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('App wake up failed', error)
  });
