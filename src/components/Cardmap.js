import React from 'react';
import { Card } from 'react-bootstrap';
import swimming from './images/swimming.jpg'
import hopping from './images/hopping.jpg';

const Cardmap = () => {
  const data = [
    {
      id: 1,
      icon: swimming,
      title: "Swimming Activity",
      description: "swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an all-around body developer and is particularly useful in therapy and as exercise for physically handicapped persons."
    },
    {
      id: 2,
      icon: hopping,
      title: "Island Hopping",
      description: "Island Hopping, in recreation and sports, the propulsion of the body..."
    },
    {
      id: 3,
      icon: swimming,
      title: "Swimming Activity",
      description: "swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an all-around body developer and is particularly useful in therapy and as exercise for physically handicapped persons."
    }
  ];

  return (
   <>
   {data.map[(activity, index)=>{
	return {
		<Card style = {{width}}
	}
   }]}
   </>
  );
};

export default Cardmap;
