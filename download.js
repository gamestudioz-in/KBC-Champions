function showLink() {
     let clickedLink = event.target.closest('a');
    
    let LinkValue = clickedLink.getAttribute('class');
    
    if (LinkValue === 'MLink') {
        document.querySelector('.Link1').style.display = 'block';
    }
    else if (LinkValue === 'GLink') {
       
 document.querySelector('.Link2').style.display = 'block';
    }
    else {
        document.querySelector('.Link3').style.display = 'block';
    }
}
    function unlockLink(event) {

    let clickedButton = event.target.closest('button');
    
    let btnValue = clickedButton.getAttribute('data-value');
    
    let parentLink = clickedButton.closest('a');
    
    clickedButton.innerHTML = "Checking...";

    setTimeout(() => {
        clickedButton.innerHTML = "<i style='color: white; font-size: 16px;' class='bx bxs-lock-open-alt'></i> Get Link";
    clickedButton.style.background = 'green';
        if (btnValue === 'mediafire') {
            parentLink.href = 'https://www.mediafire.com/file/j7nz1daaammen8i/KBC_Champions_%255B1.3%255D.apk/file';
        } 
        else if (btnValue === 'dropbox') {
            parentLink.href = 'https://www.dropbox.com/scl/fi/4xxpute4rsy6p4fo6huzd/KBC-Champions-1.3.apk';
        } 
        else {
            parentLink.href = 'https://mega.nz/file/PFFEBSpJ#WEyjx8_1Q_ujs3bWV4m6O1INlhld5G01F64Z6hdKCPE';
        }
    }, 5000);
}
