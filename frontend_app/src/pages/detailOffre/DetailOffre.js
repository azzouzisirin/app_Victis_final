import React ,{ useEffect,useState } from 'react';
import './detailOffre.css'; 
import { Link ,useNavigate} from "react-router-dom";
import Select from 'react-select';
import toast, { Toaster } from 'react-hot-toast';
import {BASE_URL} from "../../helper"

import { DoneAll, Add,Delete } from '@material-ui/icons'

import axios from 'axios';
    
const DetailOffre = (props) => { 

  const { id} = props;

  const history = useNavigate();
const [Email , setEmail ]= useState("");
const [checkUn, setcheckUn] = useState(true)
const [checkClient, setcheckClient] = useState(true)

const [checkEng, setcheckEng] = useState()
const [ParcourCollectif, setParcourCollectif] = useState()

const [checkAuilleur, setcheckAuilleur] = useState()
const [listRaisonLocation, setlistRaisonLocation] = useState([])
const [listRaisonFinanceur, setlistRaisonFinanceur] = useState([])
const [codeVilleFormation,setcodeVilleFormation] = useState()
const [checkdivfraisRestau, setcheckdivfraisRestau] = useState(true)
const [fraisRestau, setfraisRestau] = useState("")

const [checkDeux, setcheckDeux] = useState(true)
const [checktrois, setchecktrois] = useState(true)
const [remaqueDuree , setremaqueDuree ]= useState("");

const [TypeDeplace , setTypeDeplace ]= useState("");
const [ RaisonSociale, setRaisonSociale ]= useState("");
const [EmailFormateur , setEmailFormateur ]= useState("");
const [adressFormateur , setadressFormateur ]= useState();
const [ calculTVA, setcalculTVA ]= useState();
const [ IdClient, setIdClient ]= useState("");
const [ IdFormation, setIdFormation ]= useState("");
const [ selectedOptionOpco,setselectedOptionOpco]=useState("")
const [ choixSelectAdress, setchoixSelectAdress ]= useState();
const [NomFormateur , setNomFormateur ]= useState("");
const [lieuFormation , setlieuFormation ]= useState("");
const [ RaisonSocialeOpco , setRaisonSocialeOpco ]= useState("");
 
const [ PrenomFormateur, setPrenomFormateur ]= useState("");
const [ TelFormateur, setTelFormateur ]= useState("");
const [ PrixClient, setPrixClient ]= useState();
const [ displyHeur, setdisplyHeur ]= useState("none");

const [Adresse_1Formateur , setAdresse_1Formateur ]= useState("");
const [Adresse_2Formateur , setAdresse_2Formateur ]= useState("");
const [DureeFormationJour , setDureeFormationJour ]= useState("");
const [DureeFormationHeur , setDureeFormationHeur ]= useState("");
const [divFinance , setDivFinance]= useState("none");
const [divDisplayMixte , setdivDisplayMixte]= useState("none");
const [divDisplayOpco , setdivDisplayOpco]= useState("none");

const [PrixTva , setPrixTva]= useState();

const [ visiblePrixClient, setvisiblePrixClient]= useState('none');

const [CodeVilleFormateur , setCodeVilleFormateur ]= useState("");
const user = JSON.parse(localStorage.getItem("user"));
const [selectedHeure, setselectedHeure] = useState();
const [heureformation, setheureformation] = useState();


  const [selectedTypeFormation, setselectedTypeFormation] = useState('');
    const [selectedRythmFormation, setselectedRythmFormation] = useState('En continu');

  const [visibleAuilleur, setvisibleAuilleur] = useState('none');

  const [DateDebut, setDateDebut] = useState();
  
  const [DateFin, setDateFin] = useState('');
  const [NbStage, setNbStage] = useState('');
  const [PrixJournal, setPrixJournal] = useState('');
  const [PrixTotal, setPrixTotal] = useState('');
  const [Tva, setTva] = useState('');
  const [PrixAvecTva, setPrixAvecTva] = useState('');
  const [TypeFinance, setTypeFinance] = useState('');
  const [DataFormateur, setDataFormateur] = useState([]);
  const [listBureau, setlistBureau] = useState([]);
  const [new_data, setNew_data] = useState({
    nom: "",
    numDossier: "",
    prix: ""
  }); 
  const [new_dataCalendrie, setnew_dataCalendrie] = useState({
    date: " ",
    nubHeur: " "
  }); 
  const [NumDevis, setNumDevis] =useState()
  const [numSession, setnumSession] = useState()

  const [persos, setPersos] = useState([]);
  const [calendrieFormation, setcalendrieFormation] = useState([]);
  const [Distance, setDistance] = useState();
  const [NomOpco, setNomOpco] = useState();
  const [idOpco, setidOpco] = useState();

  const [prenomOpco, setprenomOpco] = useState();
  const [telephoneOpco, settelephoneOpco] = useState();
  const [adressOpco, setadressOpco] = useState();
  const [CodeVilleOpco, setCodeVilleOpco] = useState();
  const [selectedOptionRaison, setSelectedOptionRaison] = useState(null);
  const [selectedOptionRaisonFinanceur, setselectedOptionRaisonFinanceur] = useState(null);
const [nomFormation,setnomFormation]= useState('');
const [typeformation,settypeformation]= useState('');
  const [selectedOptionUserFormateur, setselectedOptionUserFormateur] = useState(null);

  const [selectedOptionCateg, setSelectedOptionCateg] = useState();
  const [DesignationFormation, setDesignationFormation] = useState();
  const [typeFormation, settypeFormation] = useState();

  const [BaremKilometre, setBaremKilometre] = useState('');
  const [heurDebut, setheurDebut] = useState();
  const [heurFin, setheurFin] = useState();
  const [nomDossierRecent,setnomDossierRecent]= useState('');
  const [FraisDeplacement, setFraisDeplacement] = useState('');
  const [FraisDeplacementJourParJour, setFraisDeplacementJourParJour] = useState('');
  const [FraisDeplacementParJour, setFraisDeplacementParJour] = useState('');
  const [FraisDeplacementJour, setFraisDeplacementJour] = useState('');
  const [Hotel, setHotel] = useState('');
  const [Panier, setPanier] = useState('');
  const [TotalFrais, setTotalFrais] = useState('');
  const [TotalFraisJour, setTotalFraisJour] = useState('');
  const [TotalFraisParJour, setTotalFraisParJour] = useState('');
  const [TotalFraisJourParJour, setTotalFraisJourParJour] = useState('');
  const [IdFormateur, setIdFormateur] = useState('');
  const [listintitile, setlistintitile] = useState([]);
  const [dataCategClient, setdataCategClient] = useState([]);
  const [dataFormateur, setdataFormateur] = useState([]);

  const [dataUsernameClient, setdataUsernameClient] = useState([]);
  const [dataUsernameFinanceur, setdataUsernameFinanceur] = useState([]);

const [ Portable, setPortable ]= useState("");
const [Nom , setNom ]= useState("");
const [ Prenom, setPrenom ]= useState("");
const [ Tel, setTel ]= useState("");
const [Adresse_1 , setAdresse_1 ]= useState("");
const [Adresse_2 , setAdresse_2 ]= useState("");
const [CodeVille , setCodeVille ]= useState("");
const [RaisonLocation, setRaisonLocation] = useState([]);

const [typeBureau, settypeBureau] = useState([]);
const [nomDossier,setnomDossier]=useState()
const [ TitreFormateur, setTitreFormateur ]= useState("");
const [assujtTvFormateura , setassujtTvFormateura ]= useState("");
const [ fraisDeplaccementFormateur, setfraisDeplaccementFormateur ]= useState("");
const [ fraisFormateur, setfraisFormateur ]= useState([]);
const [ tvaFormateur, setTvFormateur ]= useState();

const [dataFormationModule, setDataFormationModule] = useState([]);

const [divfraisRestau, setdivfraisRestau] = useState('visible');
const [chekInter, setchekInter] = useState('none');
const [chekdiscontinu, setchekdiscontinu] = useState('none');
const [Remarque,setRemarque]=useState("")

const [PetitVisibledejenue, setPetitVisibledejenue] = useState('visible');
const [divDeplacSemain, setdivDeplacSemain] = useState('none');
const [divDeplacJour, setdivDeplacJour] = useState('none');
const [Petitdejenue, setPetitdejenue] = useState(15);
const [dejenue, setdejenue] = useState(15);
const [diner, setdiner] = useState(10);
  const [Visibledejenue, setVisibledejenue] = useState('visible');
  const [Visiblediner, setVisiblediner] = useState('visible');
useEffect(() => {
  if (!user) history.push("/");
const fetchData = async () => { 
const res = await axios.get(`${BASE_URL}/session/`+id);
setnomDossierRecent(res.data.nomDossie)
setnumSession(res.data.numSession)
setNumDevis(res.data.numDevis)

};
fetchData();

}, []);
  useEffect(() => {
    const fetchData = async () => {
      try{  
      const res = await axios.get(`${BASE_URL}/offre/${id}`);
      setRemarque(res.data.remarque) 
      setselectedHeure(res.data.selectedHeure)
      setheureformation(res.data.HeureFormation)
      setcodeVilleFormation(res.data.codeVilleFormation)
      setlieuFormation(res.data.lieuFormation)
      setParcourCollectif(res.data.ParcourCollectif)
      setDesignationFormation(res.data.designiationFormation)
      setnomFormation(res.data.designiationFormation)
      settypeFormation(res.data.typeFormation)
      settypeformation(res.data.typeFormation)

      setselectedRythmFormation(res.data.rythme) 
      setidOpco(res.data.idopco)
      setselectedTypeFormation(res.data.TypeFormation)
      setDureeFormationJour(res.data.DureeJour);
      setDureeFormationHeur(res.data.DureeHeur);
      setIdClient(res.data.IdClient)
      setIdFormation(res.data.IdFormation)
      setDateDebut(res.data.DateDebut)
      setDateFin(res.data.DateFin) 
      setNbStage(res.data.NbStage) 
      setPrixJournal(res.data.PrixJournal)
      setTva(res.data.Tva)
      setHotel(res.data.hotel) 
      setPetitdejenue(res.data.petitDej)
      setdejenue(res.data.dejune)
      setdiner(res.data.diner)
      setPersos(res.data.finance)
      setcalendrieFormation(res.data.CalendrieFormation)
      setPrixClient(res.data.PrixClient)
      setTypeDeplace(res.data.typeDeplacement)
      setTypeFinance(res.data.TypeFinance) 
      setfraisRestau(res.data.fraisRestau)
      setcheckEng(res.data.checkEngin)
      setcheckAuilleur(res.data.checkLocal)
      setRaisonLocation(res.data.RasionLocation)
      settypeBureau(res.data.typeLocation)
      setDistance(res.data.TranspDistance)
      setBaremKilometre(res.data.BaremKilometre)
      setHotel(res.data.hotel)
      setIdFormateur(res.data.idFormateur)
    }catch(err){
      console.log(err);
    }
  }
  fetchData();
 
  }, []);


  useEffect(() => {
    fetch(BASE_URL+"/client")
      .then((res) => res.json())
      .then((data) => {
        const userData = data.map((item) => ({
          label: item,
          value: item
        }));
        setdataCategClient(userData);
      });
  }, []); 
  useEffect(() => {
    fetch(BASE_URL+"/financeur")
      .then((res) => res.json())
      .then((data) => {
        const userData = data.map((item) => ({
          label: item.raisonSocial,
          value: item.raisonSocial
        }));
        setlistRaisonFinanceur(userData);
      });
  }, []); 
  useEffect(() => {
    fetch(BASE_URL+"/formateur")
      .then((res) => res.json())
      .then((data) => {
        const userData = data.map((item) => ({
          label: item.username,
          value: item.username
        }));
        setdataFormateur(userData);
      });
  }, []); 

  useEffect(() => {
if(IdClient){
  const fetchclient = async () => {
    try{ 
      const res = await axios.get(BASE_URL+"/client/"+IdClient)
      setEmail(res.data.email); 
      setPortable(res.data.portable); 
      setNom(res.data.nom); 
      setRaisonSociale(res.data.raisonSociale)
      setPrenom(res.data.prenom); 
      setTel(res.data.tel); 
      setAdresse_1(res.data.adresse_1); 
      setAdresse_2(res.data.adresse_2); 
      setCodeVille(res.data.codeVille); 
      setIdClient(res.data._id);
   
   
    }catch(err){
      console.log(err);
    }
  }
  fetchclient()
}
  

  }, [IdClient]);
  useEffect(() => {
if(selectedOptionRaison&&selectedOptionCateg){
    const fetchclient = async () => {
    try{ 
      const res = await axios.get(BASE_URL+"/client/findByRaisonAndNom/"+selectedOptionRaison.value+"/"+selectedOptionCateg.value)
      setEmail(res.data.email); 
      setPortable(res.data.portable); 
      setNom(res.data.nom); 
      setRaisonSociale(res.data.raisonSociale)
      setPrenom(res.data.prenom); 
      setTel(res.data.tel); 
      setAdresse_1(res.data.adresse_1); 
      setAdresse_2(res.data.adresse_2); 
      setCodeVille(res.data.codeVille); 
      setIdClient(res.data._id);
   
   
    }catch(err){
      console.log(err);
    }
  }
  fetchclient()
}
  }, [selectedOptionRaison,selectedOptionCateg]);

  useEffect(() => {
    if(selectedOptionRaisonFinanceur&&selectedOptionOpco){
        const fetchclient = async () => {
        try{ 
          const res = await axios.get(BASE_URL+"/financeur/findByRaisonAndNom/"+selectedOptionRaisonFinanceur.value+"/"+selectedOptionOpco.value)
          setRaisonSocialeOpco(res.data.raisonSocial)
      setNomOpco(res.data.nom)
      setprenomOpco(res.data.prenom)
      settelephoneOpco(res.data.tel)
      setadressOpco(res.data.adresse_1)
      setCodeVilleOpco(res.data.codeVille)
      setidOpco(res.data._id)
       
       
        }catch(err){
          console.log(err);
        }
      }
      fetchclient()
    }
      }, [selectedOptionRaisonFinanceur,selectedOptionOpco]);
  useEffect(() => {
    if(DesignationFormation && typeFormation){


        const fetchclient = async () => {
        try{ 
          const res = await axios.get(BASE_URL+"/formation/findByCategAndNom/"+DesignationFormation.value+"/"+typeFormation.value)
          setIdFormation(res.data._id); 
          setDureeFormationJour(res.data.DureeJour)
          setDureeFormationHeur(res.data.DureeHeur)
        
          settypeformation(res.data.type)
          setnomFormation(res.data.designation)
       
        }catch(err){
          console.log(err);
        }
      }
      fetchclient()
    }
      }, [DesignationFormation,typeFormation]);
     
 



  useEffect(() => {
      if(DesignationFormation){
       fetch(BASE_URL+"/formation/findByCateg/"+DesignationFormation.value)
       .then((res) => res.json())
       .then((data) => {
         const userData = data.map((item) => ({
           label: item.type,
           value: item.type
         })); 
         setDataFormationModule(userData);
       });
      }
    

  }, [DesignationFormation]);

  useEffect(() => {

   setcalculTVA(Tva*PrixTotal/100)

  }, [PrixTotal,Tva]);


  


  useEffect(() => {
if(IdFormateur){
    const fetchFormateur = async () => {
      try{ 
        const res = await axios.get(BASE_URL+"/formateur/"+IdFormateur)
        setEmailFormateur(res.data.email); 
        setTitreFormateur(res.data.titre); 
        setNomFormateur(res.data.nom); 
        setPrenomFormateur(res.data.prenom); 
        setTelFormateur(res.data.tel); 
        setAdresse_1Formateur(res.data.adresse_1); 
        setAdresse_2Formateur(res.data.adresse_2); 
        setCodeVilleFormateur(res.data.codeVille); 
        setIdFormateur(res.data._id)
        setassujtTvFormateura(res.data.assujtTva)
        setTvFormateur(res.data.tva)
        setfraisDeplaccementFormateur(res.data.fraisDeplaccement)
        setfraisFormateur(res.data.frais)

      }catch(err){
        console.log(err);
      }}
  

      fetchFormateur()
    }
  }, [IdFormateur]);

 

    
    useEffect(() => {
      if(selectedOptionUserFormateur){

      
      const fetchData = async () => {
     
        try{ 
          const res = await axios.get(BASE_URL+"/formateur/findbyusername/"+selectedOptionUserFormateur.value)
          setDataFormateur(res.data)
        }catch(err){
          console.log(err);
        }
      }
  
      fetchData();
  
      }
 
   },[selectedOptionUserFormateur])
 

   useEffect(()=>{
    if(DataFormateur.length==1){
      setEmailFormateur(DataFormateur[0].email); 
      setTitreFormateur(DataFormateur[0].titre); 
      setNomFormateur(DataFormateur[0].nom); 
      setPrenomFormateur(DataFormateur[0].prenom); 
      setTelFormateur(DataFormateur[0].tel); 
      setAdresse_1Formateur(DataFormateur[0].adresse_1); 
      setAdresse_2Formateur(DataFormateur[0].adresse_2); 
      setCodeVilleFormateur(DataFormateur[0].codeVille); 
      setIdFormateur(DataFormateur[0]._id)
      setassujtTvFormateura(DataFormateur[0].assujtTva)
      setTvFormateur(DataFormateur[0].tva)
      setfraisDeplaccementFormateur(DataFormateur[0].fraisDeplaccement)
      setfraisFormateur(DataFormateur[0].frais)
    }
     if(DataFormateur.length>1)
     { 
      setchoixSelectAdress(DataFormateur)
     }
   },[DataFormateur])

   const addOffre = async (e) => {
    e.preventDefault();
  

   try{

   


   
    
     
         const config = {  
          headers: { 
            "Content-type": "application/json",
          },
        };  
const res3=await  axios.put(BASE_URL+"/session/"+id,   {
  nomDossie:nomDossier,
  numDevis:NumDevis,
  numSession:numSession,
})
var res2
if(nomDossierRecent!=nomDossier){
  res2 = await axios.post(BASE_URL+"/rename", {
   recendfolder:nomDossierRecent,
   newfolder:nomDossier,
   pathDossier:user.shemaDossie,
 })
}

        const res = await axios.put(BASE_URL+"/offre/"+id, {
          IdClient: IdClient, 
          remarque:Remarque,
          selectedHeure:selectedHeure,
          HeureFormation:heureformation,
          lieuFormation :lieuFormation,
          codeVilleFormation:codeVilleFormation,
          PrixTotal:PrixTotal,
          idopco:idOpco,
          ParcourCollectif:ParcourCollectif,
          PrixTVA  :calculTVA,
          prixNet :PrixAvecTva,
          typeFormation:typeformation,
          designiationFormation:nomFormation,
          rythme:selectedRythmFormation,
          numSession:numSession,
          IdFormation: IdFormation,
          DureeJour:DureeFormationJour,
          DureeHeur:DureeFormationHeur,
          TypeFormation: selectedTypeFormation ,
          DateDebut:  DateDebut,
          DateFin:DateFin,
          NbStage: NbStage,
          PrixJournal:PrixJournal,
          petitDej:Petitdejenue,
          dejune:dejenue,
          diner:diner,
          typeDeplacement:TypeDeplace,
          Tva:Tva,
          TypeFinance:TypeFinance,
          PrixClient:PrixClient,
          TranspDistance:Distance,
          BaremKilometre:BaremKilometre,
             hotel:Hotel,
          fraisRestau:fraisRestau,
          checkLocal:checkAuilleur,
          checkEngin:checkEng, 
          RasionLocation:RaisonLocation  ,
          typeLocation  :typeBureau,              
          finance:persos, 
          CalendrieFormation:calendrieFormation,
          idFormateur:IdFormateur
      }  ,
      
      config
    );
   
    toast.success('Offre bien Enregistre !')
    }catch(err){
      toast.error(err)
      console.log(err);
    }
  }


   useEffect(()=>{
if(NumDevis||RaisonSociale||selectedTypeFormation||nomFormation||typeformation){

    setnomDossier(NumDevis+"_"+RaisonSociale+"_"+nomFormation+"_"+typeformation+"_"+selectedTypeFormation)
   if(NumDevis) setnumSession("SF"+NumDevis.substring(0,2)+"-"+NumDevis.substring(2,7))
}
   },[NumDevis,RaisonSociale,selectedTypeFormation,nomFormation,typeformation]) 
      useEffect(() => { 
        fetch(BASE_URL+"/formation")
        .then((res) => res.json())
        .then((data) => {
          const userData = data.map((item) => ({
            label: item,
            value: item
          })); 
          setlistintitile(userData);
        });


  }, []);
  

  useEffect(() => { 
    fetch(BASE_URL+"/location")
    .then((res) => res.json())
    .then((data) => {
      const userData = data.map((item) => ({
        label: item,
        value: item
      })); 
      setlistRaisonLocation(userData);
    });


}, []);


  
  useEffect(() => {
if(idOpco){
    const fetchData = async () => {
      try{ 
      const res = await axios.get(`${BASE_URL}/financeur/`+idOpco);
       setRaisonSocialeOpco(res.data.raisonSocial)
      setNomOpco(res.data.nom)
      setprenomOpco(res.data.prenom)
      settelephoneOpco(res.data.tel)
      setadressOpco(res.data.adresse_1)
      setCodeVilleOpco(res.data.codeVille)

    }catch(err){
      console.log(err);
    }
  }
     fetchData();
}
  }, [idOpco]);


 

 

  const handleChangeAsressFormateur = event => {
  
    setadressFormateur(event.target.value); 
    const newList = choixSelectAdress.filter((item) => item.adresse_1 == event.target.value);
    setEmailFormateur(newList[0].email); 
    setTitreFormateur(newList[0].titre); 
    setNomFormateur(newList[0].nom); 
    setPrenomFormateur(newList[0].prenom); 
    setTelFormateur(newList[0].tel); 
    setAdresse_1Formateur(newList[0].adresse_1); 
    setAdresse_2Formateur(newList[0].adresse_2); 
    setCodeVilleFormateur(newList[0].codeVille); 
    setIdFormateur(newList[0]._id)
    setassujtTvFormateura(newList[0].assujtTva)
    setTvFormateur(newList[0].tva)
    setfraisDeplaccementFormateur(newList[0].fraisDeplaccement)
    setfraisFormateur(newList[0].frais)
  };

  const handleChangeType = event => {
    setselectedTypeFormation(event.target.value);
  };
  const handleChangeHeur = event => {
    setselectedHeure(event.target.value);
    if(event.target.value=="Autre"){
      setdisplyHeur("flex")
    }
    if(event.target.value=="Cours du jour"){
      setdisplyHeur("none")
       setheureformation("de 9h00 à 12h00 et de 13h00 à 17h00")
    }
    if(event.target.value=="Cours du soir"){
      setdisplyHeur("none")
       setheureformation("de 17h00 à 20h30 ")
    }
  };

  useEffect(()=>{
    if(selectedHeure=="Autre"){
      setdisplyHeur("flex")
setheurDebut(heureformation.substring(3, 5)+":"+heureformation.substring(6, 8))
setheurFin(heureformation.substring(11, 13)+":"+heureformation.substring(14, 16))

  
    }
    },[selectedHeure])
  useEffect(()=>{
  if(heurDebut&&heurFin){
    setheureformation("de "+ heurDebut.substring(0,2)+" h "+heurDebut.substring(3,5)+" à "+ heurFin.substring(0,2)+" h "+heurFin.substring(3,5))
  }else{
    setheureformation("")

  }
  },[heurDebut,heurFin])
   const handleChangeRythm= event => {
    setselectedRythmFormation(event.target.value);
   
  };
  useEffect(()=>{
    if(selectedRythmFormation=="En continu"){
      setchekdiscontinu('none')
      setcalendrieFormation([])
   }
   if(selectedRythmFormation=="En discontinu"){
      setchekdiscontinu('inline')
    
   } 
  },[selectedRythmFormation])
  useEffect(()=>{
           if(selectedTypeFormation=="En inter-enterprise"){
            setchekInter("inline")          
            setvisibleAuilleur('none')
          
          }
            else {
              setchekInter("none")    
              setvisibleAuilleur('none')


            }
  },[selectedTypeFormation])
  const handleChangeTva = event => {
    setTva(event.target.value);
    

  };

  const handleChangetypeFinance = event => {
    setTypeFinance(event.target.value);

 
  };
  const handleChangeDeplace = event => {
    setTypeDeplace(event.target.value);
  
 
  };
  useEffect(() => {
 
    if(TypeDeplace=="deplacSemaine"){
      setdivDeplacSemain('inline')
      setdivDeplacJour("none")


    }
    if (TypeDeplace=="deplaceJour"){
      setdivDeplacSemain("none")
      setdivDeplacJour('inline')

    }
 
  }, [TypeDeplace]); 
  useEffect(() => {
 
    if(TypeFinance=="Client"){
      setDivFinance('none')
    }
    if (TypeFinance=="Mixte"){
      setDivFinance("inline")
      setdivDisplayMixte('block')
      setdivDisplayOpco("none")
      
      setidOpco("")

    }
    if (TypeFinance=="Opco"||TypeFinance=="Autre"){
      setDivFinance("inline")
      setdivDisplayMixte('none')
        setcheckClient(false)
        setPrixClient(0)
        setPersos([])
      setdivDisplayOpco("inline")
    }
  }, [TypeFinance]); 
  useEffect(() => {
 
    if (!user) history.push("/");
  }, [history]); 
  useEffect(() => {
    var t =Number(PrixJournal)
    var k=Number(DureeFormationJour)
    var s=t*k

    setPrixTotal(s)
  }, [PrixJournal,DureeFormationJour]);

  useEffect(() => {
    var t =Number(PrixTotal)

    if (Tva=== '20'){
      var i =t*0.2
    setPrixTva(i); 
    }
    if (Tva=== '10'){
      var i =t*0.1
          setPrixTva(i);
    }
    if (Tva=== '5.5'){
      var i =t*0.055
    setPrixTva(i);
 
    }
    if (Tva=== '0'){
    setPrixTva(PrixTotal);
     
    }
  
   
}, [Tva,PrixTotal]);

useEffect(() => {
  var t =Number(PrixTotal)

setPrixAvecTva(PrixTva+PrixTotal)
 
}, [PrixTva]);
useEffect(() => {
    var i =PrixTotal*0.2
    setPrixTva(i);  
}, [PrixTotal]);

useEffect(() => {
  var t =Number(Distance)
  var k=Number(BaremKilometre)
  var s=t*2*k
setFraisDeplacement(s.toFixed(2))
}, [Distance,BaremKilometre]);



useEffect(() => {
  var t =Number(Distance)
  var k=Number(BaremKilometre)
  var s=t*2*k*DureeFormationJour

setFraisDeplacementParJour(s.toFixed(2))
}, [Distance,BaremKilometre,DureeFormationJour]);
useEffect(() => {
  var t =Number(FraisDeplacementParJour)
  var k=Number(DureeFormationJour)
  var s =t/k;
  setFraisDeplacementJourParJour(s.toFixed(2))
  }, [FraisDeplacementParJour,DureeFormationJour]);
useEffect(() => {
  var t =Number(FraisDeplacement)
  var k=Number(DureeFormationJour)
  var s =t/k;

  setFraisDeplacementJour(s.toFixed(2))
  }, [FraisDeplacement,DureeFormationJour]);
  useEffect(() => {
    var t =Number(dejenue)
    var k=Number(Petitdejenue)
    var j=Number(diner)


    var s =t+k+j;

    setPanier(s.toFixed(2))
    }, [dejenue,Petitdejenue,diner]);
  
  useEffect(() => {
    const a=Number(FraisDeplacementJour)
    const b=Number(Hotel)
   const c=Number(Panier)
    const s =a+b+c;
 

    setTotalFrais(Math.floor(s))
    }, [FraisDeplacementJour,Hotel,Panier]);

    useEffect(() => {
      if(selectedTypeFormation=="En intra-entreprise"){
        setlieuFormation(Adresse_1)
       

        setcodeVilleFormation(CodeVille)
      }
 
      if(selectedTypeFormation=="En distanciel"){
        setlieuFormation("à distance")

      }

      }, [selectedTypeFormation,Adresse_1]);
  
      useEffect(()=>{

      },[typeBureau])
    useEffect(() => {
      const a=Number(FraisDeplacementJourParJour)
     const c=Number(fraisRestau)
      const s =a+c;
      setTotalFraisParJour(Math.floor(s))
      }, [FraisDeplacementJourParJour,fraisRestau]); 

      useEffect(() => {
      
        if(selectedOptionRaisonFinanceur){
          fetch(BASE_URL+"/financeur/findByRaison/"+selectedOptionRaisonFinanceur.value)
          .then((res) => res.json())
          .then((data) => { 
            const userData = data.map((item) => ({
              label: item.username,
              value: item.username
            })); 

            setdataUsernameFinanceur(userData);
          });
        } 

        }, [selectedOptionRaisonFinanceur]); 

    useEffect(() => {
      const s =PrixJournal-TotalFrais;
      setTotalFraisJour(s)
      }, [TotalFrais,PrixJournal]);
      useEffect(() => {
        if(RaisonLocation){
        const fetchData = async () => {
          try{ 
          const res = await axios.get(`${BASE_URL}/location/getByRaison/`+RaisonLocation.value);
          setlistBureau(res.data.frais)
          setlieuFormation(res.data.adresse_1)
          setcodeVilleFormation(res.data.codeVille)
        }catch(err){
          console.log(err);
        }
      }
         fetchData();}
        }, [RaisonLocation]);
      useEffect(() => {
        const s =DureeFormationJour*7;
        setDureeFormationHeur(s)
        }, [DureeFormationJour]);
      useEffect(() => {
        const s =PrixJournal-TotalFraisParJour;
        setTotalFraisJourParJour(Math.floor(s))
        }, [TotalFraisParJour,PrixJournal]);
       useEffect(()=>{
      if(checkAuilleur==true){
       setvisibleAuilleur('flex')
      }else{
        setvisibleAuilleur("none")

      }
       },[checkAuilleur])
      
      const handleChangeRestau = (event) => { 
        if (event.target.checked) {
          setdivfraisRestau("visible")
          setcheckdivfraisRestau(true)
        } else {
          setdivfraisRestau("hidden")
          setcheckdivfraisRestau(false)
        }
      }; 
      const handleChangePetitDej = (event) => { 
        if (event.target.checked) {
          setPetitVisibledejenue("visible")
          setcheckUn(true)
          setPetitdejenue(15)
        } else {
          setPetitVisibledejenue("hidden")
          setcheckUn(false)
          setPetitdejenue(0)
        }
      }; 
  
      const handleParcouColectif = (event) => { 
        if (event.target.checked) {
          setParcourCollectif(true)
       
        } else {
          setParcourCollectif(false)
        }
      }; 
    

      const handleClient = (event) => { 
        if (event.target.checked) {
       setvisiblePrixClient('flex')
       setcheckClient(true)

        } else {
         setcheckClient(false)
          setvisiblePrixClient('none')
          setPrixClient(0)
        }
      }; 
      const handleChangeDej = (event) => { 
        if (event.target.checked) {
          setVisibledejenue("visible")
          setdejenue(15)
          setcheckDeux(true)

        } else {
          setVisibledejenue("hidden")
          setdejenue(0)
          setcheckDeux(false)

        }
      }; 
      const handleChangeVisiblediner = (event) => { 
        if (event.target.checked) {
          setchecktrois(true)
          setdiner(10)
          setVisiblediner("visible")
        } else {
          setchecktrois(false)
          setdiner(0)
          setVisiblediner("hidden")
        }
      }; 
      const addhandlerCalendrie = e => { 
        e.preventDefault();
        setcalendrieFormation([...calendrieFormation, new_dataCalendrie]);
        setnew_dataCalendrie({  date: " ", nubHeur:" " });
      };

     const deleteCalendrie = (date) => {
      const newList = calendrieFormation.filter((item) => item.date !== date);

      setcalendrieFormation(newList);  
     } 
    
      const addhandler = e => {
        e.preventDefault();
        setPersos([...persos, new_data]);
        setNew_data({ nom: "", numDossier: "", prix:"" });
      };

     const deleteItem = (nom) => {
      const newList = persos.filter((item) => item.nom !== nom);

      setPersos(newList);  
     }
     useEffect(()=>{
         if(PrixClient>0){
          setvisiblePrixClient("flex")
          setcheckClient(true)
         }
     },[PrixClient])
     useEffect(() => {
     if(selectedOptionRaison){
      fetch(BASE_URL+"/client/findByRaison/"+selectedOptionRaison.value)
      .then((res) => res.json())
      .then((data) => {
        const userData = data.map((item) => ({
          label: item.username,
          value: item.username
        })); 
        setdataUsernameClient(userData);
      });
    }

      }, [selectedOptionRaison]);
    const  onChangeValue=(event)=> {
        if(event.target.value=="enginnering"){
setcheckEng(true)
setcheckAuilleur(false)
setcodeVilleFormation("37000 Tours")
setlieuFormation("8 rue Honoré de Balzac ")
        } 
        if(event.target.value=="ailleur"){
          setcheckEng(false)
          setcheckAuilleur(true)
        }
      }
      useEffect(() => {
       if(DateDebut && DateFin && selectedRythmFormation){
        var date1 = new Date(DateDebut); 
        var date2 = new Date(DateFin);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days =( Difference_In_Time / (1000 * 3600 * 24))+1 ;
        if(DureeFormationJour!=(Difference_In_Days ) ){

        if(selectedRythmFormation=='En continu'){
          setremaqueDuree("date de fin n'est pas compatible")
        }else{ 
          setremaqueDuree("")

        }
      }
      
      else if(DureeFormationJour==Difference_In_Days  ){
        setremaqueDuree("")

      }
      
       
    }
         }, [DateDebut,DateFin,selectedRythmFormation]);
   
       
    return (
      <div > 

             <div style={{float:"right",marginRight:"30px"}}>
             <DoneAll style={{fontSize: "40px", color:"#231ab4",marginRight:"15px",cursor:"grab"}} onClick={addOffre } />
           </div>
  

        <div className='containerbox '>

    <div className='Container ' style={{borderColor:"#DDDCDB"}}>
             
      <h2 style={{textAlign:"center",color:"#DDDCDB"}}>Client</h2>
    <form >
    <div className='divRecherche'>  
       
      
      <Select  
      className='divRechercheSelect'
        defaultValue={selectedOptionRaison}
        onChange={setSelectedOptionRaison}
        placeholder='Raison sociale'
        options={dataCategClient}
      />
         
         <Select 
            className='divRechercheSelect'
        defaultValue={selectedOptionCateg}
        onChange={setSelectedOptionCateg}
        placeholder='Nom_prenom'
        options={dataUsernameClient}
      />
      
 
    </div>

    <div className='divInfo'> 
    <div className='lebelText'>
 
           <label className='textLabel' > Nom :</label>
           <p> {Nom}</p>
    </div>
   <div className='lebelText' >  <label className='textLabel' > Prénom :</label>
      <p>{Prenom}</p>
      </div>
      <div className='lebelText'>  <label className='textLabel' > Téléphone :</label>
     <p>{Tel}</p></div>
      <div className='lebelText'>  <label className='textLabel' > Portable :</label>
      <p> {Portable}</p></div>
      <div className='lebelText'>  <label className='textLabel' >Mail  :</label>
      <p> {Email}</p></div>
      <div className='lebelText'>  <label className='textLabel' >Adresse 1  :</label>
      <p>{Adresse_1}</p></div>
      <div className='lebelText'>  <label className='textLabel' > Adresse 2 :</label>
      <p>{Adresse_2}</p>
      
  
      </div>
      <div className='lebelText'>  <label className='textLabel' >Code postal et ville :</label>
      <p>{CodeVille}</p></div>
      </div>
    </form>
    </div>
<div className='Container ' style={{borderColor:"#C67D6B", overflow: "auto"}}>
                   <h2 style={{textAlign:"center",color:"#C67D6B"}}>  Formation </h2>
      <br/>

    <div className='lebelText'>
        <label className='textLabel'  >Designation </label>
 <div  style={{marginRight:"10px",width:"230px"}}> 
        <Select  
          
        defaultValue={DesignationFormation}
        placeholder={DesignationFormation}
        onChange={setDesignationFormation}
        options={listintitile}
      />
     </div>
    </div>   
    <div className='lebelText'>
        <label className='textLabel'  >Module  </label>
        <div  style={{marginRight:"10px",width:"230px"}}> 
        <Select  
          
          defaultValue={typeFormation}
          placeholder={typeFormation}
          onChange={settypeFormation}
          options={dataFormationModule}
        />
     </div>
  
    </div>  
    <div className='lebelText'>  <label className='textLabel' >Durée (en jours) </label>
    <input type="text" onChange={e => {setDureeFormationJour(e.target.value)} } defaultValue={DureeFormationJour}  name="" className="lebelZonText"/></div>

    <div className='lebelText'>   <label className='textLabel' >Durée (en heures) </label>
    <input type="text" value={DureeFormationHeur}  name="" className="lebelZonText"/></div>
   
    <div className='lebelText'> 
      <label className='textLabel'  >Modalités de l'organisme</label>
    <select value={selectedTypeFormation}  style={{width:"230px"}}  onChange={handleChangeType} >
    <option value="En intra-entreprise">En intra-entreprise</option>
    <option value="En inter-enterprise">En inter-enterprise </option>
    <option value="En distanciel">En distanciel </option>
    </select></div>
    <div className='divdinner' style={{display:chekInter }} onChange={onChangeValue}>  
     <div className='divflex'   >
   <div style={{marginLeft:"-70px"}} >    <input  className='divchekbox' type="radio"  checked={checkEng} value="enginnering"  /></div>
   <div className='divflexlabel' style={{width:"300px"}}> <label  > Engineering concept</label></div>

   </div>
  <div className='divflex' >
  <div style={{marginLeft:"-70px"}}>  <input type="radio" className='divchekbox'  checked={checkAuilleur} value='ailleur' /></div>
  <div className='divflexlabel'style={{width:"250px"}}>  <label  > Ailleurs</label></div> 
  <div style={{display:visibleAuilleur}}> 
  <div> 
  <Select  
      style={{width:"150px"}}
         defaultValue={RaisonLocation}
         onChange={setRaisonLocation}
         placeholder='Raison sociale'
         options={listRaisonLocation}
       />
          </div>
    

  <div> <select style={{width:"150px"}} value={typeBureau} onChange={e => {settypeBureau(e.target.value)} }>   
            { listBureau.map((option)=>{
    return(   <option>{option.burau} </option> )
       })}</select>
       
</div>
</div>
  </div>
 
      </div>
  <div className='lebelText'>   <label className='textLabel' > Nombre de stagaires</label>
      <input type="text"  name=""onChange={e => {setNbStage(e.target.value)} } defaultValue={NbStage} className="lebelZonText"/>
      </div>
      <div className='divflex'   >
   <div style={{marginLeft:"-70px"}} >    <input  className='divchekbox' type="checkbox"  checked={ParcourCollectif}    onChange={handleParcouColectif}/></div>
   <div className='divflexlabel' style={{width:"300px"}}> <label  >Parcours collectif</label></div>

   </div>
   
      <div className='lebelText'> 
      <label className='textLabel'  >Rythme de formation :</label>
    <select value={selectedRythmFormation}  style={{width:"230px"}}  onChange={handleChangeRythm} >
    <option value="En continu">En continu</option>
    <option value="En discontinu">En discontinu </option>
    </select></div>
<div  >
   <div className='lebelText'>  <label className='textLabel' >Date de début :</label>
    <input type="Date" onChange={e => {setDateDebut(e.target.value)} } defaultValue={DateDebut}  name="" className="lebelZonText"/></div>
    <div className='lebelText'>   <label className='textLabel' >Date de fin : </label>
    <input type="Date" onChange={e => {setDateFin(e.target.value)} } defaultValue={DateFin}  name="" className="lebelZonText"/></div>
    <p style={{color:"red",marginLeft:'10px',marginTop:"-10px"}}>   {remaqueDuree}</p>
    <div className='lebelText'> 
      <label className='textLabel'  >Horaires de formation :</label>
    <select value={selectedHeure}  style={{width:"230px"}}  onChange={handleChangeHeur} >
    <option value="Cours du jour">Cours du jour</option>
    <option value="Cours du soir">Cours du soir </option>
    <option value="Autre">Autre </option>
    </select></div> 
    <div style={{height:'30px',display:displyHeur}}>
      <div style={{flex:"50%"}}>
      <label className='textLabel'  >   date debut </label><input type="time" style={{width:'125px',fontSize:'18px',marginLeft:'20px'}} onChange={e => {setheurDebut(e.target.value)} } defaultValue={heurDebut} /> </div>
      <div style={{flex:"50%"}}> <label className='textLabel'  > date fin</label> <input type="time" style={{width:'125px',fontSize:'18px',marginLeft:'20px'}} onChange={e => {setheurFin(e.target.value)} } defaultValue={heurFin} /> </div>

      
       </div>
</div>

<div style={{display:chekdiscontinu}} className='tabledecore'> 



                <table >
        <thead>
          <tr> 
            <th>Jour</th>
            <th>Date</th>
            <th>Nombre d'heure</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {calendrieFormation.map((p, index) => (
            <tr key={index}>
              <td> {index+1}  </td>
              <td>{p.date}</td>
              <td>{p.nubHeur}</td>
              <td> 
              <Link  onClick={() => deleteCalendrie(p.date)}>   <Delete /></Link>
 

              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
     <td>
           {calendrieFormation.length+1} 
                     </td>
            <td>   <input
              type="Date"
              className="lebelZonText"
             
              onChange={e => setnew_dataCalendrie({ ...new_dataCalendrie, date: e.target.value })}
            /></td>

            <td>  <input
              type="Numbre"
              className="lebelZonText"
              onChange={e => setnew_dataCalendrie({ ...new_dataCalendrie, nubHeur: e.target.value })}
            /></td>
            <td>       <button onClick={addhandlerCalendrie} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Add/></button></td>
          </tr>
        </tfoot>
      </table>
</div>
    </div>

   
    <div className='Container ' style={{borderColor:"#E3479A"}}>
                   <h2 style={{textAlign:"center",color:"#E3479A"}}> Conditions Commerciales </h2>
      <br/><br/>
      <div className='divforthree'>  
      <div className='divunforthree'>  <label  >N° Devis </label></div>
      <div className='divdeuxforthree'> <input type="text" className='divforthree' onChange={e => {setNumDevis(e.target.value)} } style={{width:"170px"}} value={NumDevis} name=""/> </div>
      <div>  <p > </p></div>
      </div> 
      <br/> 
    <div className='divforthree'> 
     <div className='divunforthree'> <label  >Prix journaller HT: </label></div>
    <div className='divdeuxforthree'>  <input type="text" className='divforthree' onChange={e => {setPrixJournal(e.target.value)} } style={{width:"170px"}} defaultValue={PrixJournal} name=""/>    </div>
    <div className='divthreeforthree'>   <p >€ </p></div>
      </div> 
      <br/>
    <div className='divforthree'>
       <div className='divunforthree'>  <label  >Prix total HT :</label> </div>
    <div className='divdeuxforthree'>   <input type="text"className='divforthree'style={{width:"170px"}} onChange={e => {setPrixTotal(e.target.value)} } defaultValue={PrixTotal}  name=""/></div>
    <div className='divthreeforthree'> <p >€ </p></div>
    </div> 
    <br/>
      <div className='divforthree'> 
      <div className='divunforthree'>  <label  >Taux TVA : </label> </div> 
 
      <div className='divdeuxforthree'>   <select value={Tva} style={{width:"170px"}} className='divforthree' onChange={handleChangeTva} >
    <option value="20">20 </option>
    <option value="10">10  </option>
    <option value="5.5"> 5,5 </option>
    <option value="0"> Pas de TVA</option>
    </select></div> 
    <div className='divthreeforthree'>   <p >% </p></div> 
      </div>  
      <br/>
      <div className='divforthree'>  
<div className='divunforthree'><label  >TVA :</label></div>
<div className='divdeuxforthree'>   <input type="text" style={{width:"170px"}}  value={calculTVA}   name=""className="divforthree"/></div>
    <div className='divthreeforthree'> <p>€ </p></div> 
     </div><br/>
      <div className='divforthree'>  
<div className='divunforthree'><label  >Prix TTC :</label></div>
<div className='divdeuxforthree'>   <input type="text" style={{width:"170px"}}  defaultValue={PrixAvecTva}  onChange={e => {setPrixAvecTva(e.target.value)} } name=""className="divforthree"/></div>
    <div className='divthreeforthree'> <p>€ </p></div> 
     </div><br/>
      
      
      <div className='divforthree' >  
      <div className='divunforthree'>  <label  >Type de financement : </label> </div>
 
      <div className='divdeuxforthree'> <select value={TypeFinance} style={{width:"170px"}}   onChange={handleChangetypeFinance} >
<option value="Client">Client</option>
<option value="Opco">Opco </option>
<option value="Mixte"> Mixte</option>
<option value="Autre"> Autre </option>

</select></div>

<div className='divthreeforthree'> <p></p></div>  </div>  <br/>
  </div>
  
  <div className='Container ' style={{borderColor:"#E980D3",display: divFinance}}>
    <h2 style={{textAlign:"center",color:"#E980D3"}}> Financement : </h2>
      <br/> 
      <div style={{display: divDisplayMixte}}> 
<div className='lebelText'>
<input type="checkbox" className='divchekbox'   checked={checkClient}  onChange={handleClient}/>
<label className='textLabel' style={{marginLeft:"-20px" ,flex:"1"}} >Client :</label>
<div style={{display:visiblePrixClient, flex:"2",marginLeft:"-20px"}} > <input type="text" defaultValue={PrixClient}  onChange={e => {setPrixClient(e.target.value)} } name=""className="lebelZonText"/><br/>
      <p>€</p>
</div>
</div> 
<div className='tabledecore'> 
    <table > 
        <thead>
          <tr> 
            <th>Raison Sociale</th>
            <th>N° Dossier</th>
            <th>prix (€)</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {persos.map(p => (
            <tr key={p.id}>
              <td>{p.nom}</td>
              <td>{p.numDossier}</td>
              <td>{p.prix}</td>
              <td> 
              <Link  onClick={() => deleteItem(p.nom)}>   <Delete /></Link>


              </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
     <td>
               <select  style={{width:"150px"}} 
              onChange={e => setNew_data({ ...new_data, nom: e.target.value })}>
                                 <option value="" selected>choisir</option>

            {dataCategClient.map((option) => ( 
              <option value={option.value}>{option.value}</option>
            ))}
            </select></td>
            <td>   <input
              type="text"
              className="lebelZonText"
              defaultValue={new_data.numDossier}
              onChange={e => setNew_data({ ...new_data, numDossier: e.target.value })}
            /></td>

            <td>  <input
              type="text"
              className="lebelZonText"
              defaultValue={new_data.prix}
              onChange={e => setNew_data({ ...new_data, prix: e.target.value })}
            /></td>
            <td>       <button onClick={addhandler} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Add/></button></td>
          </tr>
        </thead>
      </table>
      </div>
 <br/>
     

      </div>
   <div style={{display: divDisplayOpco}}>

 <div className='divRecherche'>  
       
      
       <Select  
       className='divRechercheSelect'
         defaultValue={selectedOptionRaisonFinanceur}
         onChange={setselectedOptionRaisonFinanceur}
         placeholder='Raison sociale'
         options={listRaisonFinanceur}
       />
          
          <Select 
             className='divRechercheSelect'
         defaultValue={selectedOptionOpco}
         onChange={setselectedOptionOpco}
         placeholder='Nom_prenom'
         options={dataUsernameFinanceur}
       />
       
  
     </div>

 <br/>
   <div className='lebelText'> 
   
   <label className='textLabel' > Raison Sociale :</label>
   <p> {RaisonSocialeOpco}</p>
</div>
<div className='lebelText'> 
   <label className='textLabel' > Nom :</label>
   <p> {NomOpco} </p>
</div>
<div className='lebelText' >  <label className='textLabel' > Prénom :</label>
<p>{prenomOpco}</p>
</div>
<div className='lebelText'>  <label className='textLabel' > Téléphone :</label>
<p>{telephoneOpco}</p>
</div>
<div className='lebelText'>  <label className='textLabel' > Adresse :</label>
<p>{adressOpco}</p>
</div>
<div className='lebelText'>  <label className='textLabel' > Code Ville :</label>
<p>{CodeVilleOpco}</p>
</div>
   </div>
    
</div>
<div className='Container ' style={{borderColor:"#C6986B"}}>
                   <h2 style={{textAlign:"center",color:"#C6986B"}}> Estimation des frais de déplacement </h2>
      <br/>
      <div className='lebelText'> 
      <label className='textLabel'  >Type de déplacement :</label>
    <select value={TypeDeplace} style={{width:"250px" , marginRight:"55px"}} onChange={handleChangeDeplace} >
    <option value="">choisi type</option>

    <option value="deplacSemaine">Déplacement à la semaine</option>
    <option value="deplaceJour">Déplacement journalier </option>
    </select></div> <br/>
    <div style={{display: divDeplacSemain }} > 
<h4 style={{fontWidth:"800",fontSize:"30px"}}> Transport </h4>
    <div className='divforthree'> 
    <div className='divunforthree'>  <label  > Distance </label>   </div>
    <div className='divdeuxforthree'>  <input type="text" onChange={e => {setDistance(e.target.value)} } defaultValue={Distance}  name="" />   </div>
    <div className='divthreeforthree'>  <p> Km</p>   </div>
      </div>
      <div className='divforthree'> 
      <div className='divunforthree'><label  > Barème kilométrique </label></div>
      <div className='divdeuxforthree'>    <input type="text" onChange={e => {setBaremKilometre(e.target.value)} } defaultValue={BaremKilometre}  name="" /></div>
      <div className='divthreeforthree'></div>
        </div>
      <div className='divforthree'>  
    <div className='divunforthree'> <label >Frais de déplacement </label></div> 
    <div className='divdeuxforthree'>   <input type="text" onChange={e => {setFraisDeplacement(e.target.value)} } defaultValue={FraisDeplacement}  name="" /></div> 
    <div className='divthreeforthree'>   <p> €</p></div> 
      </div> 
      <div className='divforthree'> 
      <div className='divunforthree' >   <label  >Frais de déplacement /jour </label>  </div> 
      <div className='divdeuxforthree'>  <input type="text"  onChange={e => {setFraisDeplacementJour(e.target.value)} } defaultValue={FraisDeplacementJour} name="" />  </div> 
      <div className='divthreeforthree'> <p> €</p> </div> 
      </div>  
  <h4 style={{fontWidth:"800",fontSize:"30px"}}> Hébergement :</h4>
    <div className='divforthree'>  
    <div className='divunforthree' >  <label  > Hôtel</label> </div> 
    <div className='divdeuxforthree' >    <input type="text" onChange={e => {setHotel(e.target.value)} } defaultValue={Hotel}  name="" /> </div> 
    <div className='divthreeforthree'> <p> €</p> </div> 

    </div> 


      <div className='divdinner'> 
     <div className='divflex'  >
   <div >    <input className='divchekbox' type="checkbox"  checked={checkUn}  onChange={handleChangePetitDej}/></div>
   <div className='divflexlabel'> <label  > petit déjeuner</label></div>
   <div>  <input className='divflexinput' type="text"  defaultValue={Petitdejenue} onChange={e => {setPetitdejenue(e.target.value)} } style={{visibility: PetitVisibledejenue }}/> </div>
   <div className='divthreeforthree'> <p> €</p></div>

   </div>
  <div className='divflex' >
  <div>  <input type="checkbox" className='divchekbox'  checked={checkDeux}  onChange={handleChangeDej}/></div>
  <div className='divflexlabel'>  <label  > déjeuner</label></div> 
  <div> <input className='divflexinput'  type="text"    defaultValue={dejenue} onChange={e => {setdejenue(e.target.value)} } style={{visibility:Visibledejenue }}/></div>
  <div className='divthreeforthree'> <p> €</p></div>
  </div>
  <div className='divflex'  >
  <div>  <input  className='divchekbox' type="checkbox"  checked={checktrois}onChange={handleChangeVisiblediner}/></div>
  <div className='divflexlabel'>  <label  > dîner</label></div>
  <div>  <input className='divflexinput' type="text"   defaultValue={diner} onChange={e => {setdiner(e.target.value)} } style={{visibility: Visiblediner}}/></div>
  <div className='divthreeforthree'> <p> €</p></div>
  </div>
     </div> 

      <div className='lebelTextPrix'>   
      <div> <label className='textLabel'  style={{width:"200px"}} >Total frais jounaliers:</label> </div>
      <div className='divSalaire'>   <p > {TotalFrais} € </p>
       </div> </div>
       <div className='lebelTextPrix'>   
      <div >   <label className='textLabel'  style={{width:"200px"}}>Nets par jour :</label></div>
      <div className='divSalaire'>
         <p className="lebelZonText" > {TotalFraisJour} €</p>  </div>
          </div>
       <br/>
    </div>






    <div style={{display: divDeplacJour }} >
<h4 style={{fontWidth:"800",fontSize:"30px"}}> Transport :</h4>

<div className='divforthree'> 
      <div className='divunforthree'> 
       <label className='textLabel' > Distance :</label> </div>
       <div className='divdeuxforthree'>  <input type="text" onChange={e => {setDistance(e.target.value)} } defaultValue={Distance}  name="" className="lebelZonText"/></div>
       <div className='divthreeforthree'>  <p> Km</p>   </div>
      </div>
      <div className='divforthree'> 
      <div className='divunforthree'>
      <label className='textLabel' > Barème kilométrique :</label> </div>
      <div className='divdeuxforthree'>   <input type="text" onChange={e => {setBaremKilometre(e.target.value)} } defaultValue={BaremKilometre}  name="" className="lebelZonText"/></div>
      <div className='divthreeforthree'></div></div>

      <div className='divforthree'> 
      <div className='divunforthree'>  <label className='textLabel' >Frais de déplacement </label> </div>
      <div className='divdeuxforthree'>   <input type="text" onChange={e => {setFraisDeplacementParJour(e.target.value)} } defaultValue={FraisDeplacementParJour}  name="" className="lebelZonText"/></div> 
      <div className='divthreeforthree'>   <p> €</p></div> 
      </div> 
      <div className='divforthree'> 
      <div className='divunforthree'> <label className='textLabel' >Frais de déplacement /jour </label> </div>
      <div className='divdeuxforthree'>   <input type="text" onChange={e => {setFraisDeplacementJourParJour(e.target.value)} } value={FraisDeplacementJourParJour} name=""   className="lebelZonText"/></div>  
      <div className='divthreeforthree'> <p> €</p> </div> 
      </div> 

  <h4 style={{fontWidth:"800",fontSize:"30px"}}> Panier :</h4>
 

     
     <div className='divflex' >
   <div>    <input className='divchekbox' style={{marginLeft:"-140px"}} type="checkbox"  checked={checkdivfraisRestau}   onChange={handleChangeRestau}/></div>
   <div className='divflexlabel' style={{width:"230px"}}>  <label  > Frais de restauration</label></div>
   <div>  <input type="text" className='divflexinput'   defaultValue={fraisRestau} onChange={e => {setfraisRestau(e.target.value)} }  style={{visibility: divfraisRestau }}/></div>
   <div className='divthreeforthree'> <p> €</p></div>

  
        </div> 
<br/> <br/>
<div className='lebelTextPrix'> 
      <div >   <label className='textLabel' style={{width:"200px"}} >Total frais jounaliers:</label></div>
    <div className='divSalaire'>    <p > {TotalFraisParJour} €</p>    </div></div>
 <div className='lebelTextPrix'>  
      <div><label className='textLabel' style={{width:"200px"}}>Nets par jour :</label></div>
       <div className='divSalaire'>
     <p className='lebelZonText'> {TotalFraisJourParJour} €</p>   </div>
   </div> 
  </div></div> 
    <div className='Container ' style={{borderColor:"#D9BA9B"}}>
         <h2 style={{textAlign:"center",color:"#D9BA9B"}}>Formateur</h2>
         <div className='divRecherche'>      
 
    <Select  
      className='divRechercheSelect'
        defaultValue={selectedOptionUserFormateur}
       
        onChange={setselectedOptionUserFormateur}
        placeholder='Raison sociale'
        options={dataFormateur}
      />
    
   {choixSelectAdress? <div > <select style={{height:"45px"}}       className='divRechercheSelect'
          defaultValue={adressFormateur} onChange={handleChangeAsressFormateur}>   
            { choixSelectAdress.map((option)=>{
    return(   <option>{option.adresse_1} </option> )
       })}</select>
       <p style={{fontSize:"17px",marginLeft:"27px"}}> (prénom_nom)</p>
       </div>
       :null}     
   
      </div>
    <div className='divInfo'> 
    <br/>  
    <div className='lebelText'> 
   
           <label className='textLabel' > Titre :</label>
           <p> {TitreFormateur}</p>
    </div>
    <div className='lebelText'> 
           <label className='textLabel' > Nom :</label>
           <p> {NomFormateur}</p>
    </div>
   <div className='lebelText' >  <label className='textLabel' > Prénom :</label>
      <p>{PrenomFormateur}</p>
      </div>
      <div className='lebelText'>  <label className='textLabel' > Téléphone :</label>
     <p>{TelFormateur}</p>
     </div>

      <div className='lebelText'>  <label className='textLabel' >Mail  :</label>
      <p> {EmailFormateur}</p></div>
      <div className='lebelText'>  <label className='textLabel' >Adresse 1  :</label>
      <p>{Adresse_1Formateur}</p></div>
      <div className='lebelText'>  <label className='textLabel' > Adresse 2 :</label>
      <p>{Adresse_2Formateur}</p></div>
      <div className='lebelText'>  <label className='textLabel' >Code postal et ville :</label>
      <p>{CodeVilleFormateur}</p></div>
     {assujtTvFormateura==true? <div className='lebelText'>  <label className='textLabel' > Assujetti à la TVA :</label>
      <p> {tvaFormateur}</p></div>:null} 
      {fraisDeplaccementFormateur?<div className='lebelText'>  <label className='textLabel' >Frais de déplacement:</label>
      <p> {fraisDeplaccementFormateur}</p></div>:null }
     
      {fraisFormateur? 
      <div className='lebelText'>  <label className='textLabel' >Prix de formation:</label>
      {fraisFormateur.filter(item => item.intitile ==DesignationFormation).map(filteredPerson => (
    <p>
      {filteredPerson.prix}
    </p>
  ))}</div>:null}
    </div>
     </div>

     <div style={{ marginLeft:"20px",marginTop:"40px"}}>  <textarea id="story" name="story" style={{	float:"left",fontSize:"25px",width:"500px",height:"100px"}}
        placeholder='remarque' onChange={e => {setRemarque(e.target.value)} } value={Remarque}>
  
</textarea>   
 </div>
   
        </div>
   
        <Toaster   position="bottom-right"  toastOptions={{
    success: {
      style: {
        width: '700px',
        height:'70px',
        border:'green',
        borderStyle: "solid",
        fontSize:'25px',
      },
    },
    error: {
      style: {
        width: '700px',
        height:'70px',
        border:'red',
        borderStyle: "solid",
        fontSize:'25px',

      },
    },
  }}
  reverseOrder={false}/>
        </div>
    );
};

export default DetailOffre;