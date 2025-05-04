import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Home() {
    let userinput = useRef(null);
     async function ApiHandle(){
        // console.log(userinput.current.value)
        let Apiurl = 'https://api.openai.com/v1/chat/completions';
        const apiKey =''
        const headers = {
            'Content-Type': 'application/json',
            'Authorizaton':`Bearer ${apiKey}`
        }
        const requestBody = {
            model: 'gpt-4',
            messages: [
                {
                    role: 'user',
                    content: "You are a helpful assistant."
                }
            ]
        }
        axios.post(Apiurl, requestBody,{headers}).then(({data})=>{
            console.log(data.choices)
        })

    }
  return (
    <div className="  ">
        <div className='flex items-center justify-between border-b-1 p-4'>
       <div className='flex gap-2 items-center mx-20'>
       <img  className="h-18 w-18 rounded-full"src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=1700/uploads/users/1631/posts/40055/image-upload/Screenshot_2022_02_16_at_9_30_14_am_copy.jpg"></img>
        <p className='font-bold text-xl'>AIVOX</p>
       </div>
        <div className='flex gap-4 font-bold mx-20'>
        <Link to='/image'>Get Image</Link>
        <Link> About Us</Link>
        </div>
        </div>
        <div className=" w-[700px] mx-auto mt-20">
            <p>Repudiandae blanditiis ipsa accusamus saepe sequi ipsam sit? Aspernatur numquam in natus quas praesentium minus quos animi inventore harum? Quos, consequatur distinctio.</p>
        </div>

        <div className='w-[700px] fixed bottom-25 text-center left-100'>
            <input ref={userinput} type="text" className='border border-neutral-400 w-[600px] p-3' placeholder='Search Anything...'></input>
            <button onClick={ApiHandle} className='border border-neutral-400 bg-black text-white p-3 cursor-pointer'>Search</button>
        </div>
        

    </div>
  )
}

export default Home