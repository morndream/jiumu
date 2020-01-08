<template>
  <div class='html'>
      <!-- 片头 -->
      <div class="d1"  id="B1">
        <div class="d1box" id="d1box">
          <figure class="video-startframe"></figure>
          <!-- <video 
            width="100%" height="100%" 
            poster="~_imgs/pt/start.png"
            style="width:100%;"
            muted
            preload
            autoplay
            id="d1video"
           > 
           <source src="~_imgs/pt/Title.mp4" type="video/mp4"> 
         </video> -->
        </div>  
      </div>
      <!--片头：详情文字 -->
      <div class="d2" id="B2">
       <div class="d2box w disFlex align-items justify-center dis-dirc"  :class="{fixed:d2_change}">
          <div class="tit">核心卖点3+5</div>
          <div class="d2box-items  disFlex wrap flex-around"  :style="{opacity:d2_opacity}">
            <div v-for="(item,index) in data"  :key="index" class="d2box-item disFlex dis-dirc  align-items">
             <div class="Imgbox" >
                <img :src="item.img" alt="">
             </div>
             <div class="contbox">
               <p class="title">{{item.title}}</p>
             </div>
           </div>
          </div>
       </div>
      </div>
      <!-- 点睛之笔视频 定-->
      <div class="d3" id="B3">
        <div class="d3box" id="d3box">
          <figure class="video-startframe"></figure>
          <!-- <video 
            width="100%" height="100%" 
            poster="~_imgs/djzb/start.png"
            style="width:100%;"
            muted
            preload
            id="d3video"
           > 
           <source src="~_imgs/djzb/djzb_s.mp4" type="video/mp4"> 
          </video> -->
        </div>  
      </div>
      <!-- 点睛之笔：详情文字+弹出视频 -->
      <div class="d4" id="B4">
         <div class="d4box disFlex align-items justify-center"  :class="{fixed:d4_change}">
            <div class="txt"  :style="{opacity:d4_opacity}">
                <p class="title" :style="{transform:d_transform}">解放双手</p>  
                <p class="subtitle" :style="{transform:d_transform}">天生亮眼,从来出色</p>
                <p class="pt" :style="{transform:d_transform}"><img src="~_imgs/icons/i.png" />5 系列精雕细琢, 纯平极简设计静逸灵动</p>
                <p class="pt" :style="{transform:d_transform}">荣获 <span>[ 2019 年德国 iF ]</span>设计大奖</p>
                <div class="movie" @click="clickshowMovie(1)" align="center" :style="{transform:d_transform}">观看影片 
                  <img style="width:28px" :src="play" alt="">
                </div>
                <div class="d4icons" :style="{transform:d_transform}"> <img :src="icon" alt=""> </div>
              </div>
         </div>
      </div>
      <van-popup v-model="showMovie"  :style="{ height:'100%',width:'100%',background:'#000'}">
        <div class="videoBox">
          <div class="closebox" @click="closebox"></div>
          <div class="videobox">
            <video 
              width="100%" height="100%" 
              style="width:100%;"
              controls="controls"
              id="pmovie"
              autoplay
             >
             <source src="~_imgs/i5plus_play.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </van-popup>
      <!-- 语音控制：视频-->
      <div class="d6" id="B5">
        <div class="d6box" id="d6box">
           <figure class="video-startframe"></figure>
           <!-- <video 
            width="100%" height="100%" 
            poster="~_imgs/voice/start.png"
            style="width:100%"
            muted
            preload
            id="d6video"
          >
          <source src="~_imgs/voice/Voice_S.mp4" type="video/mp4">
          </video>  -->
        </div>  
      </div>
      <!-- 语音控制:详情小文字 -->
      <div class="d7"  id="B6">
        <div class="d7Box disFlex dis-dirc align-items" :class="{fixed:d7_change}" >
         <div class="d7box"  :style="{opacity:d7_opacity,transform:d7_transform}">
           <div class="Img">
             <img :src="icon04" alt="">
           </div>
           <p class="title">语音控制</p>
           <p class="subtitle">在我这里, 你说了算</p>
           <div class="details">
             <div class="p1">
               <span>搭载AI语音识别技术</span>
               ,快速反应，凭实力听话,“我要臀洗，我要烘干，水压大点，往后一点，风温高点，我要停止，我要冲水，关盖小冲···” 
               <span> 各种指令，开口就行</span>
             </div>
             <div class="disFlex p2">
                <div @click="clickshowMovie(2)">点击前往语音互动体验 <img  :src="play" alt=""> </div>
                <div @click="showTips=true">点击掌握语音指令词 <img :src="icon05" alt=""> </div>  
             </div>
           </div>
         </div>
        </div>
      </div>
      <van-popup v-model="showTips"  :style="{ 	width:'980px',height:'100%',backgroundColor: '#101010' }">
       <div class="showbox">
        <div @click="showTips=false"><img style="width:32px;margin:29px 0 0 29px" :src="close" alt=""></div>
          <div class="content">
            <div class="disFlex row  flex-justify t1">
              <div class="col">语音指令</div>
              <div class="col">指令词</div>
            </div>
            <div class="disFlex row flex-justify  t2">
              <div class="col">开盖开圈</div>
              <div class="col">
                <p>我要开盖</p>
                <p>我要关盖</p>
                <p>我要开圈</p>
                <p>我要关圈</p>
              </div>
            </div>
            <div class="disFlex row flex-justify  t2">
              <div class="col">座圈调节</div>
                <div class="col">
                  <p>座温高点</p>
                  <p>座温低点</p>
                </div>
              </div>
              <div class="disFlex row flex-justify t2">
                <div class="col">臀洗 / 妇洗</div>
                  <div class="col">
                    <p>我要臀洗 / 妇洗</p>
                    <div class="t3">
                      <p>水压大点 / 水压小点</p>
                      <p>水温高点 / 水温低点</p>
                      <p>往前一点 / 往后一点</p>
                      <p>移动清洗</p>
                      <p>宽幅强洗</p>
                    </div>
                    <p>一键自动</p>
                  </div>
                </div>
                <div class="disFlex row flex-justify  t2">
                  <div class="col">强力烘干</div>
                  <div class="col">
                    <p>我要烘干</p>
                    <p>风温高点 / 风温低点</p>
                    <p>风力大点 / 风力小点</p>
                  </div>
                </div>
                <div class="disFlex row flex-justify  t2">
                  <div class="col" style="border:none">离座冲水</div>
                    <div class="col" style="border:none">
                      <p>我要冲水</p>
                      <p>关盖冲水</p>
                      <p>我要小冲</p>
                      <p>关盖小冲</p>
                    </div>
                  </div>
                  <div class="disFlex align-items justify-center t4">
                     <img :src="icon06">
                     发出命令“我要停止”, 可终止当前功能
                  </div>
          </div>
        </div>
      </van-popup> 
      <!-- 自动翻盖:视频 -->
      <!-- <div class="d8 fullH" id="B7">
        <div class="d8box">
          <video 
            width="100%" height="100%" 
            poster="~_imgs/zdfg/start.png"
            loop
            style="width:100%;"
            muted
            preload
            id="d8video"
          >
          <source src="~_imgs/zdfg/zdfg.mp4" type="video/mp4">
          </video>
        </div>  
      </div> -->
      <!--自动翻盖:文字  -->
      <div class="d8_1" id="B8">
       <div class="d8_Box fullH" id="d8Imgbox"  :class="{fixed:d9_change,abs_bt:d9_change2}" >
        <div class="d8_box">
           <div class="Img2">
             <img :src="icon07" id="d8Img" alt="">
           </div>
           <div style="opacity:0" id="d8Tit">
             <p class="title">自动翻盖</p>
             <p class="subtitle">你来了, 我便开了</p>
           </div>
           <div class="details" style="opacity:0" id="d8Del">
             <div class="p1">
               <span>微波灵敏感应</span>
               ,靠近时上盖自动开启,离开后上盖自动关闭,不弯腰不脏手不费劲
             </div>
             <div style="font-size:21px">（男士小便可语音控制座圈）</div>
           </div>           
        </div> 
       </div>    
      </div>
      <!-- 一键智控 -->
      <div class="d9" id="B9">
        <div class="d9box  disFlex align-items justify-center" :class="{fixed:d10_change,abs_bt:d10_change2}">
           <div class="Imgbox" id="d9Imgbox">
             <img :src="yjzk00"  id="d9img" style="width:100%;" alt="">
             <div id="titlebox" class="titlebox abs_middle">
               <div id="title" class="title"  style="opacity:0">
                <p>一键智控</p>
                <p>一按一旋, 妙不可言</p>
               </div>
             </div>
             <div class="detailsbox" id="del1"  style="opacity:0">
              <div class="details">
                单击全自动臀洗<br/>
                长按全自动妇洗
              </div>
             </div>
             <div class="detailsbox" id="del2" style="opacity:0">
               <div class="details">清洗过程中旋转调节水压, 烘干过程中旋转调节风速</div>
               <div class="details2">如需中途停止可语音“我要停止”或点击遥控器上“停止”按钮</div>
             </div>
           </div>
        </div>
      </div>
      <!-- 紫外线杀菌 -->
      <div class="d11" id="B10">
         <div class="d11box disFlex align-items flex-evenly" :class="{fixed:d11_change,abs_bt:d11_change2}">
            <div class="video" id='d11vbox' :style="{transform:d11_transform}">
               <figure class="video-startframe"></figure>
               <!-- <video
               width='100%' height='100%'
               poster="~_imgs/zwxsj/start_PC.png"
               style="width:100%"
               muted
               preload
               id="d11video"
               >
               <source src="~_imgs/zwxsj/Ray_PC_S.mp4" type="video/mp4">
               </video> -->
            </div>
            <div class="txt" :style="{transform:d11_transform}">
               <div class="txtbox"  :style="{transform:d11_transform}">
                 <p class="title">紫外线杀菌</p>
                 <p class="subtitle">实力杀菌, 守卫洁净</p>
                 <p class="details">在喷杆出水前，
                   <span style="color:#1d1c20;">利用高频紫外线对有害微生物进行破坏，能够杀死绝大部分细菌，杀菌率99.9%</span>
                  ，清洗更放心</p>
               </div>
            </div>
         </div>
      </div>
      <!-- 强力烘干 -->
      <div class="d14" id="B11">
        <div class="d14box  disFlex align-items justify-center" :class="{fixed:d14_change,abs_bt:d14_change2}">
           <div class="Imgbox" id="d14Imgbox">
             <img :src="qlhg00" id="d14img" style="width:100%;max-width:1920px;" alt="">
             <div  class="titlebox abs_middle" id="d14Titbox">
               <div id="d14Tit"  class="title" :style="{opacity:0}">
                <p>强力烘干</p>
                <p>水洗时代, 烘干要快</p>
               </div>
             </div>
             <div class="detailsbox2" id="d14Del" :style="{opacity:0}">
                <div class="t1">i5 Plus 烘干实力出类拔萃, 强大的 Air pro 技术, 搭配全新的风道优化设计, 使风量和风速得到大幅度的释放和提升</div>
                <div class="t2">专利号: 201721132243.6</div>
             </div>
             <div class="detailsbox2" id="d14Del2" :style="{opacity:0}">
                <div class="t1">自动摆风好比风扇的摇头功能, 可以扩大烘干面积, 减少使用时人体不必要的挪动, 有效缩短烘干时间</div>
             </div>
           </div>
        </div>
      </div>
      <!-- 强力烘干2：视频 定-->
      <!-- <div class="d15" id="B12">
        <div class="d15box" id="d15box" :class="{fixed:d15_change,abs_bt:d15_change2}">
          <figure class="video-startframe"></figure>
           <video 
            width="100%" height="100%" 
            poster="~_imgs/qlhg2/start.png"
            style="width:100%"
            muted
            preload
            id="d15video"
          >
          <source src="~_imgs/qlhg2/Hotfan2_S.mp4" type="video/mp4">
          </video> 
          <div class=txt :style="{opacity:d16_opacity,transform:d16_transform}">
            自动摆风好比风扇的摇头功能, 可以扩大烘干面积, 减少使用时人体不必要的挪动, 有效缩短烘干时间
          </div> 
        </div>
      </div> -->
      <!-- 四季温感 -->
      <div class="d19" id="B13">
        <div class="d19Box" :class="{abs_bt3:d20_change}" >
         <div class="d19box" id="d19box" :class="{fixed:d19_change}" :style="{opacity:d19_opacity}">
           <figure class="video-startframe"></figure>
           <!-- <video  
            width="100%" height="100%" 
            poster="~_imgs/sjwg/start.png"
            loop
            style="width:100%;"
            muted
            preload
            id="d19video"
            >
            <source src="~_imgs/sjwg/Fourseasons.mp4" type="video/mp4">
           </video> -->
         </div>
        </div>
        <div class="d20"  :class="{abs_bt2:d20_change}">
           <div class="d20box">
            <div class="txt" :style="{opacity:d20_opacity}">
                <p class="title">四季温感</p>  
                <p class="subtitle">温度我来变</p>
                <p class="pt">聪明的马桶，水温座温自动调节；智能温感探头感知室温，智能芯片自动调节水温及座圈温度，越到冬天就越暖，四季舒爽很简单</p>
                <div class="pt2"  @click="clickshowPic=true">座温水温温感参数 
                  <img src="~_imgs/icons/icon10.png" alt="">
                </div>
            </div>
         </div>
       </div>
      </div>
      <van-popup v-model="clickshowPic"  :style="{ 	width:'980px',height:'100%',backgroundColor: '#101010' }">
                 <div class="showbox">
                  <div @click="clickshowPic=false"><img style="width:32px;margin:29px 0 0 29px" :src="close" alt=""></div>
                  <div class="content2">
                      <div class="row">
                         <div class="imgbox">
                           <img src="~_imgs/icons/icon11.png" alt="">
                         </div>
                         <div class="col t1">座温温感定义</div>
                         <div class="col t2">
                           <p>第一档：环境温度 ＜10℃ , 座温 39℃</p>
                           <p>第二档：环境温度 10-＜15℃ , 座温 37℃</p>
                           <p>第三档：环境温度 15-＜25℃ , 座温 35℃</p>
                           <p>第四档：环境温度 25-＜30℃ , 座温 32℃</p>
                           <p>第五档：环境温度 ＞30℃ , 座温关闭</p>
                         </div>
                      </div>
                      <div class="row r2">
                         <div class="imgbox">
                           <img src="~_imgs/icons/icon12.png" alt="">
                         </div>
                         <div class="col t1">水温温感定义</div>
                         <div class="col t2">
                           <p>第一档：环境温度 ＜10℃ , 水温 39℃</p>
                           <p>第二档：环境温度 10-＜20℃ , 水温 38℃</p>
                           <p>第三档：环境温度 20-＜25℃ , 水温 37℃</p>
                           <p>第四档：环境温度 25-＜30℃ , 水温 36℃</p>
                           <p>第五档：环境温度 ＞30℃ , 水温35℃</p>
                         </div>
                         <div class="col t3">
                             环境温度 ＞30℃ 时, 水温不建议完全关闭, 建议至少保温 35℃, 因为北方供气供暖时, 环境温度达到 30℃, 进水温度接近 0℃ 的情况是有可能的
                         </div>
                      </div>
                  </div>
                 </div>
      </van-popup>
      <!-- 用户定制 -->
      <div class="d22" id="B14">
       <div class="d22Box"  :class="{abs_bt3:d23_change}">
        <div class="d22box" id="d22box" :class="{fixed:d22_change}" :style="{opacity:d22_opacity}">
          <figure class="video-startframe"></figure>
          <!-- <video 
            width="100%" height="100%" 
            poster="~_imgs/yhdz/start.png"
            loop
            style="width:100%;"
            muted
            preload
            id="d22video"
           >
           <source src="~_imgs/yhdz/Custom.mp4" type="video/mp4">
          </video> -->
        </div> 
       </div>
       <div class="d23" :class="{abs_bt2:d23_change}">
         <div class="d23box">
            <div class="txt"  :style="{opacity:d23_opacity}">
                <p class="title">用户定制</p>  
                <p class="subtitle">模式你来选</p>
                <p class="pt">长按一键存储你心仪的水温、水压、风温、座温, 喷嘴位置, 定制你的最爱模式, 单击即轻松使用, 简单又贴心</p>
                <div class="pt2"  @click="clickshowPic2=true">查看如何设定
                  <img src="~_imgs/icons/icon10.png" alt="">
                </div>
            </div>
         </div>
       </div>
      </div>  
      <van-popup v-model="clickshowPic2"  :style="{ 	width:'980px',height:'100%',backgroundColor: '#101010' }">
                 <div class="showbox">
                  <div @click="clickshowPic2=false"><img style="width:32px;margin:29px 0 0 29px" :src="close" alt=""></div>
                  <div class="content">
                   <div class="disFlex row2  flex-justify t1">
                     <div class="col c1">用户定制按钮</div>
                     <div class="col c2"></div>
                   </div>
                   <div class="disFlex row2 flex-justify">
                     <div class="col c1 disFlex flex-justify align-items">
                       <div class="left"><img style="width:107px" src="~_imgs/icons/icon13.png" alt=""></div>
                       <div class="right disFlex dis-dirc flex-justify">
                         <div class="disFlex">
                           <div class="line"></div>
                           用户定制 1
                         </div>
                         <div class="disFlex right-bottom">
                           <div class="line"></div>
                           用户定制 2
                         </div>
                       </div>
                     </div>
                     <div class="col c2 t5" >
                       <p>含用户定制1和用户定制2两个按钮</p>
                       <p>可以支持两个用户的定制臀洗</p>
                     </div>
                   </div>
                   <div class="disFlex row2 flex-justify t5">
                     <div class="col c1">单击启动全自动臀洗</div>
                     <div class="col c2">
                       按下“用户1”或“用户2”按键, 马桶可根据用户对应私人定制的水温、水压、风温、座温、喷嘴位置进行清洗, 执行臀洗5秒+移动清洗20秒+臀洗30秒+烘干60秒。省时省力, 贴心呵护
                     </div>
                   </div>
                   <div class="disFlex row2 flex-justify t5">
                     <div class="col c1" style="border:none">长按录入参数设置</div>
                     <div class="col c2" style="border:none">
                       用遥控器设置好水温、水压、风温、座温、喷嘴位置后, 臀洗使用中长按“用户1”或“用户2”按键, 保存当前设置参数
                     </div>
                   </div>
                  </div>
                 </div>
      </van-popup>
      <!-- 低温劲冲 -->
      <div class="d24" id="B15">
       <div class="d24Box"  :class="{abs_bt3:d25_change}">
        <div class="d24box" id="d24box" :class="{fixed:d24_change}" :style="{opacity:d24_opacity}">
          <figure class="video-startframe"></figure>
          <!-- <video 
            width="100%" height="100%" 
            poster="~_imgs/dwjc/start.png"
            loop
            style="width:100%;"
            muted
            preload
            id="d24video"
           >
           <source src="~_imgs/dwjc/Wash.mp4" type="video/mp4">
          </video> -->
        </div>
       </div> 
       <div class="d25" :class="{abs_bt2:d25_change}">
         <div class="d25box">
            <div class="txt"  :style="{opacity:d25_opacity}">
                <p class="title">低音劲冲</p>  
                <p class="subtitle">低音劲冲, 一冲到底</p>
                <p class="pt"><span style="color:#fff">有水箱纯平技术平台, 无惧低水压, 一冲到底</span>。通过巧妙的水路切换阀设计, 结合蓄能虹吸技术, 处“便”不惊</p>
            </div>
         </div>
       </div>
      </div>  
      <!-- 常规页面 -->
      <div class="d26" id="B16">
        <div class="d26box">
          <div class="t1">机型比较</div>
          <div class="t2">如需获得选购帮助, <span>请咨询当地九牧专卖店</span></div>
          <div class="t3">RMB 5799 起</div>
          <div class="content disFlex flex-around">
             <div class="content-item disFlex dis-dirc align-items">
              <div class="imgbox">
                <img src="~_imgs/icons/icon14.png" alt="">
              </div>
              <div class="typebox">
                <div class="Color cr1"></div>
              </div>
              <div class="titbox">
                <p><img src="~_imgs/icons/i_b.png" />5s骑士银</p>
                <p>光银如梭, 俊俏轻奢</p>
              </div>
              <div class="buybtn">
                购买
              </div>
              <div class="delbox">
                <p>强力烘干 / 一键智控</p>
                <p>用户定制 / 四季温感</p>
                <p>低音劲冲 / 外置小冲</p>
              </div>
             </div>
             <div class="content-item  disFlex dis-dirc align-items">
              <div class="imgbox">
                <img src="~_imgs/icons/icon16.png" alt="">
              </div>
              <div class="typebox">
                <div class="Color cr2"></div>
              </div>
              <div class="titbox">
                <p><img src="~_imgs/icons/i_b.png" />5香槟金</p>
                <p>点瓷成金, 大放异彩</p>
              </div>
              <div class="buybtn">
                购买
              </div>
              <div class="delbox">
                <p>强力烘干 / 一键智控</p>
                <p>用户定制 / 四季温感</p>
                <p>低音劲冲 / 外置小冲</p>
                <p>喷嘴紫外杀菌</p>
              </div>
             </div>
             <div class="content-item  disFlex dis-dirc align-items">
              <div class="imgbox">
                <img src="~_imgs/icons/icon15.png" alt="">
              </div>
              <div class="typebox">
                <div class="Color cr3"></div>
              </div>
              <div class="titbox">
                <p><img src="~_imgs/icons/i_b.png" />5 Plus九牧金</p>
                <p>点金一笔, 百看不腻</p>
              </div>
              <div class="buybtn">
                购买
              </div>
              <div class="delbox">
                <p>语音控制 / 自动翻盖 </p>
                <p>强力烘干 / 一键智控</p>
                <p>用户定制 / 四季温感 </p>
                <p>低音劲冲 / 喷嘴紫外杀菌</p>
              </div>
             </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import play from '_imgs/icons/play.png'
