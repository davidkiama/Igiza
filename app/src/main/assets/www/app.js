if(document.querySelector('.home-link')){
    document.querySelector('.home-link').textContent = 'Homepage';
}
//****************************Categories***********************//
if(document.querySelector('.cat-1')){
    document.querySelector('.cat-1').textContent = 'TwoFourty';
}

if(document.querySelector('.cat-2')){
    document.querySelector('.cat-2').textContent = 'Alpha-T';
}

if(document.querySelector('.cat-3')){
    document.querySelector('.cat-3').textContent = 'TwoFourty';
}

if(document.querySelector('.cat-4')){
    document.querySelector('.cat-4').textContent = 'FourtyFive';
}

if(document.querySelector('.cat-5')){
    document.querySelector('.cat-5').textContent = 'FourTwenty';
}

if(document.querySelector('.cat-6')){
    document.querySelector('.cat-6').textContent = 'ThrowBack';
}

//**************************Footer**********************/
if(document.querySelector('.footer')){
    document.querySelector('.footer').innerHTML = 
    "<div> Copyright by Igiza 2020 <a href='privacy-policy.html' class='privacy-link'>Privacy Policy</a> <a href='terms.html' class='terms-link'>Terms</a> </div>";
}


///////////////////////////////////////////////////////////////////////////////////////


//************************************story-back************************************************//

const descriptions = document.querySelectorAll('.book__description');
const socialLink = document.querySelectorAll('.intAd');


var nodeListForEach = function(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback(list[i], i);
    }
};

function descriptionDisplay(){
    if (document.querySelector('.story-back')){
        document.querySelector('.story-back').setAttribute('href', ' ');// This only works in browsers
    }
}

nodeListForEach(descriptions, function(book__description){book__description.addEventListener('click', descriptionDisplay)});




//Error connection display
if(document.querySelector('.page-next')){
    document.querySelector('.page-next').addEventListener('click', function(){
        document.querySelector('.popup').style.display='block';
        admobInterestial();
        
    })
}
//Error connection display none
if (document.querySelector('.popup__close')){
    document.querySelector('.popup__close').addEventListener('click', function(){
        document.querySelector('.popup').style.display='none';
        
    })
}
///Interetial ad on social links
nodeListForEach(socialLink, function(intAd){intAd.addEventListener('click', admobInterestial)});

//Interestial ad on page prev
if(document.querySelector('.page-prev')){
    document.querySelector('.page-prev').addEventListener('click', admobInterestial)
}


/*****************************Ads**********************************/
//Banner ad display
document.addEventListener('deviceready', function(){
    admob.banner.prepare();
    admob.banner.show({
        id:'ca-app-pub-3940256099942544/6300978111',
        autoShow:true
    })
}, false);


///Interestial ad display
function admobInterestial(){
    admob.interstitial.config({
        id: 'ca-app-pub-3940256099942544/1033173712',
       });
    admob.interstitial.prepare();
}