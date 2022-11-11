
function changeTheme(){
    let head = document.getElementsByTagName('head')[0];

    //select the current link css tag
    let linkTag =document.getElementById('lightTheme');
    console.log(linkTag);
    console.log(head);
    //remove the css link tag
    head.removeChild(linkTag);
    
    //create new link
    let newLinkTag = document.createElement('link');
    console.log(newLinkTag);
    console.log(document);
    
    newLinkTag.setAttribute('id','cssnew');
    newLinkTag.setAttribute('rel','stylesheet');
    
    //add the new href
    newLinkTag.setAttribute('href','darktheme,css');
    console.log(newLinkTag);
    //append it to the head
    head.appendChild(newLinkTag);
}

