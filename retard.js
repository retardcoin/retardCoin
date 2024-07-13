function functionYes(){
  const elements = [
    document.getElementById("applePic1"),
    document.getElementById("fullPic"),
    document.getElementById("frontPic"),
    document.getElementById("finalpic"),
    document.getElementById("fullPic2")
];

elements.forEach(element => {
    element.style.animation = 'none';
    element.offsetHeight; // Trigger a reflow, flushing the CSS changes
    element.style.animation = '';
});
   
    document.getElementById("fullPic").style.display = "none";
    document.getElementById("frontPic").style.display = "none";
    document.getElementById("applePic1").style.display = "none";
    document.getElementById("finalpic").style.display = "none";

    document.getElementById("fullPic2").style.display = "block";
  
}
function functionEx(){
  




  document.getElementById("fullPic").style.display = "none";
  document.getElementById("fullPic2").style.display = "none";
  document.getElementById("frontPic").style.display = "none";
  document.getElementById("applePic1").style.display = "none";
  document.getElementById("finalpic").style.display = "none";
  document.getElementById("applePic2").style.display = "block";

  
    setTimeout(() => {
  document.getElementById("first").style.display = "none";
  document.getElementById('page1').style.display = 'block';
  document.getElementById('list1').style.display = 'block';
  document.getElementById('write').style.display = 'block';
  document.getElementById('gay').style.display = 'block';
  document.getElementById('list2').style.display = 'block';
  document.getElementById('whole').style.display = 'block';
  document.getElementById('footer').style.display = 'block';

}, 1600);
}

            // Function to check if element is in viewport
            function isInViewport(element) {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
    
            // Function to handle scroll event
            function handleScroll() {
                var elements = document.querySelectorAll('.animate-jump');
                elements.forEach(function(element) {
                    if (isInViewport(element)) {
                        element.classList.add('animate-in');
                    }
                });
            }
    
            // Attach scroll event listener
            window.addEventListener('scroll', handleScroll);
    
            // Initial check in case elements are already in viewport on page load
            handleScroll();


