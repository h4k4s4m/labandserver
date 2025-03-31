import pandas as pd
import json
import os

# Path to the Excel file
excel_file = '../output.xlsx'

# Read the Excel file
df = pd.read_excel(excel_file)

# Clean column names (remove any whitespace)
df.columns = df.columns.str.strip()

# Ensure we have the expected columns
expected_columns = ['Title', 'Description', 'URL', 'Icon URL', 'Tags']
for col in expected_columns:
    if col not in df.columns:
        print(f"Error: Column '{col}' not found in the Excel file.")
        exit(1)

# Convert DataFrame to list of dictionaries
software_list = []

for _, row in df.iterrows():
    # Skip rows with missing essential data
    if pd.isna(row['Title']) or pd.isna(row['Description']):
        continue
        
    software = {
        'title': row['Title'] if not pd.isna(row['Title']) else '',
        'description': row['Description'] if not pd.isna(row['Description']) else '',
        'url': row['URL'] if not pd.isna(row['URL']) else '#',
        'icon_url': row['Icon URL'] if not pd.isna(row['Icon URL']) else '',
        'tags': [tag.strip() for tag in row['Tags'].split(',')] if not pd.isna(row['Tags']) else []
    }
    
    software_list.append(software)

# Extract all unique tags for filtering
all_tags = set()
for software in software_list:
    all_tags.update(software['tags'])

all_tags = sorted(list(all_tags))

# Create JavaScript file with the data
js_content = f"""
// Generated software catalog data
const softwareData = {json.dumps(software_list, indent=2)};

// All unique tags for filtering
const allTags = {json.dumps(all_tags, indent=2)};

// Function to initialize the software catalog
function initSoftwareCatalog() {{
    const softwareGrid = document.getElementById('software-grid');
    const categoryFilters = document.getElementById('category-filters');
    const searchInput = document.getElementById('software-search');
    
    // Clear loading placeholder
    softwareGrid.innerHTML = '';
    
    // Add category filters
    allTags.forEach(tag => {{
        const filterTag = document.createElement('span');
        filterTag.className = 'filter-tag';
        filterTag.dataset.filter = tag;
        filterTag.textContent = tag;
        categoryFilters.appendChild(filterTag);
        
        filterTag.addEventListener('click', function() {{
            // Toggle active class
            document.querySelectorAll('.filter-tag').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            
            // Filter software cards
            filterSoftware();
        }});
    }});
    
    // Add search functionality
    if (searchInput) {{
        searchInput.addEventListener('input', filterSoftware);
    }}
    
    // Render all software cards initially
    renderSoftwareCards(softwareData);
    
    // Function to filter software based on search and category
    function filterSoftware() {{
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const activeFilter = document.querySelector('.filter-tag.active');
        const filterTag = activeFilter ? activeFilter.dataset.filter : 'all';
        
        let filteredSoftware = softwareData;
        
        // Filter by tag if not 'all'
        if (filterTag !== 'all') {{
            filteredSoftware = softwareData.filter(software => 
                software.tags.includes(filterTag)
            );
        }}
        
        // Filter by search term
        if (searchTerm) {{
            filteredSoftware = filteredSoftware.filter(software => 
                software.title.toLowerCase().includes(searchTerm) || 
                software.description.toLowerCase().includes(searchTerm) ||
                software.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }}
        
        // Render filtered cards
        renderSoftwareCards(filteredSoftware);
    }}
    
    // Function to render software cards
    function renderSoftwareCards(softwareList) {{
        softwareGrid.innerHTML = '';
        
        if (softwareList.length === 0) {{
            softwareGrid.innerHTML = '<p>No software found matching your criteria.</p>';
            return;
        }}
        
        softwareList.forEach(software => {{
            const card = document.createElement('div');
            card.className = 'software-card';
            
            const hasIcon = software.icon_url && software.icon_url.trim() !== '';
            
            card.innerHTML = `
                <div class="software-header">
                    ${{hasIcon ? 
                        `<img src="${{software.icon_url}}" alt="${{software.title}} icon" class="software-icon">` : 
                        `<div class="software-icon-placeholder"><i class="fas fa-cube"></i></div>`
                    }}
                    <h3 class="software-title">${{software.title}}</h3>
                </div>
                <div class="software-body">
                    <p class="software-description">${{software.description}}</p>
                    <div class="software-tags">
                        ${{software.tags.map(tag => `<span class="software-tag">${{tag}}</span>`).join('')}}
                    </div>
                    <a href="${{software.url}}" class="software-link btn btn-sm" target="_blank">Visit Website</a>
                </div>
            `;
            
            softwareGrid.appendChild(card);
        }});
    }}
}}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initSoftwareCatalog);
"""

# Create the scripts directory if it doesn't exist
os.makedirs('../scripts', exist_ok=True)

# Write the JavaScript file
with open('../scripts/software.js', 'w') as f:
    f.write(js_content)

print(f"Successfully generated software catalog with {len(software_list)} entries.")
print("JavaScript file created at: scripts/software.js")