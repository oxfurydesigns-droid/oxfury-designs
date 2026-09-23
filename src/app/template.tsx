export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fade-slide-up">
      {children}
    </div>
  );
}
