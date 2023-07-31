import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import memberService from '../services/memberService';
import { useRef } from "react";

const AddMember = () => {
  
  const ref = useRef();
  const [file, setFile] = useState();
  const [img, setimg] = useState("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80")
  
  const [member, setmember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    img: "",
    post: "",
    tasks: [],
  });

  const navigate = useNavigate();

  function handlechange(e) {
    const value = e.target.value;
    setmember({ ...member, img: file });
    setmember({ ...member, [e.target.name]: value });
    console.log(member);
  }
  const savemember = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append("memberData",JSON.stringify(member));
    console.log(member);
    memberService.saveMember(formData).then((res) => {
      navigate("/");
      console.log(res);
    }).catch((error) => {
      console.log(error);
    }
    );
  };
  const clear = (e) => {
    e.preventDefault();
    setmember({
      firstName: "",
      lastName: "",
      email: "",
      img: "",
      post: "",
    });
    setimg("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80")
  };
  
  function clickInput() {
    ref.current.click();
  }
  function changeImg(e) {
    console.log(e.target.files[0]);
    const newImg = e.target.files[0];
    setFile(newImg);
    setimg(URL.createObjectURL(newImg));
    
    console.log(newImg);
  }

  // to upload the image to the server
/*   const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData); 
    
     axios.post('http://localhost:8080/api/v1/upload', formData)
      .then(response => {
        console.log('Image uploaded successfully.');
        console.log('Image URL:', response.data);
        setFile(response.data);
        setmember({ ...member, img: response.data });
        // The URL returned by the server
        // You can save this URL to your database or use it to display the image in the UI.
      })
      .catch(error => {
        console.error('Error uploading the image:', error);
      });
  }; */
  //second way for the asynchronus problem
  useEffect(() => {
    /* setimg(URL.createObjectURL(file)); */
    console.log(file);
  }, [file])

  return (
    <div className="flex flex-col items-center max-w-2xl justify-center w-full h-full container shadow border-b mx-auto px-5">
      <div className="font-normal text-slate-700 text-3xl mt-10 tracking-wider pb-4 ">
        <h1 className="">Add member</h1>
      </div>
      <div className="max-w-2xl  mx-auto flex justify-center  flew-wrap-reverse box-border text-center items-center container ">
        <div className="w-full h-full flex flex-col items-center justify-center border border-spacing-3 border-dashed border-blue-500 pt-10 rounded-lg cursor-pointer" onClick={clickInput}>
          <form>
          <input type="file" ref={ref} hidden onChange={changeImg} />
            <img src={img} className="w-40 h-40 rounded-full border-gray-700 shadow  border-collapse border-dashed object-cover cursor-pointer" />
          </form>
          <h2 className="px-4 py-4 text-sm font-medium  dark:text-gray-200 whitespace-nowrap cursor-pointer text-blue-500 hover:text-blue-900" onClick={clickInput}>Upload Image</h2>
        </div>

        <div className="px-8  box-border h-max container w-1/2 ">

          <div className="items-center justify-center my-4 box-border  container text-left">
            <label className="block text-gray-500 text-sm font-normal my-2">
              First name
            </label>
            <input type="text"
              name='firstName'
              required
              value={member.firstName}
              onChange={(e) => handlechange(e)}
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <label className="block text-gray-500 text-sm font-normal my-2">
              Last name
            </label>
            <input type="text"
              required
              name='lastName'
              value={member.lastName}
              onChange={(e) => handlechange(e)}
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <label className="block text-gray-500 text-sm font-normal my-2">
              Email
            </label>
            <input type="email"
              required
              name='email'
              pattern=".+@gmail\.com"
              value={member.email}
              onChange={(e) => handlechange(e)}
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <label className="block text-gray-500 text-sm font-normal my-2">
              Post
            </label>
            <input type="text"
              required
              name='post'
              value={member.post}
              onChange={(e) => handlechange(e)}
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full text-right">
        <div className="items-center justify-center w-full h-14 my-4 box-border space-x-5 pt-4">
          <button onClick={savemember} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded ">
            Save
          </button>
          <button onClick={clear} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded ">
            Clear
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default AddMember;