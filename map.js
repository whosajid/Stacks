const amountMessages = new Map([
  [0, "Broke"],
  [100, "Dinner for two at a mid-range restaurant"],
  [500, "Monthly groceries for a small household"],
  [1000, "Basic laptop or smartphone"],
  [
    2000,
    "Weekend getaway for two (including transportation and accommodation)",
  ],
  [5000, "Used car"],
  [10000, "Down payment on a new car"],
  [20000, "One year's tuition at a public university"],
  [30000, "Down payment on a modest home"],
  [50000, "One year's salary for an entry-level job in some industries"],
  [100000, "Small business startup capital"],
  [200000, "Fully fund a small business venture or startup"],
  [300000, "Purchase a luxury recreational vehicle (RV) or motorhome"],
  [400000, "Invest in a diversified stock portfolio or mutual funds"],
  [500000, "Average home purchase in many regions"],
  [600000, "Purchase a luxury boat or yacht"],
  [700000, "Fully fund a college education for multiple children"],
  [800000, "Purchase a vacation home in a desirable location"],
  [900000, "Invest in a franchise business opportunity"],
  [1000000, "Establish a charitable foundation or endowment"],
  [2000000, "Investment in a medium-sized business or franchise"],
  [3000000, "Purchase a small private aircraft or jet"],
  [4000000, "Investment in a startup with high growth potential"],
  [5000000, "Purchase a luxury vacation property or villa"],
  [6000000, "Investment in a commercial real estate property"],
  [7000000, "Purchase a small private island"],
  [8000000, "Investment in a high-end luxury hotel or resort"],
  [9000000, "Purchase a luxury penthouse in a major city"],
  [10000000, "High End yacht"],
  [11000000, "Invest in a collection of luxury vehicles or classic cars"],
  [12000000, "Investment in a high-end art collection or rare artifacts"],
  [13000000, "Purchase a private luxury jet or aircraft"],
  [14000000, "Investment in a prestigious vineyard or winery"],
  [15000000, "Purchase a luxury penthouse in a major city"],
  [16000000, "Invest in a portfolio of high-end luxury properties"],
  [17000000, "Purchase a private island retreat with exclusive amenities"],
  [18000000, "Investment in a high-end hospitality business or luxury resort"],
  [19000000, "Purchase a private island with potential for development"],
  [20000000, "Purchase a small private island or luxury estate"],
  [
    21000000,
    "Invest in a luxury commercial property or high-end office building",
  ],
  [
    22000000,
    "Purchase a private island with established infrastructure and amenities",
  ],
  [
    23000000,
    "Investment in a high-profile technology startup or innovation hub",
  ],
  [24000000, "Purchase a luxury ranch or estate with extensive land"],
  [25000000, "Invest in a high-end fashion brand or luxury retail company"],
  [26000000, "Purchase a prestigious vineyard with a recognized brand"],
  [
    27000000,
    "Investment in a luxury hospitality group or boutique hotel chain",
  ],
  [
    28000000,
    "Purchase a private island with potential for eco-tourism development",
  ],
  [
    29000000,
    "Invest in a high-end entertainment company or luxury event venue",
  ],
  [30000000, "Investment in a mid-sized company or corporation"],
  [
    31000000,
    "Purchase a fleet of luxury vehicles, including high-end cars and SUVs",
  ],
  [
    32000000,
    "Investment in a medium-sized tech startup with potential for growth",
  ],
  [
    33000000,
    "Purchase a luxury private jet or aircraft for personal or business use",
  ],
  [34000000, "Investment in a high-end fashion house or luxury apparel brand"],
  [
    35000000,
    "Purchase a portfolio of luxury real estate properties in prime locations",
  ],
  [
    36000000,
    "Investment in a high-end restaurant chain or gourmet food business",
  ],
  [37000000, "Purchase a collection of rare and vintage luxury automobiles"],
  [38000000, "Investment in a boutique luxury hotel or resort development"],
  [
    39000000,
    "Purchase a private island resort with potential for exclusive clientele",
  ],
  [40000000, "Purchase a large private yacht or luxury cruise ship"],
  [41000000, "Purchase a luxury motorhome or RV for luxury travel"],
  [
    42000000,
    "Investment in a high-end private equity fund focused on luxury brands",
  ],
  [
    43000000,
    "Purchase a collection of luxury watches or jewelry for investment",
  ],
  [44000000, "Investment in a luxury hospitality group with high-end resorts"],
  [45000000, "Purchase a luxury apartment building in a prime urban location"],
  [46000000, "Investment in a high-profile art collection or rare artifacts"],
  [47000000, "Purchase a fleet of luxury yachts for charter business"],
  [48000000, "Investment in a boutique luxury fashion label or designer brand"],
  [
    49000000,
    "Purchase a luxury mansion or estate in an exclusive neighborhood",
  ],
  [50000000, "Investment in a high-profile startup or tech company"],
  [51000000, "Purchase a luxury sports team franchise"],
  [52000000, "Investment in a high-end wine vineyard or winery"],
  [53000000, "Purchase a collection of rare and valuable art pieces"],
  [54000000, "Investment in a high-profile entertainment production company"],
  [55000000, "Purchase a luxury penthouse in a prestigious city location"],
  [
    56000000,
    "Investment in a boutique luxury travel agency or concierge service",
  ],
  [57000000, "Purchase a fleet of luxury private jets for charter business"],
  [
    58000000,
    "Investment in a high-end gourmet food business or restaurant chain",
  ],
  [
    59000000,
    "Purchase a luxury island resort with potential for exclusive clientele",
  ],
  [60000000, "Purchase a luxury hotel or resort property"],
  [61000000, "Purchase a luxury vineyard or winery estate"],
  [
    62000000,
    "Investment in a high-profile luxury fashion brand or designer label",
  ],
  [63000000, "Purchase a collection of rare and antique luxury furniture"],
  [
    64000000,
    "Investment in a high-end private equity fund focused on luxury real estate",
  ],
  [
    65000000,
    "Purchase a fleet of luxury private helicopters for charter business",
  ],
  [66000000, "Investment in a boutique luxury spa or wellness retreat"],
  [67000000, "Purchase a luxury beachfront villa or estate"],
  [
    68000000,
    "Investment in a high-profile luxury automotive brand or manufacturer",
  ],
  [69000000, "Purchase a luxury golf course or country club"],
  [70000000, "Investment in a significant real estate development project"],
  [
    71000000,
    "Investment in a luxury shopping mall or high-end retail development",
  ],
  [72000000, "Purchase a collection of rare and valuable gemstones or jewelry"],
  [
    73000000,
    "Investment in a high-profile luxury hospitality management company",
  ],
  [
    74000000,
    "Purchase a luxury castle or historical estate with extensive grounds",
  ],
  [
    75000000,
    "Investment in a boutique luxury travel agency specializing in bespoke experiences",
  ],
  [
    76000000,
    "Purchase a fleet of luxury private submarines for exclusive underwater exploration",
  ],
  [
    77000000,
    "Investment in a high-end luxury technology company or innovation hub",
  ],
  [
    78000000,
    "Purchase a luxury private island with potential for exclusive resort development",
  ],
  [
    79000000,
    "Investment in a high-profile luxury lifestyle brand or media company",
  ],
  [80000000, "Purchase a private island with developed infrastructure"],
  [
    81000000,
    "Purchase a luxury private island resort with exclusive amenities",
  ],
  [82000000, "Investment in a high-end luxury watchmaking company or brand"],
  [
    83000000,
    "Purchase a collection of rare and valuable vintage wines or spirits",
  ],
  [
    84000000,
    "Investment in a luxury private aviation company or charter service",
  ],
  [
    85000000,
    "Purchase a luxury castle or chateau with extensive gardens and vineyards",
  ],
  [
    86000000,
    "Investment in a high-profile luxury fashion house or designer label",
  ],
  [87000000, "Purchase a fleet of luxury private jets for exclusive use"],
  [88000000, "Investment in a boutique luxury wellness retreat or spa chain"],
  [
    89000000,
    "Purchase a luxury private island with potential for eco-friendly development",
  ],
  [90000000, "Investment in a prestigious art collection or museum"],
  [
    91000000,
    "Purchase a luxury private island with potential for exclusive eco-tourism",
  ],
  [
    92000000,
    "Investment in a high-profile luxury automotive manufacturer or brand",
  ],
  [
    93000000,
    "Purchase a collection of rare and valuable antique books or manuscripts",
  ],
  [
    94000000,
    "Investment in a luxury private equity fund focused on sustainable projects",
  ],
  [
    95000000,
    "Purchase a luxury chalet or ski lodge in a prestigious mountain resort",
  ],
  [
    96000000,
    "Investment in a high-end luxury cruise line or yacht charter company",
  ],
  [
    97000000,
    "Purchase a collection of fine art and sculptures for a private gallery",
  ],
  [98000000, "Investment in a boutique luxury fragrance brand or perfumery"],
  [
    99000000,
    "Purchase a luxury private island with potential for conservation efforts",
  ],
  [100000000, "100M - It's just another Level"],
  // upto 100M
  [200000000, "Purchase of a professional sports team"],
  [300000000, "Investment in a major infrastructure project"],
  [400000000, "Acquisition of a large corporation"],
  [500000000, "Construction of a luxury hotel or resort"],
  [600000000, "Funding for a blockbuster movie production"],
  [
    700000000,
    "Establishment of a charitable foundation with significant ongoing operations",
  ],
  [800000000, "Investment in a major technology startup"],
  [900000000, "Purchase of a significant stake in a major media conglomerate"],
  [
    1000000000,
    "Launch of a new satellite into space or establishment of a high-profile research institute",
  ],
  // upto 1B
  [2000000000, "Construction of a cutting-edge research facility or stadium"],
  [3000000000, "Investment in a renewable energy project"],
  [4000000000, "Acquisition of a major global brand"],
  [5000000000, "Development of a new theme park or casino resort"],
  [6000000000, "Establishment of a space exploration program"],
  [7000000000, "Acquisition of a major pharmaceutical company"],
  [8000000000, "Investment in a national healthcare initiative"],
  [
    9000000000,
    "Development of a new city district or urban redevelopment project",
  ],
  [10000000000, "Establishment of a national high-speed rail network"],
  // upto 10B
  [20000000000, "Funding for a large-scale military modernization program"],
  [30000000000, "Investment in a nationwide 5G network infrastructure"],
  [
    40000000000,
    "Funding for a large-scale clean water and sanitation initiative in developing countries",
  ],
  [
    50000000000,
    "Development of a fleet of next-generation aircraft for a major airline",
  ],
  [60000000000, "Investment in a comprehensive national cybersecurity program"],
  [70000000000, "Acquisition of a major telecommunications conglomerate"],
  [80000000000, "Investment in a global initiative to combat climate change"],
  [90000000000, "Funding for a large-scale space exploration mission to Mars"],
  [
    100000000000,
    "Investment in a nationwide high-speed internet infrastructure",
  ],
  // upto 100B
  [
    200000000000,
    "Establishment of a sovereign wealth fund for a medium-sized country",
  ],
  [
    300000000000,
    "Development of a comprehensive national healthcare system for a large country",
  ],
  [
    400000000000,
    "Investment in a global initiative to eradicate poverty and hunger",
  ],
  [500000000000, "Acquisition of a major global financial institution"],
  [
    600000000000,
    "Development of a network of renewable energy sources to power a large region",
  ],
  [
    700000000000,
    "Establishment of a comprehensive national education system for a large country",
  ],
  [
    800000000000,
    "Investment in a global initiative to address refugee crises and displaced populations",
  ],
  [
    900000000000,
    "Establishment of a national universal basic income program for a large country",
  ],

  [1000000000000, "From Rags to Riches to Trillions: Your Journey Ends Here!"],
]);

export { amountMessages };
