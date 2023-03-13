let count=0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".buttn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
       const styles = e.currentTarget.classList;
    //    increase decrease reset
       if(styles.contains("decrease")){
           count--;
           value.innerHTML = count;
       }
         else if(styles.contains("increase")){
            count++;
            value.innerHTML = count;
         }
         else{
                count=0;
                value.innerHTML = count;
         }
        //  color change
         if(count>0){
            value.style.color="green";
         }
         else if(count<0){
            value.style.color="red";
         }
            else{
                value.style.color="black";
            }
    })
})