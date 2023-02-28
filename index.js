let total = 0;
let gts=0;
let NailpliersQuantity=0;
let NailPoliQuantity=0;
let AcetoneQuantity=0;
let NailfileQuantity=0;
let NailExtQuantity=0;

function Nailpliers ()
{

  NailpliersQuantity = parseInt( prompt ('Please enter the quantity'));
 while(isNaN(NailpliersQuantity) || NailpliersQuantity === '' || NailpliersQuantity === null) 
 {
 NailpliersQuantity = prompt('Please enter a valid input');
 } 
document.getElementById('val01').innerHTML = NailpliersQuantity ; 
document.getElementById('total01').innerHTML = "$" + NailpliersQuantity * 34.99;
}

  
function NailPoli()
{   
 NailPoliQuantity = parseInt( prompt ('Please enter the quantity'));
while(isNaN(NailPoliQuantity) || NailPoliQuantity === '' || NailPoliQuantity === null) 
 {
    NailPoliQuantity = prompt('Please enter a valid input');
 }
 document.getElementById('val02').innerHTML = NailPoliQuantity ; 
 document.getElementById('total02').innerHTML = "$" + NailPoliQuantity * 8.99;


}
function Acetone()
{
 AcetoneQuantity = parseInt( prompt ('Please enter the quantity'));
while(isNaN(AcetoneQuantity) || AcetoneQuantity === '' || AcetoneQuantity === null) 
 {
    AcetoneQuantity = prompt('Please enter a valid input');
 }
 document.getElementById('val03').innerHTML = AcetoneQuantity ; 
 document.getElementById('total03').innerHTML = "$" + AcetoneQuantity * 5.99;

}

function Nailfile()
{   
 NailfileQuantity = parseInt( prompt ('Please enter a valid input'));
while(isNaN(NailfileQuantity) || NailfileQuantity === '' || NailfileQuantity === null) 
 {
    NailfileQuantity = prompt('Please enter a valid input');
 }
  document.getElementById('val04').innerHTML = NailfileQuantity  ; 
  document.getElementById('total04').innerHTML = "$" + NailfileQuantity  * 3.99;
  
}
function NailExt()
{
 NailExtQuantity = parseInt( prompt ('Please enter the quantity'));
while(isNaN(NailExtQuantity) || NailExtQuantity === '' || NailExtQuantity === null) 
 {
    NailExtQuantity = prompt('Please enter a valid input');
 }
 document.getElementById('val05').innerHTML = NailExtQuantity ; 
 document.getElementById('total05').innerHTML = "$" + NailExtQuantity * 104.99;

 
}
function checkout() 
{
  userName = prompt ('Please enter your Name');
 
  while( userName == "")
  {
    userName = prompt ('Please input a valid name');  
  }
  document.getElementById('costumerName').innerHTML = userName ;


  total = (NailpliersQuantity * 34.99)+ ( NailPoliQuantity * 8.99)+ (AcetoneQuantity * 5.99)+(NailfileQuantity  * 3.99)+ (NailExtQuantity * 104.99);
  gts =  Math.round (total * 0.13).toLocaleString('en-CA', { style: 'currency', currency: 'CAD' }) ;
  document.getElementById('gts').innerHTML = gts;
  total=  total.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' }); + Math.round (total * 0.13);
  document.getElementById('Finaltotal').innerHTML = total;
  



}





