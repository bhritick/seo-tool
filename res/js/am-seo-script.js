
function getH1() {
    let urifetch = document.getElementById("target-url").value;
    fetch(urifetch)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(html, 'text/html');

            // for h1 Tag
            const h1Tags = htmlDoc.getElementsByTagName('h1');
            let h1count = 0;
            let h1CharVal = 0;
            let h1Text = "";
            for (let i = 0; i < h1Tags.length; i++) {
                h1Text = h1Text + "<li>" + h1Tags[i].textContent + "</li>";
                h1CharVal = h1CharVal + h1Text.length;
                h1count = h1count + 1;
            }
            document.getElementById("h1-content").innerHTML = h1Text;
            document.getElementById("h1Count").innerHTML = h1count;
            document.getElementById("h1-characters").innerHTML = h1CharVal;

            // for h2 Tag
            const h2Tags = htmlDoc.getElementsByTagName('h2');
            let h2count = 0;
            let h2CharVal = 0;
            let h2Text = "";
            for (let i = 0; i < h2Tags.length; i++) {
                h2Text = h2Text + "<li>" + h2Tags[i].textContent + "</li>";
                h2CharVal = h2CharVal + h2Text.length;
                h2count = h2count + 1;
            }
            document.getElementById("h2-content").innerHTML = h2Text;
            document.getElementById("h2Count").innerHTML = h2count;
            document.getElementById("h2-characters").innerHTML = h2CharVal;

            // for h3 Tag
            const h3Tags = htmlDoc.getElementsByTagName('h3');
            let h3count = 0;
            let h3CharVal = 0;
            let h3Text = "";
            for (let i = 0; i < h3Tags.length; i++) {
                h3Text = h3Text + "<li>" + h3Tags[i].textContent + "</li>";
                h3CharVal = h3CharVal + h3Text.length;
                h3count = h3count + 1;
            }
            document.getElementById("h3-content").innerHTML = h3Text;
            document.getElementById("h3Count").innerHTML = h3count;
            document.getElementById("h3-characters").innerHTML = h3CharVal;

            // for P Tag
            const pTags = htmlDoc.getElementsByTagName('p');
            let pcount = 0;
            let pCharVal = 0;
            let pText = "";
            for (let i = 0; i < pTags.length; i++) {
                pText = pText + "<li>" + pTags[i].textContent + "</li>";
                pCharVal = pCharVal + pText.length;
                pcount = pcount + 1;
            }
            document.getElementById("p-content").innerHTML = pText;
            document.getElementById("pCount").innerHTML = pcount;
            document.getElementById("p-characters").innerHTML = pCharVal;

            // for img Tag
            const imgTags = htmlDoc.getElementsByTagName('img');
            let imgcount = 0;
            let imgCharVal = 0;
            let imgText = "";
            for (let i = 0; i < imgTags.length; i++) {
                imgText = imgText + "<li>" + imgTags[i].textContent + "</li>";
                imgCharVal = imgCharVal + imgText.length;
                imgcount = imgcount + 1;
            }
            // document.getElementById("img-content").innerHTML = imgText;
            document.getElementById("imgCount").innerHTML = imgcount;
            document.getElementById("img-characters").innerHTML = imgCharVal;

            // for a Tag
            let aTags = htmlDoc.getElementsByTagName('a');
            let acount = 0;
            let aCharVal = 0;
            let aText = "";
            thisurl = window.location.href;

            const genlink = [];
            for (let i = 0; i < aTags.length; i++) {
                genlink[i] = aTags[i].href;
            }            
            const uniqueArray = [...new Set(genlink)];
            
            for (let i = 0; i < uniqueArray.length; i++) {
                // aText = aText + "<li>" + aTags[i].textContent + "</li>";
                // aText = aText + "<li>" + aTags[i].href + "</li>";
                
                if (uniqueArray[i].startsWith(thisurl)) {
                    let result = uniqueArray[i].replace(thisurl, urifetch);
                    aText = aText + "<li>" + result + "</li>";
                }

                aCharVal = aCharVal + aText.length;
                acount = acount + 1;
            }
            document.getElementById("a-content").innerHTML = aText;
            document.getElementById("aCount").innerHTML = acount;
            document.getElementById("a-characters").innerHTML = aCharVal;
        });

    // console.log(urifetch);
}
