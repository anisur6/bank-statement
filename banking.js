// //handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get deposit input box
    const depositinput = document.getElementById('deposit-amount');
    const depositamount = depositinput.value;
    const newdepositamount = parseFloat(depositamount);



    //get deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousdeposit = depositTotal.innerText;
    const previousdepositamount = parseFloat(previousdeposit);

    const newdeposit = newdepositamount + previousdepositamount;
    depositTotal.innerText = newdeposit;
    //or-- depositTotal.innerText = newdepositamount + previousdepositamount;



    //get balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousbalance = balanceTotal.innerText;
    const previousbalanceamount = parseFloat(previousbalance);

    const newdbalance = newdepositamount + previousbalanceamount;
    balanceTotal.innerText = newdbalance;

    //make input clear
    depositinput.value = ' ';

});

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {

    //get withdraw input box
    const withdrawinput = document.getElementById('withdraw-amount');
    const withdrawtext = withdrawinput.value;
    const withdrawamount = parseFloat(withdrawtext);

    //get withdraw total 
    const withdrawtotal = document.getElementById('withdraw-total');
    const withdrawtotaltext = withdrawtotal.innerText;
    const previouswithdraw = parseFloat(withdrawtotaltext);

    const newwithdrawtotal = withdrawamount + previouswithdraw;
    withdrawtotal.innerText = newwithdrawtotal;
    //update balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousbalance = balanceTotal.innerText;
    const previousbalanceamount = parseFloat(previousbalance);

    const newdbalancetotal = previousbalanceamount - withdrawamount;
    balanceTotal.innerText = newdbalancetotal;

    //make input clear
    withdrawinput.value = ' ';
})








