import React from 'react';
import './SoftwareListing.css';

const SoftwareListing = () => {
  // Örnek verileri tanımlayalım (sonradan veritabanından alınacak)
  const softwareList = [
    { name: 'Software Name 1', description: 'Description of Software 1...', rating: 4.5 },
    { name: 'Software Name 2', description: 'Description of Software 2 goes here...', rating: 3.8 },
    { name: 'Software Name 3', description: 'Description of Software 3...', rating: 4.2 },
    { name: 'Software Name 4', description: 'Description of Software 4 goes here...', rating: 3.9 },
    { name: 'Software Name 5', description: 'Description of Software 5...', rating: 4.0 },
    { name: 'Software Name 6', description: 'Description of Software 6 goes here...', rating: 3.7 }
  ];

  // Software bileşeni oluşturmak için map fonksiyonunu kullanalım
  const renderSoftwareList = () => {
    return softwareList.map((software, index) => (
      <div key={index} className="software-item" onClick={() => handleSoftwareClick(software.name, software.description, software.rating)}>
        <h2 className="software-title">{software.name}</h2>
        <p className="software-description">{software.description}</p>
        <div className="rating">
          Rating: {renderStars(software.rating)}
        </div>
      </div>
    ));
  };

  // Yıldızları oluşturmak için fonksiyon
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const starIcons = [];

    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<span key={`star-${i}`}>&#9733;</span>); // Yıldız ikonu ekle (★)
    }

    if (hasHalfStar) {
      starIcons.push(<span key="half-star">&#9733;</span>); // Yarım yıldız ikonu ekle (★)
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      starIcons.push(<span key={`empty-star-${i}`}>&#9734;</span>); // Boş yıldız ikonu ekle (☆)
    }

    return (
      <span>
        {starIcons} {rating} stars
      </span>
    );
  };

  // Detayları açan fonksiyon
  const openSoftwareDetails = (name, description, rating) => {
    alert(`Software Name: ${name}\nDescription: ${description}\nRating: ${rating} stars`);
  };

  // Software tıklama olayını işleyen fonksiyon
  const handleSoftwareClick = (name, description, rating) => {
    openSoftwareDetails(name, description, rating);
  };

  return (
    <div className="software-listing-container">
      {/* Page Title */}
      <div className="page-title">SOFTWARE LISTINGS</div>

      {/* Software Listing Section */}
      <div className="container-list">
        {renderSoftwareList()}
      </div>
    </div>
  );
};

export default SoftwareListing;
