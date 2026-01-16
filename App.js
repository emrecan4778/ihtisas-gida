const { createClient } = supabase;

// Senin bilgilerinle dükkanı bağlıyoruz:
const _supabase = createClient('https://acxlmoluahtrztzttzcz.supabase.co', 'sb_publishable_rLKNN_KK7bsl2E7KkT50gA_Zg0E4mM4');

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await _supabase.from('products').select('*');
      if (error) console.error("Hata:", error);
      else setProducts(data || []);
    }
    fetchProducts();
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#003366', color: '#b38e44', padding: '20px', textAlign: 'center', borderBottom: '4px solid #b38e44' }}>
        <h1 style={{ margin: 0, fontSize: '28px' }}>İHTİSAS GIDA</h1>
        <p style={{ margin: 0, color: 'white' }}>TOPTAN GIDA TEDARİK MERKEZİ</p>
      </header>

      <div style={{ padding: '15px', maxWidth: '600px', margin: '0 auto' }}>
        {products.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>Ürünler yükleniyor veya henüz eklenmedi...</p>
        ) : (
          products.map(p => (
            <div key={p.id} style={{ backgroundColor: 'white', marginBottom: '12px', padding: '15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderLeft: '6px solid #b38e44' }}>
              <div>
                <h3 style={{ margin: 0, color: '#333' }}>{p.name}</h3>
                <p style={{ margin: '4px 0 0 0', color: '#888', fontSize: '14px' }}>Birim: {p.unit || 'Adet'}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#003366' }}>{p.price} TL</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);