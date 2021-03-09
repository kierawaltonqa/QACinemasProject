import axios from 'axios';
import { useState, useEffect } from 'react';
import EachPost from '../Discussion/EachPost';
import { URL } from './CONSTS.json';
import EachBlog from './EachBlog';

//reading all blog posts
const ReadBlog = () => {

    const [blogList, setBlog] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`${URL}/read`)
            .then((response) => {
                setBlog(response.data);
                console.log(response.data);
                
            }).catch((error) => {
                setError(error);
            })
    }, []) ;

    if (error) {
        return <p>{error}</p>
    }
   
    else {
        return (
            <>
            <div>
            <h1 className="title"> QA CINEMA BLOGS </h1>
                {blogList.map((item) => (

                    <div className="container"> 


                    <EachBlog item={item}/> 
      
                    </div>

                ))}
            </div>
            </>
        )
    }
}
export default ReadBlog;