function sendMail() {
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'YOUR API KEY HERE',
        'message': {
          'from_email': 'technoarjun@gmail.com',
          'to': [
              {
                'email': 'technoarjun@gmail.com',
                'name': 'Arjun',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Stupid',
          'html': 'Hi Stupid.'
        }
      }
     }).done(function(response) {
       console.log(response);
     });
}
function sendMail(){
  
}