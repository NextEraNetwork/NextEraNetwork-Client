export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold">NextEraNetwork</h1>
                    <p className="text-gray-500">Empowering Students for a Brighter Future</p>
                </div>
            </header>
          
          {children}
        </div>
    );
  }