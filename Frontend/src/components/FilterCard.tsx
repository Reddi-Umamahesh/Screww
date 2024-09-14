import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi, Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Category",
    array: ["Electronics", "Painters", "Civil", "Plumbers"],
  },
  {
    filterType: "Fee",
    array: ["0-1k", "800-4k", "4k to 9k"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="text-lg font-bold ">Filter</h1>
      <hr className="mt-3 mb-3" />
      {filterData.map((data, index) => (
        <div key={index} className="mb-4">
          <h2 className="font-bold text-lg">{data.filterType}</h2>
          <RadioGroup>
            {data.array.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 my-2">
                <RadioGroupItem
                  value={item}
                  id={`filter-${data.filterType}-${index}`}
                />
                <Label htmlFor={`filter-${data.filterType}-${index}`}>
                  {item}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
