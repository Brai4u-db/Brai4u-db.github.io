const tresci = {
    1: `
    <div class="change1">
        <div class="grid">
            <div class="projects">
                <div class="overlay">
                    <p class="text">qualitec.pl</p>
                </div>
                <img src="img/portfolio1.png" alt="Portfolio 1">
            </div>
            <div class="projects">
                <div class="overlay">
                    <p class="text">scsdetailing.pl</p>
                </div>
                <img src="img/portfolio2.png" alt="Portfolio 2">
            </div>
            <div class="projects">
                <div class="overlay">
                    <p class="text">kaaj-group.com</p>
                </div>
                <img src="img/portfolio3.png" alt="Portfolio 3">
            </div>
        </div>
        <div class="grid">
            <div class="projects">
                <div class="overlay">
                    <p class="text">arka-elektro.pl</p>
                </div>
                <img src="img/portfolio4.png" alt="Portfolio 4">
            </div>
            <div class="projects">
                <div class="overlay">
                    <p class="text">truckcontrol.pl</p>
                </div>
                <img src="img/portfolio5.png" alt="Portfolio 5">
            </div>
            <div class="projects">
                <div class="overlay">
                    <p class="text">theassist.pl</p>
                </div>
                <img src="img/portfolio6.png" alt="Portfolio 6">
            </div>
        </div>
        <div class="grid">
                <div class="projects">
                    <div class="overlay">
                        <p class="text">kaaj-group.com</p>
                    </div>
                    <img src="img/portfolio3.png" alt="Portfolio 3">
                </div>
                <div class="projects">
                    <div class="overlay">
                        <p class="text">theassist.pl</p>
                    </div>
                    <img src="img/portfolio6.png" alt="Portfolio 6">
                </div>
            </div>
    </div>`,
    2: `
            <div class="change2">
            <div class="grid">
                <div class="stacklang"><img src="img/html.png" alt="HTML"></div>
                <div class="stacklang"><img src="img/css.png" alt="CSS"></div>
                <div class="stacklang"><img src="img/js.png" alt="JavaScript"></div>
                <div class="stacklang"><img src="img/wordpress.png" alt="WordPress"></div>
            </div>
            <div class="grid">
                <div class="stacklang"><img src="img/react.png" alt="React"></div>
                <div class="stacklang"><img src="img/jquery.png" alt="jQuery"></div>
                <div class="stacklang"><img src="img/php.png" alt="PHP"></div>
                <div class="stacklang"><img src="img/mysql.png" alt="MySQL"></div>
            </div>
            <div class="grid">
                <div class="stacklang"><img src="img/js.png" alt="JavaScript"></div>
                <div class="stacklang"><img src="img/php.png" alt="PHP"></div>
            </div>
            <div class="grid">
                    <div class="stacklang"><img src="img/wordpress.png" alt="WordPress"></div>
                    <div class="stacklang"><img src="img/mysql.png" alt="MySQL"></div>
            </div>
        </div>
`,
};

function bt(numer) {
    const wyswietlonyDiv = document.getElementById("changing");
    wyswietlonyDiv.innerHTML = tresci[numer] || "Wybierz opcję";
}

window.onload = function() {
    bt(1); 
};

function bt(numer) {
    const wyswietlonyDiv = document.getElementById("changing");
    wyswietlonyDiv.innerHTML = tresci[numer] || "Wybierz opcję";

    document.querySelectorAll(".buttonsstack").forEach(btn => btn.classList.remove("active"));

    document.getElementById(`bt${numer}`).classList.add("active");
}

