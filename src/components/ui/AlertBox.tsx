interface AlertBoxProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}

export default function AlertBox({ children, type = "info" }: AlertBoxProps) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-brand-blue",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    success: "bg-green-50 border-green-200 text-green-800",
  };

  return (
    <div className={`border rounded-lg p-4 my-4 text-sm leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  );
}
;
