const footer = () => {
    let footer = document.querySelector('.footer');
    
    footer.innerHTML =`
        <div class="footer">
            <div class="bottom">
                <ul>
                    <li>about</li>
                    <li>project</li>
                    <li>achievements</li>
                    <li>service</li>
                    <li>contact</li>
                </ul>
            </div>
            <div class="last">© 2022 Shashank Vats. All rights reserved.</div>
        </div><br><br><br><br><br><br><br><br><br><br><br>
    `;
}
footer();