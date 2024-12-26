const lightEffect = document.getElementById("lightEffect");
    document.addEventListener("mousemove", (e) => {
      lightEffect.style.top = `${e.clientY}px`;
      lightEffect.style.left = `${e.clientX}px`;
    });
    
    document.getElementById("startButton").addEventListener("click", function() {
      document.getElementById("mainContent").style.display = "block";
      document.getElementById("content").style.display = "none"; 
      lightEffect.style.display = "none"; 
    });

    document.addEventListener('mouseleave', function(){
      lightEffect.style.display = 'none';
    })
    document.addEventListener('mouseenter', function(){
      lightEffect.style.display = 'block';
    })
   
    const logo = document.getElementById('logo')
    logo.addEventListener('mouseenter', function(){
        lightEffect.style.display = 'none';
    })
    logo.addEventListener('mouseleave', function(){
        lightEffect.style.display = 'block';
    })

    startButton.addEventListener('mouseenter', function(){
        lightEffect.style.display = 'none';
    })
    startButton.addEventListener('mouseleave', function(){
        lightEffect.style.display = 'block';
    })