interface Component {
  name: string;
  specs: string;
  price: string;
}

interface BuildTierCardProps {
  title: string;
  description: string;
  price: string;
  components: Component[];
}

export default function BuildTierCard({ title, description, price, components }: BuildTierCardProps) {
  return (
    <div className="card p-6">
      <h3 className="text-2xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-secondary mb-4">{description}</p>
      <div className="text-xl font-bold text-primary mb-4">{price}</div>
      
      <div className="space-y-3">
        {components.map((component) => (
          <div key={component.name} className="flex justify-between items-center">
            <div>
              <div className="font-medium">{component.name}</div>
              <div className="text-sm text-secondary">{component.specs}</div>
            </div>
            <div className="text-primary">{component.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 