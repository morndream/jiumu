console.log(self.name)
var d8img=[]
var d9img=[]
var d14img=[]
function loadImage(url,i,id) {
  if(id=='B8'){
     d8img[i] = url;   
  }
  if(id=='B9'){
     d9img[i]= url;
  }
  if(id=='B11'){
     d14img[i] = url; 
  }
}
function getImg(n,baseStr,id){
  for(var i=0;i<=n;i++){
    var j=''
    if(id=='B8'||id=="B9"){
       if(i<10){
          j='00'+i
        }else if(i<100){
          j='0'+i
        }else{
          j=i
        }
    }
    if(id=='B11'){
        if(i<10){
          j='0'+i
        }else{
          j=i
        }
    }
    loadImage((baseStr+j+'.jpg'),i,id)
  }
}
getImg(100,'../images/zdfg/AutoOpen','B8')
getImg(84,'../images/yjzk/Intelligentcontrol','B9')
getImg(74,'../images/qlhg/Hotfan','B11')
for (let i = 0, len = d8img.length; i < len; i++) {
  let req = new XMLHttpRequest();
  req.open('GET', d8img[i], true);
  req.responseType = "blob";
  req.setRequestHeader("client_type", "DESKTOP_WEB");
  req.onreadystatechange = () => {
    if (req.readyState == 4) {
    postMessage({src:req.response,i,id:'B8'});
  }
}
req.send(null);
}

for (let i = 0, len = d9img.length; i < len; i++) {
  let req = new XMLHttpRequest();
  req.open('GET', d9img[i], true);
  req.responseType = "blob";
  req.setRequestHeader("client_type", "DESKTOP_WEB");
  req.onreadystatechange = () => {
    if (req.readyState == 4) {
    postMessage({src:req.response,i,id:'B9'});
  }
}
req.send(null);
}
for (let i = 0, len = d14img.length; i < len; i++) {
  let req = new XMLHttpRequest();
  req.open('GET', d14img[i], true);
  req.responseType = "blob";
  req.setRequestHeader("client_type", "DESKTOP_WEB");
  req.onreadystatechange = () => {
    if (req.readyState == 4) {
    postMessage({src:req.response,i,id:'B11'});
  }
}
req.send(null);
}