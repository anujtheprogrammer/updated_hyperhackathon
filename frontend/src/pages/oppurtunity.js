import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import "../styles/recstyle.css"

const Oppurtunity = ()=>{
    const[postarray,setPostarray] = useState([])

    useEffect(async()=>{
        const response = await axios.get("http://localhost:5000/api/addpost")
        console.log(response)
        if(response.data){
            setPostarray(response.data);
        }
    },[])

    return (
    <div>
        <div className="contain">
        <div className="head">Opportunity Available</div>
        {   
        postarray && postarray.map(post=>{
            return  <div className="oppurt">
            <div className="aply">Apply</div>
            <div className="nme">{post.name}</div>
            <div className="loon">{post.location}</div>
            <div className="abus">{post.about_company}</div>
            <div className="resp">{post.responsibility}</div>
            <div className="salandreq">{post.requirements}</div>
        </div>
        })     
        }
        </div>
    </div>
    )
}

export default Oppurtunity;