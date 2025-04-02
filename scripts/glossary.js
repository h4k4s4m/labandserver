// Lab & Server Glossary JavaScript

// Glossary data organized alphabetically
const glossaryData = {
    "a": [
        {
            "term": "Active Directory (AD)",
            "definition": "A directory service developed by Microsoft that provides authentication and authorization services for Windows-based networks. It stores information about objects on the network and makes this information available to users and network administrators."
        },
        {
            "term": "API (Application Programming Interface)",
            "definition": "A set of rules and protocols that allows different software applications to communicate with each other. APIs are essential for integrating various services and applications in a homelab environment."
        },
        {
            "term": "Automation",
            "definition": "The process of setting up systems to perform tasks automatically without human intervention. In a homelab context, this often involves using tools like Ansible, Terraform, or custom scripts to automate deployment, configuration, and maintenance tasks."
        }
    ],
    "b": [
        {
            "term": "Backup",
            "definition": "A copy of data that can be used to restore the original in case of data loss. Regular backups are essential for any homelab or homeserver setup to prevent data loss due to hardware failure, user error, or other issues."
        },
        {
            "term": "Bare Metal",
            "definition": "Refers to a computer running an operating system directly on its hardware without any virtualization layer. In contrast to virtual machines or containers, bare metal installations have direct access to all hardware resources."
        },
        {
            "term": "BIOS (Basic Input/Output System)",
            "definition": "Firmware that initializes hardware during the booting process before the operating system starts. Modern systems often use UEFI (Unified Extensible Firmware Interface) instead, which offers more features and capabilities."
        }
    ],
    "c": [
        {
            "term": "Container",
            "definition": "A lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, runtime, system tools, libraries, and settings. Docker and Podman are popular containerization platforms used in homelabs."
        },
        {
            "term": "CPU (Central Processing Unit)",
            "definition": "The primary component of a computer that performs most of the processing inside the computer. In server contexts, multi-core CPUs are common to handle multiple tasks simultaneously."
        },
        {
            "term": "CIDR (Classless Inter-Domain Routing)",
            "definition": "A method for allocating IP addresses and routing IP packets. CIDR notation is written as an IP address followed by a slash and a number (e.g., 192.168.1.0/24), which indicates the number of bits used for the network prefix."
        }
    ],
    "d": [
        {
            "term": "DNS (Domain Name System)",
            "definition": "A hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It translates domain names to IP addresses."
        },
        {
            "term": "Docker",
            "definition": "A platform that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files."
        },
        {
            "term": "DHCP (Dynamic Host Configuration Protocol)",
            "definition": "A network management protocol used to automate the process of configuring devices on IP networks. DHCP servers dynamically assign IP addresses and other network configuration parameters to devices."
        }
    ],
    "e": [
        {
            "term": "ECC (Error-Correcting Code) Memory",
            "definition": "A type of computer memory that can detect and correct common types of memory data corruption. ECC memory is often used in servers to improve reliability."
        },
        {
            "term": "Ethernet",
            "definition": "A family of wired computer networking technologies commonly used in local area networks (LAN) and wide area networks (WAN). It defines wiring and signaling standards for the physical layer of the OSI model."
        }
    ],
    "f": [
        {
            "term": "Firewall",
            "definition": "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Firewalls establish a barrier between a trusted internal network and untrusted external networks."
        },
        {
            "term": "FQDN (Fully Qualified Domain Name)",
            "definition": "The complete domain name for a specific computer or host on the internet, consisting of the hostname and the domain name. For example, server1.example.com is an FQDN."
        }
    ],
    "g": [
        {
            "term": "Git",
            "definition": "A distributed version control system for tracking changes in source code during software development. It's designed for coordinating work among programmers, but it can be used to track changes in any set of files."
        },
        {
            "term": "GPU (Graphics Processing Unit)",
            "definition": "A specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device. In homelabs, GPUs can be used for transcoding media or for computational tasks."
        }
    ],
    "h": [
        {
            "term": "Homelab",
            "definition": "A personal laboratory at home where individuals can experiment with hardware, software, and networking technologies. Homelabs are used for learning, testing, and personal projects."
        },
        {
            "term": "Hypervisor",
            "definition": "Software, firmware, or hardware that creates and runs virtual machines. A hypervisor allows one host computer to support multiple guest VMs by virtually sharing its resources."
        }
    ],
    "i": [
        {
            "term": "IaC (Infrastructure as Code)",
            "definition": "The process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."
        },
        {
            "term": "IP Address",
            "definition": "A numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. IP addresses serve two main functions: host or network interface identification and location addressing."
        }
    ],
    "j": [
        {
            "term": "JBOD (Just a Bunch Of Disks)",
            "definition": "A collection of hard drives that are not configured in any RAID structure. Each disk is presented as an individual drive to the operating system."
        }
    ],
    "k": [
        {
            "term": "Kubernetes (K8s)",
            "definition": "An open-source container orchestration system for automating application deployment, scaling, and management. It groups containers that make up an application into logical units for easy management and discovery."
        },
        {
            "term": "KVM (Kernel-based Virtual Machine)",
            "definition": "A virtualization module in the Linux kernel that allows the kernel to function as a hypervisor. KVM requires a processor with hardware virtualization extensions."
        }
    ],
    "l": [
        {
            "term": "LAN (Local Area Network)",
            "definition": "A computer network that interconnects computers within a limited area such as a residence, school, laboratory, university campus or office building."
        },
        {
            "term": "Load Balancing",
            "definition": "The process of distributing network or application traffic across multiple servers to ensure no single server bears too much demand. This improves responsiveness and availability of applications."
        }
    ],
    "m": [
        {
            "term": "Microservices",
            "definition": "An architectural style that structures an application as a collection of loosely coupled services. Each service is fine-grained and communicates with lightweight mechanisms."
        },
        {
            "term": "Monitoring",
            "definition": "The process of observing and checking the behavior and outputs of a system over time. In a homelab, monitoring tools track system performance, availability, and security."
        }
    ],
    "n": [
        {
            "term": "NAS (Network Attached Storage)",
            "definition": "A file-level computer data storage server connected to a computer network providing data access to a heterogeneous group of clients. NAS is specialized for serving files."
        },
        {
            "term": "NAT (Network Address Translation)",
            "definition": "A method of remapping one IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device."
        }
    ],
    "o": [
        {
            "term": "Open Source",
            "definition": "Software with source code that anyone can inspect, modify, and enhance. Open source projects, products, or initiatives embrace principles of open exchange, collaborative participation, and community-oriented development."
        },
        {
            "term": "OS (Operating System)",
            "definition": "System software that manages computer hardware, software resources, and provides common services for computer programs. Popular server operating systems include Linux distributions, Windows Server, and FreeBSD."
        }
    ],
    "p": [
        {
            "term": "Proxy Server",
            "definition": "A server that acts as an intermediary for requests from clients seeking resources from other servers. A proxy server may exist in the same machine as a firewall server or it may be on a separate server."
        },
        {
            "term": "PXE (Preboot Execution Environment)",
            "definition": "An environment to boot computers using a network interface independently of data storage devices or installed operating systems. It's commonly used for remote OS installation and diskless workstations."
        }
    ],
    "q": [
        {
            "term": "QoS (Quality of Service)",
            "definition": "The description or measurement of the overall performance of a service, particularly the performance seen by the users of the network. QoS involves prioritization of network traffic."
        }
    ],
    "r": [
        {
            "term": "RAID (Redundant Array of Independent Disks)",
            "definition": "A data storage virtualization technology that combines multiple physical disk drive components into one or more logical units for the purposes of data redundancy, performance improvement, or both."
        },
        {
            "term": "Reverse Proxy",
            "definition": "A type of proxy server that retrieves resources on behalf of a client from one or more servers. These resources are then returned to the client, appearing as if they originated from the proxy server itself."
        }
    ],
    "s": [
        {
            "term": "SAN (Storage Area Network)",
            "definition": "A dedicated high-speed network that provides access to consolidated, block-level data storage. SANs are primarily used to enhance storage devices accessible to servers."
        },
        {
            "term": "SSH (Secure Shell)",
            "definition": "A cryptographic network protocol for operating network services securely over an unsecured network. SSH provides a secure channel over an unsecured network by using a client-server architecture."
        },
        {
            "term": "SSL/TLS (Secure Sockets Layer/Transport Layer Security)",
            "definition": "Cryptographic protocols designed to provide communications security over a computer network. They use certificates to establish an encrypted link between a server and a client."
        }
    ],
    "t": [
        {
            "term": "Terraform",
            "definition": "An open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files."
        },
        {
            "term": "Transcoding",
            "definition": "The direct digital-to-digital conversion of one encoding to another. In media servers, transcoding is used to convert video or audio files from one format to another for compatibility with different devices."
        }
    ],
    "u": [
        {
            "term": "UEFI (Unified Extensible Firmware Interface)",
            "definition": "A specification that defines a software interface between an operating system and platform firmware. UEFI replaces the legacy BIOS firmware interface present in all IBM PC-compatible personal computers."
        },
        {
            "term": "UPS (Uninterruptible Power Supply)",
            "definition": "An electrical apparatus that provides emergency power to a load when the input power source or mains power fails. A UPS is typically used to protect hardware such as computers, data centers, and servers."
        }
    ],
    "v": [
        {
            "term": "VLAN (Virtual Local Area Network)",
            "definition": "A logical subnetwork that groups a collection of devices from different physical LANs. VLANs improve network performance by separating large broadcast domains into smaller ones."
        },
        {
            "term": "VM (Virtual Machine)",
            "definition": "An emulation of a computer system that provides the functionality of a physical computer. Virtual machines are based on computer architectures and provide functionality of a physical computer."
        },
        {
            "term": "VPN (Virtual Private Network)",
            "definition": "A technology that creates a safe and encrypted connection over a less secure network, such as the internet. VPNs are often used to access region-restricted websites or shield browsing activity from public Wi-Fi networks."
        }
    ],
    "w": [
        {
            "term": "WAN (Wide Area Network)",
            "definition": "A telecommunications network that extends over a large geographical area for the primary purpose of computer networking. WANs often connect multiple LANs together."
        },
        {
            "term": "Wake-on-LAN (WoL)",
            "definition": "An Ethernet or Token Ring computer networking standard that allows a computer to be turned on or awakened by a network message. The message is usually sent to the target computer by a program executed on a device connected to the same network."
        }
    ],
    "x": [
        {
            "term": "XSS (Cross-Site Scripting)",
            "definition": "A type of security vulnerability typically found in web applications. XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users."
        }
    ],
    "y": [
        {
            "term": "YAML (YAML Ain't Markup Language)",
            "definition": "A human-readable data serialization standard that can be used in conjunction with all programming languages. YAML is commonly used for configuration files and in applications where data is being stored or transmitted."
        }
    ],
    "z": [
        {
            "term": "Zero Trust Security",
            "definition": "A security concept centered on the belief that organizations should not automatically trust anything inside or outside its perimeters and instead must verify anything and everything trying to connect to its systems before granting access."
        },
        {
            "term": "ZFS (Z File System)",
            "definition": "A combined file system and logical volume manager designed by Sun Microsystems. ZFS features include protection against data corruption, support for high storage capacities, and various data compression methods."
        }
    ]
};

