import React from 'react';

// Define your places array here or import it
const places = [
  {
    id: 1,
    name: 'The Himalayas',
    description: 'Exploring the Himalayas was a journey that redefined my understanding of nature...',
    image: 'https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg',
  },
  {
    id: 2,
    name: 'Pondicherry',
    description: 'As soon as I arrived in Pondicherry, I was captivated by the distinct French influence that permeates the...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cojoxi3V3HS6Wrlaq35YkUxk3sX-79MLfQ&s',
  },
  {
    id: 3,
    name: 'Ooty',
    description: 'Nestled in the Nilgiri Hills of Tamil Nadu, Ooty, also known as Udhagamandalam, is a hill station...',
    image: 'https://img.veenaworld.com/wp-content/uploads/2018/06/Ooty-Blog-escape2explore.jpg?imwidth=2560',
  },
  {
    id: 4,
    name: 'Kodaikanal',
    description: 'The journey to Kodaikanal was a visual treat. Winding roads surrounded by...',
    image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Cover-for-Places-To-Visit-In-Kodaikanal-In-June_23rd-jan.jpg',
  }
];

const DescriptionPage = ({ placeId }) => {
  const place = places.find(p => p.id === placeId);

  if (!place) {
    return <h2>Place not found</h2>;
  }

  return (
    <div className="description-page">
      <h1>{place.name}</h1>
      <img src={place.image} alt={place.name} />
      <p>{place.description}</p>
    </div>
  );
};

export default DescriptionPage;
