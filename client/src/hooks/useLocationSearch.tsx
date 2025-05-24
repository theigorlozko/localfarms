import { useDispatch } from 'react-redux';
import { setFilters } from '@/state';
import { FiltersState } from '@/state';

export const useLocationSearch = () => {
  const dispatch = useDispatch();

  const handleLocationSearch = async (location: string) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          location
        )}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&fuzzyMatch=true`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        dispatch(
          setFilters({
            location,
            coordinates: [lng, lat],
          } as Partial<FiltersState>)
        );
      }
    } catch (err) {
      console.error("Mapbox search failed", err);
    }
  };

  return { handleLocationSearch };
};
