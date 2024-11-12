    function donate() {
        var donationAmount = document.getElementById('donation-amount').value;
        if (donationAmount && donationAmount > 0) {
            if (donationAmount < 1) {
                document.getElementById('thank-you').textContent = `Gee. Thanks.`;
            } else if (donationAmount < 10) {
                document.getElementById('thank-you').textContent = `Thank you for your donation of $${donationAmount}!`;
            } else if (donationAmount < 100) {
                document.getElementById('thank-you').textContent = `Thank you for your donation of $${donationAmount}!`;
            }
              else if (donationAmount < 10000000000) {
                document.getElementById('thank-you').textContent = `Thank you for your donation of $${donationAmount}!`;
            }
              else if (donationAmount > 10000000000) {
                document.getElementById('thank-you').textContent = `You think you're a funny guy, don't you? WELL I DON'T`;
            }
            
            document.getElementById('thank-you').style.display = 'block';
        } else {
            alert("Please enter a valid amount.");
        }
    }