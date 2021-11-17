let anotherPicuture = prompt('Do you want to see another SW Pic?');
let picURL = "https://starwarsblog.starwars.com/wp-content/uploads/2017/03/darth-vader-1-cover-header.jpg"

if(anotherPicuture.toLowerCase() == "yes"){
    // <img id="vader" src="https://starwarsblog.starwars.com/wp-content/uploads/2017/03/darth-vader-1-cover-header.jpg">

    document.write('<img src="' + picURL + '">')
}