import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav'
import { useParams } from "react-router-dom";
import axios from "axios";
import bsm from '../assets/bsm-allah.svg'
import Footer from "../Components/Footer";

function Surah() {
  const { id } = useParams();
  const [surahId, setSurahId] = useState();
  const [startPage, setStartPage] = useState();
  const [endPage, setEndPage] = useState();
  const [audioFile, setAudioFile] = useState()
  const [audioFrame, setAudioFrame] = useState(false)

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    axios.get(`https://api.quran.com/api/v4/chapters/`)
      .then((res) => {
        setSurahId(res.data.chapters.id);
        console.log(res.data.chapters);

        const chapter = res.data.chapters.find((chapter) => chapter.id.toString() === id);

        if (chapter) {
          setStartPage(chapter.pages[0]);
          setEndPage(chapter.pages[1]);
        }
      })
      // .catch((error) => {
      //   console.error(error);
      // });
  }

  const formatSVGId = (pageNumber) => {
    return pageNumber.toString().padStart(3, '0');
  }

  const audio =(shakh)=>{
    axios.get(`https://api.quran.com/api/v4/chapter_recitations/${shakh}/${id}`)
    .then(res=>{
      console.log(res.data.audio_file);
      setAudioFile(res.data.audio_file.audio_url);
      setAudioFrame(true);
    })
  }

  return (
    <div dir="rtl">
      <Nav />
      
      <div className="shadow bg-gray-800">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-300">
        <div 
        onClick={()=>( audio(10) )}
        className="transition-colors duration-300 transform 
         mx-1.5 sm:mx-6 hover:text-black">تشغيل بصوت سعود الشريم</div>

        <div 
        onClick={()=>( audio(7) )}
        className=" 
        hover:text-black transition-colors duration-300 transform  
        mx-1.5 sm:mx-6"> تشغيل بصوت مشاري العفاسي </div>

        <div 
        onClick={()=>( audio(43) )}
        className="
        hover:text-black transition-colors duration-300 
        transform mx-1.5 sm:mx-6"> تشغيل بصوت صالح بدير </div>

        <div
        onClick={()=>( audio(22) )}
        className="
        hover:text-black transition-colors duration-300 transform  
        mx-1.5 sm:mx-6"> تشغيل بصوت محمد ايوب </div>

    </div>
      <div className={`${audioFrame ? `` : `hidden`}`}>
            <audio 
            className="w-full bottom-3 fixed z-[999]"
            src ={audioFile} controls autoplay></audio>
      </div>
</div>

        <div className="max-sm:w-full sm:w-full text-center text-white">

          {startPage !== undefined && endPage !== undefined && (
            <div className="flex flex-col justify-center items-center">
              {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <img
                  key={index}
                  className="white-svg sm:w-full max-sm:w-full w-[60%] lg:w-[40%] md:w-[60%]
                  max-md:w-[60%]"
                  // style={{ color: 'white' }}
                  src={`https://www.mp3quran.net/api/quran_pages_svg/${formatSVGId(startPage + index)}.svg`}
                  alt={`Page ${startPage + index}`}
                />
              ))}
            </div>
          )}
        </div>

      <Footer />
      <div className="scroll-watcher"></div>
    </div>
  );
}

export default Surah;
