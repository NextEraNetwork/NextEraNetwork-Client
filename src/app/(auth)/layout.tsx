export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md py-4 sticky top-0">
        <div className="container px-5 ">
          <h1 className="text-xl md:text-4xl font-bold text-white transition duration-300 hover:underline">
            NextEraNetwork
          </h1>
          <p className="text-sm md:text-lg text-gray-200 md:mt-2">
            Empowering Students for a Brighter Future
          </p>
        </div>
      </header>
      {children}
    </div>
  );
}