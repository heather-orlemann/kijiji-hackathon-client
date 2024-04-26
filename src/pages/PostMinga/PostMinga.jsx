import React, { useState } from 'react';
import PostMingaForm from "../../components/PostMingaForm/PostMingaForm"

const PostMinga = () => {
  const [adDetails, setAdDetails] = useState({
    category: 'Minga',
    eventType: '',
    startDate: '',
    endDate: '',
    title: '',
    description: '',
    tags: '',
    images: [],
    videoUrl: '',
    websiteUrl: '',
    location: '',
    price: 'Free',
    swap:'',
    phoneNumber: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdDetails({
      ...adDetails,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setAdDetails({
      ...adDetails,
      images: [...e.target.files]
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", adDetails);
  };

  return (
    <div className="form-container">
      <PostMingaForm 
        adDetails={adDetails}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default PostMinga;
