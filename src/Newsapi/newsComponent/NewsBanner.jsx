import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import loadingImg from './Spinner-2.gif'
import { useLocation } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
const NewsBanner = (props) => {
    const location = useLocation()
    const [articles, setArticles] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)




    const fetchNews = async () => {
        try {
            props.setProgress(10)

            setError(false)
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catr}&pageSize=${props.pageSize}&page=${page}&apiKey=a57cbe7436f540f4bae8e999a564df07`
            props.setProgress(30)

            // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catr}&pageSize=12&page=3&apiKey=dcc93db8d1fc4dd583cce4cc32204374`
            const fetchData = await fetch(url)
            props.setProgress(60)

            const response = await fetchData.json()
            props.setProgress(80)
            setTotalResults(response.totalResults)
            setArticles(response.articles)
            props.setProgress(90)

            setLoading(false)
            props.setProgress(100)

        } catch (err) {
            console.error(err)
            props.setProgress(0)
            setLoading(false)
            setError(true)
        }
    }


    useEffect(() => {

        fetchNews()
    }, [location.pathname])

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catr}&pageSize=${props.pageSize}&page=${page + 1}&apiKey=a57cbe7436f540f4bae8e999a564df07`
        setPage(page + 1)
        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catr}&pageSize=12&page=3&apiKey=dcc93db8d1fc4dd583cce4cc32204374`
        const fetchData = await fetch(url)

        const response = await fetchData.json()
        setArticles(articles.concat(response.articles))
    }

 
    return (
        <>
            {loading &&
                <div className='flex items-center justify-center  h-[30vh] '>
                    <img src={loadingImg} alt="" />
                </div>}
            {error &&
                <div className='flex items-center justify-center  h-[30vh] '>
                    <p className='text-xl md:text-3xl text-neutral-900 font-extrabold  tracking-[1.82px]'>something went wrong</p>
                </div>}



            <InfiniteScroll
                dataLength={articles.length}
                next={updateNews}
                hasMore={articles.length !== totalResults}
                loader={ <div className='flex items-center justify-center  h-[30vh] '>
                <img src={loadingImg} alt="" />
            </div>}


            >
                <div className=' grid justify-center sm:grid-cols-2  lg:grid-cols-3'>

                    {
                        articles?.map((newsItem, i) => {
                            return <NewsCard key={i} newsItem={newsItem} />
                        })
                    }

                </div>
            </InfiniteScroll>



        </>
    )
}

export default NewsBanner
