const { createClient } = supabase;
const _supabase = createClient('BURAYA_URL', 'BURAYA_KEY');

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchProducts() {
      const { data } = await _supabase.from('products').select('*');
      setProducts(data || []);
    }
    fetchProducts();
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#003366', color: '#b38e44', padding: '20px', textAlign: 'center', borderBottom: '4px solid #b38e44' }}>
        <h1 style={{ margin: 0 }}>İHTİSAS GIDA</h1>
        <p style={{ margin: 0, color: 'white' }}>Sipariş Sistemi Aktif</p>
      </header>
      <div style={{ padding: '20px' }}>
        {products.length === 0 ? <p style={{textAlign:'center'}}>Ürünler yükleniyor...</p> : products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', marginBottom: '10px', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
            <span><strong>{p.name}</strong> ({p.unit})</span>
            <span style={{ color: '#003366', fontWeight: 'bold' }}>{p.price} TL</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);