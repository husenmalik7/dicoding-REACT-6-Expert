function NewThread() {
  return (
    <div className="p-8">
      <p className="text-2xl font-medium">Buat Diskusi Baru</p>

      <form className="mt-3 flex flex-col gap-2">
        <input type="text" placeholder="judul" className="rounded-lg border-1 p-2" />
        <input type="text" placeholder="kategori" className="rounded-lg border-1 p-2" />
        <textarea placeholder="body" rows={4} cols={50} className="rounded-lg border-1 p-2" />

        <button className="cursor-pointer rounded-lg bg-blue-950 p-2 text-white" type="submit">
          Buat
        </button>
      </form>
    </div>
  );
}

export default NewThread;