import close from '_imgs/icons/close.png'
import icon from '_imgs/icons/icon.png'
import icon01 from '_imgs/icons/icon01.png'
import icon02 from '_imgs/icons/icon02.png'
import icon03 from '_imgs/icons/icon03.png'
import icon04 from '_imgs/icons/icon04.png'
import icon05 from '_imgs/icons/icon05.png'
import icon06 from '_imgs/icons/icon06.png'
import icon07 from '_imgs/zdfg/AutoOpen000.jpg'
import yjzk00 from '_imgs/yjzk/Intelligentcontrol000.jpg'
import qlhg00 from '_imgs/qlhg/Hotfan00.jpg'
// import worker from '_libs/js/loadImg_workers.js'
import { Popup,Icon} from 'vant';
  export default {
    components:{
      [Popup.name]:Popup,
      [Icon.name]:Icon 
    },
    data(){
      return {
       qlhg00,
       play,
       close,
       icon,
       icon01,
       icon02,
       icon03,
       icon04,
       icon05,
       icon06,
       icon07,
       yjzk00,
       showMovie:false,
       showVoice:false,
       showTips:false,
       clickshowPic:false,
       clickshowPic2:false,
       d2_change:false,
       d2_opacity:1,
       d3_change:false,
       d4_change:false,
       d4_opacity:1,
       d7_change:false,
       d7_opacity:1,
       d9_change:false,
       d9_change2:false,
       d9_opacity:1,
       d10_change:false,
       d10_change2:false,
       d11_change:false,
       d11_change2:false,
       d14_change:false,
       d14_change2:false,
       d15_change:false,
       d15_change2:false,
       d16_opacity:0,
       d19_change:false,
       d19_opacity:1,
       d20_opacity:0,
       d20_change:false,
       d22_change:false,
       d22_opacity:1,
       d23_opacity:0,
       d23_change:false,
       d24_change:false,
       d24_opacity:1,
       d25_opacity:0,
       d25_change:false,
       d_transform:'matrix(1, 0, 0, 1, 0, 26)',
       d5_transform:'matrix(1, 0, 0, 1, 0, 26)',
       d7_transform:'matrix(1, 0, 0, 1, 0, 0)',
       d9_transform:'matrix(1, 0, 0, 1, 0, 26)',
       d10_transform:'matrix(1, 0, 0, 1, 0, 120)',
       d11_transform:'matrix(1, 0, 0, 1, 0, 0)',
       d16_transform:'translate(-50%,0)',
       data:[
         {title:'语音控制',img:require('_imgs/icons/1_.png')},
         {title:'自动翻盖',img:require('_imgs/icons/2_.png')},
         {title:'强力烘干',img:require('_imgs/icons/3_.png')},
         {title:'一键智控',img:require('_imgs/icons/4_.png')},
         {title:'用户定制',img:require('_imgs/icons/5_.png')},
         {title:'四季温感',img:require('_imgs/icons/6_.png')},
         {title:'低音劲冲',img:require('_imgs/icons/7_.png')},
        //  {title:'外置小冲',img:require('_imgs/icons/8.png')},
         {title:'紫外线杀菌',img:require('_imgs/icons/8_.png')},
         {title:'',img:''},
       ],
       d8img:[],
       d9img:[],
       d14img:[],
       switch:0,
       publicPath:process.env.BASE_URL
      }
    },
    methods:{
    clickshowMovie(i){
        if(i==1){
          this.showMovie=true;
          let m=document.getElementById('pmovie');
          if(m){
            m.currentTime=0;
            m.play()
          }

        }
        if(i==2){
          // this.showVoice=true;       
        }
    },
    closebox(){
      this.showMovie=false
       let m=document.getElementById('pmovie');
          if(m){
            m.pause();
          }
    },
    //计算某个div高度
     h(id){
       return  document.getElementById(id).offsetHeight; //div的高度
     },
     //计算某个div的到顶部距离
     toTop(id){
       return  document.getElementById(id).offsetTop; 
     },
     //计算某个div透明度 根据滚动条到达前一个div后滚动距离计算
     dOpacity(scrollTop,id,befStart){ //id 某个div的id
         let offsetTop = document.getElementById(id).offsetTop; //div到顶部距离  固定
         let h = document.getElementById(id).offsetHeight; //div的高度 
        //  return  (scrollTop-offsetTop-before)/(h-before)
        if((scrollTop-offsetTop-befStart)/(h-befStart)>1){
           return 1
        }
        if((scrollTop-offsetTop-befStart)/(h-befStart)<0){
          return 0
        }
        return (scrollTop-offsetTop-befStart)/(h-befStart)

     },
   
    loadImage(url,i,id, callback) {
      if(id=='B8'){
     		this.d8img.push(new Image()); //创建一个Image对象，实现图片的预下载
        this.d8img[i].src = url;
        if (this.d8img[i].complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
				   return; // 直接返回，不用再处理onload事件
			  }     
      }
      if(id=='B9'){
     		this.d9img.push(new Image()); //创建一个Image对象，实现图片的预下载
        this.d9img[i].src = url;
			  if (this.d9img[i].complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
				   return; // 直接返回，不用再处理onload事件
			  }     
      }
      if(id=='B11'){
     		this.d14img.push(new Image()); //创建一个Image对象，实现图片的预下载
        this.d14img[i].src = url;
			  if (this.d14img[i].complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
				   return; // 直接返回，不用再处理onload事件
			  }     
      }
    },
    getImg(n,baseStr,id){
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
				this.loadImage((baseStr+j+'.jpg'),i,id)
      }
  
    },
  
     //某个div范围内 切换背景图片
     trunBg(scrollTop,id,n,arr,t){ //n：张数
       var d_offsetTop = document.getElementById(id).offsetTop; //div到顶部距离  固定
       var h = document.getElementById(id).offsetHeight; //动画div的高度
       if(scrollTop>d_offsetTop&&scrollTop<=d_offsetTop+h){ //动画div范围内
           let y=scrollTop-d_offsetTop;  //开始播放动画
          //  let x=h/n; //平均每滚动x距离显示第几张
          //  let i=Math.ceil(y/x);
          // 滑动速率
          let i=parseInt(y/t);  //v=s/t 1~76  
          //播放动画
          if(i>n){
            i=n
          }
         if(arr.length>0){ //预加载成功
          if(id=="B8"){
            if(i<40){
              document.getElementById('d8Tit').style.cssText=`
              opacity:${i/40};
              transform:matrix(1, 0, 0, 1, 0, ${120*(1-i/40)});`//改变标题透明度
               document.getElementById('d8Del').style.opacity=0;
            }
            if(i>=50&&i<=90){
              document.getElementById('d8Del').style.cssText=`
              opacity:${(i-50)/40};`//改变标题透明度
            }
          }
          if(id=='B9'){
            if(i<11){
              document.getElementById('title').style.cssText=`
              opacity:${i/10};
              transform:matrix(1, 0, 0, 1, 0, ${120*(1-i/10)});`//改变标题透明度
            }
            if(i>=11&&i<19){
              document.getElementById('titlebox').style.background=`rgba(0,0,0,${0.75-0.75*(1-(18-i)/8)})`
              document.getElementById('title').style.cssText=`
              opacity:${(18-i)/8};
              transform:matrix(1, 0, 0, 1, 0, ${-120*(1-(18-i)/8)})`//改变标题透明度
              document.getElementById('del1').style.opacity=0;
            }
            if(i>=19&&i<=48){ //48-19=29
              document.getElementById('titlebox').style.background=0;
               document.getElementById('title').style.opacity=0;
               document.getElementById('del1').style.opacity=(i-19)/29//改变透明度
            }
            if(i>48&&i<=70){//70-49
               document.getElementById('del1').style.opacity=(70-i)/21//改变透明度
               document.getElementById('del2').style.opacity=0//改变透明度  
            }
            if(i>70){  //84-71=13
               document.getElementById('del2').style.opacity=(i-71)/13//改变透明度  
            }
          } 
          if(id=='B11'){
            if(i<=15){
              document.getElementById('d14Tit').style.cssText=`
              opacity:${i/15};
              transform:matrix(1, 0, 0, 1, 0, ${60*(1-i/15)})`//改变标题透明度
            }
            if(i>15&&i<=20){
              document.getElementById('d14Titbox').style.background=`rgba(0,0,0,${0.75-0.75*(1-(20-i)/4)})`
              document.getElementById('d14Tit').style.cssText=`
              opacity:${(20-i)/4};
              transform:matrix(1, 0, 0, 1, 0, ${-120*(1-(20-i)/4)})`//改变标题透明度
               document.getElementById('d14Del').style.opacity=0;
            }
            if(i>20&&i<=46){
              document.getElementById('d14Titbox').style.background=0;
               document.getElementById('d14Del').style.cssText=`
               opacity:${(i-21)/25};
               transform:matrix(1, 0, 0, 1, 0, ${60*(1-(i-21)/25)})`//改变标题透明度
            } 
            if(i>46&&i<=54){//54-47=7
               document.getElementById('d14Del').style.cssText=`
               opacity:${(54-i)/7};
               transform:matrix(1, 0, 0, 1, 0, ${60*(1-(54-i)/7)})`//改变标题透明度
            }
            if(i>=55){
               document.getElementById('d14Del').style.opacity=0;
               document.getElementById('d14Del2').style.cssText=`
               opacity:${(i-55)/19};
               transform:matrix(1, 0, 0, 1, 0, ${60*(1-(i-55)/19)})`//改变标题透明度               
            }

          }
          if(arr[i]!=undefined){
            return arr[i].src    
          }else{
            if(id=="B8"){
              if(i<10){
                i='00'+i
              }else if(i<100){
                i='0'+i
              }
              return require('_imgs/zdfg/AutoOpen'+i+'.jpg')   
            }
            if(id=="B9"){
              if(i<10){
                i='00'+i
              }else{
                i='0'+i
              }
              return require('_imgs/yjzk/Intelligentcontrol'+i+'.jpg')
            }
            if(id=='B11'){
              if(i<10){
                i='0'+i
              }
              return require('_imgs/qlhg/Hotfan'+i+'.jpg')
            }
          }
         }else{ //预加载失败 就按需加载
          if(id=="B8"){
            if(i<10){
              i='00'+i
            }else if(i<100){
              i='0'+i
            }
            if(i<40){
              document.getElementById('d8Tit').style.cssText=`
              opacity:${i/40};
              transform:matrix(1, 0, 0, 1, 0, ${120*(1-i/40)});`//改变标题透明度
               document.getElementById('d8Del').style.opacity=0;
            }
            if(i>=50&&i<=90){
              document.getElementById('d8Del').style.cssText=`
              opacity:${(i-50)/40};`//改变标题透明度
            }
            // console.log('第'+i)
            return require('_imgs/zdfg/AutoOpen'+i+'.jpg')
          }
          if(id=='B9'){
            if(i<10){
              i='00'+i
            }else{
              i='0'+i
            }
           if(i<11){
              document.getElementById('title').style.cssText=`
              opacity:${i/10};
              transform:matrix(1, 0, 0, 1, 0, ${120*(1-i/10)});`//改变标题透明度
            }
            if(i>=11&&i<19){
              document.getElementById('titlebox').style.background=`rgba(0,0,0,${0.75-0.75*(1-(18-i)/8)})`
              document.getElementById('title').style.cssText=`
              opacity:${(18-i)/8};
              transform:matrix(1, 0, 0, 1, 0, ${-120*(1-(18-i)/8)})`//改变标题透明度
              document.getElementById('del1').style.opacity=0;
            }
            if(i>=19&&i<=48){ //48-19=29
              document.getElementById('titlebox').style.background=0;
               document.getElementById('title').style.opacity=0;
               document.getElementById('del1').style.opacity=(i-19)/29//改变透明度
            }
            if(i>48&&i<=70){//70-49
               document.getElementById('del1').style.opacity=(70-i)/21//改变透明度
               document.getElementById('del2').style.opacity=0//改变透明度  
            }
            if(i>70){  //84-71=13
               document.getElementById('del2').style.opacity=(i-71)/13//改变透明度  
            }
            return require('_imgs/yjzk/Intelligentcontrol'+i+'.jpg')
          } 
          if(id=='B11'){
            if(i<10){
              i='0'+i
            }
            if(i<=15){
              document.getElementById('d14Tit').style.cssText=`
              opacity:${i/15};
              transform:matrix(1, 0, 0, 1, 0, ${60*(1-i/15)})`//改变标题透明度
            }
            if(i>15&&i<=36){
              document.getElementById('d14Titbox').style.background=`rgba(0,0,0,${0.75-0.75*(1-(36-i)/20)})`
              document.getElementById('d14Tit').style.cssText=`
              opacity:${(36-i)/20};
              transform:matrix(1, 0, 0, 1, 0, ${-120*(1-(36-i)/20)})`//改变标题透明度
               document.getElementById('d14Del').style.opacity=0;
            }
            if(i>36&&i<=70){
              document.getElementById('d14Titbox').style.background=0;
               document.getElementById('d14Del').style.cssText=`
               opacity:${(i-37)/33};
               transform:matrix(1, 0, 0, 1, 0, ${60*(1-(i-37)/33)})`//改变标题透明度
            } 
            // console.log('第',i)
            return require('_imgs/qlhg/Hotfan'+i+'.jpg')
          }
         }    
       }
     },
     tplay(id){
      let vi=document.getElementById(id)
      if(vi){
        if(!vi.ended){
         // ended：播放结束
          vi.play()
        }
      }

     },
     handleScroll(){
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
       let isTo_d=[];//判断是否到达div顶部
       let isLeave_d=[] //判断是否离开div
       let h=this.h('B1') //全屏高度
       for(let i=1;i<=16;i++){
          let b=document.getElementById(('B'+i))
          if(b){
            isTo_d[i]=scrollTop-this.toTop('B'+i)>0?true:false;
            isLeave_d[i]=scrollTop-this.toTop('B'+i)-this.h('B'+i)>0?true:false;
          }
       }
       if(isTo_d[1]&&!isLeave_d[1]){ //d1 片头范围内触发样式
         this.tplay('d1video')
         this.d2_opacity=this.dOpacity(scrollTop,'B1',200)//提前200触发  d2透明度
         this.d2_change=true;
       }
       if(isTo_d[2]&&!isLeave_d[2]){ //d2 产品详情 范围内触发样式
          this.d2_change=false;  
          this.d4_change=false; 
       }
       if(isTo_d[3]&&!isLeave_d[3]){ //d3 点睛之笔 范围内触发样式
          this.tplay('d3video')
          this.d4_opacity=this.dOpacity(scrollTop,'B3',200)//提前200触发  d2透明度
          this.d4_change=true; 
          this.d_transform=`matrix(1, 0, 0, 1, 0, ${26*(1-this.d4_opacity)})`
       }  
       if(isTo_d[4]&&!isLeave_d[4]){ //d4
          this.d4_change=false;   
          this.d7_change=false;
          // this.switch=1
       } 
       if(isTo_d[5]&&!isLeave_d[5]){ //语音控制视频 
          this.tplay('d6video')
          this.d7_change=true;  
          this.d7_opacity=this.dOpacity(scrollTop,'B5',200)//提前200触发  d2透明度
          this.d7_transform=`matrix(1, 0, 0, 1, 0, ${26*(1-this.d7_opacity)})`
       }
       if(isTo_d[6]&&!isLeave_d[6]){ //语音控制详情
          this.d7_change=false;  
          this.d9_change=false; 

       }
      //  if(isTo_d[7]&&!isLeave_d[7]){ //自动翻盖
      //     this.tplay('d8video')
      //     this.d9_change=true;  
      //     this.d9_opacity=this.dOpacity(scrollTop,'B7',200)//提前200触发  d2透明度
      //     this.d9_transform=`matrix(1, 0, 0, 1, 0, ${26*(1-this.d9_opacity)})`
      //  }
       if(isTo_d[8]&&!isLeave_d[8]){ //自动翻盖文字
          this.d9_change=true; 
          let h_d8img=this.h('d8Imgbox');
          let t=80;
          let h_d8=t*100+h_d8img;
          document.getElementById('B8').style=`height:${h_d8}px` //d9总高
          document.getElementById('d8Img').src=this.trunBg(scrollTop,'B8',100,this.d8img,t)
          let before=this.toTop('B8')+parseInt(h_d8)-scrollTop;  
          this.d9_change2=false;  
          if(before<h_d8img){//     
             this.d9_change2=true;
             this.d9_change=false; 
          }
            this.d10_change=false;
        }
       if(isTo_d[9]&&!isLeave_d[9]){ // 一键智控 来回滚动图片
          this.d9_change=false;
          this.d10_change=true;
          let h_d9img=this.h('d9Imgbox');
          let t=100;
          let h_d9=t*84+h_d9img;
          document.getElementById('B9').style=`height:${h_d9}px` //d9总高
          document.getElementById('d9img').src=this.trunBg(scrollTop,'B9',84,this.d9img,t)
          let before=this.toTop('B9')+parseInt(h_d9)-scrollTop;     
          this.d10_change2=false;
          this.d11_change=false; 
          // console.log(before)
          if(before<h_d9img){//
             let opc=this.dOpacity(scrollTop,'B9',200)
             this.d10_change2=true;
             this.d10_change=false; 
             document.getElementById('B10').style=`height:${h}px` //B10紫外线总高
             this.d11_change=true;
             this.d11_change2=false;  
             this.d11_transform=`matrix(1, 0, 0, 1, 0, ${240*(1-opc)})`
            }
            this.d14_change=false;  
       }
       if(isTo_d[10]&&!isLeave_d[10]){ //紫外线杀菌
            this.tplay('d11video')
            let before=this.toTop('B10')+h-scrollTop; 
             if(before<h){
             // this.d14_change=false; 
              this.d11_change=false;
              this.d11_change2=true;
              // document.getElementById('d14Titbox').style.background=`rgba(0,0,0,0.75)`
            }
            this.d14_change=false; 
       } 
       if(isTo_d[11]&&!isLeave_d[11]){//烘干 来回滚动图片
           this.d11_change=false;
           this.d14_change=true;
           let h_dimg=this.h('d14Imgbox');
           let t=100;
           let h_d=t*74+h_dimg;//d14总高
           document.getElementById('B11').style=`height:${h_d}px` //设置d14总高
           document.getElementById('d14img').src=this.trunBg(scrollTop,'B11',74,this.d14img,t)
           let before=this.toTop('B11')+parseInt(h_d)-scrollTop;
          //  console.log(before,h_dimg)
          // this.d15_change=false;        
          this.d14_change2=false;
          this.d19_change=false;
          if(before<h){//h_dimg
             this.d14_change2=true;
             this.d14_change=false; 
            //  document.getElementById('B12').style=`height:2400px`//
            //  this.d15_change=true;
            //  this.d15_change2=false;
          }
       }
      //  if(isTo_d[12]&&!isLeave_d[12]){ //烘干视频
      //        this.tplay('d15video')
      //        let before=this.toTop('B12')+h-scrollTop;
      //        this.d15_change=true;
      //        this.d15_change2=false;
      //        this.d16_opacity=0;
      //     if(before<h){
      //       this.d16_opacity=1-before/h
      //       this.d16_transform=`translate(-50%,${127*(1-this.d16_opacity)}px)`
      //     }
      //     if(this.d16_opacity>1){
      //        this.d15_change=false;
      //        this.d15_change2=true;
      //     }
      //     this.d19_change=false;
      //  }
       if(isTo_d[13]&&!isLeave_d[13]){ //四季温感
          this.tplay('d19video')
          // this.d15_change=false;
          // this.d15_change2=true;
          this.d19_change=true;
          let before=this.toTop('B13')+h-scrollTop;
          if(before<h){
            this.d20_opacity=1-before/h 
            this.d19_opacity=1.5-this.d20_opacity  
            this.d20_change=false;          
          }
          // console.log(before)
          if(before<-250){
            this.d20_opacity=1
            this.d19_opacity=0.2  
            document.getElementById('B13').style=`height:2389px`//${2*h}
            this.d20_change=true;
            this.d19_change=false;  
          }
           this.d22_change=false;
       }
       if(isTo_d[14]&&!isLeave_d[14]){ //用户定制 
          this.tplay('d22video')
          this.d22_change=true;
          let before=this.toTop('B14')+h-scrollTop;
          if(before<h){
            this.d23_opacity=1-before/h 
            this.d22_opacity=1.5-this.d23_opacity  
            this.d23_change=false;          
          }
          if(before<-250){
            this.d23_opacity=1
            this.d22_opacity=0.2  
            document.getElementById('B14').style=`height:2389px`
            this.d23_change=true;
            this.d22_change=false;  
          }
          this.d24_change=false; 
       }
       if(isTo_d[15]&&!isLeave_d[15]){ //低音劲冲
          this.tplay('d24video')
          this.d24_change=true;
          let before=this.toTop('B15')+h-scrollTop;
          if(before<h){
            this.d25_opacity=1-before/h 
            this.d24_opacity=1.5-this.d25_opacity  
            this.d25_change=false;          
          }
          if(before<-250){
            this.d25_opacity=1
            this.d24_opacity=0.2  
            document.getElementById('B15').style=`height:2389px`
            this.d25_change=true;
            this.d24_change=false;  
          }          
       }                
      },
    },
    created(){
      // this.getImg(100,`${this.publicPath}images/zdfg/AutoOpen`,'B8')
      // this.getImg(84,`${this.publicPath}images/yjzk/Intelligentcontrol`,'B9')
      // this.getImg(74,`${this.publicPath}images/qlhg/Hotfan`,'B11')
    },
    mounted(){
      //监听滚动条
       window.addEventListener('scroll',this.handleScroll,200)
      
      if (typeof(Worker) === 'undefined'){    // 使用Worker前检查一下浏览器是否支持
        console.log(' Sorry! No Web Worker support.. ')
        this.getImg(100,`${this.publicPath}images/zdfg/AutoOpen`,'B8')
        this.getImg(84,`${this.publicPath}images/yjzk/Intelligentcontrol`,'B9')
        this.getImg(74,`${this.publicPath}images/qlhg/Hotfan`,'B11')
      }
      else {
        window.w = new Worker(`${this.publicPath}js/workers.js`,{name:'myWorder'})
        window.w.onmessage = event => {
            let i=event.data.i;
            let id=event.data.id;
            if(id=='B8'){
             this.d8img[i]=new Image();
             this.d8img[i].src=window.URL.createObjectURL(event.data.src);
              if (this.d8img[i].complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
				          return; // 直接返回，不用再处理onload事件
              }        
            }
            if(id=="B9"){
             this.d9img[i]=new Image();
             this.d9img[i].src=window.URL.createObjectURL(event.data.src); 
              if (this.d9img[i].complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
				          return; // 直接返回，不用再处理onload事件
              }  
            }
            if(id=="B11"){
             this.d14img[i]=new Image();
             this.d14img[i].src=window.URL.createObjectURL(event.data.src); 
             if (this.d14img[i].complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
				          return; // 直接返回，不用再处理onload事件
             }    
           }
           if(this.d8img.length==101&&this.d9img.length==85&&this.d14img.length==75){
              window.w.terminate();
           }
        }
        window.v=new Worker(`${this.publicPath}js/videoWorker.js`,{name:'myWorder2'})
        window.v.onmessage=event=>{
          let id=event.data.id;
          let src=window.URL.createObjectURL(event.data.src);
          let video=document.createElement('video')
          video.src=src
          if(id=='d1video'){
            document.getElementById('d1box').appendChild(video)
            video.autoplay="autoplay"
          }
          if(id=='d3video'){
            document.getElementById('d3box').appendChild(video)
          }
          if(id=='d6video'){
            document.getElementById('d6box').appendChild(video)
          }
          if(id=='d11video'){
            document.getElementById('d11vbox').appendChild(video)
          }
          if(id=='d19video'){
            document.getElementById('d19box').appendChild(video)
            video.loop="loop"
          }
          if(id=='d22video'){
            document.getElementById('d22box').appendChild(video)
            video.loop="loop"
          }
          if(id=='d24video'){
            document.getElementById('d24box').appendChild(video)
            video.loop="loop"
          }
            video.id=id
            video.muted='muted'
            video.preload='preload'
            video.style.cssText="width:100%;position:absolute;top:50%;left:0;transform:translateY(-50%)"
  
        }
      } 

    },
    destroyed () {//离开该页面需要移除这个监听的事件  滚动距离/高度100vh=透明度
       window.removeEventListener('scroll',this.handleScroll,200)
    },
  }
</script>

<style lang="stylus" scoped>
@import 'index.stylus'
</style>