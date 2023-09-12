import React from 'react'
import { Link } from 'react-router-dom'
import noImg from './No_Image.webp'
const NewsCard = ({ newsItem }) => {
  const { author, description, source , title, url, urlToImage, publishedAt } = newsItem




  return (
    <div>
      <div className="  m-5 pb-3 group relative">
    <div className='absolute top-0 left-0   flex justify-end w-full z-10'>
    { source.name && <span className='bg-green-600/20 p-2 text-xs font-bold tracking-wider '> {source?.name} </span>}
    </div>
        <Link to={url} target='_sachin' className='relative'>
          
          
          
          <img
            className="relative w-full h-full rounded-t-lg object-cover"
            src={urlToImage? urlToImage : noImg}
            alt="/" />
          
            <div className='bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-all duration-150 absolute top-0 left-0 text-3xl w-full h-full'></div>
        </Link>


        <div className="bg-sky-200/60  rounded-b-lg pb-3 px-3 py-3">
          <h2 className="text-xl md:text-2xl leading-[1.1] md:leading-[1.2] font-semibold text-neutral-800 -ms-1" >{title? title: "[No Title]"}</h2>
          <p className="text-neutral-800 leading-[1.2] mt-4 ps-1 ">{description ? description: "[No Description]"}</p>
          <div className="py-5">
            <span className="  text-gray-500/90">By {author? author: "[unkown author]"} <br /> at   { publishedAt? new Date(publishedAt).toGMTString() : "[00:--]"} </span>
          </div>
          <Link to={url? url : ''} target='_sachin'  className="border px-4 py-1 text-sm rounded-3xl border-blue-700 text-gray-800 hover:bg-blue-800 hover:text-white group-hover:border-2 transition duration-300 ">
          { url?" go to website": "can't go to website"}
          </Link>
        </div>



      </div>
    </div>
  )
}

export default NewsCard
