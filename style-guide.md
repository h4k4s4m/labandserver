---
sidebar_position: 0
title: "Documentation Style Guide 📝"
description: "Guidelines for maintaining consistent documentation"
---

import styles from '../src/css/styles.module.css';

# Documentation Style Guide 📝

## File Structure

### Frontmatter
```md
---
sidebar_position: <number>
title: "<Title> <emoji>"
description: "<One sentence description>"
toc_min_heading_level: 2 # optional
toc_max_heading_level: 3 # optional
---
```

### Imports
Always include the styles import at the top:
```md
import styles from '../src/css/styles.module.css';
```

## Emoji Usage

- Use one emoji per main heading
- Place emoji after the text
- Common sections:
  - 💡 Key Benefits/Tips
  - 🛠️ Technical Setup
  - ⚙️ Configuration
  - 🎯 Goals/Purpose
  - 📚 Resources
  - ⚡ Performance
  - 🔒 Security

## Component Structure

### Cards
```md
<div className={styles.card}>
  <h3>💡 Section Title</h3>
  <ul>
    <li>Point one</li>
    <li>Point two</li>
  </ul>
</div>
```

### Grids
```md
<div className={styles.gridContainer}>
  <div className={styles.card}>
    // Content
  </div>
</div>
```

### Admonitions
Use these callout boxes to highlight important information:

```md
:::note Title
Note content
:::

:::tip Title
Tip content
:::

:::info Title
Info content
:::

:::warning Title
Warning content
:::

:::danger Title
Danger/critical content
:::

:::caution Title
Caution content
:::
```

You can also use them without titles and with custom titles:
```md
:::tip
Content without title
:::

:::info Custom Title
Content with custom title
:::
```

## Content Guidelines

### Headers
- H1: Page title with emoji
- H2: Major sections
- H3: Subsections
- H4: Used sparingly for special cases

### Lists
- Use bullet points for unordered lists
- Use numbered lists for sequential steps
- Keep list items concise

### Code Examples
````md
```bash
# Command examples
```
````

### Tables
```md
| Header 1 | Header 2 |
|----------|----------|
| Content  | Content  |
```

### Links
- Internal: `[Link Text](../relative/path)`
- External: `[Link Text](https://external.url)`

## Common CSS Classes

- `styles.card` - Basic card container
- `styles.gridContainer` - Grid layout
- `styles.heroImage` - Large header images
- `styles.featuresGrid` - Feature comparison
- `styles.purposeGrid` - Purpose/goals layout
- `styles.comparisonGrid` - Side-by-side comparison

## Images

- Use descriptive alt text
- Add loading attribute for large images
- Place in `/docs/img/` directory
```md
<img 
  src="../../img/image-name.jpg" 
  alt="Descriptive text" 
  loading="lazy" 
  className={styles.heroImage}
/>
```

### Docusaurus-specific Components

#### Table of Contents
```md
import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={3} />
```

#### Code Blocks
````md
```jsx title="src/components/Hello.js" {1,4-6,11}
function HelloCodeBlock() {
  return <h1>Hello World</h1>;
}
```
````

#### MDX Features
```md
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

#### Details/Expandable Sections
```md
<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This content is hidden by default</div>
  </div>
</details>
```

## Checklists

Before submitting documentation:
- [ ] Frontmatter complete
- [ ] Styles imported
- [ ] Consistent emoji usage
- [ ] Proper heading hierarchy
- [ ] Tips/info boxes where helpful
- [ ] Images properly referenced
- [ ] Links verified
- [ ] Mobile-friendly layouts
