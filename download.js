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
            parentLink.href = 'https://www.mediafire.com/file/3zipl2jwsk3ppht/KBC_Champions%255B1.2%255D.apk/file';
        } 
        else if (btnValue === 'dropbox') {
            parentLink.href = 'https://www.dropbox.com/scl/fi/ffdxf73ugfct6aplay5g9/KBC-Champions-1.2.apk';
        } 
        else {
            parentLink.href = 'https://mega.nz/file/PZ1lwRZA#9evqUn8nj5H2VbDRQo0BqrkNnDK-jimRWzVOH_qhOEw';
        }
    }, 5000);
}
