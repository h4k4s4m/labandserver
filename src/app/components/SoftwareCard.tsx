interface SoftwareCardProps {
  name: string;
  description: string;
  url: string;
  icon: string;
}

export default function SoftwareCard({ name, description, url, icon }: SoftwareCardProps) {
  return (
    <a href={url} className="card p-4 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-3">
        <i className={`bi bi-${icon}`}></i>
        <h3 className="text-xl font-medium">{name}</h3>
      </div>
      <p className="mt-2 text-secondary">{description}</p>
    </a>
  );
} 