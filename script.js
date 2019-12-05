
let depense = [];




let loyerCharge = document.getElementsByClassName('inputDepense');


function enter () {
   
   for (var i=0; i < loyerCharge.length; i++) {
      var loyerChamp = loyerCharge[i].value;
      depense.push(loyerChamp);
      console.log(depense)
      document.getElementById('total').innerHTML = "Total = " + depense;
   }
   
}






function addEpargne () {
   let epargneValue = document.getElementById('inputEpargne').value;
   let newDiv = document.createElement('div');

   document.getElementById('containerSaving').appendChild(newDiv) ;
   newDiv.innerHTML += epargneValue;

   //console.log(epargneValue);
}

