module.exports = {
  toGalileo: {
     0: 19,  // hotel -> hotel
     1:  0,  // stop (default) -> star blue (Other)
     2: 85,  // hiking -> hiking
     3: 85,  // guide -> hiking
     4: 85,  // snowshoeing -> hiking
     5: 65,  // book -> mall
     6:  1,  // deal -> bank
     7: 29,  // pin -> star
     8: 42,  // biking -> bike
     9: 54,  // picnic -> pizza
    10: 71,  // charging -> charging_station
    11: 15,  // tent -> camping
    12:  9,  // house -> residence
    13: 85,  // climbing -> hiking
    14: 85,  // skiing -> hiking
    15: 19,  // hostel -> hotel
    16: 19,  // chain -> hotel
    17: 78,  // car -> car
    18: 28,  // first -> star
    19: 27,  // last -> star
    20: 31,  // multinight -> 2
    21: 56,  // diving -> pool
    22: 26,  // firstlast -> star
    23: 12,  // airplane -> airport
    24:  6,  // restaurant -> restaurant
    25: 16,  // fillingstation -> gas_station
    26: 42,  // motorcycle -> bike
    27: 68,  // farmstand -> market
    28: 23,  // brewery -> pub
    29: 74,  // amusementpark -> theme_park
    30: 45,  // wine -> bar
    31: 45,  // bar -> bar
    32: 60,  // grocery -> fast_food
    33: 21,  // museum -> museum
    34: 53,  // church -> office
    35: 53,  // synagogue -> office
    36: 21,  // ruins -> museum
    37:  9,  // villa -> residence
    38: 53,  // palace -> office
    39: 21,  // artmuseum -> museum
    40: 20,  // worldheritagesite -> monument
    41: 53,  // officebuilding -> office
    42: 53,  // shrine -> office
    43: 83,  // tower -> radio
    44: 53,  // temple -> office
    45: 21,  // sciencemuseum -> museum
    46: 20,  // landmark -> monument
    47: 21,  // historymuseum -> museum
    48: 86,  // forest -> tree
    49: 56,  // surfing -> pool
    50: 86,  // park -> tree
    51: 53,  // structure -> office
    52: 86,  // naturalfeature -> tree
    53: 86,  // outdoors -> tree
    54: 56,  // watersport -> pool
    55: 76,  // scenicroad -> viewpoint
    56: 56,  // beach -> pool
    57: 58,  // hotspring -> spa
    58: 88,  // water -> kayak
  //59:  0,  // mountains
  //60:  0,  // volcano
    61: 76,  // lookout -> viewpoint
    62: 88,  // lake -> kayak
    63: 88,  // river -> kayak
  //64:  0,  // jeep
  //65:  0,  // cemetery
    66: 51,  // library -> man
    67: 59,  // zoo -> zoo
    68: 11,  // stadium -> sport
  //69:  0,  // windmill
  //70:  0,  // square
    71: 53,  // town -> office
    72: 20,  // statue -> monument
    73: 49,  // information -> info
    74: 76,  // amphitheater -> viewpoint
  //75:  0,  // observatory
  //76:  0,  // passthru
    77: 79,  // tap -> drinking_water
    78: 62,  // minimarket -> store
    79: 88,  // anchor -> kayak
    80: 70,  // tollbooth -> ATM
    81:  7,  // hospital-> health
    82: 77,  // toilets -> WC
  //83:  0,  // truck
    84: 81,  // rvpark -> caravan
  //85:  0,  // bridge
    86: 73,  // star -> star grey
    87: 44,  // treasure -> casino
    88: 87,  // teleport -> paragliding
    89: 24,  // railroadcrossing -> railway
    90: 14,  // coffee -> cafe
  //91:  0,  // atv
    92: 67,  // pets -> baby_goods
    93: 72,  // fire -> star red
    94: 56,  // pier -> pool
    95: 43,  // ferry -> ferry
    96:  3,  // theater -> theater
    97: 24,  // train -> railway
    98: 22,  // parking -> parking
    99: 10,  // cart -> supermarket
   100: 88,  // boatramp -> kayak
   101: 59,  // bird -> zoo
 //102:  0,  // clock
   103:  5,  // film -> cinema
   104: 52,  // music -> music
   105: 47,  // entertain -> disco
   106: 40,  // bus -> bus
   107: 64,  // taxi -> car_sharing
 //108:  0,  // off-road
 //109:  0,  // dam
   110: 72,  // danger -> star red
 //111:  0,  // enter
   112: 66,  // gift -> jewellery
   113: 41,  // hairdresser -> beauty_salon
   114: 18,  // heart -> heart
   115:  2,  // industry -> car_service
   116: 69,  // laundry -> clothing_store
 //117:  0,  // lighthouse
 //118:  0,  // one-way
   119: 55,  // playground -> playground
   120:  8,  // police -> police_station
 //121:  0,  // prison
 //122:  0,  // roadblock
 //123:  0,  // rocket
   124:  4,  // school -> education
   125:  9,  // shelter -> residence
   126: 65,  // suitcase -> mall
   127: 80,  // veterinary -> vet
 //128:  0,  // remove
 //129:  0,  // wetland
 //130:  0,  // wheelchair
   131: 17,  // golf -> golf_course
   132: 57   // envelope -> post_office
  },
  toFurkot: {
     0:  1,  // stop (default) -> star blue (Other)
     9: 12,  // residence -> house
    19:  0,  // hotel -> hotel
    20: 46,  // monument -> landmark
    21: 33,  // museum -> museum
    24: 97,  // railway -> train
    42:  8,  // bike -> biking
    45: 31,  // bar -> bar
    53: 41,  // office -> officebuilding
    56: 54,  // pool -> watersport
    59: 67,  // zoo -> zoo
    65:126,  // mall -> suitcase
    76: 61,  // viewpoint -> lookout
    85:  2,  // hiking -> hiking
    86: 48,  // tree -> forest
    88: 58   // kayak -> water
  },
  colors: {
    2: 'TrackStyle_000000C8', // black
    3: 'TrackStyle_0000FFC8', // blue
    4: 'TrackStyle_00FFFFC8', // cyan
    5: 'TrackStyle_00008BC8', // dark-blue
    6: 'TrackStyle_008B8BC8', // dark-cyan
    7: 'TrackStyle_7F7F7FC8', // dark-gray
    8: 'TrackStyle_006400C8', // dark-green
    9: 'TrackStyle_8B008BC8', // dark-magenta
   10: 'TrackStyle_8B0000C8', // dark-red
   11: 'TrackStyle_FFD700C8', // dark-yellow
   12: 'TrackStyle_00FF00C8', // green
   13: 'TrackStyle_7f7f7fC8', // grey
   14: 'TrackStyle_D3D3D3C8', // light-gray
   15: 'TrackStyle_FF00FFC8', // magenta
   16: 'TrackStyle_F2680CC8', // orange;
   17: 'TrackStyle_B10DC9C8', // purple
   18: 'TrackStyle_FF0000C8', // red
   19: 'TrackStyle_6600CCC8', // violet
   20: 'TrackStyle_FFFFFFC8', // white
   21: 'TrackStyle_FFFF00C8', // yellow
   22: 'TrackStyle_EFEFEFC8'  // transparent
  }
};

