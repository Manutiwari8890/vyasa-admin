import { useState } from "react";

const countries = [
"Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
"Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
"Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
"Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzaville)","Costa Rica",
"Croatia","Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
"El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon",
"Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
"Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
"Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos",
"Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi",
"Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova",
"Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands",
"New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau",
"Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia",
"Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia",
"Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan",
"Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand",
"Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
"United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen",
"Zambia","Zimbabwe"
];


export function CountrySelect({value, onChange}){

    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const filtered = countries.filter(c =>
        c.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <div className="relative">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                placeholder="Search Country"
                className="peer text-sm w-full pr-4 py-3 pl-4 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300"
            />
            {open &&
                <ul className="absolute w-full bg-white shadow-sm border border-gray-200 max-h-40 overflow-y-auto rounded-lg z-9">
                    {filtered.map((c, i) => (
                    <li
                        key={i}
                        onMouseDown={() => {
                            onChange(c);
                            setSearch(c);
                            setOpen(false);
                        }}
                        className="px-3 py-2 text-sm text-gray-700 hover:bg-teal hover:text-white cursor-pointer"
                    >
                        {c}
                    </li>
                    ))}
                </ul>
            }
            
            </div>
        </>
    )
} 