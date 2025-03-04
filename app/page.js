import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Fattouma Sana</h1>
          <p className="col-md-8 fs-4">Experte Web Marketing & Développeuse Full Stack</p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Me contacter
          </Link>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Mes Services</h2>
            <p>Découvrez mes services en web marketing et développement.</p>
            <Link href="/services" className="btn btn-outline-light">
              Voir les services
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Mes Projets</h2>
            <p>Un aperçu de mes réalisations les plus récentes.</p>
            <Link href="/projets" className="btn btn-outline-secondary">
              Voir les projets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}