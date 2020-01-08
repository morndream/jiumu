<template>
  <div id="app">
       <router-view />
  </div>
</template>

<script>
  export default {
  components: {
    },
  data(){
      return{}
  },
  mounted(){
//     setTimeout(function(){
//        if(document.body.scrollTop > 0) {
//                 console.log(1);
//                 window.scrollTo(0, -1);
//                 document.body.scrollTop = 0;
//             }
//             window.scrollTo(0, -1);
//             document.body.scrollTop = 0;
//     }, 50);
    window.addEventListener("beforeunload", this.fn); 
    // window.onpopstate = () => { //手机按回退键的事件处理
    //   console.log(1)      
    // }
  },
  methods:{
    fn(){
      window.scrollTo(0,0);
    }, 
  }
  }
</script>

<style lang="stylus">
@import './libs/font/font.css';
h2{
  margin 0;
}
#app{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}
:root{   
    --maincolor #111 //主背景调 
    --advercolor #444 //广告背景
    --frame-thickness: 15px;
    --globalnav-height: 48px;
    --localnav-height: 48px;
    --image-y-parallax:50px;
    --title-height:44px
}

body {
    font-size: 16px;
    background: var(--maincolor);
    // background #aaa
    overflow-y: auto;
    overflow-x:hidden;
    font-weight: 400;
    font-family: FZLT;
    // max-width: 1920px;
    
    ::-webkit-scrollbar {
        width: 1px;
        height: 1px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: hsla(225, 4%, 58%, 0.3);
    }

    ::-webkit-scrollbar-track {
        background-color: var(--maincolor);
    }
}

/*flex布局兼容设置*/
.disFlex{
    display: flex;
}
.dis-dirc{
    flex-direction column
}
.flex-around{
    justify-content: space-around;
}
.flex-evenly{
   justify-content space-evenly;    
}
.flex-justify{
    justify-content: space-between;
}
.align-items{
    align-items: center;
}
.justify-center{
    justify-content: center;
}
.flex_1{
    width: 0;
    flex: 1;    
}
.wrap{
	flex-wrap:wrap;
}
</style>