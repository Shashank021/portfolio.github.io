const contact = () => {
    let contact = document.querySelector('.contact');
    
    contact.innerHTML =`
        <div class="section4" id="section4">
            <h1>Contact</h1>
            <div class="contact">
                <div>
                    <img src="image/name-logo1.png" class="name-logo" alt=""><br><br><br><br><br>
                    <a>+91-9027659714</a><br>
                    <a>shashankvats2112@gmail.com</a>
                </div>
                <form>
                    <input type="textbox" placeholder="your name"><br>
                    <input type="textbox" placeholder="your email"><br>
                    <input type="textbox" placeholder="your message"><br>
                    <a><button>submit</button><a>
                </form>
            </div>
        </div><br><br><br><br><br><br><br>
    `;
}
contact();