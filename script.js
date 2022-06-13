let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

if (isMobile) {
  window.location = "phone.html"
}

function find() {
    var link = document.getElementById("link-n").value;
    const check_val = "https://www.lexaloffle.com/";
    const check_wid = "widget";

    if(link.startsWith(check_val) && link.includes(check_wid)) {
        if (!link || link.startsWith(" ")) {
            alert("Please do not leave this space blank.");
        } else {
            document.getElementById("p8game").src = link;
        }
    } else {
        alert("Please enter a lexaloffle link or a valid game embed.");
    }
}