// Create a custom element for the glossary
class GlossaryComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        // Create styles for the shadow DOM
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                font-family: var(--body-font, 'Open Sans', sans-serif);
            }
            
            .glossary-section {
                margin-bottom: 3rem;
            }
            
            .glossary-letter {
                font-size: 2rem;
                color: var(--primary-blue, #1E88E5);
                border-bottom: 2px solid var(--border-light, #E0E0E0);
                padding-bottom: 0.5rem;
                margin-bottom: 1.5rem;
            }
            
            .glossary-term {
                margin-bottom: 1.5rem;
                padding-bottom: 1.5rem;
                border-bottom: 1px solid var(--border-light, #E0E0E0);
            }
            
            .glossary-term:last-child {
                border-bottom: none;
            }
            
            .term-title {
                font-size: 1.25rem;
                margin-bottom: 0.5rem;
                color: var(--text-dark, #333333);
            }
            
            .term-definition {
                color: var(--text-light, #757575);
            }
            
            .no-results {
                padding: 2rem;
                text-align: center;
                color: var(--text-light, #757575);
                font-style: italic;
            }
        `;

        // Create the container for the glossary content
        const container = document.createElement('div');
        container.className = 'glossary-container';
        
        // Append the style and container to the shadow DOM
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(container);
        
        // Initial render of all terms
        this.renderTerms();
        
        // Set up event listeners for search and filter
        this.setupEventListeners();
    }
    
    renderTerms(searchTerm = '', activeLetter = null) {
        const container = this.shadowRoot.querySelector('.glossary-container');
        container.innerHTML = '';
        
        let hasResults = false;
        
        // Loop through each letter in the glossary data
        for (const letter in glossaryData) {
            // Skip this letter if an active letter is specified and this isn't it
            if (activeLetter && letter !== activeLetter) continue;
            
            const terms = glossaryData[letter];
            const filteredTerms = searchTerm ? 
                terms.filter(term => 
                    term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
                ) : terms;
            
            // Skip this letter if there are no matching terms
            if (filteredTerms.length === 0) continue;
            
            hasResults = true;
            
            // Create a section for this letter
            const section = document.createElement('div');
            section.className = 'glossary-section';
            section.id = `section-${letter}`;
            
            // Add the letter heading
            const letterHeading = document.createElement('h2');
            letterHeading.className = 'glossary-letter';
            letterHeading.textContent = letter.toUpperCase();
            section.appendChild(letterHeading);
            
            // Add each term for this letter
            filteredTerms.forEach(term => {
                const termElement = document.createElement('div');
                termElement.className = 'glossary-term';
                
                const titleElement = document.createElement('h3');
                titleElement.className = 'term-title';
                titleElement.textContent = term.term;
                
                const definitionElement = document.createElement('p');
                definitionElement.className = 'term-definition';
                definitionElement.textContent = term.definition;
                
                termElement.appendChild(titleElement);
                termElement.appendChild(definitionElement);
                section.appendChild(termElement);
            });
            
            container.appendChild(section);
        }
        
        // Show a message if no results were found
        if (!hasResults) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No matching terms found. Please try a different search.';
            container.appendChild(noResults);
        }
    }
    
    setupEventListeners() {
        // Listen for custom events from the parent document
        document.addEventListener('glossary-search', (event) => {
            this.renderTerms(event.detail.searchTerm);
        });
        
        document.addEventListener('glossary-filter', (event) => {
            this.renderTerms('', event.detail.letter);
        });
        
        document.addEventListener('glossary-reset', () => {
            this.renderTerms();
        });
    }
}

// Register the custom element
customElements.define('glossary-component', GlossaryComponent);

// Initialize the glossary when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const searchInput = document.getElementById('glossary-search');
    const alphabetNav = document.getElementById('alphabet-nav');
    const glossaryContainer = document.getElementById('glossary-container');
    
    // Create and append the glossary component if the container exists
    if (glossaryContainer) {
        // Clear any loading content
        glossaryContainer.innerHTML = '';
        
        // Create the custom element
        const glossaryComponent = document.createElement('glossary-component');
        glossaryContainer.appendChild(glossaryComponent);
        
        // Set up search functionality
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                // Dispatch a custom event for the search
                document.dispatchEvent(new CustomEvent('glossary-search', {
                    detail: { searchTerm }
                }));
                
                // Update the active state of alphabet links
                if (alphabetNav) {
                    const links = alphabetNav.querySelectorAll('a');
                    links.forEach(link => link.classList.remove('active'));
                }
            });
        }
        
        // Set up alphabet navigation
        if (alphabetNav) {
            const links = alphabetNav.querySelectorAll('a');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Clear the search input
                    if (searchInput) {
                        searchInput.value = '';
                    }
                    
                    // Update the active state
                    links.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Get the letter from the href attribute
                    const letter = this.getAttribute('href').replace('#section-', '');
                    
                    // Dispatch a custom event for the filter
                    document.dispatchEvent(new CustomEvent('glossary-filter', {
                        detail: { letter }
                    }));
                });
            });
        }
    }
});