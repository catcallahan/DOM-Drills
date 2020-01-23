document.addEventListener("DOMContentLoaded", function () {
    let liCount = 1
    let headContainer = document.createElement('div');
    headContainer.className = 'header-container';
    let newH1 = document.createElement('h1');
    newH1.className = "h1";
    let headerText = document.createTextNode('This is an h1.')
    newH1.appendChild(headerText);
    headContainer.appendChild(newH1);
    document.body.appendChild(headContainer);

    let newH2 = document.createElement('h2');
    newH2.className = "h2";
    let h2Text = document.createTextNode("This is an h2");
    newH2.appendChild(h2Text);
    headContainer.appendChild(newH2);

    let newH3 = document.createElement('h3');
    newH3.className = "h3";
    let h3Text = document.createTextNode("This is an h3");
    newH3.appendChild(h3Text);
    headContainer.appendChild(newH3);


    let newh4 = document.createElement('h4');
    newh4.className = "h4";
    let h4Text = document.createTextNode('This is an h4');
    newh4.appendChild(h4Text);
    headContainer.appendChild(newh4);

    let newH5 = document.createElement('h5');
    newH5.className = "h5";
    let h5Text = document.createTextNode('This is an h5');
    newH5.appendChild(h5Text);
    headContainer.appendChild(newH5);

    let newH6 = document.createElement('h6');
    newH6.className = "h6";
    let h6Text = document.createTextNode("This is an h6");
    newH6.appendChild(h6Text);
    headContainer.appendChild(newH6);

    let colors = ["#DB4545", "#454FDB", "#0CEC8B", "#FFFF00", "#00FFFF", "#FF0009", "#FF00FF", "#00FF00"];

    newH1.addEventListener('dblclick', function () {

        newH1.style.color = colors[Math.floor(Math.random() * colors.length)]

    });

    let button = document.getElementsByTagName('button');



    function newListItem() {
        let unorderedList = document.createElement('ul');
        let listItem1 = document.createElement('li');
        let li1Text = document.createTextNode("This is list Item " + liCount);
        listItem1.appendChild(li1Text);
        unorderedList.appendChild(listItem1);
        document.body.appendChild(unorderedList)
        liCount++
        listItem1.addEventListener('click', function () {

            listItem1.style.color = colors[Math.floor(Math.random() * colors.length)]

        });

        function rmvListItem() {
            document.body.removeChild(unorderedList)
        }

        listItem1.addEventListener('dblclick', function () {

            rmvListItem();
        });
    }

    button[0].addEventListener('click', function () {
        newListItem();
    })






})