/* =============================================
   COUNTRY / CITY DROPDOWN — Enquiry Form
   ============================================= */

var COUNTRY_CITIES = {
  "United Arab Emirates": ["Abu Dhabi","Dubai","Sharjah","Ajman","Ras Al Khaimah","Fujairah","Umm Al Quwain","Al Ain","Khor Fakkan"],
  "Saudi Arabia": ["Riyadh","Jeddah","Mecca","Medina","Dammam","Khobar","Dhahran","Tabuk","Abha","Najran","Hail","Yanbu","Taif","Jubail"],
  "Kuwait": ["Kuwait City","Hawalli","Salmiya","Farwaniya","Ahmadi","Jahra","Fintas","Mangaf"],
  "Bahrain": ["Manama","Riffa","Muharraq","Hamad Town","Isa Town","Sitra","Budaiya","Jidhafs"],
  "Qatar": ["Doha","Al Wakrah","Al Khor","Al Rayyan","Lusail","Umm Salal","Al Shamal","Dukhan"],
  "Oman": ["Muscat","Salalah","Sohar","Nizwa","Sur","Ibri","Buraimi","Khasab","Rustaq"],
  "Jordan": ["Amman","Zarqa","Irbid","Aqaba","Madaba","Jerash","Salt","Mafraq"],
  "Egypt": ["Cairo","Alexandria","Giza","Hurghada","Sharm El Sheikh","Luxor","Aswan","Port Said","Suez","Mansoura","Tanta","Zagazig"],
  "India": ["Mumbai","Delhi","Bengaluru","Hyderabad","Chennai","Kolkata","Ahmedabad","Pune","Jaipur","Lucknow","Surat","Kochi","Chandigarh","Nagpur","Indore","Bhopal","Visakhapatnam","Coimbatore","Vadodara","Agra"],
  "Pakistan": ["Karachi","Lahore","Islamabad","Rawalpindi","Faisalabad","Multan","Peshawar","Quetta","Sialkot","Gujranwala"],
  "Bangladesh": ["Dhaka","Chittagong","Sylhet","Khulna","Rajshahi","Barisal","Comilla","Mymensingh"],
  "Sri Lanka": ["Colombo","Kandy","Galle","Negombo","Jaffna","Trincomalee","Nuwara Eliya","Batticaloa"],
  "Nepal": ["Kathmandu","Pokhara","Lalitpur","Biratnagar","Birgunj","Bharatpur","Janakpur"],
  "Philippines": ["Manila","Cebu City","Davao","Quezon City","Makati","Pasig","Taguig","Iloilo","Bacolod","Cagayan de Oro"],
  "Indonesia": ["Jakarta","Surabaya","Bandung","Medan","Semarang","Makassar","Palembang","Bali","Yogyakarta","Lombok"],
  "Malaysia": ["Kuala Lumpur","George Town","Johor Bahru","Ipoh","Shah Alam","Petaling Jaya","Kota Kinabalu","Kuching","Malacca","Alor Setar"],
  "Singapore": ["Singapore"],
  "Thailand": ["Bangkok","Chiang Mai","Phuket","Pattaya","Hat Yai","Hua Hin","Koh Samui","Krabi","Ayutthaya"],
  "Vietnam": ["Ho Chi Minh City","Hanoi","Da Nang","Hue","Nha Trang","Ha Long","Can Tho","Hoi An"],
  "China": ["Beijing","Shanghai","Guangzhou","Shenzhen","Chengdu","Xi'an","Hangzhou","Nanjing","Wuhan","Chongqing","Kunming","Xiamen","Dalian"],
  "Japan": ["Tokyo","Osaka","Kyoto","Yokohama","Nagoya","Sapporo","Kobe","Fukuoka","Hiroshima","Nara","Sendai"],
  "South Korea": ["Seoul","Busan","Incheon","Daegu","Daejeon","Gwangju","Ulsan","Jeju City"],
  "Australia": ["Sydney","Melbourne","Brisbane","Perth","Adelaide","Gold Coast","Canberra","Hobart","Darwin","Cairns"],
  "New Zealand": ["Auckland","Wellington","Christchurch","Hamilton","Dunedin","Tauranga","Queenstown"],
  "United Kingdom": ["London","Manchester","Birmingham","Leeds","Glasgow","Edinburgh","Liverpool","Bristol","Cardiff","Belfast","Sheffield","Nottingham","Leicester"],
  "Germany": ["Berlin","Munich","Hamburg","Frankfurt","Cologne","Stuttgart","Düsseldorf","Dresden","Leipzig","Nuremberg"],
  "France": ["Paris","Lyon","Marseille","Toulouse","Nice","Nantes","Strasbourg","Montpellier","Bordeaux","Lille"],
  "Italy": ["Rome","Milan","Naples","Turin","Palermo","Genoa","Bologna","Florence","Venice","Bari","Catania","Verona"],
  "Spain": ["Madrid","Barcelona","Valencia","Seville","Zaragoza","Málaga","Murcia","Palma","Bilbao","Granada"],
  "Portugal": ["Lisbon","Porto","Braga","Coimbra","Funchal","Setúbal","Faro","Aveiro"],
  "Netherlands": ["Amsterdam","Rotterdam","The Hague","Utrecht","Eindhoven","Groningen","Tilburg","Almere"],
  "Belgium": ["Brussels","Antwerp","Ghent","Bruges","Liège","Leuven","Namur"],
  "Switzerland": ["Zurich","Geneva","Basel","Bern","Lausanne","Lucerne","Interlaken","St. Gallen"],
  "Austria": ["Vienna","Graz","Linz","Salzburg","Innsbruck","Klagenfurt"],
  "Greece": ["Athens","Thessaloniki","Patras","Heraklion","Santorini","Mykonos","Rhodes","Corfu"],
  "Turkey": ["Istanbul","Ankara","Izmir","Antalya","Bursa","Adana","Gaziantep","Cappadocia","Bodrum","Trabzon"],
  "Russia": ["Moscow","St. Petersburg","Novosibirsk","Yekaterinburg","Kazan","Sochi","Vladivostok","Nizhny Novgorod"],
  "USA": ["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Francisco","Seattle","Miami","Boston","Atlanta","Las Vegas","Washington DC","Orlando","Denver"],
  "Canada": ["Toronto","Vancouver","Montreal","Calgary","Edmonton","Ottawa","Winnipeg","Quebec City","Hamilton","Kitchener"],
  "Mexico": ["Mexico City","Guadalajara","Monterrey","Cancún","Puebla","Tijuana","Mérida","León","San Luis Potosí"],
  "Brazil": ["São Paulo","Rio de Janeiro","Brasília","Salvador","Fortaleza","Belo Horizonte","Manaus","Curitiba","Recife","Porto Alegre"],
  "Argentina": ["Buenos Aires","Córdoba","Rosario","Mendoza","La Plata","Mar del Plata","Salta","Bariloche"],
  "South Africa": ["Johannesburg","Cape Town","Durban","Pretoria","Port Elizabeth","Bloemfontein","Soweto","East London"],
  "Kenya": ["Nairobi","Mombasa","Kisumu","Nakuru","Eldoret","Thika"],
  "Tanzania": ["Dar es Salaam","Zanzibar","Arusha","Mwanza","Dodoma","Moshi"],
  "Morocco": ["Casablanca","Rabat","Marrakech","Fes","Tangier","Agadir","Meknes","Oujda"],
  "Tunisia": ["Tunis","Sfax","Sousse","Kairouan","Bizerte","Gabès","Hammamet"],
  "Nigeria": ["Lagos","Abuja","Kano","Ibadan","Port Harcourt","Benin City","Kaduna"],
  "Ghana": ["Accra","Kumasi","Tamale","Sekondi","Cape Coast"],
  "Ethiopia": ["Addis Ababa","Dire Dawa","Mekelle","Gondar","Hawassa","Bahir Dar"],
  "Maldives": ["Malé","Addu City","Fuvahmulah","Kulhudhuffushi"],
  "Mauritius": ["Port Louis","Beau Bassin","Vacoas","Curepipe","Quatre Bornes"],
  "Seychelles": ["Victoria","Beau Vallon","Anse Royale"],
  "Cyprus": ["Nicosia","Limassol","Larnaca","Paphos","Famagusta"],
  "Malta": ["Valletta","Birkirkara","Mosta","Qormi","Sliema","St. Julian's"],
  "Czech Republic": ["Prague","Brno","Ostrava","Pilsen","Liberec"],
  "Poland": ["Warsaw","Kraków","Łódź","Wrocław","Poznań","Gdańsk"],
  "Hungary": ["Budapest","Debrecen","Miskolc","Pécs","Győr"],
  "Romania": ["Bucharest","Cluj-Napoca","Timișoara","Iași","Constanța","Brașov"],
  "Sweden": ["Stockholm","Gothenburg","Malmö","Uppsala","Västerås"],
  "Norway": ["Oslo","Bergen","Trondheim","Stavanger","Tromsø"],
  "Denmark": ["Copenhagen","Aarhus","Odense","Aalborg","Esbjerg"],
  "Finland": ["Helsinki","Espoo","Tampere","Vantaa","Oulu"],
  "Ireland": ["Dublin","Cork","Limerick","Galway","Waterford"]
};

