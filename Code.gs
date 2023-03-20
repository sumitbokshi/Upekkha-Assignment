function myFunction() {
  
  const token = "b6c9ed01023643d38b991ba1449cebc6";   //Unique Key for a user
  const country='in';                                 //in is country code for India
  const pageSize='5'                                  //Searching for only top 5 news
  
  //Fetching the url and passing the above values
  var url = UrlFetchApp.fetch(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&apiKey=${token}`);

 
  
  var data = JSON.parse(url.getContentText());

  var sheet = SpreadsheetApp.getActiveSheet();
  
  //Printing log messages for the operation if the above api call is working or not
  Logger.log(data["articles"][0]["source"]["name"]);
  
  //var header = ["Title", "Description", "URL", "Published Date"]
  
  var i = 0 ;
  
  var articles = data.articles;

 
     
  //iterarting through all the elements that are coming from the url
  //printing it into the sheet using the set value
  articles.forEach(function(obj){
      var name = obj.source.name
      var author = obj.author
      var title = obj.title
      var description =obj.description;
      var url =obj.url;
      var content = obj.content; 
      
      i++ ;

      sheet.getRange(i,1).setValue([name]);
      sheet.getRange(i,2).setValue([author]);
      sheet.getRange(i,3).setValue([title]);
      sheet.getRange(i,4).setValue([description]);
      sheet.getRange(i,5).setValue([url]);
      sheet.getRange(i,6).setValue([content]);
     
  });

}
