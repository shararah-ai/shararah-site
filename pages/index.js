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
<div
  style={{
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center'
  }}
>
  <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Who We Are</h2>
  <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
    Shararah is igniting the future of AI innovation in MENA. We’re a bold, privately-led incubator on a mission to empower the brightest university students with funding, mentorship, and real opportunities. Through high-stakes competitions, we turn sharp ideas into scalable startups.
  </p>

  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem'
  }}>
    <img src="/spark-icon.png" alt="Spark Icon" style={{
      width: '40px',
      height: '40px',
      marginRight: '1rem'
    }} />
    <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
      “Shararah شرارة” means Spark – because every fire starts with one.
    </span>
  </div>
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
}
