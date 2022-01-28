var btn1 = document.querySelector('.btn1'),
    btn2 = document.querySelector('.btn2'),
    items = document.querySelectorAll('.item');

    btn1.addEventListener('click', function(){
      let sl =  document.querySelector('.slider');
      if(sl.scrollLeft == 0){
        sl.scrollLeft = sl.scrollWidth - sl.clientWidth;
      }else{
        sl.scrollLeft -=500;
    
      }
     });

btn2.addEventListener('click', function(){
  let sl =  document.querySelector('.slider');
  if(sl.scrollLeft == sl.scrollWidth - sl.clientWidth){
    sl.scrollLeft = 0;
  }else{
    sl.scrollLeft +=500;

  }
 });

var w = 0;
items.forEach(item =>{
  item.style.left = w+"%";
  w+=100;
});