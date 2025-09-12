import RestaurantItem from './RestaurantItem';

function RestaurantList({ restaurants }) {
  return (
    <div className="grid">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
}

export default RestaurantList;
