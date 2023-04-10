import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const GuidWorks = () => {

    const {id} = useParams();

    const [works, setworks] = useState();
    

    useEffect(() => {
        axios
          .get(`http://ravshandev.uz/api/v1/works/${id}/`)
          .then((response) => {
            setworks(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);
    
    return (
<div>

                {works &&
                works.map((item,index)=> {
                return(
                  <div key={index}>
                  <img src={works?.get_image} alt=""/>
                  </div>
                  )
                })
                }
            
</div>

        )
};
export default GuidWorks;