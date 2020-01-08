var arr=[
  {id:'d1video',src:'../videos/Title.mp4'},
  {id:'d3video',src: '../videos/djzb_s.mp4'},
  {id:'d6video',src: '../videos/Voice_S.mp4'},
  {id:'d11video',src: '../videos/Ray_PC_S.mp4'},
  // {id:'d15video',src: '../videos/Hotfan2_S.mp4'},
  {id:'d19video',src: '../videos/Fourseasons.mp4'},
  {id:'d22video',src: '../videos/Custom.mp4'},
  {id:'d24video',src: '../videos/Wash.mp4'},
  // {id:'pmovie',src: '../videos/i5plus_play.mp4'},
]


console.log(self.name)
for (let i = 0, len = arr.length; i < len; i++) {
  let req = new XMLHttpRequest();
  req.open('GET', arr[i].src, true);
  req.responseType = "blob";
  req.setRequestHeader("client_type", "DESKTOP_WEB");
  req.onreadystatechange = () => {
    if (req.readyState == 4) {
    postMessage({src:req.response,id:arr[i].id});
  }
}
req.send(null);
}