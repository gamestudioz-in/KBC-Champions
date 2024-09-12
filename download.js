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
            parentLink.href = 'https://www.mediafire.com/file/gvhqk5n4b53zx5a/KBC_Champions.zip/file';
        } 
        else if (btnValue === 'dropbox') {
            parentLink.href = 'https://www.dropbox.com/scl/fi/um1mj9k6xocso63l3yvrv/KBC-Champions.zip?rlkey=bnbm7rmx1rca9kjh7swcmxw9o&st=yrqjo26h&dl=0';
        } 
        else {
            parentLink.href = 'https://www.drive.google.com/file/d/1fqWr7mNzI0Ypr0ja_1fTq7FYoU28p3Jp/view';
        }
    }, 5000);
}
