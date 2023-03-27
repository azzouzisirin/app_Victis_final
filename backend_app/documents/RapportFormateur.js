module.exports = ({ numSession,nomFormateur,raisonClient,nomFormation,DateFin}) => {
    const today = new Date();
return ` 
 
<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .pdfConcension h4{
	font-size: 24px;
	margin-bottom: 4px;
   margin-left:20px;

}
.pdfConcension h3{
	font-size: 28px;
	margin-bottom: 4px;

}
.pdfConcension table td{
	font-size: 21px;
}
.pdfConcension h1{
	font-size: 30px;

}
.blocUne{
   display: flex;
   margin-left:100px;
}
   .lefthaut{
       flex: 1;
       float:left;
       width:400px;
       margin-top:-20px;
  
   }
   .rigthhaut{
       flex: 1;
   }
.pdfConcension p{ 
	font-size: 22px;
	line-height: 20px;
   font-family: sans-serif;
   	font-weight: 500;
	margin-bottom: 4px;

}
.pdfConcension pre{ 
	font-size: 22px;
	line-height: 20px;
   font-family: sans-serif;
   	font-weight: 500;
	margin-bottom: 4px;

}
.pdfConcension span {
	font-size: 22px;
	margin-bottom: 3px;
	font-weight: 700;

}
.divCovocaHaut{
	height:130px;
   margin-top:-10px;
	margin-left:200px;
}
.divCovocaHaut p{
	line-height: 23px;

}
.pdfConcension table th{
	font-size: 22px;
}
    </style>
</head>
<body>
    <div  class="pdfConcension"> 
 
 
        <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="140px" style="margin-top:10px"/>
       
        <br/>
        <h1 style="color:#4976c5;text-align: center;margin-top:-10px;font-size:45px "> Rapport post-formation</h1>
   <div class="blocUne">
   <div class="lefthaut">
                          <pre>Session N°:  ${numSession}</pre>
   <pre style="margin-top:9px">Date :           ${DateFin} </pre>
   <pre style="margin-top:9px">Formateur :  ${nomFormateur}</pre> 
    </div>
   <div class="rigthhaut">
                          <pre>Société :     ${raisonClient}</pre>
   <pre style="margin-top:9px">Formation : ${nomFormation} </pre>
   </div>
   </div>
   <br/>
   <div class="blocUne" style="margin-top:30px">
   <div class="lefthaut" style="width:500px">
     <p>Tour de table effectué en amont de la formation :  </p>
     <p style="margin-top:9px"> Support fournit en fin de formation : </p>
     <p style="margin-top:9px">  Le programme de formation initial a été :</p>
   </div>
   <div class="rigthhaut">
   <pre> <label >Oui</label> <input type="checkbox" id="scales" name="scales" >        <label >Non</label> <input type="checkbox" id="scales" name="scales" >  </pre>
   <pre style="margin-top:9px"> <label >Oui</label> <input type="checkbox" id="scales" name="scales" >        <label >Non</label> <input type="checkbox" id="scales" name="scales" >  </pre>
   <pre style="margin-top:9px"> <label >Oui</label> <input type="checkbox" id="scales" name="scales" >        <label >Non</label> <input type="checkbox" id="scales" name="scales" >  </pre>
   </div>   </div>
   </div>
   <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/contunuRapport.png" height="820px" width="100%"/>

   <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied4.png" width="100%" height="120px" style="margin-top:5px"/>


</body>
</html>
    
    `;
};