/* Sorted list of all countries for the dropdown */
var COUNTRIES_SORTED = Object.keys(COUNTRY_CITIES).sort(function(a, b) {
  /* Put UAE first, then Saudi Arabia, then alphabetical */
  if (a === "United Arab Emirates") return -1;
  if (b === "United Arab Emirates") return  1;
  if (a === "Saudi Arabia") return -1;
  if (b === "Saudi Arabia") return  1;
  return a.localeCompare(b);
});

function initEnquiryDropdowns() {
  var countryEl = document.getElementById('country');
  var cityEl    = document.getElementById('city');
  if (!countryEl || !cityEl) return;

  /* Populate country options */
  COUNTRIES_SORTED.forEach(function(country) {
    var opt = document.createElement('option');
    opt.value = country;
    opt.textContent = country;
    countryEl.appendChild(opt);
  });

  /* On country change — populate cities */
  countryEl.addEventListener('change', function() {
    var selected = this.value;

    /* Reset city */
    cityEl.innerHTML = '';
    var placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = '-- Select City --';
    cityEl.appendChild(placeholder);

    if (selected && COUNTRY_CITIES[selected]) {
      COUNTRY_CITIES[selected].forEach(function(city) {
        var opt = document.createElement('option');
        opt.value = city;
        opt.textContent = city;
        cityEl.appendChild(opt);
      });
      cityEl.disabled = false;
      cityEl.classList.remove('select-disabled');
    } else {
      cityEl.disabled = true;
      cityEl.classList.add('select-disabled');
    }

    /* Clear validation state */
    countryEl.classList.remove('invalid');
    var errCountry = document.getElementById('err_country');
    if (errCountry) errCountry.textContent = '';
  });

  /* Clear city error on change */
  cityEl.addEventListener('change', function() {
    cityEl.classList.remove('invalid');
    var errCity = document.getElementById('err_city');
    if (errCity) errCity.textContent = '';
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEnquiryDropdowns);
} else {
  initEnquiryDropdowns();
}
