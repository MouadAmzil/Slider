var slildeImg = Array.from(document.querySelectorAll('.Slider-Container img'));
var number = slildeImg.length;
// console.log(number);
var currentSlide = 1;
var slideNumber = document.getElementById('slider-Number');
////////////       start previous and next      ///////////////
var pervious = document.getElementById('prev');
var next = document.getElementById('next');
next.onclick = nextFun;
pervious.onclick = perviousFun;
function perviousFun() {
    if(pervious.classList.contains('disabled')){return false;}
    else{currentSlide--;checked();}
}
function nextFun() {
    if(next.classList.contains('disabled')){return false;}
    else{currentSlide++;checked();}

}
///////////////      End function previous and next   //////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////      START CREATE UL AND LI AND PUT IT IN SPAN      ///////////////
var UlElementCreate = document.createElement('ul');
UlElementCreate.setAttribute('id', 'pagination-ul');
for (var i = 1; i <= number; i++) {

    var LiElementCreate = document.createElement('li');
    LiElementCreate.setAttribute('data-index', i.toString());
    LiElementCreate.appendChild(document.createTextNode(i.toString()));
    UlElementCreate.appendChild(LiElementCreate);
}
var NumberImg = document.getElementById('indecator');
NumberImg.appendChild(UlElementCreate);

////////////      END CREATE UL AND LI AND PUT IT IN SPAN      ///////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////      START GET ELEMENT IS CREATED UL      ///////////////
var CreatedUL = document.getElementById('pagination-ul');
var CreatedULLi = Array.from(document.querySelectorAll('#pagination-ul li'));
CreatedULLi.forEach(li=>  {
    li.onclick = _=> {
        var l = li.getAttribute('data-index');
        currentSlide = parseInt(l);
        checked();
    }
})
function checked() {
    slideNumber.textContent = `Slider# ${currentSlide} of ${number}`;
    RemoveAllActivation();
    slildeImg[currentSlide - 1].classList.add('active');
    CreatedUL.children[currentSlide - 1].classList.add('active');
    /////////////////////////////////////////////////////////////
    if (currentSlide === 1) { pervious.classList.add('disabled'); }
    else { pervious.classList.remove('disabled'); }
    /////////////////////////////////////////////////////////////
    if (currentSlide === number) { next.classList.add('disabled'); }
    else { next.classList.remove('disabled'); }
}
function RemoveAllActivation() {
    slildeImg.forEach(img => {
        img.classList.remove('active');
    })
    CreatedULLi.forEach(LI => {
        LI.classList.remove('active')
    })

}
checked();




















