import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      name: "Maxn Raval",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Venely K",
      text: "Excellent plant quality and fast delivery. Highly recommended!",
    },
    {
      name: "Lii Thakur",
      text: "Great designs and customer service — I'll buy again.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <h3 className="text-4xl text-white font-semibold mb-8">Customer Review</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div key={r.name} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white/6" />
              <div>
                <div className="text-white font-semibold">{r.name}</div>
              </div>
            </div>
            <p className="mt-4 text-white/80">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}