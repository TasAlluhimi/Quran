import React from "react";
import Nav from '../Components/Nav'
import { useParams } from "react-router-dom";
import axios from "axios";
import bsm from '../assets/bsm-allah.svg'

function Surah() {

  const { id } = useParams();
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    getData();
  }, []);

  const getData = ()=>{
    axios.get(`https://api.quran.com/api/v4/quran/verses/indopak/`)
    .then((res)=>{
      console.log(res.data);
      const filterdSurah = res.data.verses.filter((item) =>
      // item.verse_key.startsWith(`${id}`)
      item.verse_key.startsWith(`${id}:`)
      )
      console.log(filterdSurah);
      setData(filterdSurah);
    })
  }
  

  return (
  <div dir="rtl">
  <Nav />
    
    <div className="flex">

      <div className="border w-[20%]">
        hi
      </div>

      <div className="border w-[80%] text-center text-white font-bold">
        
        <div className="h-20 lg:w-96 md:w-72 max-md:w-72 w-60 bg-center lg:bg-cover 
        bg-contain bg-no-repeat flex justify-center items-center" 
        style={{backgroundImage: `url(${bsm})`}}></div>

          {data.map(item=>(
            <>
              <div>{item.text_indopak} -{item.verse_key.substr(2)}- </div>
            </>
          ))}
      </div>
    </div>
  </div>);
}

export default Surah;
