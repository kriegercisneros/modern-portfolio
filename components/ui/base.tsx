// components/ui/base.tsx
export const Card = ({ children, className = "" }) => (
    <div className={`
      bg-stone-light 
      border-3 border-accent 
      shadow-brutal 
      p-6 
      transition-all 
      hover:shadow-brutal-lg 
      ${className}
    `}>
      {children}
    </div>
  );
  
  export const SectionHeading = ({ children, className = "" }) => (
    <h3 className={`
      text-2xl 
      font-bold 
      text-accent 
      mb-4
      ${className}
    `}>
      {children}
    </h3>
  );