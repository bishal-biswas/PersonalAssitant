import { RandomNumber } from "./UtiltyJS.js";
var responseData;
var bgImages = [
    "https://wallpapers.com/images/hd/beautiful-scenery-sunrise-waterfall-wnxju2647uqrcccv.jpg",
    "https://e0.pxfuel.com/wallpapers/166/420/desktop-wallpaper-most-beautiful-places-on-earth-amazing-places.jpg",
    "https://wallpapers.com/images/hd/most-beautiful-places-in-the-world-ixted75dnonldfh8.jpg",
    "https://cdn.wallpapersafari.com/89/14/FLPmS5.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1002/680/55/pink-tree-fantasy-wallpaper-preview.jpg",
    "https://images.unsplash.com/photo-1605338534943-c04cbec1ddf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
    "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_1280.jpg",
    "https://wallpapers.com/images/featured/beautiful-scenery-pictures-ycxy8o2ii84zsgiv.jpg",
    "https://wallpaper-house.com/data/out/12/wallpaper2you_574797.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/697/93/242/reflection-nature-sky-photoshop-wallpaper-preview.jpg",
]

document.querySelector(".holder").style.backgroundImage = `url('${bgImages[RandomNumber(0, bgImages.length)]}')`;

try {
    var form = document.getElementById("registerForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
} catch (error) { }

try {
    var registerBtn = document.querySelector("#registerBtn ");
    registerBtn.addEventListener("click", async () => {
        var FName = document.querySelector("#FName").value;
        var LName = document.querySelector("#LName").value;
        var EmailAdd = document.querySelector("#EmailAdd").value;
        var Password = document.querySelector("#Password").value;

        createAccount(FName, LName, EmailAdd, Password);
    })
} catch (error) { }

try {
    var loginBtn = document.querySelector("#loginBtn");
    loginBtn.addEventListener("click", () => {
        if (document.querySelector("#loginFieldUserName").style.display == "none") {
            //Checking Password
            if (document.querySelector("#Password").value == FetchedData[0][5]) {
                console.log("Password Matched");
                if (document.getElementById("staysignedin").checked) {
                    localStorage.setItem("Personal Assistant UserName", FetchedData[0])
                }
            } else
                console.log("Password not Matched");
        }
        else
            readAccount(document.querySelector("#UserName").value);
    })
} catch (error) { }