import SearchSelect from "./SearchSelect";

export default function LocationFields({
  prefix = "",
  data,
  countries,
  statesByCountry,
  citiesByState,
  fieldLabels,
  onChange   
}) {
  const getKey = (field) => (prefix ? `${prefix}_${field}` : field);

  const countryId = data[getKey("country")];
  const country = countries.find(c => c.value == countryId) || null;
  const stateId = data[getKey("state")];

  const statesRaw = statesByCountry[countryId] || [];

  const states = statesRaw.map(s => ({
    label: s.name,
    value: s.id
  }));

  const state = states.find(s => s.value == stateId) || null;

  const cityId = data[getKey("city")];

  const citiesRaw = citiesByState[stateId] || [];

  const cities = citiesRaw.map(c => ({
    label: c.name,
    value: c.id
  }));

  const city = cities.find(c => c.value == cityId) || null;

  return (
    <>
    
    
     {/* <div className="border p-4 rounded space-y-3">
       <h3 className="font-semibold">{label}</h3> */}
       <div className="form-group">
          <label className="text-gray-700 text-sm font-semibold dark:text-gray-400">{fieldLabels?.country}</label>
          <SearchSelect
            options={countries}
            value={country}
            onChange={(val) => onChange(prefix, "country", val)}
            placeholder="Select Country"
          />
       </div>
      
      <div className="form-group">
          <label className="text-gray-700 text-sm font-semibold dark:text-gray-400">{fieldLabels?.state}</label>
          <SearchSelect
            options={states}
            value={state}
            onChange={(val) => onChange(prefix, "state", val)}
            placeholder="Select State"
            disabled={!country}
          />
      </div>

      <div className="form-group">
        <label className="text-gray-700 text-sm font-semibold dark:text-gray-400">{fieldLabels?.city}</label>
        <SearchSelect
          options={cities}
          value={city}
          onChange={(val) => onChange(prefix, "city", val)}
          placeholder="Select City"
          disabled={!state}
        />
      </div>
    </>
  );
}