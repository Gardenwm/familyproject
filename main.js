var names=[
    "manasa/amma",
    "krishna/nana",
    "marbles/psychocat/sister",
    "anhiti/me"
  ];
  var pictures=[
    "https://images.unsplash.com/photo-1619045788850-2f696952ecc7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxOTE2MzQyMA&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1615544983150-0760f39857f5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxOTE2MzgwNg&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1618608653277-396579faa6cf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxOTE2Mzg0OA&ixlib=rb-1.2.1&q=85",
    "https://duckduckgo.com/i/0e0dc0f2.jpg"
  ];
  var i=0;
  function nextslide(){
    document.getElementById("display_names").innerHTML=names[i];
    document.getElementById("display_images").src=pictures[i]; i++;
  }