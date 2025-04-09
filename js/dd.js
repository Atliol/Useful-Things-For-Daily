document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name === '' || email === '' || message === '') {
        alert('ကျေးဇူးပြု၍ အချက်အလက်ဖြည့်ပါ');
    } else {
        // Here you can add code to process the payment
       
        document.getElementById('contactForm');
        alert('ပေးပို့မှုအောင်မြင်ပါသည်');
        
    }
    this.reset();
});
