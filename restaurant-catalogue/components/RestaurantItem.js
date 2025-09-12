import Link from 'next/link';

function RestaurantItem({ id, pictureId, name, description }) {
  return (
    <div className="card">
      <img
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={name}
      />

      <div className="container">
        <h2>
          <Link href={`/detail/${id}`}>{name}</Link>
        </h2>
        <p>{description}</p>
        <br />
      </div>
    </div>
  );
}

export default RestaurantItem;
