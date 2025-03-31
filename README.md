# Lab & Server Website

A comprehensive website for homelab and homeserver enthusiasts, providing information on hardware, software, and best practices.

## Website Structure

The website consists of the following pages:

- **Home (index.html)**: Introduction to homelabs and homeservers
- **Quick Start (quickstart.html)**: Guide for beginners to get started
- **Hardware (hardware.html)**: Information about hardware options and recommendations
- **Software (software.html)**: Catalog of self-hosted applications
- **Glossary (glossary.html)**: Definitions of common terms
- **Blog (blog.html)**: Articles and tutorials

## Software Catalog Generation

The software catalog on the software.html page is generated from an Excel file (output.xlsx) using a Python script. The Excel file contains software information in the following format:

```
Title | Description | URL | Icon URL | Tags
```

For example:
```
qBittorrent | Fast and stable torrent client | https://www.qbittorrent.org | https://cdn.jsdelivr.net/gh/selfhst/icons/webp/qbittorrent.webp | Downloads, Torrents
```

### How to Generate the Software Catalog

1. Make sure you have Python installed on your system
2. Install the required Python packages:
   ```
   pip install pandas openpyxl
   ```
3. Navigate to the scripts directory:
   ```
   cd scripts
   ```
4. Run the Python script:
   ```
   python generate_software_catalog.py
   ```
5. The script will read the output.xlsx file and generate a JavaScript file (software.js) that populates the software catalog on the software.html page

## Customization

You can customize the website by:

- Modifying the CSS in the styles/main.css file
- Adding or updating content in the HTML files
- Adding new software entries to the output.xlsx file and regenerating the software catalog

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Python (for software catalog generation)
- Pandas (Python library for Excel file processing)

## Credits

- Font Awesome for icons
- Google Fonts for typography (Montserrat and Open Sans)