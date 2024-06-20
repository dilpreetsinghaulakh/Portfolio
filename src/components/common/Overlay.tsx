export default function Overlay({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  return isOpen ? (
    <div className="fixed h-screen w-screen inset-0 z-50">{children}</div>
  ) : null;
}
