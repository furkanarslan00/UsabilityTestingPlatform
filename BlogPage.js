import React, { useState } from 'react';
import './BlogPage.css';

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('cat1');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-page-title">Blog Page</h1>
      <div className="blog-categories">
        <button className={`blog-category-button ${selectedCategory === 'cat1' ? 'active' : ''}`} onClick={() => handleCategoryChange('cat1')}>Kategori 1</button>
        <button className={`blog-category-button ${selectedCategory === 'cat2' ? 'active' : ''}`} onClick={() => handleCategoryChange('cat2')}>Kategori 2</button>
        <button className={`blog-category-button ${selectedCategory === 'cat3' ? 'active' : ''}`} onClick={() => handleCategoryChange('cat3')}>Kategori 3</button>
      </div>
      <div className="blog-category-content">
        {selectedCategory === 'cat1' && (
          <div>
            <div className="blog-category-title">Kategori 1 Başlık</div>
            <div className="blog-item-container">
              <div className="blog-item">
                <div className="blog-item-title">Öğe 1 Başlık</div>
                <div className="blog-item-description">Öğe 1 Açıklama</div>
              </div>
              <div className="blog-item">
                <div className="blog-item-title">Öğe 2 Başlık</div>
                <div className="blog-item-description">Öğe 2 Açıklama</div>
              </div>
              <div className="blog-item">
                <div className="blog-item-title">Öğe 3 Başlık</div>
                <div className="blog-item-description">Öğe 3 Açıklama</div>
              </div>
              <div className="blog-item">
                <div className="blog-item-title">Öğe 4 Başlık</div>
                <div className="blog-item-description">Öğe 4 Açıklama</div>
              </div>
            </div>
          </div>
        )}
        {selectedCategory === 'cat2' && (
          <div>
            <div className="blog-category-title">Kategori 2 Başlık</div>
            <div className="blog-item-container">
              <div className="blog-item">
                <div className="blog-item-title">Öğe A Başlık</div>
                <div className="blog-item-description">Öğe A Açıklama</div>
              </div>
              <div className="blog-item">
                <div className="blog-item-title">Öğe B Başlık</div>
                <div className="blog-item-description">Öğe B Açıklama</div>
              </div>
              <div className="blog-item">
                <div className="blog-item-title">Öğe C Başlık</div>
                <div className="blog-item-description">Öğe C Açıklama</div>
              </div>
              <div className="blog-item">
                <div className="blog-item-title">Öğe D Başlık</div>
                <div className="blog-item-description">Öğe D Açıklama</div>
              </div>
            </div>
          </div>
        )}
        {selectedCategory === 'cat3' && (
          <div>
            <div className="blog-category-title">Kategori 3 Başlık</div>
            <div className="blog-item-container">
              <div className="blog-item">
                <div className="blog-item-title">Öğe X Başlık</div>
                <div className="blog-item-description">Öğe X Açıklama</div>
              </div>
              <div className="blog-item">
                <div className="blog-item-title">Öğe Y Başlık</div>
                <div className="blog-item-description">Öğe Y Açıklama</div>
              </div>
              <div className="blog-item">
                <div className="blog-item-title">Öğe Z Başlık</div>
                <div className="blog-item-description">Öğe Z Açıklama</div>
              </div>
              <div className="blog-item">
                <div className="blog-item-title">Öğe W Başlık</div>
                <div className="blog-item-description">Öğe W Açıklama</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
