// BASE CODE WAS CREATED BY ASHLEYSTEVENS, I JUST USED IT FOR LEARNING PURPOSES
//REFERENCE CODE used for figuring out how google charts works:
    // https://codepen.io/ashleystevens/pen/ZEWGyjR 
// Load Google's charting functions
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Put the JSON array into a variable

const json = [
    {
      "discourse_act": "question",
      "discourse_type_count": 11,
      "repo_id": 25460,
      "repo_name": "augur-license"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 22,
      "repo_id": 25460,
      "repo_name": "augur-license"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 44,
      "repo_id": 25460,
      "repo_name": "augur-license"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 22,
      "repo_id": 25558,
      "repo_name": "community-reports"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 22,
      "repo_id": 25558,
      "repo_name": "community-reports"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 88,
      "repo_id": 25558,
      "repo_name": "community-reports"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 22,
      "repo_id": 25558,
      "repo_name": "community-reports"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 110,
      "repo_id": 25443,
      "repo_name": "grimoirelab-bestiary"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 264,
      "repo_id": 25443,
      "repo_name": "grimoirelab-bestiary"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 44,
      "repo_id": 25443,
      "repo_name": "grimoirelab-bestiary"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 726,
      "repo_id": 25443,
      "repo_name": "grimoirelab-bestiary"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 968,
      "repo_id": 25443,
      "repo_name": "grimoirelab-bestiary"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 99,
      "repo_id": 25435,
      "repo_name": "grimoirelab-cereslib"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 220,
      "repo_id": 25435,
      "repo_name": "grimoirelab-cereslib"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 220,
      "repo_id": 25435,
      "repo_name": "grimoirelab-cereslib"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 99,
      "repo_id": 25435,
      "repo_name": "grimoirelab-cereslib"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 33,
      "repo_id": 25435,
      "repo_name": "grimoirelab-cereslib"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 1496,
      "repo_id": 25456,
      "repo_name": "grimoirelab-graal"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 1826,
      "repo_id": 25456,
      "repo_name": "grimoirelab-graal"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 506,
      "repo_id": 25456,
      "repo_name": "grimoirelab-graal"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 638,
      "repo_id": 25456,
      "repo_name": "grimoirelab-graal"
    },
    {
      "discourse_act": "agreement",
      "discourse_type_count": 22,
      "repo_id": 25456,
      "repo_name": "grimoirelab-graal"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 242,
      "repo_id": 25456,
      "repo_name": "grimoirelab-graal"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 638,
      "repo_id": 25433,
      "repo_name": "grimoirelab-kibiter"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 154,
      "repo_id": 25433,
      "repo_name": "grimoirelab-kibiter"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 616,
      "repo_id": 25433,
      "repo_name": "grimoirelab-kibiter"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 275,
      "repo_id": 25433,
      "repo_name": "grimoirelab-kibiter"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 286,
      "repo_id": 25433,
      "repo_name": "grimoirelab-kibiter"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 308,
      "repo_id": 25454,
      "repo_name": "grimoirelab-kidash"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 132,
      "repo_id": 25454,
      "repo_name": "grimoirelab-kidash"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 88,
      "repo_id": 25454,
      "repo_name": "grimoirelab-kidash"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 99,
      "repo_id": 25454,
      "repo_name": "grimoirelab-kidash"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 616,
      "repo_id": 25454,
      "repo_name": "grimoirelab-kidash"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 2079,
      "repo_id": 25434,
      "repo_name": "grimoirelab-kingarthur"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 924,
      "repo_id": 25434,
      "repo_name": "grimoirelab-kingarthur"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 143,
      "repo_id": 25434,
      "repo_name": "grimoirelab-kingarthur"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 187,
      "repo_id": 25434,
      "repo_name": "grimoirelab-kingarthur"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 121,
      "repo_id": 25434,
      "repo_name": "grimoirelab-kingarthur"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 253,
      "repo_id": 25439,
      "repo_name": "grimoirelab-perceval-mozilla"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 165,
      "repo_id": 25439,
      "repo_name": "grimoirelab-perceval-mozilla"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 1078,
      "repo_id": 25439,
      "repo_name": "grimoirelab-perceval-mozilla"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 33,
      "repo_id": 25439,
      "repo_name": "grimoirelab-perceval-mozilla"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 110,
      "repo_id": 25439,
      "repo_name": "grimoirelab-perceval-mozilla"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 44,
      "repo_id": 25445,
      "repo_name": "grimoirelab-perceval-opnfv"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 77,
      "repo_id": 25445,
      "repo_name": "grimoirelab-perceval-opnfv"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 22,
      "repo_id": 25445,
      "repo_name": "grimoirelab-perceval-opnfv"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 330,
      "repo_id": 25445,
      "repo_name": "grimoirelab-perceval-opnfv"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 33,
      "repo_id": 25445,
      "repo_name": "grimoirelab-perceval-opnfv"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 42,
      "repo_id": 25441,
      "repo_name": "grimoirelab-perceval-puppet"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 44,
      "repo_id": 25441,
      "repo_name": "grimoirelab-perceval-puppet"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 20,
      "repo_id": 25441,
      "repo_name": "grimoirelab-perceval-puppet"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 68,
      "repo_id": 25441,
      "repo_name": "grimoirelab-perceval-puppet"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 618,
      "repo_id": 25441,
      "repo_name": "grimoirelab-perceval-puppet"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 483,
      "repo_id": 25436,
      "repo_name": "grimoirelab-sigils"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 1240,
      "repo_id": 25436,
      "repo_name": "grimoirelab-sigils"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 2560,
      "repo_id": 25436,
      "repo_name": "grimoirelab-sigils"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 2132,
      "repo_id": 25436,
      "repo_name": "grimoirelab-sigils"
    },
    {
      "discourse_act": "agreement",
      "discourse_type_count": 20,
      "repo_id": 25436,
      "repo_name": "grimoirelab-sigils"
    },
    {
      "discourse_act": "humor",
      "discourse_type_count": 33,
      "repo_id": 25436,
      "repo_name": "grimoirelab-sigils"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 319,
      "repo_id": 25436,
      "repo_name": "grimoirelab-sigils"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 154,
      "repo_id": 25444,
      "repo_name": "grimoirelab-toolkit"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 77,
      "repo_id": 25444,
      "repo_name": "grimoirelab-toolkit"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 297,
      "repo_id": 25444,
      "repo_name": "grimoirelab-toolkit"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 1210,
      "repo_id": 25444,
      "repo_name": "grimoirelab-toolkit"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 110,
      "repo_id": 25444,
      "repo_name": "grimoirelab-toolkit"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 33,
      "repo_id": 25446,
      "repo_name": "prospector"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 44,
      "repo_id": 25446,
      "repo_name": "prospector"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 11,
      "repo_id": 25446,
      "repo_name": "prospector"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 33,
      "repo_id": 25446,
      "repo_name": "prospector"
    },
    {
      "discourse_act": "agreement",
      "discourse_type_count": 99,
      "repo_id": 25453,
      "repo_name": "website"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 4732,
      "repo_id": 25453,
      "repo_name": "website"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 4893,
      "repo_id": 25453,
      "repo_name": "website"
    },
    {
      "discourse_act": "humor",
      "discourse_type_count": 14,
      "repo_id": 25453,
      "repo_name": "website"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 1121,
      "repo_id": 25453,
      "repo_name": "website"
    },
    {
      "discourse_act": "negativereaction",
      "discourse_type_count": 33,
      "repo_id": 25453,
      "repo_name": "website"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 1080,
      "repo_id": 25453,
      "repo_name": "website"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 8268,
      "repo_id": 25453,
      "repo_name": "website"
    },
    {
      "discourse_act": "humor",
      "discourse_type_count": 22,
      "repo_id": 25461,
      "repo_name": "wg-app-ecosystem"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 11,
      "repo_id": 25461,
      "repo_name": "wg-app-ecosystem"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 22,
      "repo_id": 25461,
      "repo_name": "wg-app-ecosystem"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 66,
      "repo_id": 25461,
      "repo_name": "wg-app-ecosystem"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 44,
      "repo_id": 25461,
      "repo_name": "wg-app-ecosystem"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 22,
      "repo_id": 25461,
      "repo_name": "wg-app-ecosystem"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 979,
      "repo_id": 25459,
      "repo_name": "wg-common"
    },
    {
      "discourse_act": "agreement",
      "discourse_type_count": 44,
      "repo_id": 25459,
      "repo_name": "wg-common"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 341,
      "repo_id": 25459,
      "repo_name": "wg-common"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 308,
      "repo_id": 25459,
      "repo_name": "wg-common"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 308,
      "repo_id": 25459,
      "repo_name": "wg-common"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 1980,
      "repo_id": 25459,
      "repo_name": "wg-common"
    },
    {
      "discourse_act": "humor",
      "discourse_type_count": 33,
      "repo_id": 25459,
      "repo_name": "wg-common"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 2848,
      "repo_id": 25451,
      "repo_name": "wg-diversity-inclusion"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 3340,
      "repo_id": 25451,
      "repo_name": "wg-diversity-inclusion"
    },
    {
      "discourse_act": "humor",
      "discourse_type_count": 22,
      "repo_id": 25451,
      "repo_name": "wg-diversity-inclusion"
    },
    {
      "discourse_act": "agreement",
      "discourse_type_count": 160,
      "repo_id": 25451,
      "repo_name": "wg-diversity-inclusion"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 5794,
      "repo_id": 25451,
      "repo_name": "wg-diversity-inclusion"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 1021,
      "repo_id": 25451,
      "repo_name": "wg-diversity-inclusion"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 928,
      "repo_id": 25451,
      "repo_name": "wg-diversity-inclusion"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 1221,
      "repo_id": 25458,
      "repo_name": "wg-risk"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 132,
      "repo_id": 25458,
      "repo_name": "wg-risk"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 209,
      "repo_id": 25458,
      "repo_name": "wg-risk"
    },
    {
      "discourse_act": "humor",
      "discourse_type_count": 22,
      "repo_id": 25458,
      "repo_name": "wg-risk"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 1892,
      "repo_id": 25458,
      "repo_name": "wg-risk"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 165,
      "repo_id": 25458,
      "repo_name": "wg-risk"
    },
    {
      "discourse_act": "answer",
      "discourse_type_count": 3487,
      "repo_id": 25457,
      "repo_name": "wg-value"
    },
    {
      "discourse_act": "elaboration",
      "discourse_type_count": 242,
      "repo_id": 25457,
      "repo_name": "wg-value"
    },
    {
      "discourse_act": "agreement",
      "discourse_type_count": 22,
      "repo_id": 25457,
      "repo_name": "wg-value"
    },
    {
      "discourse_act": "appreciation",
      "discourse_type_count": 682,
      "repo_id": 25457,
      "repo_name": "wg-value"
    },
    {
      "discourse_act": "announcement",
      "discourse_type_count": 264,
      "repo_id": 25457,
      "repo_name": "wg-value"
    },
    {
      "discourse_act": "question",
      "discourse_type_count": 1507,
      "repo_id": 25457,
      "repo_name": "wg-value"
    }
  ]

// Draw the chart and set the chart values
function drawChart() {
  
  // Set the columns for the Google Chart in the first line of the array
  var messagesArray = [['discourse_act`', 'discourse_type_count']]; 
  // Loop through the JSON array, set up the value pair & push to the end of messagesArray
  for(i=0; i<json.length; i++) {
    messagesArray.push([json[i].discourse_act, json[i].discourse_type_count]);
  }
 
  // Set the Google Chart options (title, width, height, and colors can be set)
  var options = {
    title: 'Discourse Stats',
    'width': 4000,
    'height': 700
  };
  
  // Convert messagesArray into the DataTable that Google Charts needs and put it in a var
  var data = google.visualization.arrayToDataTable(messagesArray)

  // Display chart inside of the empty div element using the DataTable and Options set
  var chart = new google.visualization.ColumnChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
