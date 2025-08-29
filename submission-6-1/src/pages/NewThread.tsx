import { useState } from 'react';

function NewThread() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(title, category, body);
  }

  return (
    <div className="p-8">
      <p className="text-2xl font-medium">Buat Diskusi Baru</p>

      <form onSubmit={(e) => handleAdd(e)} className="mt-3 flex flex-col gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="judul"
          className="rounded-lg border-1 p-2"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="kategori"
          className="rounded-lg border-1 p-2"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="body"
          rows={4}
          cols={50}
          className="rounded-lg border-1 p-2"
        />

        <button className="cursor-pointer rounded-lg bg-blue-950 p-2 text-white" type="submit">
          Buat
        </button>
      </form>
    </div>
  );
}

export default NewThread;
