import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh flex gap-4">
      <Sidebar />
      <div className="md:ml-64 flex-1 p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </main>
  );
}
