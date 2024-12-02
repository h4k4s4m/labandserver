export default function Home() {
  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
      <main className="w-100">
        <h1 className="text-center mb-4">Homelab and Home Server Resources</h1>

        <section className="mb-4">
          <h2 className="h4 font-weight-bold">1. Recommended Parts via Tier List</h2>
          <ul className="list-group">
            <li className="list-group-item">Entry Level: Raspberry Pi 4, Intel NUC</li>
            <li className="list-group-item">Mid Tier: AMD Ryzen 5, Dell PowerEdge T40</li>
            <li className="list-group-item">High End: AMD Ryzen 9, Intel Xeon</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h4 font-weight-bold">2. Software/OS List</h2>
          <ul className="list-group">
            <li className="list-group-item">Proxmox VE</li>
            <li className="list-group-item">Unraid</li>
            <li className="list-group-item">TrueNAS</li>
            <li className="list-group-item">Ubuntu Server</li>
            <li className="list-group-item">OpenMediaVault</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h4 font-weight-bold">3. Online Resources</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="https://helper-scripts.com" target="_blank" rel="noopener noreferrer">helper-scripts.com</a>
            </li>
            <li className="list-group-item">
              <a href="https://www.reddit.com/r/homelab/" target="_blank" rel="noopener noreferrer">r/homelab on Reddit</a>
            </li>
            <li className="list-group-item">
              <a href="https://www.servethehome.com" target="_blank" rel="noopener noreferrer">ServeTheHome</a>
            </li>
            <li className="list-group-item">
              <a href="https://www.reddit.com/r/homeserver/" target="_blank" rel="noopener noreferrer">r/homeserver on Reddit</a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="text-center mt-auto">
        <p>© 2023 Homelab Resources</p>
      </footer>
    </div>
  );
}
