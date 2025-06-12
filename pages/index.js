export default function Home() {
return (
  <main style={{ textAlign: 'center', padding: '2rem' }}>
    <h1>Shararah</h1>
    <p>
      Ignite the next wave of AI innovation in MENA. Shararah is the region’s first AI incubator built for student founders.
    </p>

    <div style={{
      backgroundColor: '#f3f4f6',
      color: '#111827',
      padding: '1rem',
      borderRadius: '8px',
      margin: '1.5rem auto',
      maxWidth: '500px'
    }}>
      <strong>Shararah (شرارة)</strong>: An Arabic word meaning <em>“spark”</em> — representing the spark of innovation, ambition, and potential that lives in every student founder.
    </div>

    <button
      style={{
        backgroundColor: '#facc15',
        border: 'none',
        padding: '1rem 2rem',
        marginTop: '1rem',
        borderRadius: '8px',
        fontWeight: 'bold'
      }}
    >
      Join the Movement
    </button>
  </main>
);

