// Search for a specified string.

$('#switch').click(function(){
  search();
});

function dashbord(data){
  for (var f=0; f<=5; f++){
    $('#D'+f)
    .html("<a href='https://www.youtube.com/watch?v="+ data[f].id.videoId +"'>"+data[f].snippet.title+"</a>");
          
  };
};

function search() {
  var q = $('#key').val();
    $.getJSON('https://www.googleapis.com/youtube/v3/search',{
    q: q,
    part: 'snippet',
    key:'AIzaSyDNF3PdG7M1lKEiTMMdQhcBv3NXxZJeAcI',
    type:'video'
  },
  function(data){
  console.log(data.items);
  dashbord(data.items);
});
};
