var twit = require('twit')


var T = new twit({
    consumer_key: 'tewwxY13Kkr1byDNx2PCQUYvG',  
    consumer_secret: 'NVi0QuhDzoWsHBz1YoCuWyaJ9XM3xRHkrMmiDW3k7wrEjwQvzI',
    access_token: '3251347058-qTT8Qv6ALKAY6h74Y5OQ2ZUY4e6b9o15WV3NUrK',  
    access_token_secret: 'cS0bKv0iHEAZkbpL37g3fgfAzSU0Ud0cu37dQx0cXDBC4'
})

T.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false
}, onAuthenticated)

function onAuthenticated(err, res) {
    if (err) {
        throw err
    }

    console.log('Authentication successful. Running bot...\r\n')
}