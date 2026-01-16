import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// DİKKAT: Alttaki URL ve KEY kısımlarını Supabase'den aldıklarınla değiştir!
const supabase = createClient('BURAYA_URL_GELECEK', 'BURAYA_KEY_GELECEK');

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data } = await supabase.from('products').select('*');
    setProducts(data || []);
  }

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#003366', color: '#b38e44', padding: '20px', textAlign: 'center', borderBottom: '4px solid #b38e44' }}>
        <h1 style={{ margin: 0 }}>İHTİSAS GIDA</h1>
        <p style={{ margin: 0, color: 'white' }}>Endüstriyel Tedarik Uzmanı</p>
      </header>

      <div style={{ padding: '20px' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', marginBottom: '10px', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ddd' }}>
            <div>
              <h3 style={{ margin: 0 }}>{p.name}</h3>
              <p style={{ margin: '5px 0', color: '#666' }}>{p.unit} - <span style={{ fontWeight: 'bold', color: '#003366' }}>{p.price} TL</span></p>
            </div>
            <button style={{ backgroundColor: '#003366', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px' }}>Ekle</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
