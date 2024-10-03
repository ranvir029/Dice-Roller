  
  
    Roll.onclick=function(){
      const valueblock=document.getElementById("valueblock");
      const Roll=document.getElementById("Roll");
      const result=document.getElementById("result");
      const diceimages=document.getElementById("diceimages");  
        const values=[];
        const images=[];

      for(let i=0;i<valueblock.value;i++){
          const value =Math.floor(Math.random()*6)+1;
          values.push(value);
          images.push(`<img src="dice_images/${value}.png" alt="dice ${value}" >`);
      }
       result.textContent=`dice :${values.join(" ,")}`;
       diceimages.innerHTML=images.join(" ");

   }