/*
  star,            // 0 Other
  bank,            // 1
  car_service,     // 2
  theater,         // 3
  education,       // 4
  cinema,          // 5
  restaurant,      // 6
  health,          // 7
  police_station,  // 8
  residence,       // 9
  supermarket,     // 10
  sport,           // 11
  airport,         // 12 new bookmark categories
  bowling,         // 13
  cafe,            // 14
  camping,         // 15
  gas_station,     // 16
  golf_course,     // 17
  heart,           // 18
  hotel,           // 19
  monument,        // 20
  museum,          // 21
  parking,         // 22
  pub,             // 23
  railway,         // 24
  wifi,            // 25
  star,            // 26
  star,            // 27
  star,            // 28
  star,            // 29
  1,               // 30 svg volume 2
  2,               // 31
  3,               // 32
  4,               // 33
  5,               // 34
  6,               // 35
  7,               // 36
  8,               // 37
  9,               // 38
  10,              // 39
  bus,             // 40
  beauty_salon,    // 41
  bike,            // 42
  ferry,           // 43
  casino,          // 44
  bar,             // 45
  dentist,         // 46
  disco,           // 47
  gym,             // 48
  info,            // 49
  karaoke,         // 50
  man,             // 51
  music,           // 52
  office,          // 53
  pizza,           // 54
  playground,      // 55
  pool,            // 56
  post_office,     // 57
  spa,             // 58
  zoo,             // 59
  fast_food,       // 60 vol 3
  pharmacy,        // 61
  store,           // 62
  car_rental,      // 63
  car_sharing,     // 64
  mall,            // 65
  jewellery,       // 66
  baby_goods,      // 67
  market,          // 68
  clothing_store,  // 69
  ATM,             // 70
  charging_station,// 71
  star,            // 72
  star,            // 73
  theme_park,      // 74
  tram,            // 75
  viewpoint,       // 76
  WC,              // 77
  car,             // 78
  drinking_water,  // 79
  vet,             // 80
  caravan,         // 81 vol 4
  helicopter,      // 82
  radio,           // 83
  speedcam,        // 84
  hiking,          // 85
  tree,            // 86
  paragliding,     // 87
  kayak            // 88

  PinColorBlue,     // 0
  PinColorGreen,    // 1
  PinColorGray,     // 2
  PinColorTurquoise,// 3
  PinColorGreen,    // 4
  PinColorTurquoise,// 5
  PinColorBlue,     // 6
  PinColorRed,      // 7
  PinColorGreen,    // 8
  PinColorGreen,    // 9
  PinColorPurple,   // 10
  PinColorOrange,   // 11
  PinColorGray,     // 12
  PinColorOrange,   // 13
  PinColorBlue,     // 14
  PinColorGray,     // 15
  PinColorGray,     // 16
  PinColorOrange,   // 17
  PinColorOrange,   // 18
  PinColorBlue,     // 19
  PinColorTurquoise,// 20
  PinColorTurquoise,// 21
  PinColorGray,     // 22
  PinColorBlue,     // 23
  PinColorGray,     // 24
  PinColorBlue,     // 25
  PinColorPurple,   // 26
  PinColorOrange,   // 27
  PinColorTurquoise,// 28
  PinColorGreen,    // 29
  PinColorPurple,   // 30 svg icons volume 2
  PinColorPurple,   // 31
  PinColorPurple,   // 32
  PinColorPurple,   // 33
  PinColorPurple,   // 34
  PinColorPurple,   // 35
  PinColorPurple,   // 36
  PinColorPurple,   // 37
  PinColorPurple,   // 38
  PinColorPurple,   // 39
  PinColorGray,     // 40
  PinColorGreen,    // 41
  PinColorGray,     // 42
  PinColorGray,     // 43
  PinColorBlue,     // 44
  PinColorBlue,     // 45
  PinColorRed,      // 46
  PinColorBlue,     // 47
  PinColorOrange,   // 48
  PinColorGray,     // 49
  PinColorBlue,     // 50
  PinColorOrange,   // 51
  PinColorTurquoise,// 52
  PinColorGreen,    // 53
  PinColorBlue,     // 54
  PinColorOrange,   // 55
  PinColorOrange,   // 56
  PinColorGreen,    // 57
  PinColorOrange,   // 58
  PinColorTurquoise,// 59
  PinColorBlue,     // 60
  PinColorRed,      // 61
  PinColorPurple,   // 62
  PinColorGray,     // 63
  PinColorGray,     // 64
  PinColorPurple,    // 65
  PinColorPurple,    // 66
  PinColorPurple,    // 67
  PinColorPurple,    // 68
  PinColorPurple,    // 69
  PinColorGreen,     // 70
  PinColorGray,      // 71
  PinColorRed,       // 72
  PinColorGray,      // 73
  PinColorTurquoise, // 74
  PinColorGray,      // 75
  PinColorTurquoise, // 76
  PinColorTurquoise, // 77
  PinColorGray,      // 78
  PinColorBlue,      // 79
  PinColorRed,       // 80
  PinColorGray,      // 81
  PinColorGray,      // 82
  PinColorBlue,      // 83
  PinColorGray,      // 84
  PinColorOrange,    // 85
  PinColorGreen,     // 86
  PinColorOrange,    // 87
  PinColorOrange,    // 88
*/
