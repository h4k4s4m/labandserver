"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('entry-level');

  const renderContent = () => {
    switch (activeTab) {
      case 'entry-level':
        return (
          <div className="card p-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="w-1/3">Component</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {tierContent['entry-level'].map((item) => (
                  <tr key={item.component}>
                    <td className="font-medium">{item.component}</td>
                    <td>
                      {item.description}
                      <a href={item.link} 
                         className="ml-2 text-primary hover:text-primary-light" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        View on Amazon →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'mid-tier':
        return (
          <div className="card p-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="w-1/3">Component</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {tierContent['mid-tier'].map((item) => (
                  <tr key={item.component}>
                    <td className="font-medium">{item.component}</td>
                    <td>
                      {item.description}
                      <a href={item.link} 
                         className="ml-2 text-primary hover:text-primary-light" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        View on Amazon →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'high-end':
        return (
          <div className="card p-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="w-1/3">Component</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {tierContent['high-end'].map((item) => (
                  <tr key={item.component}>
                    <td className="font-medium">{item.component}</td>
                    <td>
                      {item.description}
                      <a href={item.link} 
                         className="ml-2 text-primary hover:text-primary-light" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        View on {item.component.includes('PowerEdge') ? 'eBay' : 'Amazon'} →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Homelab and Home Server Resources
          </h1>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Your comprehensive guide to building and managing a home server setup,
            from entry-level to enterprise-grade solutions.
          </p>
        </header>

        <div className="grid gap-8">
          <section className="card p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              1. Recommended Parts via Tier List
            </h2>
            <p className="text-secondary mb-6">
              Choose the perfect hardware configuration based on your needs and budget:
            </p>

            <div className="nav nav-tabs flex mb-6" role="tablist">
              {['Entry Level', 'Mid Tier', 'High End'].map((tier) => (
                <button
                  key={tier.toLowerCase().replace(' ', '-')}
                  className={`nav-link ${
                    activeTab === tier.toLowerCase().replace(' ', '-') ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab(tier.toLowerCase().replace(' ', '-'))}
                >
                  {tier}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {renderContent()}
            </div>
          </section>

          {softwareSection()}
        </div>
      </div>
    </div>
  );
}

const tierContent = {
  'entry-level': [
    {
      component: 'Raspberry Pi 5 Board',
      description: 'Available in 4GB and 8GB RAM variants (8GB recommended).',
      link: 'https://www.amazon.com/s?k=Raspberry+Pi+5'
    },
    {
      component: 'Power Supply',
      description: 'Official Raspberry Pi 5 27W USB-C Power Supply',
      link: 'https://www.amazon.com/s?k=raspberry+pi+5+power+supply'
    },
    {
      component: 'MicroSD Card',
      description: 'Samsung EVO Plus 128GB or similar high-quality card',
      link: 'https://www.amazon.com/s?k=samsung+evo+plus+microsd'
    },
    {
      component: 'Case with Fan',
      description: 'Official Pi 5 case with active cooling',
      link: 'https://www.amazon.com/s?k=raspberry+pi+5+case'
    }
  ],
  'mid-tier': [
    {
      component: 'Intel NUC',
      description: 'Intel NUC 12 or 13 with i5/i7 processor (recommended: NUC13ANHi5)',
      link: 'https://www.amazon.com/s?k=intel+nuc+13'
    },
    {
      component: 'Memory',
      description: '32GB DDR4 RAM (2x16GB) 3200MHz',
      link: 'https://www.amazon.com/s?k=ddr4+sodimm+32gb+3200mhz'
    },
    {
      component: 'Primary Storage',
      description: '1TB NVMe SSD (Samsung 970 EVO Plus or similar)',
      link: 'https://www.amazon.com/s?k=samsung+970+evo+plus+1tb'
    },
    {
      component: 'Secondary Storage',
      description: '4TB 2.5" SATA SSD for data storage',
      link: 'https://www.amazon.com/s?k=4tb+2.5+sata+ssd'
    },
    {
      component: 'Network Card',
      description: '2.5GbE Network Adapter (if not built-in)',
      link: 'https://www.amazon.com/s?k=2.5gbe+network+adapter'
    }
  ],
  'high-end': [
    {
      component: 'Server Hardware',
      description: 'Dell PowerEdge R720/R730 or similar enterprise server (Dual Xeon E5-2680 v2)',
      link: 'https://www.ebay.com/sch/i.html?_nkw=dell+poweredge+r720+dual+xeon'
    },
    {
      component: 'ECC Memory',
      description: '128GB ECC DDR3 RAM (8x16GB or 16x8GB configuration)',
      link: 'https://www.amazon.com/s?k=server+ddr3+ecc+reg+16gb'
    },
    {
      component: 'Boot Drive',
      description: '2x 480GB Enterprise SSDs in RAID 1 for OS',
      link: 'https://www.amazon.com/s?k=enterprise+ssd+480gb'
    },
    {
      component: 'Storage Array',
      description: '4x 4TB Enterprise HDDs (Seagate Exos or WD Gold) in RAID 10',
      link: 'https://www.amazon.com/s?k=4tb+enterprise+hdd'
    },
    {
      component: 'Network Card',
      description: 'Intel X520 10GbE Dual Port Network Adapter',
      link: 'https://www.amazon.com/s?k=intel+x520+10gbe'
    },
    {
      component: 'Rail Kit',
      description: 'Compatible rack mounting rail kit',
      link: 'https://www.ebay.com/sch/i.html?_nkw=dell+r720+rail+kit'
    }
  ]
};

const softwareSection = () => (
  <section className="card p-6 mt-8">
    <h2 className="text-2xl font-semibold text-primary mb-4">
      2. Recommended Software Solutions
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          name: 'Proxmox VE',
          description: 'Enterprise-grade virtualization platform',
          link: 'https://www.proxmox.com/en/proxmox-ve'
        },
        {
          name: 'TrueNAS SCALE',
          description: 'Open-source storage solution with containers',
          link: 'https://www.truenas.com/truenas-scale/'
        },
        {
          name: 'Home Assistant',
          description: 'Open-source home automation platform',
          link: 'https://www.home-assistant.io/'
        },
        {
          name: 'Docker',
          description: 'Container platform for applications',
          link: 'https://www.docker.com/'
        },
        {
          name: 'Kubernetes',
          description: 'Container orchestration for advanced users',
          link: 'https://kubernetes.io/'
        },
        {
          name: 'Pi-hole',
          description: 'Network-wide ad blocking',
          link: 'https://pi-hole.net/'
        }
      ].map((software) => (
        <div key={software.name} className="card p-4 hover:shadow-lg">
          <h3 className="text-xl font-medium text-primary mb-2">{software.name}</h3>
          <p className="text-secondary mb-3">{software.description}</p>
          <a
            href={software.link}
            className="text-primary hover:text-primary-light flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More →
          </a>
        </div>
      ))}
    </div>
  </section>
);