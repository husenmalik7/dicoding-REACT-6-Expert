function Leaderboards() {
  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-medium">Klasemen Pengguna Aktif</h2>

      <div className="mb-2 flex w-full justify-between text-xl">
        <p>Pengguna</p>
        <p>Skor</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex h-12 items-center">
          <img
            className="mr-2 h-10 rounded-full"
            src="https://ui-avatars.com/api/?name=Dimas Saputra&amp;background=random"
            alt="Dimas"
          />
          <p className="text-xl">Dimassd</p>
        </div>
        <p className="text-xl">5555</p>
      </div>
    </div>
  );
}

export default Leaderboards;
