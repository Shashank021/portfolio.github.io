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
                <form name="submit-to-google-sheet">
                    <input type="textbox" name="NAME" placeholder="your name"><br>
                    <input type="textbox" name="EMAIL" placeholder="your email"><br>
                    <textarea type="textbox" name="MESSAGE"row="6" placeholder="your message"></textarea><br>
                    <a><button>submit</button><a>
                </form><br>
                <span id="msg"></span>
            </div>
        </div><br><br><br><br><br><br><br>
    `;
}
contact();