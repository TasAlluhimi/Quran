import React from "react";
import Nav from "../Components/Nav";
import Logo from '../assets/main.jpg'
import axios from 'axios'
import bsm from '../assets/bsm-allah.svg'
import {Input} from "@nextui-org/react";
import { Diamond } from "../assets/diamond";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {

  const [data, setData] = React.useState([])
  const [search, setSearch] = React.useState('')
  const navigate = useNavigate();

  const filtered = data.filter((item)=>
     item.name_arabic.includes(search.toLowerCase())
    )

  React.useEffect(() => {
   getData();
  
  }, []);

  const getData= ()=>{
    axios.get(`https://api.quran.com/api/v4/chapters/`)
    .then(res=>
      {console.log(res.data.chapters)
      setData(res.data.chapters)
    })
  }

  // console.log(data);
  
  return (
    <>

  <div className="" dir="rtl">  
    <div className="relative h-[110vh] w-full bg-center bg-cover bg-no-repeat 
    max-sm:h-[100vh]" 
      style={{backgroundImage: `url(${Logo})`}}>
      <Nav/>
    </div>

    <div className="absolute top-80 flex flex-col justify-center 
      items-center text-white w-full">
      
      <div className="h-20 lg:w-96 md:w-72 max-md:w-72 w-60 bg-center lg:bg-cover bg-contain bg-no-repeat" style={{backgroundImage: `url(${bsm})`}}></div>
      
    <input 
      className="lg:w-[30%] lg:mt-9 w-[40%] max-sm:w-72 sm:w-72 rounded-md
      p-2 text-black active:border-[#36383b6e]"
      type="search" 
      value={search}
      onChange={(event)=>{ setSearch(event.target.value) }}
      placeholder="ماذا تريد ان تقرأ؟" />

      <div className="flex flex-wrap justify-center items-center gap-5 mt-20 mb-20">
          {filtered.map((item) => (
            <>
              <div 
              key={item.id} 
              className="bg-[#36383b6e] p-2 rounded-sm
               w-80 flex justify-between bor hover:scale-105"
               onClick={()=>{ navigate(`/Surah/${item.id}`) }}>
                <div className="flex justify-start items-center gap-2">
                    <div>
                          <Diamond />
                    </div>

                    <div>
                      سورة {item.name_arabic}
                    </div>
                </div>
                <div>
                 {item.verses_count} آيه 
                </div>
               </div>
            </>
          ))}
      </div>
  <Footer />

    </div>
    {/* <div className="text-pink-600 text-3xl">
      hi
    </div> */}
  </div>

  {/* <Footer /> */}
  
  </>);
}
