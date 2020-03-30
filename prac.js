str="";
var op1="",op2="",op="",flag1=false,flag2=false;
function keyboard(){
    logic(event.key);
}
function mouse(){
    logic(this.getAttribute('data-value'));
}
function backspace(){
    var disp=document.getElementsByClassName('result');
    if(event.key=="Backspace" && op1!="" && op1!=0){
        console.log(event.key);
        op1=op1.substr(0,op1.length-1);
        disp[0].innerHTML=op1;
    }
}
function logic(value){
    var disp=document.getElementsByClassName('result');
    console.log(value);
    if(value=='AC'){
        disp[0].innerHTML=0;
        op1="",op2="",op="";
        flag1=false;flag2=false;
    }
    else if(value=="+/-"){
        if(op1!="" || op1!=0){
            if(op1>0) op1=-op1;
            else op1=(-1)*op1;
            disp[0].innerHTML=op1;
        }
    }
    else if(!isNaN(value) || value=='.' ||(flag2 && op2=="") || op1==""){
        if(!flag1) op1+=value;
        else op2=op2+=value;
        if(!flag1) disp[0].innerHTML=op1;
        else disp[0].innerHTML=op2;
    }else{
        if(flag2){
            op1=eval(op1+" "+op+" "+op2);
            op="";
            op2="";
        }
        op+=value;
        if(op.length>1 && op!="Enter"){
            disp[0].innerHTML="Error1";
            return;
        }
        flag1=true;
        flag2=true;
        if(op=="=" || op=="Enter"){
            flag2=false;
            op="";
            if(op1==Infinity) disp[0].innerHTML="Error";
            else disp[0].innerHTML=op1;
        }
    }
}
document.onkeypress=keyboard;
document.onkeydown=backspace;
var buttons=document.getElementsByClassName('button');
for(var i=0;i<buttons.length;i++){
    buttons[i].onclick=mouse;
}