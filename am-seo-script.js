
function getH1() {
    let urifetch = document.getElementById("target-url").value;
    fetch(urifetch)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(html, 'text/html');

            // for H1 Tag
            const h1Tags = htmlDoc.getElementsByTagName('h1');
            const h1Text = h1Tags[0].textContent;
            const h1CharVal = h1Text.length;
            document.getElementById("h1-content").innerHTML = h1Text;
            document.getElementById("h1-characters").innerHTML = h1CharVal;

            // for P Tag
            const pTags = htmlDoc.getElementsByTagName('p');
            let pcount = 0;
            let pCharVal = 0;
            let pText = "";
            for (let i = 0; i < pTags.length; i++) {
                pText = pText + pTags[i].textContent + "<hr />";
                pCharVal = pCharVal + pText.length;
                pcount = pcount + 1;
            }
            document.getElementById("p-content").innerHTML = pText;
            document.getElementById("pCount").innerHTML = pcount;
            document.getElementById("p-characters").innerHTML = pCharVal;

            // for IMG Tag

            let imgTags = htmlDoc.getElementsByTagName('img').attributes;
            // let imgText = "";
            // const imgCharVal = imgText.length;
            // for (let i = 0; i < imgTags.length; i++) {
            //     imgText += "<li>" + imgText[i].name + " = " + imgText[i].value + "</li>";
            // }
            // document.getElementById("img-content").innerHTML = imgText;
            // document.getElementById("img-characters").innerHTML = imgTags;
            document.getElementById("img-characters").innerHTML = imgTags;
        });
    // console.log(urifetch);
}