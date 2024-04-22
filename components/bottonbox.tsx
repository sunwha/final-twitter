export default function BottonBox({ children }: { children: React.ReactNode }) {
  return <div className="fixed bottom-0 left-0 right-0 p-6">{children}</div>;
}
