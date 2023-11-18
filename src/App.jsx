import "./App.css";
import React from 'react'


function Arama({aramaMetni,onSearch}){

   return(
   
    <div>
       <label htmlFor="arama">Ara: </label>
       <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
       <p>
        
       </p>
    </div>
  )
   
}


function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
              <span>
                <a href={url}>{baslik}</a>, 
              </span>
              <span><b>Yazar:</b> {yazar}, </span>
              <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
              <span><b>Puan:</b> {puan}</span>
            </li>

  )
}


function Liste(props){
 
  return(
    <ul>
        {props.yazilar.map(function(yazi){
          return (<Yazi key={yazi.id} {...yazi}  />
          
          );
        })}
      </ul>
      
  )
}



function App() {

  const[aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan")|| "React");

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "Crime and Punishment",
      url: "wwww.google.com.tr",
      yazar: "Fyodor Dostoevsky",
      yorum_sayisi: 5,
      puan: 5,
      id: 2,
    },
    {
      baslik: "Madame Bovary",
      url: "wwww.google.com.tr",
      yazar: "Gustave Flaubert",
      yorum_sayisi: 1,
      puan: 3,
      id: 3,
    },
    {
      baslik: "Pride and Prejudice",
      url: "wwww.google.com.tr",
      yazar: "Jane Austen",
      yorum_sayisi: 2,
      puan: 5,
      id: 4,
    },
    {
      baslik: "Hamlet",
      url: "wwww.google.com.tr",
      yazar: "William Shakespeare",
      yorum_sayisi: 7,
      puan: 4,
      id: 5,
    },
    {
      baslik: "The Great Gatsby",
      url: "wwww.google.com.tr",
      yazar: "F.Scott Fitzgerald",
      yorum_sayisi: 1,
      puan: 2,
      id: 6,
    },
    

  ];

  
const arananYazilar=yaziListesi.filter(
  function (yazi){
    return(
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())

    );
  }

);



  function handleSearch(event){
    setAramaMetni(event.target.value);
    

  }
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);

  
  return (
    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/> 
      
    </div>
  );
}

export default App;
