function calcint(){
    const Principle=parseFloat(document.getElementById('Principle').value);
    const Interest=parseFloat(document.getElementById('Interest').value);
    const Years=parseFloat(document.getElementById('Years').value);

    const Simpint= (Principle*Interest*Years)/100
    const totalamt= Simpint+Principle

    document.getElementById('firstamount').innerText=`₹ ${Principle}`;
    document.getElementById('TotInt').innerText=`₹ ${Simpint.toFixed(1)}`;
    document.getElementById('TotAmt').innerText=`₹ ${totalamt.toFixed(1)}`;
}
/* function reset(){
    const Principle=document.getElementById('Principle');
    const Interest=document.getElementById('Interest');
    const Years=document.getElementById('Years');

    Principle.value='';
    Interest.value='';
    Years.value='';

    document.getElementById('firstamount').textContent='';
    document.getElementById('TotInt').textContent='';
    document.getElementById('TotAmt').textContent='';

} */
